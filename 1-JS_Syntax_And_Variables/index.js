
// Variables:
//JavaScript uses the keywords var, let and const to declare variables.

// var => for old browser and not for final variable;
// let=> modern version of var.
/**
 * The let keyword was introduced in ES6 (2015)

 * Variables defined with let cannot be Redeclare.

 * Variables defined with let must be Declared before use

 * Variables defined with let have Block Scope
 */
// const=> for constant value(final).

/*
 ->> Declaring a variable means, reserving space for it.
 ->> Initializing a variable means, assigning a value to it.(giving a value to it.)
*/
var name='Waflo';

//After the declaration, the variable has no value (technically it is undefined).

let lastName;
console.log("Undefined: " + lastName);
lastName="Maflo";
const id=747805743085;
/**
 * Note:
 * It's a good programming practice to declare all variables at the beginning of a script.
 */

//We can declare many variables in one statement.

let f_name='John',l_name='Doe', pesel=465_465_4654;
console.log(f_name,l_name,pesel);

/**
 * JavaScript Operators
JavaScript uses arithmetic operators ( + - * / ) to compute values:
 */


/**
 * Block Scope
 * Before ES6 (2015), JavaScript had Global Scope and Function Scope.

 * ES6 introduced two important new JavaScript keywords: let and const.

 * These two keywords provide Block Scope in JavaScript.

 * Variables declared inside a { } block cannot be accessed from outside the block:
 */
{

let pigi1={
    name:"waflo",
    age:55
}
console.log(pigi1);
}

// console.log(pigi1); will cause = Uncaught ReferenceError: pigi1 is not defined.s

/**
 * The const keyword was introduced in ES6 (2015)

 * Variables defined with const cannot be Redeclare.

 * Variables defined with const cannot be Reassigned

 * Variables defined with const have Block Scope
 */

/**
 * The keyword const is a little misleading.

 * It does not define a constant value. It defines a constant reference to a value.

 * Because of this you can NOT:

 * Reassign a constant value
 * Reassign a constant array
 * Reassign a constant object
 * But you CAN:

 * Change the elements of constant array
 * Change the properties of constant object.
 */

let a,b,c;
a=5;
b=4;
c=a+b;

// When separated by semicolons, multiple statements on one line are allowed:

let x,y,z;
x=23; y='Waflo'; z=90;