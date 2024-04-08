// for  loops through a block of code a number of times.

let sum=0;
for(let i=1; i<=5; i++){
    sum+=i;
}
// console.log(sum);

// for/in - loops through the properties of an object;

const car={
    model:"volvo",
    color:"Black"
};
/**
 * for (key in object) {
  // code block to be executed
}
 */

for (let key in car) {
    console.log(`Key: ${key} --> Value:${car[key]}`);
}

/**
 *  The for in loop iterates over a person object
 * Each iteration returns a key (x)
 * The key is used to access the value of the key
 * The value of the key is person[x]
 */

// Loops can execute a block of code as long as a specified condition is true.

/**
  * The For Of Loop
  * The JavaScript for of statement loops through the values of an iterable object.
  * It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
 */
let str="Hello";
for (const iterator of str) {
    console.log(iterator);
}

//iterable - An object that has iterable properties.

const cars = ["BMW", "Volvo", "Mini"];


for (let x of cars) {
    console.log(x);
}
