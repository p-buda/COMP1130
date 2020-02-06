/* 
    main.js - calculating the tip amount
    Author: SCC
    Created: 09-02-2019
    Edited: 02-05-2020
    Notes:
*/

'use strict';

function calcTip() {

    var price = 0;
    var tipPercent = 0;
    var tip = 0;
    var invalid;

    do {
        price = prompt("Enter the price", 100);
        price = parseFloat(price);

        if(isNaN(price) || price <= 0) {
            alert("The price must be a valid positive number.");
        } 
    } while(isNaN(price) || price <= 0)
        
    do {
        tipPercent = prompt("Enter tip %", 20);
        tipPercent = parseFloat(tipPercent);

        if(isNaN(tipPercent) || tipPercent < 0 || tipPercent > 100) {
            alert("The tip % must be a valid number 0-100.");
            invalid = true;
        } else {
            invalid = false;
        }

    } while(invalid)

    tip = price * (tipPercent / 100);
    document.write("The tip amount is $" + tip);
}

// call the function
calcTip();

/* Demonstrating global and local variables scope */
// Trying to call the local-scope variable outside of its scope
// console.log(price);

/* If you forget the "var" keyword in the local scope, like in a function, 
the variable will be declared as global. That can cause issues later because 
the whole program has access to this variable and can by accident modify its value.
*/ 
// Example: remove the "var" keyword from the "tip" variable declaration statement.
// Now, call this variable outside of its scope:
// console.log(tip); // It should work unless you use the strict mode.
// That is not a safe practice. Use local variables when possible.

// You can add 'use strict'; at the top of your code file, so JS will tag omission 
// of the "var" as an error.

