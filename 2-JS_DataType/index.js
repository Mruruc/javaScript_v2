/**
 * JavaScript has 8 Datatypes
 * A) Primitive Data Type:
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined

B) Object Type:
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date
3. A Function

 */

//1) String
// Strings, like other primitives, are immutable,
// so when we want to change even one letter in a string, in reality, we create a new string.

let firstName="Waflo";
console.log('Type :',typeof firstName);

//2) Number:

// All JavaScript numbers are stored as decimal numbers (floating point).
// Numbers can be written with, or without decimals:
// Javascript numbers are always one type:
// double (64-bit floating point).

let weight=56.3;
let height=196;
console.log('Type: ',typeof weight);

//3) Bigint

// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values 
// that are too big to be represented by a normal JavaScript Number.

let bigint=BigInt(455445454545412);
let bigint2=1384783480000n;
console.log('Type: ',typeof bigint2)
console.log(typeof bigint);

//4) Boolean

/**
 * Falsy Values:
 * 0
 * Nan
 * empty string
 * undefined
 * null
 */

let x=true;
console.log("TypeOf X: "+typeof x)
let y=false;

//5) Undefined:

// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
let ageV1;
console.log(ageV1);
console.log("TypeOf: " + typeof ageV1);
//Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
let carV1='BMV';
console.log(carV1);
carV1=undefined;
console.log(carV1);

//6) Null:

//It represents an intentional absence of any value or object.
let xx=null;
console.log('Type NULL: ',typeof xx);

// 7) Symbol:

// The Symbol data type introduces a way to create unique and immutable identifiers in JavaScript.
// Their uniqueness property makes them particularly useful for creating non-colliding object keys,
// ensuring more reliable code in complex scenarios.

// Unique Nature
// Every time you create a Symbol, it's guaranteed to be unique, regardless of the description or value you give it:
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log('Type :',typeof sym1);
console.log("========================");
console.log(sym1 === sym2); 
/**
 * Even though sym1 and sym2 both have the same description, they are entirely distinct symbols.
 * Description:
 * The argument passed to the Symbol function is optional and is primarily for debugging purposes.
 * It provides a human-readable format of a symbol when trying to convert it to a string or when logging it:
 */


//Reference Data Types:

//1) Object
const customer={
    name:"John",
    age:2.3
}
console.log(customer);

//2) Array Object 
const cars=['BMW','Volvo','Ford'];
console.log(cars);

//3) Date Object
const date=new Date();
console.log(date);



//Note:
//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
{
  let x;       // Now x is undefined
  x = 5;       // Now x is a Number
  x = "John";  // Now x is a String
}

const func=function(){return "Something";}
console.log(typeof func);