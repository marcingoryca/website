( function () {
    "use strict";
    let f1 = () => console.log('Hello, JavaScript!');

    f1();

    let f2 = (a, b) => a**b;

    let a = f2(2,6);
    console.log(a);
})();