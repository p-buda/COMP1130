/* 
    main.js - converting miles to kms.
    Author: SCC
    Created: 09-02-2019
    Edited: 09-16-2019
    Notes:
*/

// This program converts miles to kilometers. (1 mile = approx. 1.609 km)

/* Function expression with no parameters */
var convertToKm = function() {
    var miles;
    var km;
    var conversion_factor = 1.609;
    miles = prompt('Enter a value in miles: ', 100);
    miles = parseInt(miles);  // convert the input value, that is always a string, to a number
    km = miles * conversion_factor;
    window.alert(miles + ' miles equals approx. ' + km + ' kilometers.');
};

// Calling the function
// convertToKm();


/* Function expression with parameters */
var miles;
// miles = prompt('Enter a value in miles: ', 100);

var convertToKm2 = function(m) {
    m = parseInt(m);
    var conversion_factor = 1.609;
    var k = m * conversion_factor;
    window.alert(m + ' miles equals approx. ' + k + ' kilometers.');
};

// Calling the function
// convertToKm2(miles);

/* Function expression with parameters and a return value */
var mi;
mi = prompt('Enter a value in miles: ', 100);

var convertToKm3 = function(m) {
    m = parseInt(m);
    var conversion_factor = 1.609;
    var klm = m * conversion_factor;
    return klm;
};

// Calling the function
alert('The distance in kilometers is ' + convertToKm3(mi));



