/* (function () {
    "use strict";

    console.log(document);
    console.log(document.documentElement);
    console.log(document.body);
    console.log(document.head);

    console.log(document.childNodes[0]);
    console.log(document.childNodes[1]);

    console.log(document.documentElement.childNodes[0]);
    console.log(document.documentElement.childNodes[1]);
    console.log(document.documentElement.childNodes[document.documentElement.childNodes.length - 1]);
    console.log(document.documentElement.lastChild);

    // Iterate through all nodes
    for (let node of document.body.childNodes) {
        console.log(node);
    }

    // Next Sibling
    console.log(document.body.nextSibling);
    console.log(document.head.previousSibling);

    // Previous Sibling
    console.log(document.head.previousSibling);
    console.log(document.body.previousSibling);

    console.log(document.body.parentElement);
    console.log(document.body.parentNode);

    console.log(document.head.parentElement);
    console.log(document.head.parentNode);
})(); */

const html = document.documentElement;
const body = document.body;
const head = document.head;

console.log(html);

console.log(body);

console.log(head);