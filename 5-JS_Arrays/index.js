
// An array is a special variable, which can hold more than one value:

/**
 *    Syntax:
 *  const array_name = [item1, item2, ...]; 
 */

const arr=["Saab","Volvo","BMW"];

//printing element of array:

for(i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//You can also create an array, and then provide the elements:
const person=[];
person[0]='person1';
person[1]='person2';
person[2]='person3';

for (let index = 0; index < person.length; index++) {
   console.log(person[index]);
    }


/**
 *  Array Elements Can Be Objects:
 * JavaScript variables can be objects. Arrays are special kinds of objects.
 * Because of this, you can have variables of different types in the same Array.
 * You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array: */    
function myFuction(){
    return "Misko";
}
const multipleType=[new Date(),myFuction(),556];

for(let i=0; i<multipleType.length; i++){
    console.log(multipleType[i]);
}
///using forEcah Loop

console.log("================================")
multipleType.forEach(function(element){
    console.log(element);
});

/**
 * NOTE:
 * The Difference Between Arrays and Objects:
 * 
 * In JavaScript, arrays use numbered indexes.  
 * In JavaScript, objects use named indexes.
 * Arrays are a special kind of objects, with numbered indexes.
 */

