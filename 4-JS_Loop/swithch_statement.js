/*
Strict Comparison
Switch cases use strict comparison (===).

The values must be of the same type to match.

A strict comparison can only be true if the operands are of the same type.
*/
const xday=new Date(2023,4,7).getDay();
switch(xday){
    case 0: 
        console.log("Sunday");
    break;
    case 1:
        console.log("Monday");
    break;
    case 2:
        console.log("Tuesday");
    break;
    case 3:
        console.log("Wednesday");
    break;
    case 4:
        console.log("Thursday");
    break;
    case 5:
        console.log("Friday");
    break;
    default:
        console.log("Satuday");

}