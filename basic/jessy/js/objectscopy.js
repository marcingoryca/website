( function() {
    "use strict";

    let user = {
        name: "Anna",
        status: "active",
        workplace: "management"
    };

    let paul = user;
    paul.name = "Paul";
    paul.workplace = "storage"

    console.log(user.name, user.status, user.workplace);

    // Cloning an object (making new independent object)
    let userClone = {};

    for (let key in user) {
        userClone[key] = user[key];
    }

    userClone.name = "Tina";
    userClone.status = "inactive";
    userClone.workplace = "administration";

    console.log(userClone.name, userClone.status, userClone.workplace);

    // Using Object.assign
    let userClone2 = {};
    Object.assign(userClone2, userClone);

    console.log(userClone2.name, userClone2.status, userClone2.workplace);

    userClone2.name = "Ivan";
    console.log(userClone.name, userClone2.name);

    // Another example
    let userClone3 = Object.assign({}, userClone2);

    console.log(userClone3.name, userClone3.status, userClone3.workplace);

})();