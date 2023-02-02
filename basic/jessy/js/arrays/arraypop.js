// Array.pop()
// pop() method removes last element from the array
(function () {
    "use strict";

    let colors = ["red", "green", "blue", "black"];

    let black = colors.pop();

    console.log(black);

    // Now, let's print the array
    console.log(colors);

    // Remove another one last element
    let blue = colors.pop();

    console.log(blue);

    console.log(colors);

    let green = colors.pop();
    let red = colors.pop();

    console.log(colors);

    // Okay, now we add black to the array
    colors.push(black, blue);

    console.log(colors);

    colors.pop();

    console.log(colors);

})(); 