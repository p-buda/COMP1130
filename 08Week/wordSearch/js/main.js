/* 
    main.js
    Author: SCC
    Created: 10-14-2019
    Edited: 3-4-2020
*/
'use strict;'

var wordSearch = function(keyString, textNode) {
    var index = textNode.search(keyString);
    var wordCount = 0;
    while(index !== -1) {
        wordCount += 1;
        textNode = textNode.substring(index + 1);
        index = textNode.search(keyString);
    }

    console.log(wordCount);
    $("#results").text("Matches found: " + wordCount);
};

$(document).ready(function() {
    
    // Change event of the search box
    $("#keyword").change(function() {
        console.log("change");
        // pass the value from the search box to the "contains" selector
        var keyword = $("#keyword").val();
        if(keyword !== "") {
            var textBlock = $(`td:contains(${keyword})`).text();
            console.log(textBlock);
            wordSearch(keyword, textBlock);
            $(`td:contains(${keyword})`).css("background-color", "yellow");
        }
    });

    // Reset search when user presses backspace (keyCode 8)
    $("#keyword").keyup(function(e) {
        if(e.keyCode === 8) {
        $("td").css("background-color", "transparent");
        }
    });

});





