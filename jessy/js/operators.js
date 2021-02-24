( function () {
    "use strict";
    let x = 20;
    x = -x;     //unary operator, it has single operand
    console.log(x);

    let y = 17;
    let z = 9;

    // Divide
    let a = y / z;  //binary operator, it has two operands
    console.log(a);

    y = 20;
    z = 3;

    // Addition
    a = y + z;
    console.log(a);

    // Subtraction
    a = z - y;
    console.log(a);

    // Multiplication
    a = x * z;
    console.log(a);

    // Remainder
    a = x % y;
    console.log(a);

    // Exponentation
    a = x**x;
    console.log(a);

    let b = 2;
    b = b**b;
    console.log(b);

    // String concatenation
    let c = "Old";
    let d = " mistery";
    let e = " lady";
    let f = c + d + e;
    console.log(f);
})();