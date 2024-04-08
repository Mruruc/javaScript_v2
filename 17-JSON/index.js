/**
 * JSON:
 * 
 * JSON stands for JavaScript Object Notation.
 * It is text format for storing and transporting data.
 * It is a lightweight data-interchange format.
 * Its  "self-describing" and easy to understand.
 * It is used to send data between computers.
 * Its language INDEPENDENT.
 */

// JavaScript have built-in functions for converting data from JSON Objects to JavaScript Object and vice verse.

const user={
  fname:'John',
  lname:'Doe',
  dob:new Date(2014,11,7),
  address:{
    country:'Poland',
    city:'Warsaw',
    district:'Praga',
    zip:'07-845'
  }
};

// from JavaScript to JSON:

const jsonString=JSON.stringify(user);
 // console.log(`${typeof jsonString} --> ${jsonString}`);

try{

//from JSON to JavaScript:
//const obj=JSON.parse(user);  //this will cause error because stringify and parse method does not change the original object.

/**
 * Note:
 * Parsing Dates
 * Date objects are not allowed in JSON.
 * If you need to include a date, write it as a string.
 * You can convert it back into a date object later:
 */
const obj=JSON.parse(jsonString);

console.log(`Type: ${typeof obj.dob} value: ${obj.dob}`);

//Converting date:

const dateValue= new Date(obj.dob);
console.log(`Type: ${typeof dateValue} value: ${dateValue}`)

}
catch(ex){
  console.log(`${ex.name}  ${ex.message}`);
}




/**
 * 
 * JSON Syntax:
 * JSON syntax is derived from JavaScript object notation syntax:
 * Data is in name/value pairs
 * Data is separated by commas
 * Curly braces hold objects
 * Square brackets hold arrays
 * 
 * JSON Values are:
 * 
 * String
 * Object
 * Array
 * Number
 * Boolean
 * Null
 */

 
/** 
 * 
'{
  "fname":"John",
  "lname":"Doe",
  "dob":"20022-02-03",
  "isMarried":false,
  "hobbit":['Music','Dance','Book','Code'],
  "isAlive":null
}'

*/

