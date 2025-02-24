"use strict";


function Animal(name, species, location) {
  this.name = name;
  this.species = species;
  this.location = location;
}

 Animal.prototype.sayMoo = function(){
    console.log(this.name + " the " + this.species + " says Moo " + " on the " + this.location);
};
const cow = new animal("Connie", "Cow", "Farm");



cow.sayMoo();