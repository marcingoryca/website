(function() {
    "use strict";

    let Vehicle = {
        numberOfWheels: 4,
        color: "red",
        maxSpeed: 120,

        //longer version of a method
        wheels: function() {
            return this.numberOfWheels;
        },
        
        // shorter version of a method (recommended)
        hasWheels() {
            return this.numberOfWheels;
        },

        getColor() {
            return this.color;
        },

        setColor(color) {
            this.color = color;
        },

        setWheelsNumber(numberOfWheels) {
            this.numberOfWheels = numberOfWheels;
        }
    } 

    console.log(Vehicle.wheels());
    console.log(Vehicle.hasWheels());

    Vehicle.setColor("purple");
    Vehicle.setWheelsNumber(3);

    console.log(Vehicle.getColor());
    console.log(Vehicle.wheels());
})();