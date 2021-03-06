(* BuckleScript compiler
 * Copyright (C) 2015-2016 Bloomberg Finance L.P.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, with linking exception;
 * either version 2.1 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 *)

(* Author: Hongbo Zhang  *)



module E = Js_exp_make  
module S = Js_stmt_make

type module_id = Lam_module_ident.t

type ml_module_info = { 
  signatures : Types.signature ;
  cmj_table : Js_cmj_format.cmj_table
}

type env_value = 
  | Visit of ml_module_info
  | Runtime  of bool (** A built in module probably from our runtime primitives, 
                         so it does not have any [signature]
                      *)
  | External         (** Also a js file, but this belong to third party 
                      *)

type module_info = {
  signature :  Types.signature ;
  pure : bool 
}

type primitive_description = Types.type_expr option Primitive.description

type key = 

  Ident.t * Env.t  * bool (** we need register which global variable is an dependency *)


type ident_info = {
  id : Ident.t;
  name : string;
  signatures : Types.signature;
  arity : Lam_stats.function_arities; 
  closed_lambda : Lambda.lambda option 
}

(*
   refer: [Env.find_pers_struct]
   [ find_in_path_uncap !load_path (name ^ ".cmi")]
*)

open Js_output.Ops

let cached_tbl : (module_id , env_value) Hashtbl.t = Hashtbl.create 31

(* For each compilation we need reset to make it re-entrant *)
let reset () = 
  Hashtbl.clear cached_tbl 

(* FIXME: JS external instead *)
let add_js_module ?id module_name = 
  let id = 
    match id with
    | None -> Ext_ident.create_js_module module_name 
    | Some id -> id in
  Hashtbl.replace cached_tbl (Lam_module_ident.of_external id module_name) External;
  id  



let add_cached_tbl = Hashtbl.add cached_tbl

let find_and_add_if_not_exist (id, pos) env ~not_found ~found =
  let oid  = Lam_module_ident.of_ml id in
  begin match Hashtbl.find cached_tbl oid with 
    | exception Not_found -> 
      let cmj_table = Config_util.find_cmj (id.name ^ ".cmj") in
      begin match
          Type_util.find_serializable_signatures_by_path
            (Pident id) env with 
      | None -> not_found id 
      | Some signature -> 
        add_cached_tbl oid (Visit {signatures = signature; 
                                   cmj_table ;  } ) ;
        let name =  (Type_util.get_name signature pos ) in
        let arity, closed_lambda =        
          begin match String_map.find name cmj_table.values with
            | exception Not_found -> NA, None ;
            | {arity; closed_lambda} -> arity, closed_lambda 
          end in
        found {id; 
               name ;
               signatures = signature ;
               arity ;
               closed_lambda
              }
      end
    | Visit { signatures = serializable_sigs ; cmj_table = { values ; _} }  -> 
      let name = (Type_util.get_name serializable_sigs pos ) in
      let arity , closed_lambda =  (
        match  String_map.find name values with
        | exception  Not_found -> (NA, None)
        | {arity; closed_lambda;_} -> arity, closed_lambda 
      ) in
      found { id;
              name; 
              signatures = serializable_sigs;
              arity;
              closed_lambda
              (* TODO shall we cache the arity ?*) 
            } 
    | Runtime _ -> assert false
    | External  -> assert false
  end


(* TODO: it does not make sense to cache
   [Runtime] 
   and [externals]*)
type _ t = 
  | No_env :  Js_cmj_format.cmj_table t 
  | Has_env : Env.t  -> module_info t 


let query_and_add_if_not_exist (type u)
    (oid : Lam_module_ident.t) 
    (env : u t) ~not_found ~found:(found : u -> _) =
  match Hashtbl.find cached_tbl oid with 
  | exception Not_found -> 
    begin match oid.kind with
      | Runtime  -> 
        add_cached_tbl oid (Runtime true) ; 
        begin match env with 
        | Has_env _ -> 
          found {signature = []; pure = true}
        | No_env -> 
          found (Js_cmj_format.pure_dummy)
        end
      | External _  -> 
        add_cached_tbl oid External;
        (** This might be wrong, if we happen to expand  an js module
            we should assert false (but this in general should not happen)
        *)
        begin match env with 
        | Has_env _ 
          -> 
          found {signature = []; pure = false}
        | No_env -> 
          found (Js_cmj_format.no_pure_dummy)
        end

      | Ml 
        -> 
        let cmj_table = 
          Config_util.find_cmj (Lam_module_ident.name oid ^ ".cmj") in           
        begin match env with 
          | Has_env env -> 
            begin match 
                Type_util.find_serializable_signatures_by_path (Pident oid.id) env with 
            | None -> not_found () (* actually when [not_found] in the call site, we throw... *)
            | Some signature -> 
              add_cached_tbl oid (Visit {signatures = signature; cmj_table }) ;
              found  { signature ; pure = cmj_table.effect = None} 
            end
          | No_env -> 
            found cmj_table
        end
    end
  | Visit {signatures  ; cmj_table =  cmj_table; _} -> 
    begin match env with 
      | Has_env _ -> 
        found   { signature =  signatures  ; pure = (cmj_table.effect = None)} 
      | No_env  -> found cmj_table
    end

  | Runtime pure -> 
    begin match env with 
      | Has_env _ -> 
        found {signature = []  ; pure }
      | No_env -> 
        found (if pure then Js_cmj_format.pure_dummy 
               else Js_cmj_format.no_pure_dummy
              )
    end
  | External -> 
    begin match env with 
    | Has_env _ -> 
      found {signature = []  ; pure  = false}
    | No_env -> found Js_cmj_format.no_pure_dummy
    end

(* Conservative interface *)
let is_pure id  = 
  query_and_add_if_not_exist id No_env
    ~not_found:(fun _ -> false) 
    ~found:(fun x -> x.effect = None)

let get_goog_package_name ({ kind; _} as id : Lam_module_ident.t) = 
  match kind with 
  | Runtime -> 
    Some "buckle.runtime" (* Invariant check with the build system *)
  | Ml 
  | External _ -> 
      query_and_add_if_not_exist id No_env
    ~not_found:(fun _ -> None) 
    ~found:(fun x -> x.goog_package)


(* TODO: [env] is not hard dependency *)

let get_requried_modules env (extras : module_id list ) (hard_dependencies 
  : _ Hash_set.hashset) : module_id list =  

  let mem (x : Lam_module_ident.t) = 
    not (is_pure x ) || Hash_set.mem hard_dependencies  x 
  in
  Hashtbl.iter (fun (id : module_id)  _  ->
      if mem id 
      then Hash_set.add hard_dependencies id) cached_tbl ;
  List.iter (fun id -> 
      if mem id 
      then Hash_set.add hard_dependencies id
    ) extras;
  Hash_set.elements hard_dependencies
