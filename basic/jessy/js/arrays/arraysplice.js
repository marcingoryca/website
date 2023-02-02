// Array.splice()
// Inserts / Removes to / from the table

(function () {
    "use strict";

    let countries = ['Poland', 'Netherlands', 'Denmark', 'Germany', 'France', 'Czech Republic'];

    let pl = countries.splice(0, 1);

    console.log(pl);

    // Now we will insert new country to the first place
    countries.splice(0, 0, "Austria");

    console.log(countries);

    // Now we will replace second and third country
    countries.splice(1, 2, "Scotland", "Norway");

    console.log(countries);
})();