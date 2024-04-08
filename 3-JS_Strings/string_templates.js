/**
 * Back-Tics Syntax
 * Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
 * 
 * With template literals, we can use both single and double quotes inside a string:
 * 
 */
////Automatic replacing of variables with real values is called string interpolation.

/**
 *   Template literals provide an easy way to interpolate variables and expressions into strings.
 *   The method is called string interpolation.
 *   The syntax is:
 *   ${...}
 */

let firstName="Waflo";
let lastName="Maflo";

let personInfo=`Welcome ${firstName} ${lastName}`;
console.log(personInfo);

/**
 *   Expression Substitution:
 * Template literals allow expressions in strings:
 */

let price=10;
let VAT=0.25;
let total=`Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);