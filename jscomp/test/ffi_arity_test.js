// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Mt             = require("./mt");
var Caml_primitive = require("../runtime/caml_primitive");
var Caml_curry     = require("../runtime/caml_curry");

function f(v) {
  if (v % 2) {
    return function (v) {
      return v + v | 0;
    };
  }
  else {
    return function (v) {
      return Caml_primitive.imul(v, v);
    };
  }
}

var v = /* int array */[
    1,
    2,
    3
  ].map(function (param, param$1) {
      return Caml_curry.app2(f, param, param$1);
    });

var vv = /* int array */[
    1,
    2,
    3
  ].map(function (prim, prim$1) {
      return prim + prim$1 | 0;
    });

var hh = /* array */[
    "1",
    "2",
    "3"
  ].map(function (prim) {
      return parseInt(prim);
    });

Mt.from_pair_suites("ffi_arity_test.ml", /* :: */[
      /* tuple */[
        'File "ffi_arity_test.ml", line 21, characters 4-11',
        function () {
          return /* Eq */{
                  0: v,
                  1: /* int array */[
                    0,
                    1,
                    4
                  ],
                  length: 2,
                  tag: 0
                };
        }
      ],
      /* :: */[
        /* tuple */[
          'File "ffi_arity_test.ml", line 22, characters 4-11',
          function () {
            return /* Eq */{
                    0: vv,
                    1: /* int array */[
                      1,
                      3,
                      5
                    ],
                    length: 2,
                    tag: 0
                  };
          }
        ],
        /* :: */[
          /* tuple */[
            'File "ffi_arity_test.ml", line 23, characters 4-11',
            function () {
              return /* Eq */{
                      0: hh,
                      1: /* int array */[
                        1,
                        2,
                        3
                      ],
                      length: 2,
                      tag: 0
                    };
            }
          ],
          /* :: */[
            /* tuple */[
              'File "ffi_arity_test.ml", line 24, characters 4-11',
              function () {
                return /* Eq */{
                        0: /* int array */[
                              1,
                              2,
                              3
                            ].map(function (x) {
                                return function (y) {
                                  return x + y | 0;
                                };
                              }).map(function (y) {
                              return Caml_primitive.imul(Caml_curry.app1(y, 0), Caml_curry.app1(y, 1));
                            }),
                        1: /* int array */[
                          2,
                          6,
                          12
                        ],
                        length: 2,
                        tag: 0
                      };
              }
            ],
            /* :: */[
              /* tuple */[
                'File "ffi_arity_test.ml", line 29, characters 4-11',
                function () {
                  return /* Eq */{
                          0: /* int array */[
                              1,
                              2,
                              3
                            ].map(function (param, param$1) {
                                return Caml_curry.app2(function (x) {
                                            var y = Caml_primitive.imul(x, x);
                                            return function (i) {
                                              return y + i | 0;
                                            };
                                          }, param, param$1);
                              }),
                          1: /* int array */[
                            1,
                            5,
                            11
                          ],
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
    ]);

exports.f  = f;
exports.v  = v;
exports.vv = vv;
exports.hh = hh;
/* v Not a pure module */
