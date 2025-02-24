"use strict";


function Animal(name, species, location) {
  this.name = name;
  this.species = species;
  this.location = location;
}
const cow = new Animal("Connie", "Cow", "Farm");
 
Animal.prototype.sayMoo = function(){
    console.log(this.name + " the " + this.species + " says Moo " + " on the " + this.location);
};
cow.sayMoo();
