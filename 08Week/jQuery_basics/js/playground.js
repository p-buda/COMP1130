/* 
    playground.js - practicing jQuery essential selectors, methods, event methods
    Author: SCC
    Created: 10-21-2019
    Edited: 10-21-2019
*/
"use strict;"

// How to reach elements by selectors using jQuery
$("p");
$(".headline");
$("#color");
$("h1, #paint_button");

// Doing something with the markup elements using jQuery methods
/* 
$(".headline").text("I was here!");
$("#color").val("1-2-3");
$("#color").next().text("Enter a valid color name");
*/
// The above will not work unless we wait for the page to load.

$(document).ready(function() {
    // $(".headline").text("I was here!");
    // $("#color").val("blue");

    $("#paint_button").click(function() {
        var user_input = $("#color").val();
        if(user_input === "") {
            $("#color").next().text(" Enter color name"); // Note the object chaining here
        } else {
            $("body").css("background-color", user_input);
        }
    }); // End of button click()

    $("#color").click(function() {
        $("#color").next().text("");
    }); // End of input click

}); // End of ready()