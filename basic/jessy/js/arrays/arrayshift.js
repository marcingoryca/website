// Array.shift()
// Extracts item from the beginning of the array
(function () {
    "use strict";

    let colors = ["red", "green", "blue", "black", "orange", "yellow"];
    let first = colors.shift();

    // Print extracted item
    console.log(first);

    // And the array itself
    console.log(colors);

    let second = colors.shift();

    console.log(colors);
})();