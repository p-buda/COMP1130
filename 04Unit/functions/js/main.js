/* 
    main.js - functions practice
    Author: SCC
    Created: 02-5-2020
    Edited: 02-5-2020
    Notes:
*/
"use strict";

// Declaring a function with no parameters and no "return" statement.
var getArea = function() {
    var sideA = prompt("Enter side A", 33);
    var sideB = prompt("Enter side B", 13);
    sideA = parseFloat(sideA);
    sideB = parseFloat(sideB);
    var area = sideA * sideB;
    alert("The area equals: " + area + " square feet.");
};

// Calling getArea() function
getArea();

// Declaring a function with parameters and a "return" statement.
var getCircumference = function(r) {
    var circ = 2 * Math.PI * r;
    return circ.toFixed(2);
};

// Call getCircumference() function.
var radius = prompt("Enter the radius of a circle: ", 5)
document.write("Circumference of the circle with r = 5 equals approx.: " + getCircumference(radius));

// Declare a function:
var showDate = function() {
    var currentDate = new Date();
    var stringDate = currentDate.toDateString();
    return stringDate;
};
// Call a function
console.log(showDate()); 

var getInitials = function(fullName) {
    var index, firstInitial, lastInitial, initials;
    firstInitial = fullName.substr(0,1);
    index = fullName.indexOf(" ");
    lastInitial = fullName.substring(index+1, index+2);
    initials = firstInitial + lastInitial;
    initials = initials.toUpperCase();
    return initials;
};

var userName = prompt("Type your full name");
alert("Your initials are " + getInitials(userName));

// Can you create a function called firstName() that returns just the first name from the user's full name?
