(function() {
    "use strict";

    let str1 = "This is my first string";
    let str2 = ". And this is my second string.";
    str1 += str2;
    let sl = str1.length;

    document.write("<h3>" + str1 + "</h3>");
    document.write("<h2>" + sl + "</h2>");

})();