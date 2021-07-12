// Array.concat()
// Create new array from other arrays and with additional items

( function () {
    "use strict";

    let movies = ['Final Destination', 'Showgirls', 'Interview with Vampire', 'Terminator'];

    let x = movies.concat();

    console.log(x);

    let y = movies.concat('Dirty Dancing', 'Pulp Fiction');

    console.log(movies);
    console.log(y);

    let z = movies.concat(x, y, ['Rainman', 'Kill Bill']);

    console.log(z);
}) ();