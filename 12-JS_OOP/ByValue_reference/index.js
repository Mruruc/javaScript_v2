/**
 * in javaScript primitives are passed by value.
 */

let counter=1;

function increment(param){
    param +=1;
}

increment(counter);
console.log(counter);


/**
 * Objects are passed by reference in javaScript,
 * 
 * when we initialized an object like below,
 * const object={};
 * 
 * javaScript engine do two things, first create the object in memory,
 * and assign its address (reference) to variable, example address #567485.
 * 
 * object in  reality holds the #567485 (reference).
 */

const object={
    counter:1
};

// this function has side effect on passed data (it changes the passed data).
function incrementObj(object){
    object.counter=object.counter + 1;
}

incrementObj(object);

console.log(object.counter);