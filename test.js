/* *
let x=Math.floor(Math.random()*101);
let y=Math.floor(Math.random()*51);
console.log(y)
console.log(x);

console.log(
    `Sum : ${x} + ${y} =${x+y}
     Product: ${x} * ${y} =${x*y} `
);
*/

const arr=[1,2,3,4,5];

/*
arr.push(6);
arr.reverse();
*/

arr.reverse();
arr.shift(6);
let result="";
for(let x of arr){
    result+=" " +x
}
//console.log(result)

const arr1=[1,2,3,4,5];
const arr2=[5,6,7,8,9,10];

const resultArr= arr1.concat(arr2).flat();//[...arr1,...arr2.slice(1,arr2.length)] ;//arr1.concat(arr2.slice(1,arr2.length));


for(let i=0; i<resultArr.length;i++){
    console.log(resultArr[i])
}





