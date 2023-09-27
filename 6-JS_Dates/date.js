/**
 *  Creating Date Objects
 * Date objects are created with the new Date() constructor.
 * There are 9 ways to create a new date object:
 */

/** 
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)

*/

const date=new Date();
console.log(date);
console.log(new Date("2029-08-18"));
console.log(new Date(2023,0,25));

/**
 *Note
 * JavaScript counts months from 0 to 11:
 * January = 0.
 * December = 11
 */

 console.log(new Date(2018,11,27));

 //Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
 console.log(new Date(2018,12,27));

 /*
 * Displaying Dates
 * JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time * zone. The format is specified in the ECMAScript specification:
 */

 console.log(new Date(2021,9,3).toDateString());

 //The toUTCString() method converts a date to a string using the UTC standard:
 console.log(new Date(2023,5,7).toUTCString());

 //Date Input - Parsing Dates
 const birtDate="2001-03-25";
 console.log(new Date(Date.parse(birtDate)));

 // In JavaScript, date objects are created with new Date().

// new Date() returns a date object with the current date and time.
console.log("=========================================")
const birthDay=new Date(1998,6,7);
console.log(birthDay.getFullYear());
console.log(birthDay.getMonth());
console.log(birthDay.getDate());
//The getDay() method returns the weekday of a date as a number (0-6).
//In JavaScript, the first day of the week (day 0) is Sunday.
console.log(birthDay.getDay());
console.log("" =="");



// formating date based on locale:
console.log('============================')
const dateV2=new Date();
console.log(dateV2);
const localeDate=Intl.DateTimeFormat('pl-PL').format(dateV2);
console.log(localeDate);
