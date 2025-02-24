"use strict";

function Person(name, age, istheCEO) {
  const person = { name: name, age: age, istheCEO: istheCEO };
  return person;
}
const newperson1 = Person("Shantel", 43, true);
console.log(newperson1);
const newperson2 = Person("Gabriel", 18, false);
console.log(newperson2);
const newperson3 = Person("Priscilla", 69, false)
console.log(newperson3);
