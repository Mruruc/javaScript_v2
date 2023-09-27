
/**
 *  It gives simpler syntax
 *  It allows equal syntax for properties and methods
 *  It can secure better data quality
 *  It is useful for doing things behind-the-scenes
 */

const person={
    name:"Waflo",
    age:23,
    _nationality:"",
 
    set nationality(nationality){
        this._nationality=nationality;
    },
    
    get nationality(){
        return this._nationality;
    }
};



person._nationality="Polish";  // Directly setting _nationality property
person.nationality="English";  // // Invoking the setter for nationality

console.log(person.nationality);

console.log("=================================")

for(let key in person){
    console.log(key +": "+person[key])
}

console.log("===================================");



