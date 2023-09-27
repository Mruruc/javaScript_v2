/// Object Constructor:



function Card(id,amount,date){
    this.id=id;
    this.amount=amount;
    this.date=date;
}

const card1=new Card(1,223.00,new Date(2023,5,3));
const card2=new Card(2,100.00,new Date(2015,5,3));

console.log(card1);
console.log(card2);

//we can not add a new property to an existing object constructor:

//To add a new property to a constructor, you must add it to the constructor function:


/**
 Prototype Inheritance:

All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.
 */

// The JavaScript prototype property allows you to add new properties to object constructors:

Card.prototype.currency='$USD';

const card3=new Card(3,108.00,new Date(),`{$}USD'`);

console.log(card3);
console.log(card3.currency);