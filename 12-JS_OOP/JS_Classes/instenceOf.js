class Employee{
    
    constructor(){
        this.id=this.newId();
    }

    newId() {
        return Math.floor((Math.random()+1)*10);
    }
}

class Product{
    
    constructor(){
        this.id=this.newId();
    }

    newId() {
        return Math.floor((Math.random()+1)*10);
    }
}

const employee1=new Employee();
const product=new Product();

console.log(employee1.constructor); //[class Employee]
console.log(employee1.constructor.name); //Employee

if(employee1.constructor.name === 'Employee'){
    console.log('employee1 is the instance of Employee class!');
   // console.log(employee1.constructor.name === 'Employee'); //true
}
else{
    console.log('employee1 is NOT the instance of Employee class!');
}

console.log(product.constructor); //[class Product]
console.log(product.constructor.name); //Product

console.log(product);
console.log(employee1);

/**
 * However, the instanceof operator is used more often in practice than constructor.name. 
 * It is not an alternative in the literal sense of the word.
 * The instanceof operator does not return the name of the class whose object is an instance, 
 * but only tests whether the class and object are related.

 * It returns true or false, confirming or denying that the specified object is an instance of the specified class.
 */

if(product instanceof Product){
    console.log('product is the instance of Product class!');
   // console.log(employee1.constructor.name === 'Employee'); //true
}
else{
    console.log('product is NOT the instance of Product class!');
}
