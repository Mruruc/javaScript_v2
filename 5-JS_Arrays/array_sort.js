// sort();
/**
 *  The sort() method sorts an array alphabetically:
 * return the sorted array.
 */
const fruits=["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

/**
 * By default, the sort() function sorts values as strings.
 * 
 *  can fix this by providing a compare function:
 */
const num=[4,8,66,-2,99,1];
console.log(num.sort((a,b) =>a-b));

//Sorting descending:
const numv2=[88,-2,9,71,36];

console.log(numv2.sort(function(a,b){return b-a}));

//find the max in array;

function findMax(arr){
    if(arr==null){
        return [];
    }

    let max=arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            let temp=arr[i];
            arr[i]=max;
            max=temp;
        }
    }
    return max;
} 
console.log(findMax(numv2));

//Sorting Object Arrays
/**
 * Even if objects have properties of different data types, the sort() method can be used to sort the array.
 * The solution is to write a compare function to compare the property values:
 */

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars[0].type);
  console.log(cars[0].year);



  /**
   * Even if objects have properties of different data types, the sort() method can be used to sort the array.
   * The solution is to write a compare function to compare the property values:
   */

  //sorting based on type property:
  console.log(cars.sort((a,b)=>a.type.localeCompare(b.type)));
  console.log("================");

  //sorting based on year property:

  cars.sort((a,b)=>a.year -b.year);
  console.log(cars);