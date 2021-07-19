// Searching in array
// Array.indexOf() looks for an item from, returns index of element found, otherwise -1
// Array.lastIndexOf() looks for an item from right to left, returns index of found element, -1 otherwise
// Array.includes() looks for an item from to, returns true if found
( function () {
    "use strict";

    let letters = ['a', 'b', 'c', 'd'];

    let found = letters.indexOf('c', 0);

    console.log(found);

    let notfound = letters.indexOf('f', 2);

    console.log(notfound);

    let d = letters.lastIndexOf('d', 2);

    console.log(d);

    let e = letters.includes('e', 0, 10);

    console.log(e);
})();