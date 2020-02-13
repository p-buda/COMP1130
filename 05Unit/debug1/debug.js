var userGuess = prompt("I am thinking about a number between 1-5. What is it?";

var number = Math.floor(Math.random() * 5 + 1); // returns a random number from 1-5.

 // Check if you guessed the number.
if(parseInt(userGuess) = number) {
   document.write("Your guess was a bit off. You typed " + userGuesst + " and I thought of " + number + "...");
} else {
   document.write("You guessed my number! You typed " + userGuesst + " and I thought of " + number + "!");
}

