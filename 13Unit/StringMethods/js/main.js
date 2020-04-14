/* 
    main.js 
    Author: SCC
    Created: 11-25-2019
    Edited: 4-13-2020
    Notes:
*/
"use strict;"

$(document).ready(function() {

    var phrase = "JavaScript";

    $("#show_letter").click(function() {
        var start, stop, character;
        var indexVal = parseInt($("#index_val").val());

        if (isNaN(indexVal)) {
            alert("Please enter a valid number");
        } else {
            start = indexVal;
            stop = start + 1;
            character = phrase.substring(start, stop);
            var tableCells = $("td");
            // console.log($tableCells);
            $(tableCells[indexVal]).text(character);
        }

    });

    $("#make_guess").click(function(){
        var userGuess = $("#user_guess").val();
        userGuess = userGuess.trim();

        if(userGuess === phrase) {
            alert("You guessed the secret phrase!");
        } else {
            alert("Try again!");
        }
    });
    
});







