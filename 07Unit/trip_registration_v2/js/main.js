/* 
    main.js - registration form
    Author: SCC
    Created: 09-30-2019
    Edited: 2-24-2020
    Notes: Based on examples from "Murach’s JavaScript and jQuery, 3rd Edition", by Mary Delamater, Zak Ruvalcaba, ISBN: 978-1-943872-05-3
*/
"use strict;"

// Helper function for getting the elements by Id from the document.
var $ = function(id) {
    return document.getElementById(id);
};

// Function that processes user input
var processInput = function() {
    // Flag variable
    var isValid = true;

    // Capture user-input values from the form
    var email = $("email").value;
    var destination = $("dest").value;
    var paymentType = "";
    if($("card").checked) {
        paymentType = $("card").value;
    } else if($("paypal").checked) {
        paymentType = $("paypal").value;
    }
    var agreement = $("agreement").checked;

    // Perform validation on those values
    if(email === "" ) {
        $("email").nextElementSibling.firstChild.nodeValue = "Enter a valid email address.";
        isValid = false;
    } else {
        $("email").nextElementSibling.firstChild.nodeValue = "*"; 
    }

    if(destination === "") {
        $("dest").nextElementSibling.firstChild.nodeValue = "Enter destination.";
        isValid = false;
    } else {
        $("dest").nextElementSibling.firstChild.nodeValue = "*"; 
    }

    if(paymentType === "") {
        $("pmt_err").firstChild.nodeValue = "Select payment method.";
        isValid = false;
    } else {
        $("pmt_err").firstChild.nodeValue = "*"; 
    }

    if(agreement === false) {
        $("agr_error").firstChild.nodeValue = "You must acknowledge our policy.";
        isValid = false;
    } else {
        $("agr_error").firstChild.nodeValue = "*"; 
    }

    if(isValid === true) {
        $("reg_form").submit();  // Submit the form only if the values are non-empty.
    }

};

// Function that clears the textboxes
var clearInput = function() {
    $("reg_form").reset();
    // Remove errors
    $("email").nextElementSibling.firstChild.nodeValue = "*";
    $("dest").nextElementSibling.firstChild.nodeValue = "*";
    $("pmt_err").firstChild.nodeValue = "*";
    $("agr_error").firstChild.nodeValue = "*";
    $("email").focus();
    $("timer").firstChild.nodeValue = "60";
};

// Function that clears the error message once the input is present where required and a change happens - e.g., the user clicks outside of the box.
var clearError = function() {
    this.nextElementSibling.firstChild.nodeValue = "*";
}

window.onload = function() {
    $("submit_destination").onclick = processInput;
    // $("reset_form").onclick = clearInput;
    $("email").oninput = clearError;
    $("email").focus();

    // Timer that displays the seconds past and that will reset the page after certain amount of time.
    var seconds_left = 60;
    setInterval(function() {
        seconds_left--;
        $("timer").firstChild.nodeValue = seconds_left;
        if(seconds_left === 0) {
            clearInput();
            seconds_left = 60;
        }
    }, 1000);

    // Reset seconds left value on click event of the Reset button:
    $("reset_form").onclick = function() {
        seconds_left = 60;
        clearInput();
    };

};







