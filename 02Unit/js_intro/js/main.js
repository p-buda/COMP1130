/* 
    main.js - main JS code for my web page.
    Author: Pawel Buda
    Created: 09-02-2019
    Edited: 01-20-2020
    Notes:
*/


// String data type:
var user_name = 'Izzy';
var userName = 'Mario';

// Number data type: 
var year = 2020;
var score1 = 90.25;
var score2 = 91.0125;

// Boolean data type:
var passed = true;
var expired = false;

/* JavaScript is a "loosely typed" language. 
Data type is dynamically determined.
*/
var userId = 123; // userId points to a number data type
userId = '123';   // now, userId points to a string data type

// Note that we can assign other things than literals to variables.
// For example, we can assign another variable, or an expression.
var averageScore;
averageScore = (score1 + score2)/2; // Note the order of precedence;
console.log('The average score for\n ' + userName + ',\n user ID ' + 
userId + ',\n in ' + year + ',\n was ' + averageScore); // Note the escape \n symbol for the new line

console.log('\tAverage score\tUser name\tUser id\t\tYear\n' + 
             '\t' + averageScore + '\t' + userName + '\t\t' + userId +  '\t\t' + year);

// Increment operators
year++;
console.log('Maybe in ' + year + ' he\'ll do even better.'); // Note the escape \ symbol before the apostrophe
year--;

// Compound assignment operators
year += 10;
console.log('10 years from now will be ' + year);

userName += ', Super';
console.log('Your full name is ' + userName);
userName += ' Jr.';
console.log('Your full name is ' + userName);

/* Built-in objects of JavaScript 
    We will examine some JS objects and their methods, including:
    window object's prompt() and parseInt() methods.
*/

// This program converts miles to kilometers. (1 mile = approx. 1.609 km)
var miles;
var km;

miles = prompt('Enter a value in miles: ', 100);
miles = parseFloat(miles);  // convert the input value, that is always a string, to a number
km = miles * 1.609;
km = parseInt(km);
window.alert(miles + ' miles equals approx. ' + km + ' kilometers.');


