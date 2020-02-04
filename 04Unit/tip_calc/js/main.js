/* 
    main.js - calculating the tip amount
    Author: SCC
    Created: 09-02-2019
    Edited: 09-16-2019
    Notes:
*/

'use strict';

var calcTip = function() {

    var price = 0;

    do {
    price = prompt('Enter the price', 100);
    price = parseFloat(price);
    } while(isNaN(price) || price <= 0);
    
    tip = 0;
    do {
    tip = prompt('Enter the tip %', 20);
    tip = parseFloat(tip);
    } while(isNaN(tip) || tip < 0 || tip > 100);

    // divide the tip by 100 to represent a number
    tip = tip/100;

    tip = tip * price;

    alert('The tip is ' + tip + ' dollars.');
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
console.log(tip); // It should work unless you use the strict mode.
// That is not a safe practice. Use local variables when possible.

// You can add 'use strict'; at the top of your code file, so JS will tag omission 
// of the "var" as an error.

