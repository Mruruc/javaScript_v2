/**
 *    JavaScript Objects are Variables that hold more than one value.
 *    The values are written as key:value pairs (name and value separated by a colon).
 */

//It is a common practice to declare objects with the const keyword.

//The key:values pairs in JavaScript objects are called properties:

const car={
    color:"Red",
    brand:"BMW",
    date:new Date("1200-12-25")
}
// we can access the object properties with dot notation:
// 1)ObjectName.propertieName
console.log(car.brand);

// we also can access the object properties with bracket notation:
// 2) ObjectName[propertieName];
console.log(car['brand']);
console.log();

/// Object Methods
// JavaScript objects can have method as properties:

const human={
    name:"John",
    lastName:'Doe',

    fullName: function(){
        return this.name +" "+this.lastName
    },
    //this refers to the person object.

    speak: function(){
        console.log("Speaking")
    }
}
console.log(human.fullName());
human.speak();



//Objects are mutable: They are addressed by reference, not by value. 
const person1={
    name:"Wafloo",
    age:21
};

// console.log(person1);

const person2=person1;

person2.age=100;
console.log(person2);
console.log(person1);


//The JavaScript for...in statement loops through the properties of an object.
console.log("==================");

for (const key in person1) {
    console.log(key +": "+person1[key])
}


/// Adding New Properties
// we can add new properties to an existing object by simply giving it a value.
person1.nationality="Kurdish";

console.log("===================================");
for (const key in person1) {
    console.log(key +": "+person1[key])
}

// Deleting Properties
// The delete keyword deletes a property from an object:

delete person1.age;

console.log("================deleted age property===================");
for (const key in person1) {
    console.log(key +": "+person1[key])
}

/** 
 * The delete keyword deletes both the value of the property and the property itself.

 * After deletion, the property cannot be used before it is added back again.

 * The delete operator is designed to be used on object properties. It has no effect on variables or functions.

 * The delete operator should not be used on predefined JavaScript object properties. It can crash our application.
 */




// Any JavaScript object can be converted to an array using Object.values():

const arr=Object.values(person1);
console.log("==========Object to Array===========");
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr[0])

/**
 *  Using JSON.stringify()
 *  Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
 */

const sendtoDB=JSON.stringify(person1);
console.log(sendtoDB);

console.log('===============================');





