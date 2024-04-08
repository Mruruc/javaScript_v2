
/**
 * Destructuring:
 * 
 *  Destructuring in JavaScript provides a way to extract multiple pieces of data from arrays and
 *   *  objects and assign them to variables.
 */


// Object Destructuring:
// Extract properties from an object and assign them to variables.

const person={
    name:'Alice',
    age:28,
    job:'Engineer'
};

const {name, age} =person;
console.log(name);  //Alice
console.log(age);  // 28

//If you want the variable names to be different from the property names:
const pname=person.name;
const page=person.age;
console.log(pname ," " ,page);

const {name: personName, age: personAge }=person;
console.log(personName);
console.log(personAge);

console.log('========================');
//Array Destructuring:
//Extract values from an array and assign them to variables.

const colors = ['red', 'green', 'blue'];

const red=colors[0];
const green=colors[1];

console.log(red,green);

const [fisrst,second]=colors;
console.log(fisrst,second);
