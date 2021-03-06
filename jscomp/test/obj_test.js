// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Mt             = require("./mt");
var CamlinternalOO = require("../stdlib/camlinternalOO");
var Caml_curry     = require("../runtime/caml_curry");

var shared = [
  "hi",
  "add"
];

var shared$1 = [
  "hi",
  "hello"
];

var $$class = CamlinternalOO.create_table(shared$1);

var ids = CamlinternalOO.get_method_labels($$class, shared$1);

var hi = ids[0];

var hello = ids[1];

CamlinternalOO.set_methods($$class, /* array */[
      hi,
      function (_, x, y) {
        return x + y | 0;
      },
      hello,
      function (self$neg1, z) {
        return Caml_curry.app3(self$neg1[0][hi], self$neg1, 10, z);
      }
    ]);

CamlinternalOO.init_class($$class);

var vv = CamlinternalOO.create_object_opt(0, $$class);

var $$class$1 = CamlinternalOO.create_table([
      "x",
      "y"
    ]);

var ids$1 = CamlinternalOO.get_method_labels($$class$1, [
      "y",
      "x"
    ]);

var y = ids$1[0];

var x = ids$1[1];

CamlinternalOO.set_methods($$class$1, /* array */[
      x,
      function () {
        return 3;
      },
      y,
      function () {
        return 32;
      }
    ]);

CamlinternalOO.init_class($$class$1);

var v = CamlinternalOO.create_object_opt(0, $$class$1);

var $$class$2 = CamlinternalOO.create_table([
      "hi",
      "id1",
      "id2",
      "hello"
    ]);

var ids$2 = CamlinternalOO.get_method_labels($$class$2, [
      "id2",
      "id1",
      "hi",
      "hello"
    ]);

var id2 = ids$2[0];

var id1 = ids$2[1];

var hi$1 = ids$2[2];

var hello$1 = ids$2[3];

CamlinternalOO.set_methods($$class$2, /* array */[
      hi$1,
      function (_, v, z) {
        return v + z | 0;
      },
      id1,
      function () {
        return 3;
      },
      id2,
      function () {
        return 4;
      },
      hello$1,
      function (_, v) {
        return v;
      }
    ]);

CamlinternalOO.init_class($$class$2);

var u = CamlinternalOO.create_object_opt(0, $$class$2);

var $$class$3 = CamlinternalOO.create_table(["id"]);

var id = CamlinternalOO.get_method_label($$class$3, "id");

CamlinternalOO.set_method($$class$3, id, function () {
      return "uu";
    });

CamlinternalOO.init_class($$class$3);

var uu = CamlinternalOO.create_object_opt(0, $$class$3);

var $$class$4 = CamlinternalOO.create_table(["add"]);

var add = CamlinternalOO.get_method_label($$class$4, "add");

CamlinternalOO.set_method($$class$4, add, function (_, x, y) {
      return x + y | 0;
    });

CamlinternalOO.init_class($$class$4);

var uuu = CamlinternalOO.create_object_opt(0, $$class$4);

var $$class$5 = CamlinternalOO.create_table(shared);

var ids$3 = CamlinternalOO.get_method_labels($$class$5, shared);

var hi$2 = ids$3[0];

var add$1 = ids$3[1];

CamlinternalOO.set_methods($$class$5, /* array */[
      add$1,
      function (_, x, y) {
        return x + y | 0;
      },
      hi$2,
      function (self$neg6, x) {
        return Caml_curry.app3(self$neg6[0][add$1], self$neg6, x, 32);
      }
    ]);

CamlinternalOO.init_class($$class$5);

var vvvv = CamlinternalOO.create_object_opt(0, $$class$5);

var suites_000 = /* tuple */[
  "single_obj",
  function () {
    return /* Eq */{
            0: /* int array */[
              3,
              32
            ],
            1: /* int array */[
              v.tag === 248 ? Caml_curry.js1(120, 1, v) : v.x,
              v.tag === 248 ? Caml_curry.js1(121, 2, v) : v.y
            ],
            length: 2,
            tag: 0
          };
  }
];

