(function() {
    "use strict";

    let user = new Object();
    let user2 = {};
    let user3 = {
        name : "John",
        lastName : "Doe",
        gender : "male",
    };

    console.log(user);
    console.log(user2);
    console.log(user3.name, user3.lastName, user3.gender);

    user.name = "Eugene";
    user2.age = 33;

    console.log(user.name);
    console.log(user2.age);

    delete user2.age;

    console.log(user2.age);

    user["has own home"] = true;

    console.log(user["has own home"]);

    let key = "what is your number";

    user2[key] = 192;

    console.log(user2[key]);

    let userName = prompt("Please input user name", "name");

    user3.name = userName;

    console.log(user3.name);

    // Computed properties
    let hair = prompt("User hair color?", "brown");

    let user4 = {
        [hair]: 1
    };

    console.log(user4.brown);


    // Checking if object has such property
    if ( !"name" in user3) {
        console.log("There\'s no such property!");
    } else {
        console.log(user3.name);
    }

    // Output all user3 properties
    for (let key in user3) {
        console.log(key);
    }

    // Output all user3 properties and values
    for (let key in user3) {
        console.log(user3[key]);
    }

})();