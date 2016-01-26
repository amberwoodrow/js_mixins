// CONCEPT TESTS (15 MINUTES)

// 1. Create two Javasript classes, one that acts a "base" class, so to speak.
// Each class should have one unique and one common method, and each class should
// contain some typical attributes, such as a "Name" or a "Noise".  Give an example
// of how these classes could be used and their methods referenced.  Some examples
// situations include a "Vehicle" and "Car", an "Animal" and "Cat", a "Shape" and
// "Square". etc.

// 2. What is a Javascript Mixin?

// Killing 2 birds with one stone here by answering 2 in the comments and giving
// an example of 2 combined with 1.

// Q: What is a Javascript Mixin?
// A: The idea of a mixin is to take an object and ‘mixin’ the functionality of another object.
// In jQuery you can use extend. You specify a target object, and with that you can
// include multiple objects with the functionality you want to mixin.

// Silly examples
function Car(kind, horsePower) {
  this.kind = kind,
  this.horsePower = horsePower
}

function Horse(kind, horsePower) {
  this.kind = kind,
  this.horsePower = horsePower
}

var speed = {
  mph: function() {
    return this.kind + "has " + this.horsePower + " horse power!";
  },
  complimentSpeed() {
    return "WOW! That" + this.kind + "sure goes fast!";
  }
};

var gas = {
  pumpGas: function() {
    return "Put the noozle in the gas chamber and start pumping!";
  }
};

$.extend(Car.prototype, speed, gas); // gas shows us mixins can also be unique to a class
$.extend(Horse.prototype, speed);

var kia = new Car("Kia", "138");
var mustang = new Horse("Mustang", "233484897");

kia.pumpGas();
mustang.pumpGas();
mustang.mph();
kia.mph();
