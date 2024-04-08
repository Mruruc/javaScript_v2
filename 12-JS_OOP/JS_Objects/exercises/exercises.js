
/**
 * JavaScript Objects can have other object as property(nested object).
 */


// Address Object 
const address={
    country:'Poland',
    city:   'Warsaw'
};

///console.log(address);

// Client Object
const client1={
    client_id:1,
    firstName:'John',
    lastName: 'Doe',
    address:{
        country:'Poland',
        city:   'Warsaw'
    }
};
// console.log(client1);

const client2={
    client_id:2,
    firstName:'Jane',
    lastName: 'Doe',
    address:address
};
// console.log(client2);

const client3={
    client_id:3,
    firstName:'Bob',
    lastName: 'Marly',
    address
};

//console.log(client3);


/**
 * JavaScript Objects can also have function/s as property(functions define the object behavior).
 */

const client4={
    client_id:4,
    firstName:'Alice',
    lastName: 'Doe',
    address,
    clientInfo:function(){
        console.log(
            `Full Name: ${this.firstName} ${this.lastName} \nAddress: ${address.city} ${address.country}` 
        )
    }
}

// client4.clientInfo();

/**
 * when you define clientInfo as an arrow function, this does not refer to client4 as you might expect.
 * Instead, this is bound to the surrounding lexical context where client4 is defined,
 * which is likely the global scope or the enclosing function scope if it's defined within a function. 
 * Therefore, this.firstName and this.lastName are undefined because this does not point to client4.
 */
const client5={
    client_id:4,
    firstName:'Alice',
    lastName: 'Doe',
    address,
    clientInfo:()=>console.log(
        "Full Name: "+this.firstName +" "+this.lastName +" \n "+
        'Address:'+this.address
    )
}
 //Full Name: undefined undefined 
 //Address:[object Object]
// client5.clientInfo(); 


