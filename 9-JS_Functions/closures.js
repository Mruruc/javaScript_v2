/**
 * JavaScript variables can belong to the local or global scope.
 * Global variables can be made local (private) with closures.
 */

/**
 * JavaScript Nested Functions:
 * All functions have access to the global scope.  
 * 
 * In fact, in JavaScript, all functions have access to the scope "above" them.
 * JavaScript supports nested functions. Nested functions have access to the scope "above" them.
 */

const add=(function increaseByOne(){
    let counter=0;
   return function() { counter=counter+1; return counter};
})();

function print(){
    console.log(add());
}


print();
print();

// NOTE: A closure is a function having access to the parent scope, even after the parent function has closed.