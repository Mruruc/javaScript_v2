
/**
 * Arrow functions were introduced in ES6.
 * Arrow functions allow us to write shorter function syntax:
 */

try{



function greetv1(name){
    return `Hello ${name}`;
}

console.log(greetv1("Waflo"));

const greetv2=name => `Hello ${name}`;
console.log(`Greeting from V2 function: ${greetv2("Shipoo")}`);

const greetv3=(firstName,lastName)=>{
    return `Hello ${firstName} ${lastName}`;
}

console.log(
    greetv3("Nello","Bombello")
);




}
catch(error){
    console.log(error.message);
}