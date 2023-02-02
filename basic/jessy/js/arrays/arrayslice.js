// Array.slice()
// Returns new array

(function () {
    "use strict";

    let bands = [
        'Alice In Chains', 'Pearl Jam', 'Nirvana', 'Soundgarden'
    ];

    let x = bands.slice(2,3);

    console.log(x);

    let y = bands.slice(-1, 4);

    console.log(y);

    let z = bands.slice(0, 4);

    console.log(z);
})();