
//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
//Inside the function, the arguments (the parameters) behave as local variables.

function addition( x, y){
    return x+y;
}
console.log(addition(5,5)*100);

//Functions Can Be Used as Values:

let sum=addition(4,3);
console.log(sum);

//Accessing a function without (); returns the function and not the function result:
let sum2=addition
console.log(sum2);
/**
 * function name refers to function object, in this case addition refer function object,
 * fuction() => refer function result. 
 */

function greetingUser(name){
    console.log("Hello  " +name);
}

greetingUser("Waflo");


function greetWorld(){
    alert("Hello World !");
}

// greetWorld();

// You can use a function declaration or a function expression.

// Declared functions are not executed immediately.
// They are "saved for later use", and will be executed later, when they are invoked (called upon).

 function multipication(a,b){
    return a * b;
 }
 //JavaScript functions can be used in expressions:
 let multi=multipication(3,9) / 27;
 console.log(multi);

 /**
  *  A function expression defines a function and assigns it to a variable. 
  *  The function is only accessible through that variable (unless you also name the function,
  *  in which case it becomes a named function expression).
  *  Unlike function declarations, function expressions are not hoisted. 
  *  Therefore, you must define the function expression before you call it.
  * 
  *  Function expressions can be named or anonymous.
  *  If named, the name is local to the function body and can be useful for recursive calls or better stack traces.
  */

 const greeting=function(name){
                console.log("Hello "+name)
            };
greeting("Shipooo");
//The function above is actually an anonymous function (a function without a name).

const division=function divisorFunction(a,b){return a / b};
console.log("Calling function with Varibale name: "+ division(8,2));

// console.log("Calling function with Function name: "+ divisorFunction(8,2)); it will throw error  
                // because divisorFunction is only accessible within the function's own scope and is not accessible outside of it.


// The Function() Constructor:
//Functions can also be defined with a built-in JavaScript function constructor called Function().

let exponention=new Function("a","b","return a ** b" );  
console.log(exponention(5,2));

/**
 * Hoisting applies to variable declarations and to function declarations.
 * Because of this, JavaScript functions can be called before they are declared:
 */

console.log(myFunction(9));

function myFunction(y) {
  return y * y;
}

// Self-Invoking Functions

// will cause recusion !
function hello(){
    console.log("Hello JavaScript!");
   // hello();
}
// hello();

// it will just call it self!
(function(){
    console.log("Hello JavaScript!")
    console.log("Hello React!")
})();

/**
 * Functions are Objects
 * The typeof operator in JavaScript returns "function" for functions.

 * But, JavaScript functions can best be described as objects.

 * JavaScript functions have both properties and methods.
 */
console.log(typeof myFunctionv2);
// The arguments.length property returns the number of arguments received when the function was invoked:
function myFunctionv2(a,b){
    return arguments.length;
}
console.log(myFunctionv2());

// The toString() method returns the function as a string:
let text=myFunctionv2.toString();
console.log(text);

/**
 *  Arrow Functions
 * Arrow functions allows a short syntax for writing function expressions.
 * You don't need the function keyword, the return keyword, and the curly brackets.
 */

// ES5
var v1= function(x, y) {
    return x * y;
  }

  //ES6
  const v2=(a,b)=> a+b;

  /**
   *  Arrow functions do not have their own this. They are not well suited for defining object methods.

   * Arrow functions are not hoisted. They must be defined before they are used.

   * Using const is safer than using var, because a function expression is always constant value.

   * You can only omit the return keyword and the curly brackets if the function is a single statement.
   *  Because of this, it might be a good habit to always keep them:        
   */

  const v2_1=(a,b) =>{
    return a+b;
  }


  // Function arguments are the real values passed to (and received by) the function.

  //Default Parameter Values:
  //ES6 allows function parameters to have default values.

  //If y is not passed or undefined, then y = 10.
  function myFunctionv3(x,y=10){
    return x + y;
  }


  // Function Rest Parameter:
//  The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sumv4(...args){
  let sum=0;
  for(let arg of args){
    sum=sum+arg;
  }
  return sum;
}

console.log("Result: "+ sumv4(9,55,-111,-55,111));

console.log("==========================");

// The JavaScript call() Method
// With call(), an object can use a method belonging to another object.

const person={
  fullName:function(){
    return this.firstName+" "+this.lastName ;
  }
}

const person2={
  firstName:"Waflo",
  lastName:"Mafloo"
}

console.log(person.fullName.call(person2));


///JavaScript Function apply()
// With the apply() method, you can write a method that can be used on different objects.

console.log("===============================")

const address={
  fullAddress:function(distrect,aptNo){
    return this.country+" "+ this.city +" "+ distrect +" "+aptNo;
  }
};

const address1={
  country:"Poland",
  city:"Warsaw"
}

console.log(address.fullAddress.apply(address1));

/**
 * The Difference Between call() and apply()
 * The difference is:

 * The call() method takes arguments separately.

 * The apply() method takes arguments as an array.
 */

const address3={
  country:"Norway",
  city:"Oslo"
}
const resultCall=address.fullAddress.call(address3,"distrectBlabla",55);
console.log(resultCall);

const resultApply=address.fullAddress.apply(address3,["DistrecytMihoo",5486]);
console.log(resultApply);

// JavaScript Function bind()
// With the bind() method, an object can borrow a method from another object.


const employe={
  name:"Waflo",
  lastName:"Piflooo",
  fullName:function(){
    return this.name +" "+this.lastName;
  }
};

const employe2={
  name:"MIskkoo",
  lastName:"Miskiyee"
};

let y=employe.fullName.bind(employe2);


/*setTimeout(function() {
  alert(y());
}, 3000); */