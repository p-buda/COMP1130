/* 
    main.js - tracing and floating-point examples
    Author: SCC
    Created: 09-02-2019
    Edited: 02-17-2020
    Notes:
*/
'use strict;'

// Helper function for getting the elements by Id from the document.
// This method returns DOM objects.
var $ = function(id) {
    return document.getElementById(id);
};

// Function that processes user input
var processInput = function() {
    /* City: capture the value and clean it up using String methods. 
    I want the city to start with a capital letter and the rest of the letters to be lowercase.
    */
    var city = $('city').value;
    // Some tracing here: DEBUG: console.log(city.substr(0,1));
    var cityFirstLetter = city.substr(0,1);
    cityFirstLetter = cityFirstLetter.toUpperCase();
    // DEBUG: console.log(city.substr(1,city.length));
    city = city.substr(1,city.length);
    // DEBUG: console.log(city.toLowerCase());
    city = city.toLowerCase();
    city = cityFirstLetter + city;
    // DEBUG: console.log(city);
    // Reasign the cleaned up city value back to the city text box.
    $('city').value = city;
};

window.onload = function() {
    $('process').onclick = processInput;
};







