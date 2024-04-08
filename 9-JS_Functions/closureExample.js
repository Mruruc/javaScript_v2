
function foo(){
    let counter=0;

    return function (){
        return counter +1;
    }
}
/*
const callFooReturn=foo();

console.log(callFooReturn());
console.log(callFooReturn());
*/

function getUser(){
    function toUpperCase(argToUpperCase){
        return argToUpperCase.toUpperCase();
    }

    return{
        firstName:'john',
        lastName:'Doe',
        fNameToUpperCase:function(){
            this.firstName=toUpperCase(this.firstName);
        },
        lNameToUpperCase:function(){
            this.lastName=toUpperCase(this.lastName);
        }
    }
}

const user=getUser();
console.log(user);
user.fNameToUpperCase();
user.lNameToUpperCase();
console.log(user);
