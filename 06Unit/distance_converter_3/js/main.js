/* 
    main.js - converting miles to kms.
    Author: SCC
    Created: 09-02-2019
    Edited: 09-18-2019
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

    /* Miles */
    // var miles = document.getElementById('miles').value; 
    var miles = $('miles').value; // The same as above line but with the helper function.
    miles = parseFloat(miles); // It will become NaN if we input text or empty string.
    if(isNaN(miles) || miles < 0) {
        alert('Miles must be a positive number or 0.');
        dateStamp('Invalid input.');
    } else {
        var km = miles * 1.609;
        // var kmBox = document.getElementById('km');
        var kmBox = $('km'); // The same as above line but with the helper function.
        kmBox.value = km.toFixed(1);
        dateStamp('Transaction processed.');
    }
}

// Date-stamp every query by calling this function.
var dateStamp = function(message) {
    var stamp = new Date();
    console.log('Transaction log: ' + stamp.toDateString() + '. Message: ' + message);
} 

// Function that clears the textboxes
var clearInput = function() {
    $('miles').value = '';
    $('km').value = '';
    $('city').focus();
};

window.onload = function() {
    // Attach the event handler to the button
    // var convertButton = document.getElementById('convert');
    // convertButton.onclick = processInput;
    $('convert').onclick = processInput;
    $('reset').onclick = clearInput;
    $('city').focus();
};







