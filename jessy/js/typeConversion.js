( function() {
    "use strict";
    let x = "8";    //String
    let y = "3";    //String
    let z = "";     //String
    console.log(typeof x);
    console.log(typeof y);
    console.log(typeof z);
    z = x * y;
    alert(z);
    console.log(typeof z);

    let a = "0012";
    a = Number(a);
    console.log(a + typeof a);
})();