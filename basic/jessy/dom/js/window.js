/* (function () {
    "use strict";
    // Browser type
    console.log("Browser:" + window.navigator);

    // Browser Codename
    console.log("Browser Codename: " + window.navigator.appCodeName);

    console.log(window.history);
    console.log(window.XMLHttpRequest);
    console.log(window.navigator.javaEnabled);

    console.log(window.location.hostname);
    console.log(window.screen);
    console.log(window.status);
})(); */

const loc = window.location;
const hst = window.history;
const nav = window.navigator;

console.log('%c Window=>', 'color: navyblue; font-size: 14pt; font-weight: bold');
console.table([loc,hst, nav]);