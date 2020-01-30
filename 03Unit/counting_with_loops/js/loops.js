/* 
    loops.js - program to learn how to use for loops in JS
    Author: SCC
    Created: 09-11-2019
    Edited: 09-11-2019
    Notes: Based on examples from "Murach’s JavaScript and jQuery, 3rd Edition", by Mary Delamater, Zak Ruvalcaba, ISBN: 978-1-943872-05-3

*/

var price;
var total = 0;
var list = [];  // empty array

do {
    price = prompt('Enter the price or type \'q\' to quit.');
    if (price !== 'q' && price !== 'Q') {
        price = parseFloat(price);
        if(price > 0) {
            total += price;
            list.push(price);  // the push() method adds items to the array
        } else {
            alert('Enter a valid postive price or type \'q\' to quit.');
        }
    }
} while (price !== 'q' && price !== 'Q');

document.write('Your price list: <br>');
for(var i = 0; i < list.length; i++) {
    document.write(list[i] + '<br>');
}
document.write('The total is: ' + total);