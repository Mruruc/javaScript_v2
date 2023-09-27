/*
 * JavaScript functions are executed in the sequence they are called.
 * Not in the sequence they are defined.
 **/

// A callback is a function passed as an argument to another function.

function sum(x,y,mycallback){
    let result=x+y;
    return mycallback(result);
}

function print(result){
    console.log(result);
}

sum(1,9,print);

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const positiveNum=removeNegative(myNumbers,isPositive);

function removeNegative(numbers,callback){
    let newArr=[];
    for (const iterator of numbers) {
        if(callback(iterator)){
            newArr.push(iterator);
        }
    }
    return newArr;
}

function isPositive(num){
    return num >=0;
}

console.log(positiveNum);