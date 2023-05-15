/* (function () {
    "use strict";
    /*
    render(document);
    render(document.documentElement);
    render(document.body);
    render(document.head);

    render(document.childNodes[0]);
    render(document.childNodes[1]);

    render(document.documentElement.childNodes[0]);
    render(document.documentElement.childNodes[1]);
    render(document.documentElement.childNodes[document.documentElement.childNodes.length - 1]);
    render(document.documentElement.lastChild);

    // Iterate through all nodes
    /*for (let node of document.body.childNodes) {
        render(node);
    }
    */

    /*
    // Next Sibling
    render(document.body.nextSibling);
    render(document.head.previousSibling);

    // Previous Sibling
    render(document.head.previousSibling);
    render(document.body.previousSibling);

    render(document.body.parentElement);
    render(document.body.parentNode);

    render(document.head.parentElement);
    render(document.head.parentNode);
    */
    const validate = function () {
        const form = document.forms.enterName;
        const name = form.Name;

        console.log(name.value);

        name.oninput = function () {
            console.log(name.value);
        };
    }

    const name = document.forms.enterName.Name;

    console.log(document.head.parentElement);
    console.log(document.head.parentNode);
})();