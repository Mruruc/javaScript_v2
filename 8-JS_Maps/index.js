/**
 * A Map holds key-value pairs where the keys can be any datatype.
 * A Map remembers the original insertion order of the keys.
 */

//How to Create a Map:
/**
 * Passing an Array to new Map()
 * Create a Map and use Map.set()
 */

const bookv1=new Map();
bookv1.set("Waflo Life",48.99);
bookv1.set("CS Introduction",99.99);
bookv1.set("JavaScript Advanced",63.0);

//The set() method can also be used to change existing Map values:
bookv1.forEach((value,key)=>console.log(key+" => "+value));

bookv1.set("Waflo Life",199.99);
bookv1.forEach((value,key)=>console.log(key+" => "+value));

const person=new Map([
    ["John",122958],
    ["Jamila",88961],
    ["Julia",878211]
]);

for (const iterator of person) {
    console.log(iterator);
}


//get() method => Gets the value for a key in a Map:
console.log(person.get("John"));

//delete() method => removes a Map element ;
console.log(person.delete("John"));

for (const iterator of person) {
    console.log(iterator);
}

// has() method => returnes true if specified key is exists in Map;
console.log(person.has("John"));
console.log(person.has("Julia"));


