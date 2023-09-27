/**
 * A JavaScript Set is a collection of unique values.
 * Each value can only occur once in a Set.
 */

//How to Create a Set

/**
 * Passing an Array to new Set()
 * Create a new Set and use add() to add values
 * Create a new Set and use add() to add variables
 */

const setv1=new Set();
setv1.add("Waflo");
setv1.add("Shipoo");
setv1.add("Nello");
//If you add equal elements, only the first will be saved:
setv1.add("Nello");

console.log(setv1);

const emailAddress=new Set(["waflo@gmail.com","Sshipo_pl@gmail.com","nelo21@gmail.com"]);

// forEach();
emailAddress.forEach(value=>console.log(value));

console.log("============for of===================");
//for of
for (let iterator  of emailAddress) {
    console.log(iterator);
}

// size method => Returns the number of elements in a Set
console.log("Size: "+emailAddress.size);

//delete() method => Removes an element from a Set
console.log(emailAddress.delete("waflo@gmail.com"));

emailAddress.forEach(value=>console.log(value));
