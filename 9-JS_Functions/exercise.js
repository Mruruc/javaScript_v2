

// create a function that will calculate the mean of the input.


function getMean(args){
    if(!(args instanceof Array)){
        return NaN;
    }
    let sum=0;
    args.forEach(arg=>{
        sum +=arg;
    });

    return sum / args.length;
}


// let result=getMean([1,3,4,510]);

// console.log(result);


/**
 *takes input and returned the factorial of the input.
*/

function factorial(input){
    input = parseInt(input);

    if(isNaN(input) || !isFinite(input)){
        throw new Error("Input is not a number or cannot be converted to a number!");
    }
    
    if(input=== 0 || input === 1){
        return 1;
    }
    
    /*
    let result=1;
    let count = 2;
    while(count <= input){
        result *= count;
        count ++;
    }
    */
   if(input===1 ){
       return 1;
   }
    return input * factorial(input -1);
}

try{
   // console.log(factorial(6));
}catch(error){
    console.log(error.message);
}


function fibonacci(number){
    if(number == 1 || number == 2){
        return 1;
    }
    return fibonacci(number -1) + fibonacci(number -2);
}

const fib=(number)=> number === 1 || number ===2 ? 1 : fib(number -1)+fib(number -2);

//console.log(fibonacci(7));
console.log(fib(90));


