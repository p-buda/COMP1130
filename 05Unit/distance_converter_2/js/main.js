/* 
    main.js - converting miles to kms.
    Author: SCC
    Created: 09-02-2019
    Edited: 09-26-2019
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
    /* Miles */
    // var miles = document.getElementById('miles').value; 
    var miles = $('miles').value; // The same as above line but with the helper function.
    miles = parseFloat(miles); // It will become NaN if we input text or empty string.
    if(isNaN(miles) || miles < 0) {
        alert('Miles must be a positive number or 0.');
    } else {
        var km = miles * 1.609;
        // var kmBox = document.getElementById('km');
        var kmBox = $('km'); // The same as above line but with the helper function.
        kmBox.value = km.toFixed(1);
    }
}

// Function that clears the textboxes
var clearInput = function() {
    $('miles').value = '';
    $('km').value = '';
    $('miles').focus();
};

window.onload = function() {
    // Attach the event handler to the button
    // var convertButton = document.getElementById('convert');
    // convertButton.onclick = processInput;
    $('convert').onclick = processInput;
    $('reset').onclick = clearInput;
    $('miles').focus();
};







