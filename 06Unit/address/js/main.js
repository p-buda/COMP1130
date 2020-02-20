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
    var price = parseFloat($('price').value);

    // Some tracing here: 
    // DEBUG: 
    console.log(city.substr(0,1));
    var cityFirstLetter = city.substr(0,1);
    cityFirstLetter = cityFirstLetter.toUpperCase();
    // DEBUG: 
    console.log(city.substr(1,city.length));
    city = city.substr(1,city.length);
    // DEBUG: 
    console.log(city.toLowerCase());
    city = city.toLowerCase();
    city = cityFirstLetter + city;
    // DEBUG: 
    console.log(city);
    // Reasign the cleaned up city value back to the city text box.
    $('city').value = city;

    // Price processing
    if(isNaN(price) || price <= 0) {
        alert('Price must be a positive number.');
    } else {
        var treshold = price * .1;
        console.log(treshold);
        treshold = treshold.toFixed(3);
        treshold = parseFloat(treshold);
        console.log(treshold);
        if(treshold === 5.595) {
            alert('You receive a low rate shipping.');
        } else if(treshold > 5.595) {
            alert('You get free shipping.');
        } else {
            alert('Your shipping is standard.');
        }
    }
};

// toggleView is based on Murach "JavaScript/jQuery" 3rd Edition.
var toggleView = function() {
    var h3 = this;  // "In an event, "this" refers to the element that received the event." (w3schools)
    var div = h3.nextElementSibling; 
    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    }
};

window.onload = function() {
    $('process').onclick = processInput;
    // get the h2 tags
    var h3Elements = document.getElementsByTagName("h3");
    // Attach event to the first one:
    h3Elements[0].onclick = toggleView;
};







