/* 
    main.js 
    Author: SCC
    Created: 11-25-2019
    Edited: 4-13-2020
    Notes:
*/
"use strict;"

var insertCurrentDate = function() {
    var now = new Date();
    var todaysDate = "";
    var day, month, year;
    
    day = now.getDate();
    month = now.getMonth() + 1;
    year = now.getFullYear();
    todaysDate = day + "-" + month + "-" + year;

    $("#todays_date").text(todaysDate);
};

var insertDueDate = function() {
    var now = new Date();
    var dueDateText = "";
    var dueDate =  new Date(now);

    dueDate.setDate(dueDate.getDate() + 7)
    dueDate = dueDate.toDateString();
    dueDateText = "until " + dueDate;

    $("#due_date").text(dueDateText);
};

$(document).ready(function() {

    // Call date function
    insertCurrentDate();
    insertDueDate();

    var getRand = function(max) {
        var rand;
        if (!isNaN(max)) {
            rand = Math.random(); //value >= 0.0 and < 1.0
            rand = Math.floor(rand * max); //value is an integer between 0 and max - 1
            rand = rand + 1; //value is an integer between 1 and max
        }
        return rand;
    }; // End of getRand function.

    $("#generate_button").click(function() {
        var userNum = parseInt($("#user_num").val());
        var maxNum = 36;
        var lotteryNum;
        var results = "";

        if (isNaN(userNum) || userNum <= 0) {
            $("#lottery_results").text("Please enter a valid positive number.");
        } else {
            for(var i = 0; i < userNum; i++) {
                lotteryNum = getRand(maxNum);
                results = results + lotteryNum.toString() + "   "; 
            }

            $("#lottery_results").text(results);
        }

    }); // End click event.

});