var suites_001 = /* :: */[
  /* tuple */[
    "single_obj_cache",
    function () {
      return /* Eq */{
              0: /* int array */[
                3,
                32
              ],
              1: /* int array */[
                v.tag === 248 ? Caml_curry.js1(120, 3, v) : v.x,
                v.tag === 248 ? Caml_curry.js1(121, 4, v) : v.y
              ],
              length: 2,
              tag: 0
            };
    }
  ],
  /* :: */[
    /* tuple */[
      "self_obj",
      function () {
        return /* Eq */{
                0: 13,
                1: vv.tag === 248 ? Caml_curry.js2(616641298, 5, vv, 3) : Caml_curry.app1(vv.hello.bind(vv), 3),
                length: 2,
                tag: 0
              };
      }
    ],
    /* :: */[
      /* tuple */[
        "uu_id",
        function () {
          return /* Eq */{
                  0: "uu",
                  1: uu.tag === 248 ? Caml_curry.js1(23515, 6, uu) : uu.id,
                  length: 2,
                  tag: 0
                };
        }
      ],
      /* :: */[
        /* tuple */[
          "uu_add",
          function () {
            return /* Eq */{
                    0: uuu.tag === 248 ? Caml_curry.js3(4846113, 7, uuu, 1, 20) : Caml_curry.app2(uuu.add.bind(uuu), 1, 20),
                    1: 21,
                    length: 2,
                    tag: 0
                  };
          }
        ],
        /* :: */[
          /* tuple */[
            "v_add",
            function () {
              return /* Eq */{
                      0: vvvv.tag === 248 ? Caml_curry.js3(4846113, 8, vvvv, 3, 7) : Caml_curry.app2(vvvv.add.bind(vvvv), 3, 7),
                      1: 10,
                      length: 2,
                      tag: 0
                    };
            }
          ],
          /* :: */[
            /* tuple */[
              "u_id1",
              function () {
                return /* Eq */{
                        0: u.tag === 248 ? Caml_curry.js1(5243894, 9, u) : u.id1,
                        1: 3,
                        length: 2,
                        tag: 0
                      };
              }
            ],
            /* :: */[
              /* tuple */[
                "u_id2",
                function () {
                  return /* Eq */{
                          0: u.tag === 248 ? Caml_curry.js1(5243895, 10, u) : u.id2,
                          1: 4,
                          length: 2,
                          tag: 0
                        };
                }
              ],
              /* :: */[
                /* tuple */[
                  "u hi",
                  function () {
                    return /* Eq */{
                            0: u.tag === 248 ? Caml_curry.js3(23297, 11, u, 1, 2) : Caml_curry.app2(u.hi.bind(u), 1, 2),
                            1: 3,
                            length: 2,
                            tag: 0
                          };
                  }
                ],
                /* :: */[
                  /* tuple */[
                    "u hello",
                    function () {
                      return /* Eq */{
                              0: u.tag === 248 ? Caml_curry.js2(616641298, 12, u, 32) : Caml_curry.app1(u.hello.bind(u), 32),
                              1: 32,
                              length: 2,
                              tag: 0
                            };
                    }
                  ],
                  /* :: */[
                    /* tuple */[
                      "v hi",
                      function () {
                        return /* Eq */{
                                0: vvvv.tag === 248 ? Caml_curry.js2(23297, 13, vvvv, 31) : Caml_curry.app1(vvvv.hi.bind(vvvv), 31),
                                1: 63,
                                length: 2,
                                tag: 0
                              };
                      }
                    ],
                    /* :: */[
                      /* tuple */[
                        "uuu add",
                        function () {
                          return /* Eq */{
                                  0: uuu.tag === 248 ? Caml_curry.js3(4846113, 14, uuu, 3, 4) : Caml_curry.app2(uuu.add.bind(uuu), 3, 4),
                                  1: 7,
                                  length: 2,
                                  tag: 0
                                };
                        }
                      ],
                      /* :: */[
                        /* tuple */[
                          "v x",
                          function () {
                            return /* Eq */{
                                    0: v.tag === 248 ? Caml_curry.js1(120, 15, v) : v.x,
                                    1: 3,
                                    length: 2,
                                    tag: 0
                                  };
                          }
                        ],
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("obj_test.ml", suites);

exports.vv     = vv;
exports.v      = v;
exports.u      = u;
exports.uu     = uu;
exports.uuu    = uuu;
exports.vvvv   = vvvv;
exports.suites = suites;
/* class Not a pure module */
