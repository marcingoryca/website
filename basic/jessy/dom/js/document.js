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

/* const html = document.documentElement;
const body = document.body;
const head = document.head;

console.log(html);

console.log(body);

console.log(head);

for (let i = 0; i < document.body.childNodes.length; ++i) {
    console.log(document.body.childNodes[i]);
} */

/* const html = document.childNodes[0];

console.log(html);

const head = document.childNodes[1];

console.log(head);

const a = document.body.childNodes[0];
console.log(a);

const b = document.body.childNodes.length -1;

console.log(b); */

document.body.style.backgroundColor = "black";
document.body.style.fontFamily = "Open Sans";
document.body.style.fontSize = '16pt';
document.body.style.color = 'white';

for (let n of document.body.childNodes) {
    console.log(n);
}

console.log(Array.from(document.body.childNodes).filter);


/* Do not use that! */
/* for (let n in document.body.childNodes) {
    console.log(n);
} */

const body = document.body.previousSibling;
const div = document.createElement('div');

div.append(body);
document.body.append(div);