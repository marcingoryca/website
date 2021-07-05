// Arrays.js
(function () {
    "use strict";

    let musicGenre = [
        "rock",
        "pop",
        "techno",
        "trans",
        "blues",
        "metal",
        "funk"
    ];


    //array.pop() removes last element of the array
    let remove = musicGenre.pop();

    console.log(musicGenre);
    console.log(remove);

    for (let i=0; i < musicGenre.length; ++i) {
        console.log(musicGenre[i]);
    }

    //array.push(item) adds item to the end of the array
    //let newGenres = ["disco", "dance", "folk", "reggae"]; <-- adding this to existing array, makes an array in array
    let disco = "disco";
    let dance = "dance";
    let folk = "folk";
    let reggae = "reggae";
    let add = musicGenre.push(disco, dance, folk, reggae);

    console.log(add);

    //array.shift() extracts element from the begining
    let first = musicGenre.shift();

    console.log(first);

    //array.unshift(item) adds item to the begining of the array
    let start = musicGenre.unshift("soul", "jazz", "house");

    console.log(start);

    //array.splice() removes, inserts element from/to the table
    let remove01 = musicGenre.splice(0, 2);

    console.log(remove01);

    let newArray = remove01;

    //console.log(newArray[0]);

    musicGenre.splice(0,0, newArray[0], newArray[1]);

    for (let i = 0; i < musicGenre.length; ++i) {
        console.log(musicGenre[i]);
    }

    //negative indices
    let addMinusTwo = musicGenre.splice(-2, 0, "electronic", "film");

    console.log(addMinusTwo);

    for (let i = 0; i < musicGenre.length; ++i) {
        console.log(musicGenre[i]);
    }
})();