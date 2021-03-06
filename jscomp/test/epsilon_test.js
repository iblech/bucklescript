// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("../stdlib/pervasives");
var Mt         = require("./mt");

var v = (Number.EPSILON?Number.EPSILON:2.220446049250313e-16);

var suites_000 = /* tuple */[
  "epsilon",
  function () {
    return /* Eq */{
            0: Pervasives.epsilon_float,
            1: v,
            length: 2,
            tag: 0
          };
  }
];

var suites_001 = /* :: */[
  /* tuple */[
    "raw_epsilon",
    function () {
      return /* Eq */{
              0: 2.220446049250313e-16,
              1: v,
              length: 2,
              tag: 0
            };
    }
  ],
  /* [] */0
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("epsilon_test.ml", suites);

exports.v      = v;
exports.suites = suites;
/* v Not a pure module */
