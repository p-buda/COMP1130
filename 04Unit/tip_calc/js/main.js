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

