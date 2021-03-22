(function () {
    "use strict";

    // Create link
    let jsonfile = "../persona.json";

    // Create XHR object
    let request = new XMLHttpRequest();
    request.open('GET', jsonfile);
    request.send();

    let data = JSON.parse(request.responseText);
    console.log(data);
})();