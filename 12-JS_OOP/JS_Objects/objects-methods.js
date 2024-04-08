
//merging objects with assign and spread operator(...).

const personInfo={
    firstName:'John',
    lastName:'Doe',
    age:36,
};

const personHobby={
    hobby:['Music','Sports']
};
 
// it will create two objects inside person object.
const person1={personInfo,personHobby}; 

console.log(person1);
console.log('======================');

//it will create person object from personInfo and personHobby objects property.

const person2= Object.assign({},personInfo,personHobby);

const person3={...personInfo,userName:'ofiloo',...personHobby};
console.log(person3);

//get all keys and puts inside array;
const person3Keys=Object.keys(person3);

//get all objects values and put them into array:
const person3Value=Object.values(person3);

//will put each property with its value into an array:
const x=Object.entries(person3);
console.log(typeof(x));
console.log(x);

//to check object has specified property

console.log(person3.hasOwnProperty('age'));

// information about the indicated property of the selected object.

// literal notation
function User(id,userName){
    this.id=id;
    this.userName=userName;
}

const user1=new User(1,'Mr.John');

const descriptionOfUserNameProperty=Object.getOwnPropertyDescriptor(user1,'userName');
console.log(descriptionOfUserNameProperty);

//setting the custom configuration of properties using the Object.defineProperty();

Object.defineProperty(user1,'userName',{
    value: 'John_doe',
    writable:false,
    enumerable:false,
    configurable:false
});

console.log(Object.getOwnPropertyDescriptor(user1,'userName'));

// user1.userName='Johny_doE'; // TypeError: Cannot assign to read only property 'userName' of object '#<User>'
// console.log(user1);

/**
 * Object.preventExtensions(obj) – after calling this method, we won't be able to add new properties to the object obj;
 * Object.seal(obj) – does not allow the adding, removing, or reconfiguring of the properties of the object obj;
 * Object.freeze(obj) – similar to Object.seal, but additionally makes it impossible to change the value of the property.
 */

// We also have methods to check if the object configuration has been changed.
/**
 *  Object.isExtensible, 
 *  Object.isSealed(obj) and Object.isFrozen(obj).
 */