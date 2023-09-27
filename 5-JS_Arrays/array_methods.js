/**
Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()                              
 */

//1) length:
const fruits=["Banana","Orange","Apple","Mango"];
console.log(fruits.length);

//2) toString()
/** 
 * converts an array to a string of(comma separated) array values:
 */

let str=fruits.toString();
console.log("Typeof: "+ typeof str +"\n"+ str);


//3) join();
/**
 * also joins all array elements into a string;
 * it behaves just like toString(),but in addition we can specify the separator.
 */
 
let strv2=fruits.join(" -> ");
console.log(strv2);



//4) pop() 
/**
 * removes the last element from the array and return it; 
 */
console.log(fruits.pop());
console.log(fruits);


//5) push():
/**
 * adds a new element to an array(at the end) and return the new array length;
 */

console.log("New Array Length : " + fruits.push("Kiwi"));
console.log(fruits);

//6) shift();
/**
 * removes the first array element and "shifts" all other elements to a lower index.
 */

const num=[4,65,9,10,23,87];
console.log("Before; \n "+num);
console.log(num.shift());
console.log("After: \n "+num);

//7) unshift();
/**
 *  adds a new element to an array(at the beginning), and "unshifts" older elements.
 * and return new array length
 */
console.log(num.unshift(5));
console.log(num);

/**
 * Note:
 * Array element can be deleted using the javaScript operator delete.
 * Using delete leaves undefined holes in array . SO WE SHOULD NOT USE.
 *  
 */
console.log("====================");
console.log(delete num[3]);
console.log(num);


//8) concat();
/**
 * creates a new array by merging(concatenating) existing arrays;
 * does not change the existing arrays.it always returns a new array.
 */
const set1=[8,8,6,2,9,2];
const set2=[87,80,66,23,91,102];

const result=set1.concat(set2);
console.log("===========================")
console.log(result);
console.log("===========================")

//The concat() method can take any number of array arguments:
const set3=[465,465,56,853];
console.log(set1.concat(set2,set3));

//9) flat();
/**
 * Flattening an array is the process of reducing the dimensionality of an array.
 * The flat() method creates a new array with sub-array elements concatenated to a specified depth.
 */
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr);
const newArr = myArr.flat();
console.log(newArr);


//10) splice();
/**
 * can be used to add new elements to an array:
 *  returns an array with the deleted items:
 *  it will delete item from the front.
 * 
 * !!!!The slice() method creates a new array.
 */
console.log("=====================================")
const cars=["BMW","Ford","Tesla"];
console.log(cars.splice(0,0,"Toros","Mercedes"));
console.log(cars);

console.log(cars.splice(0,2,"Volvo"));
console.log(cars);


//10) slice();
/**
 * The slice() method slices out a piece of an array into a new array.
 * 
 * The slice() method does not remove any elements from the source array.
 */

const numv3=[3,7,33,9,1];
console.log("=============================")
let numv4=numv3.slice(1);
console.log(numv4);
//first index number is included but last one is not included.
let numv5=numv3.slice(1,3);
console.log(numv5);
console.log(numv3);

console.log(
    "===================================="
)

//11) reverse();
/**
 * reverses the elements in an array.
 */
console.log(numv3.reverse());