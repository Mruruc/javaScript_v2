//String to Number

let amount='10';

console.log(typeof amount);
console.log(typeof parseInt(amount));
console.log(typeof Number(amount));
console.log(typeof +amount);

//String to Float Number:
console.log(typeof parseFloat(amount));


// number to string;
console.log("number to string");

let age=25;
console.log(typeof age);
console.log(typeof age.toString());
console.log(typeof String(age));



let input2='25';


if(typeof input2 === 'string'){
    let inputInt=parseInt(input2);
    console.log('Type: ',typeof inputInt);
}
