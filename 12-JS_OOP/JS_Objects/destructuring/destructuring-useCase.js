/**
 * Function Parameter Handling:
 * Instead of accessing object properties inside a function, you can destructure them in the function's parameters.
*/

const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
};

function displayInfo({name,age,job}){
    console.log(` name:${name} \n age:${age} \n job:${job}`);
}

displayInfo(person);

console.log("=======================");
/**
 * Multiple Return Values:
 * Functions in JavaScript can return only one value. 
 * However, by returning an object or an array, you can use * * destructuring to effectively return multiple values. 
 */

function getDimensions(){
    return{
        width:50,
        height:100
    };
}

const dimension=getDimensions();
console.log(dimension.width,dimension.height);

const { width, height }=getDimensions();
console.log(width,height);

console.log("=======================");


/*
 * Swapping Variables:
 * You can easily swap the values of two variables without the need for a temporary variable.
*/

let a=1, b=3;
[a,b]=[b,a];
console.log(`a:${a}, b:${b}`);

/**
 * Working with Arrays:
 * When working with arrays, destructuring can be handy for extracting values.
 */

const colors = ['red', 'green', 'blue'];
const [primary, , tertiary] = colors;
console.log(primary);   // red
console.log(tertiary);  // blue
console.log('===============================');
/**
 * Handling Nested Data:
 * Destructuring can be used recursively, making it easier to work with deeply nested data, 
 * like the kind you   * might get from an API or a database query.
 */

const userProfile={
    id: '123',
    user:{
        name:'John Doe',
        age:255,
        address:{
            city:'New York',
            country: 'USA'
        }
    }
}
console.log(userProfile.id,userProfile.user.address.country);

const {id , user:{name, address:{city,country}}}=userProfile;
console.log(id,country);