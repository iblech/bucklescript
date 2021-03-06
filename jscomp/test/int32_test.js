// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Pervasives     = require("../stdlib/pervasives");
var Mt             = require("./mt");
var Int32          = require("../stdlib/int32");
var Caml_primitive = require("../runtime/caml_primitive");
var $$Array        = require("../stdlib/array");
var Caml_curry     = require("../runtime/caml_curry");
var Ext_array      = require("./ext_array");
var Format         = require("../stdlib/format");

function f(x) {
  return /* tuple */[
          x,
          (x >>> 1),
          (x >>> 2)
        ];
}

var shift_right_logical_tests_000 = $$Array.map(function (x) {
      return (-1 >>> x) | 0;
    }, Ext_array.range(0, 31));

var shift_right_logical_tests_001 = /* array */[
  -1,
  2147483647,
  1073741823,
  536870911,
  268435455,
  134217727,
  67108863,
  33554431,
  16777215,
  8388607,
  4194303,
  2097151,
  1048575,
  524287,
  262143,
  131071,
  65535,
  32767,
  16383,
  8191,
  4095,
  2047,
  1023,
  511,
  255,
  127,
  63,
  31,
  15,
  7,
  3,
  1
];

var shift_right_logical_tests = /* tuple */[
  shift_right_logical_tests_000,
  shift_right_logical_tests_001
];

var shift_right_tests_000 = $$Array.map(function (x) {
      return (Int32.min_int >> x);
    }, Ext_array.range(0, 31));

var shift_right_tests_001 = /* array */[
  -2147483648,
  -1073741824,
  -536870912,
  -268435456,
  -134217728,
  -67108864,
  -33554432,
  -16777216,
  -8388608,
  -4194304,
  -2097152,
  -1048576,
  -524288,
  -262144,
  -131072,
  -65536,
  -32768,
  -16384,
  -8192,
  -4096,
  -2048,
  -1024,
  -512,
  -256,
  -128,
  -64,
  -32,
  -16,
  -8,
  -4,
  -2,
  -1
];

var shift_right_tests = /* tuple */[
  shift_right_tests_000,
  shift_right_tests_001
];

var shift_left_tests_000 = $$Array.map(function (x) {
      return (1 << x);
    }, Ext_array.range(0, 31));

var shift_left_tests_001 = /* array */[
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768,
  65536,
  131072,
  262144,
  524288,
  1048576,
  2097152,
  4194304,
  8388608,
  16777216,
  33554432,
  67108864,
  134217728,
  268435456,
  536870912,
  1073741824,
  -2147483648
];

var shift_left_tests = /* tuple */[
  shift_left_tests_000,
  shift_left_tests_001
];

var test_div = 30;

var $star$tilde = Caml_primitive.imul

Mt.from_pair_suites("int32_test.ml", Pervasives.$at(/* :: */[
          /* tuple */[
            'File "int32_test.ml", line 32, characters 2-9',
            function () {
              return /* Eq */{
                      0: 1,
                      1: 1,
                      length: 2,
                      tag: 0
                    };
            }
          ],
          /* :: */[
            /* tuple */[
              'File "int32_test.ml", line 33, characters 2-9',
              function () {
                return /* Eq */{
                        0: -2147483647,
                        1: -2147483647,
                        length: 2,
                        tag: 0
                      };
              }
            ],
            /* [] */0
          ]
        ], Pervasives.$at($$Array.to_list(Ext_array.map2i(function (i, a, b) {
                      return /* tuple */[
                              Caml_curry.app1(Format.asprintf(/* Format */{
                                        0: /* String_literal */{
                                          0: "shift_right_logical_cases ",
                                          1: /* Int */{
                                            0: /* Int_d */0,
                                            1: /* No_padding */0,
                                            2: /* No_precision */0,
                                            3: /* End_of_format */0,
                                            length: 4,
                                            tag: 4
                                          },
                                          length: 2,
                                          tag: 11
                                        },
                                        1: "shift_right_logical_cases %d",
                                        length: 2,
                                        tag: 0
                                      }), i),
                              function () {
                                return /* Eq */{
                                        0: a,
                                        1: b,
                                        length: 2,
                                        tag: 0
                                      };
                              }
                            ];
                    }, shift_right_logical_tests_000, shift_right_logical_tests_001)), Pervasives.$at($$Array.to_list(Ext_array.map2i(function (i, a, b) {
                          return /* tuple */[
                                  Caml_curry.app1(Format.asprintf(/* Format */{
                                            0: /* String_literal */{
                                              0: "shift_right_cases ",
                                              1: /* Int */{
                                                0: /* Int_d */0,
                                                1: /* No_padding */0,
                                                2: /* No_precision */0,
                                                3: /* End_of_format */0,
                                                length: 4,
                                                tag: 4
                                              },
                                              length: 2,
                                              tag: 11
                                            },
                                            1: "shift_right_cases %d",
                                            length: 2,
                                            tag: 0
                                          }), i),
                                  function () {
                                    return /* Eq */{
                                            0: a,
                                            1: b,
                                            length: 2,
                                            tag: 0
                                          };
                                  }
                                ];
                        }, shift_right_tests_000, shift_right_tests_001)), $$Array.to_list(Ext_array.map2i(function (i, a, b) {
                          return /* tuple */[
                                  Caml_curry.app1(Format.asprintf(/* Format */{
                                            0: /* String_literal */{
                                              0: "shift_left_cases ",
                                              1: /* Int */{
                                                0: /* Int_d */0,
                                                1: /* No_padding */0,
                                                2: /* No_precision */0,
                                                3: /* End_of_format */0,
                                                length: 4,
                                                tag: 4
                                              },
                                              length: 2,
                                              tag: 11
                                            },
                                            1: "shift_left_cases %d",
                                            length: 2,
                                            tag: 0
                                          }), i),
                                  function () {
                                    return /* Eq */{
                                            0: a,
                                            1: b,
                                            length: 2,
                                            tag: 0
                                          };
                                  }
                                ];
                        }, shift_left_tests_000, shift_left_tests_001))))));

exports.f                         = f;
exports.shift_right_logical_tests = shift_right_logical_tests;
exports.shift_right_tests         = shift_right_tests;
exports.shift_left_tests          = shift_left_tests;
exports.test_div                  = test_div;
exports.$star$tilde               = $star$tilde;
/* shift_right_logical_tests Not a pure module */
