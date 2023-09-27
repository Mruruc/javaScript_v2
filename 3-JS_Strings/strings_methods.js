//JavaScript String Methods

/**
 * String length
 * String slice()
 * String substring()
 * String substr()
 * String replace()
 * String replaceAll()
 * String toUpperCase()
 * String toLowerCase()
 * String concat()
 * String trim()
 * String trimStart()
 * String trimEnd()
 * String padStart()
 * String padEnd()
 * String charAt()
 * String charCodeAt()
 * String split()
 */

//1) length
let text = "Apple, Banana, Kiwi";
console.log("length: "+ text.length);

//============================================================================
//2) slice();
/**
 * slice() extracts a part of a string and returns the extracted part in a new string.
 * The method takes 2 parameters: start position, and end position (end not included).
 */
console.log(text.slice(15,19));

//If you omit the second parameter, the method will slice out the rest of the string:
console.log(text.slice(7));

//If a parameter is negative, the position is counted from the end of the string:
console.log(text.slice(-12));
console.log(text.slice(-12,-6))

//============================================================================

//3) substring();
/**
 * substring() is similar to slice().
 * The difference is that start and end values less than 0 are treated as 0 in substring().
 */ 

console.log(text.substring(0,5));

//============================================================================

//4) substr():

/**
 * subst() is similar to slice();
 * The difference is that the second parameter specifies the length of the extracted part;
 */

console.log(text.substr(15,4));

////============================================================================

// 5) String replace();  
/**
 * The replace() method replaces a specified value with another value in a string:
 * By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
 * To replace case insensitive, use a regular expression with an /i flag (insensitive):
 */

let textv1="Please visit Microsoft!";
let textv2=textv1.replace("Microsoft","Mruruc");
console.log(textv2);
console.log(textv1.replace("Microsoft","Mruruc"));

/**
 * Note:
 * The replace() method does not change the string it is called on.
 * The replace() method returns a new string.
 * The replace() method replaces only the first match
 * If you want to replace all matches, use a regular expression with the /g flag set.
 *     
 */


// 6) String replaceAll();
/**
* it will replace specified string with all occurrence;
*/
let textv3 = "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(textv3.replaceAll("Cats","Dogs"));
console.log(textv3.replaceAll("cats","dogs"));


////============================================================================

//7) toUpperCase();
/**
 * A string is converted to upper case with toUpperCase():
 */
console.log("hello world!".toUpperCase())

//8) String toLowerCase();
/**
 * A string is converted to lower case with toLowerCase():
 */
console.log("EARTH!".toLowerCase());

//////============================================================================

// 9) concat();

/**
 * concat() joins two or more strings:
 * The concat() method can be used instead of the plus operator. 
 */

console.log("You".concat(" ","And Me"));

//////============================================================================

// 10) trim();

/**
 * The trim() method removes whitespace from both sides of a string:
 */
let trimMethodExample="   JavaScript   ";
console.log(trimMethodExample.trim());


//////============================================================================

 //11) trimStart();
 /**
  * ECMAScript 2019 added the String method trimStart() to JavaScript.
  * The trimStart() method works like trim(), but removes whitespace only from the start of a string.
  */
 let trimStartExample="  Java   ";
 console.log(trimStartExample.trimStart());


//////============================================================================

 //12)  trimEnd();
 /**
  * ECMAScript 2019 added the string method trimEnd() to JavaScript.
  * The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
  */
 
 console.log(trimStartExample.trimEnd());

//////============================================================================

//13) padStart();
/**
 * It pads a string with another string (multiple times) until it reaches a given length.
 */
let greet="Hello"
console.log(greet.padStart(7,"X"));

//14) padEnd();
/**
 * The padEnd() method pads a string from the end.
 * It pads a string with another string (multiple times) until it reaches a given length
 */
console.log(greet.padEnd(7,"0"));

///============================================================================

// 15) charAt();
/**
 * The charAt() method returns the character at a specified index (position) in a string:
 */
console.log("Ayran".charAt(0));

///============================================================================
// 16) charCodeAt();
/**
 * The charCodeAt() method returns the unicode of the character at a specified index in a string:
 * The method returns a UTF-16 code (an integer between 0 and 65535).
 */
console.log("Doner".charCodeAt(0));

///============================================================================

//Converting a String to an Array:

// 17) split();
/**
 * A string can be converted to an array with the split() method:
 */
let arr="hello World How Are you!".split(" ");  // Split on spaces
for(i=0; i<arr.length;i++){
    console.log(arr[i]);
}

//18) search();
/**
 * The search() method searches a string for a string (or a regular expression) and returns the position of  * * the match:
 */

console.log("Hello World How Are you".search("you"));


