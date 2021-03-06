// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Printf     = require("../stdlib/printf");
var Caml_curry = require("../runtime/caml_curry");

Caml_curry.app1(Printf.printf(/* Format */{
          0: /* Int64 */{
            0: /* Int_d */0,
            1: /* No_padding */0,
            2: /* No_precision */0,
            3: /* Char_literal */{
              0: /* "\n" */10,
              1: /* End_of_format */0,
              length: 2,
              tag: 12
            },
            length: 4,
            tag: 7
          },
          1: "%Ld\n",
          length: 2,
          tag: 0
        }), /* int64 */[
      0,
      32
    ]);

Printf.printf(/* Format */{
      0: /* String_literal */{
        0: "heloo!\nhelloxx\n",
        1: /* End_of_format */0,
        length: 2,
        tag: 11
      },
      1: "heloo!\nhelloxx\n",
      length: 2,
      tag: 0
    });

Printf.printf(/* Format */{
      0: /* String_literal */{
        0: "hello\nhi\n",
        1: /* End_of_format */0,
        length: 2,
        tag: 11
      },
      1: "hello\nhi\n",
      length: 2,
      tag: 0
    });

Caml_curry.app2(Printf.printf(/* Format */{
          0: /* Int */{
            0: /* Int_d */0,
            1: /* Arg_padding */{
              0: /* Right */1,
              length: 1,
              tag: 1
            },
            2: /* No_precision */0,
            3: /* String_literal */{
              0: "\n\n",
              1: /* End_of_format */0,
              length: 2,
              tag: 11
            },
            length: 4,
            tag: 4
          },
          1: "%*d\n\n",
          length: 2,
          tag: 0
        }), 32, 3);

Caml_curry.app1(Printf.printf(/* Format */{
          0: /* String */{
            0: /* No_padding */0,
            1: /* End_of_format */0,
            length: 2,
            tag: 2
          },
          1: "%s",
          length: 2,
          tag: 0
        }), Caml_curry.app2(Printf.sprintf(/* Format */{
              0: /* Int */{
                0: /* Int_d */0,
                1: /* Arg_padding */{
                  0: /* Right */1,
                  length: 1,
                  tag: 1
                },
                2: /* No_precision */0,
                3: /* Char_literal */{
                  0: /* "\n" */10,
                  1: /* End_of_format */0,
                  length: 2,
                  tag: 12
                },
                length: 4,
                tag: 4
              },
              1: "%*d\n",
              length: 2,
              tag: 0
            }), 32, 3));

/*  Not a pure module */
