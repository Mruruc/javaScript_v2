
//merging objects with assign and spraed operator(...).

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

//it will create person object from personInfo and personHobby objects property.

const person2= Object.assign({},personInfo,personHobby);

const person3={...personInfo,userName:'ofiloo',...personHobby};


//get all keys and puts inside array;
const person3Keys=Object.keys(person3);

//get all objects values and put them into array:
const person3Value=Object.values(person3);

//will put each property with its value into an array:
const x=Object.entries(person3);

//to check object has specified property

console.log(person3.hasOwnProperty('age'));