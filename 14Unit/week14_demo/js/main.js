/* 
    main.js
    Author: SCC
    Created: 12-4-2019
    Edited: 4-21-2020
    Notes:
*/
'use strict;'

$(document).ready(function() {

    // Make the jQuery UI widgets work
    $(function() {
        $("#tabs").tabs();
    });

    $(function() {
        try {
            $("input").checkboxradio();
            $("fieldset").controlgroup();
        } catch(errorObj) {
            console.log("There is a problem with jQuery library. Here is what is says: " +
                errorObj.name + ": " + errorObj.message
            );
        }
    });

    var total = 0;

    var updateTotal = function(totalVal) {
        var totalDisplayed = $("#total");
        totalDisplayed.text(totalVal);
    };
    
    /* Switch examples */
    $("input[name='arch']").click(function() {
        // DEBUG: console.log($(this).val());
        var archSelection = $(this).val();
        switch(archSelection) {
            case "i5":
                total = 500;
                updateTotal(total.toFixed(2));
                break;
            case "i7":
                total = 700;
                updateTotal(total.toFixed(2));
                break;
        }
    });


    $("input[name='storage']").click(function() {
        // DEBUG: console.log($(this).val());
        var storSelection = $(this).val();
        switch(storSelection) {
            case "256m":
                total = ($("input[name='arch']:checked").val() === "i7") ? 700 : 500;
                updateTotal(total.toFixed(2));
                break;
            case "500m":
                total = ($("input[name='arch']:checked").val() === "i7") ? 700 : 500;
                total += 150;
                updateTotal(total.toFixed(2));
                break;
            case "1g":
                total = ($("input[name='arch']:checked").val() === "i7") ? 700 : 500;
                total += 250;
                updateTotal(total.toFixed(2));
                break;
        }

    });
    
    /* Evaluating user input using Reg. Exp. */
    $("form").submit(function(event) {
        event.preventDefault();
        
        var userName = $("#name").val();
        if(/^[a-zA-Z]+\s?[a-zA-z]+$/.test(userName)) {
            $("#name").next().text("");
        } else {
            $("#name").next().text("Names can only contain letters.");
        }

        var state = $("#state").val();
        if(/^(MN)$|^(CA)$/i.test(state)) {
            $("#state").next().text("");
        } else {
            $("#state").next().text("We can only ship to CA or MN.");
        }

        var zip = $("#zip").val();
        if(/^\d{5}(-\d{4})?$/.test(zip)) {
            $("#zip").next().text("");
        } else {
            $("#zip").next().text("Zip code can only be NNNNN or NNNNN-NNNN");
        }

        
    });







    
});







