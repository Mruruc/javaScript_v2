
// Decorating functions (wrappers,higher order functions)

/**
 * Higher-order functions are the functions that take another function as an argument or return a function as result.
 */

function sum(a,b){
    return a+b;
}

function multiplyBy10AndSum(sum,x,y){
    return 10 * sum(x,y);
}

console.log(multiplyBy10AndSum(sum,1,2));
