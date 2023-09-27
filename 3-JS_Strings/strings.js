/**
 * JavaScript strings are for storing and manipulating text.
 * A JavaScript string is zero or more characters written inside quotes.
 */

/**
 * String Length
 * To find the length of a string, use the built-in length property:
 */

let fullName="Wafloo Mafloo";
console.log(fullName.length);

//JavaScript Strings as Objects
// Usually Strings are prmitives data type, but can be used with new keyWord and they became Object.

let address="Warsaw Poland";
let addressv2=new String("Warsaw Poland");

console.log("address: "+ typeof address);
console.log("addressv2: "+ typeof addressv2);

/**
 * best use case is to do not use String Objects.
 * The new keyword complicates the code and slows down execution speed.
 * String objects can produce unexpected results:
 */
if(address==addressv2){
    console.log("address and addressv2 value are equal!");
}
if(address===addressv2){
    console.log("address and addressv2 are same data type!");
}
else{
    console.log("address and addressv2 are NOT same data type!");
}

/***
 * !! JavaScript objects cannot be compared.!!
 * Comparing two JavaScript objects always returns false.!
 */