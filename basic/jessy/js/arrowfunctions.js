( function () {
    "use strict";
    let f1 = () => console.log('Hello, Yeti!');

    f1();

    let f2 = (a, b) => a**b;

    let a = f2(2,6);
    console.log(a);

    let aplusb = (a, b) => a +b;
    
    document.write(aplusb(3,8));
})();