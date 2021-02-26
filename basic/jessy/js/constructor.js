(function() {
    "use strict";

    // Constructor
    function Data() {
        this.number = 100;
        this.creationDate = "10.01.2021";
    };

    // Creating new object
    let a = new Data();

    console.log(a.number);
    console.log(a.creationDate);

    // Constructor with parameter
    function Data2(creationDate) {
        this.number = 99;
        this.creationDate = creationDate;
    }

    let b = new Data2("11/01/2021");

    console.log(b.number);
    console.log(b.creationDate);

    function Calculator() {

        this.read = function() {
            this.number1 = +prompt("Number 1", 0);
            this.number2 = +prompt("Number 2", 0);
        }

        this.sum = function() {
            return this.number1 + this.number2;
        }

        this.mul = function() {
            return this.number1 * this.number2;
        }
    };

    let c = new Calculator();

    //c.read();

    //console.log(c.sum());
    //console.log(c.mul());

    function Accumulator(startingValue) {
        this.value = startingValue;

        this.read = function() {
            this.value += +prompt("New value", 0);
        }
    }

    let d = new Accumulator(250);
    d.read();
    console.log(d.value);
    d.read();
    console.log(d.value);
    d.read();
    console.log(d.value);
})();