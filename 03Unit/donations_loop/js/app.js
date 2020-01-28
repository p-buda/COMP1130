/* 
    app.js - program to learn how to use loops in JS
    Author: SCC
    Created: 10-08-2018
    Edited: 09-09-2019
    Notes:
*/


var donation;

do {
   donation = prompt("What is your donation amount? (Enter a valid positive number or 0.)");
   donation = parseFloat(donation);
} while(isNaN(donation) || donation < 0);

if(donation > 100) {
   document.write("Thank you for your <b>generous</b> donation of " + donation + " dollars!"); 
} else if (donation > 0) {
   document.write("Thank you for your donation of " + donation + " dollars!");
} else {
   document.write("Maybe next year!");
}