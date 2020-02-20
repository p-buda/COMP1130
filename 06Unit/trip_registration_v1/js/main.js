/* 
    main.js - registration form
    Author: SCC
    Created: 09-30-2019
    Edited: 2-21-2020
    Notes: Based on examples from "Murach’s JavaScript and jQuery, 3rd Edition", by Mary Delamater, Zak Ruvalcaba, ISBN: 978-1-943872-05-3
*/
'use strict;'

// Helper function for getting the elements by Id from the document.
var $ = function(id) {
    return document.getElementById(id);
};


var processInput = function() {
    // Flag variable
    var isValid = true;

    // Capture user input and store in variables
    var email = $('email').value;
    var destination = $('dest').value;
    var paymentType = '';
    if($('card').checked) {
        paymentType = $('card').value;
    } else if ($('paypal').checked) {
        paymentType = $('paypal').value;
    }
    var agreement = $('agreement').checked;

    // Perform validation on those values
    // We use the Node interface properties here a lot
    if(email === '') {
        $('email').nextElementSibling.firstChild.nodeValue = 'Enter a valid email address.';
        isValid = false;
    } else {
        $('email').nextElementSibling.firstChild.nodeValue = '*';
    }

    if(destination === '') {
        $('dest').nextElementSibling.firstChild.nodeValue = 'Enter destination.';
        isValid = false;
    } else {
        $('dest').nextElementSibling.firstChild.nodeValue = '*';
    }

    if(paymentType === '') {
        $('pmt_err').firstChild.nodeValue = 'Select payment method.';
        isValid = false;
    } else {
        $('pmt_err').firstChild.nodeValue = '*';
    }

    if(agreement === false) {
        $('agr_err').firstChild.nodeValue = 'You must agree to our policy.';
        isValid = false;
    } else {
        $('agr_err').firstChild.nodeValue = '*';
    }


    if(isValid === true) {
        $('reg_form').submit();
    }
};

var clearInput = function() {
    $('reg_form').reset();
    $('email').nextElementSibling.firstChild.nodeValue = '*';
    $('dest').nextElementSibling.firstChild.nodeValue = '*';
    $('pmt_err').firstChild.nodeValue = '*';
    $('agr_err').firstChild.nodeValue = '*';
    $('email').focus();
};


window.onload = function() {
    $('submit_destination').onclick = processInput;
    $('reset_form').onclick = clearInput;
    $('email').focus();
}



