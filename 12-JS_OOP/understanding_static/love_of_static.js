
// static keyword in javaScript

/**
 * Constructor Function: Every JavaScript class is essentially a constructor function behind the scenes. 
 * When you use the class keyword, you're creating a function that constructs instances of the class.

 * Static Member Attachment: Static members are properties of this constructor function.
 * They do not exist on the instances created 
 * by the constructor function nor on the constructor's prototype object (which is used for instance methods and properties).
 */


/**
 * In JavaScript, functions are first-class citizens, meaning they can be treated like any other object. 
 * They can have properties assigned to them, be passed as arguments to other functions, and even return from other functions. 
 * This capability is key to understanding how a constructor function can store other functions (such as static methods) and 
 * how those static methods can be called.
 */

/**
 * Because functions in JavaScript are objects, they can have properties. 
 * This includes both primitive values and other functions. When we define a static method within a class,
 * under the hood, JavaScript treats this as attaching a property to the function object that represents the class's constructor.
 */

/**
 * Defining a Function: When we define any function in JavaScript, including a class constructor,
 * JavaScript internally creates an object that represents that function.
 */

class A{
    
    constructor(){
        console.log('constructor');
    }
    static foo(){
        console.log('Fooo');
    }

    bar(){
        console.log('bar');
    }
}

let a=new A();
// a.foo(); produce error why ??? because the static methods are not in prototype chain . :)
A.foo();
a.bar();
a.constructor.foo(); // same as A.foo(). because A is a function (constructor function) 
                    //well in javaScript the functions are first class citizens,
                    //so which mean we can treat them as an object (btw they are really object :)) and assign them a property.


// classless static ):

function B(){}
const b=new B();
console.log(b);
//defining a static function.
B.foo=()=>console.log('Foo of B');;

console.log(b.constructor.prototype.constructor);
b.constructor.foo();
b.constructor.prototype.constructor.foo();

B.foo();

