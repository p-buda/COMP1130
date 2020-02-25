/* 
    processForm.js - registration form
    Author: SCC
    Created: 10-07-2019
    Edited: 10-07-2019
*/
'use strict;'

// Helper function for getting the elements by Id from the document.
var $ = function(id) {
    return document.getElementById(id);
};

var processInput = function() {
    // Flag variable
    var isValid = true;

    var name = $('username').value;
    var email = $('email').value;
    var sessionDate = $('session_date').value;
    var subject = $('subject').value;

    // Perform validation on those values
    if(name === '' ) {
        $('username').nextElementSibling.firstChild.nodeValue = 'Enter student name.';
        isValid = false;
    } else {
        $('username').nextElementSibling.firstChild.nodeValue = '*'; 
    }

    if(email === '' ) {
        $('email').nextElementSibling.firstChild.nodeValue = 'Enter a valid email address.';
        isValid = false;
    } else {
        $('email').nextElementSibling.firstChild.nodeValue = '*'; 
    }

    if(sessionDate === '' ) {
        $('session_date').nextElementSibling.firstChild.nodeValue = 'Enter session date.';
        isValid = false;
    } else {
        $('session_date').nextElementSibling.firstChild.nodeValue = '*'; 
    }

    if(subject === '') {
        $('error_message').innerText = 'You must select subject.';
        isValid = false;
    } else {
        $('error_message').innerText = ''; 
    }

    if(isValid === true) {
        $('tutoring_signup').submit();  // Submit the form only if the values are non-empty.
    }

};

// Function that clears the textboxes
var clearInput = function() {
    $('tutoring_signup').reset();
    // Remove errors
    $('username').nextElementSibling.firstChild.nodeValue = '*';
    $('email').nextElementSibling.firstChild.nodeValue = '*';
    $('session_date').nextElementSibling.firstChild.nodeValue = '*';
    $('error_message').innerText = '';
    $('username').focus();
};

window.onload = function() {
    $('submit_session').onclick = processInput;
    $('reset_form').onclick = clearInput;
    $('username').focus();
};

