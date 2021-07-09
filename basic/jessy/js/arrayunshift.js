// Array.unshift()
// Adds item to the beginning of the array

(function () {
    "use strict";

    let colors = ["blue", "green", "black"];

    colors.unshift("red");

    console.log(colors);

    colors.unshift("white");

    console.log(colors);
})();