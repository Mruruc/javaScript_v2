/// Object Constructor:
//!!!!!!!!! every new object in JavaScript is created by default from the generic Object constructor.!!!!!!!!!!!!!!!

//Since Object is the constructor of a generic object,we can use it to create a new object

const obj1=new Object();
console.log(obj1);

// this is equal to 

const obj2={};
console.log(obj2);

function User(id,userName,password){
    this.id=id;
    this.userName=userName;
    this.password=password;
    this.lastLogin=defaultDate();
}
function defaultDate(){
   const now= new Date();
   return `${now.getFullYear()}-${now.getMonth()+1}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}`;
}

const user1=new User(1,'Mr.Uruc','dsncsdnDSMLD34534',new Date(2024,1,2));
// console.log(user1);

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

User.prototype.getUserInfo=function(){
    return `ID: ${this.id}\nUser Name: ${this.userName}\nPassword: ${this.password}\nLast Login: ${this.lastLogin}`;
}

console.log(user1.getUserInfo());