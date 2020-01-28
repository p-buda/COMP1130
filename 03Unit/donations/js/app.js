/* 
    app.js - program to learn how to use if/else statements in JS
    Author: SCC
    Created: 10-08-2018
    Edited: 09-09-2019
    Notes:
*/

// 1. Declare a variable to store user input.
var donation;

// 2. Prompt the user for a number and store it in the "donation" variable.
donation = prompt("What is your donation amount?");
donation = parseFloat(donation);
// We can first validate for correct input and then nest
// another if/else statements
if(isNaN(donation) || donation < 0) {
   document.write("Please enter a valid number."); 
} else {
   if(donation >= 100) {
      document.write("Thank you for your <b>generous</b> donation of " + donation + " dollars!"); 
   } else if (donation > 0) {
      document.write("Thank you for your donation of " + donation + " dollars!");
   } else {
      document.write("Maybe next year!");
   }
}

// Send a thank you card if the donation is more than $0.0
var sendThankYouCard = false;
if(donation > 0) {
   sendThankYouCard = true;
}

// Add a short-hand evaluation for true/false
// Notify the customer service to order a card.
if(sendThankYouCard) {
   console.log('Order a card.');  // This will only show if sendThankYouCard stores the value of true.
}