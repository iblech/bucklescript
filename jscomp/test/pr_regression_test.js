// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Mt         = require("./mt");
var Caml_curry = require("../runtime/caml_curry");

var v = [3];

function f(h) {
  v[0] = v[0] + 1 | 0;
  var partial_arg = 3;
  return function (param) {
    return Caml_curry.app2(h, partial_arg, param);
  };
}

f(function (prim, prim$1) {
      return prim + prim$1 | 0;
    });

f(function (prim, prim$1) {
      return prim + prim$1 | 0;
    });

var a = v[0];

var v$1 = [3];

function f$1(h) {
  v$1[0] = v$1[0] + 1 | 0;
  var partial_arg = 3;
  return function (param) {
    return Caml_curry.app2(h, partial_arg, param);
  };
}

f$1(function (prim, prim$1) {
      return prim + prim$1 | 0;
    });

f$1(function (prim, prim$1) {
      return prim + prim$1 | 0;
    });

var b = v$1[0];

var v$2 = [3];

function f$2(h) {
  return Caml_curry.app2(h, 2, (v$2[0] = v$2[0] + 1 | 0, 3));
}

f$2(function (prim, prim$1) {
      return prim + prim$1 | 0;
    });

f$2(function (prim, prim$1) {
      return prim + prim$1 | 0;
    });

var c = v$2[0];

var v$3 = [3];

function f$3(h, _) {
  v$3[0] = v$3[0] + 1 | 0;
  var partial_arg = 9;
  return function (param) {
    return Caml_curry.app2(h, partial_arg, param);
  };
}

f$3(function (prim, prim$1) {
      return prim + prim$1 | 0;
    }, 3);

f$3(function (prim, prim$1) {
      return prim + prim$1 | 0;
    }, 3);

var d = v$3[0];

Mt.from_pair_suites("pr_regression_test.ml", /* :: */[
      /* tuple */[
        "partial",
        function () {
          return /* Eq */{
                  0: /* tuple */[
                    5,
                    5,
                    5,
                    5
                  ],
                  1: /* tuple */[
                    a,
                    b,
                    c,
                    d
                  ],
                  length: 2,
                  tag: 0
                };
        }
      ],
      /* [] */0
    ]);

exports.a = a;
exports.b = b;
exports.c = c;
exports.d = d;
/*  Not a pure module */
