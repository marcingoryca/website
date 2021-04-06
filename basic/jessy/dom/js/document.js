(function () {
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
})();