/* 
    main.js
    Author: SCC
    Created: 11-06-2019
    Edited: 3-28-2020
*/
"use strict;"

$(document).ready(function() { 

    $("#class_cancelation").submit(function(ev) {
        var isValid = true;

        /* Email validation */
        var teacherEmail = $("#teacher_email").val().trim();
        if(teacherEmail === "") {
            $("#teacher_email").next().text("This field is required.");
            isValid = false;
        } else {
            $("#teacher_email").next().text("");
        }
        $("#teacher_email").val(teacherEmail);

        /* Class name validation */
        var className = $("#class_name").val().trim();
        if(className.length !== 8) {
            $("#class_name").next().text("Valid class name has 8 characters.");
            isValid = false;
        } else {
            $("#class_name").next().text("");
        }
        $("#class_name").val(className);

        /* Date validation */
        var classDate = $("#class_date").val();
        if(classDate === "") {
            $("#class_date").next().text("This field is required.");
            isValid = false;
        } else {
            $("#class_date").next().text("");
        }

        if(isValid === false) {
            ev.preventDefault();
        }

    }); // end submit

    /* Reference to Khan Academy: how they code jQuery events */
    $("#campus").on("click", function() {
        var $selectBox = $("#campus");
        var selection = $selectBox.val();
        if(selection === "nmkto") {
            $selectBox
                .next()
                .text("Dial 7485 for posting a notice on the door.");
        } else if (selection === "fbo") {
            $selectBox
                .next()
                .text("Dial 3456 for posting a notice on the door.");
        } else {
            $selectBox
            .next()
            .text("");
        }
    });

    /* Extra stuff */
        // Textarea counting chars trick
        $("#message").keyup(function() {
            var currentLen = $("#message").val().length;
            $("#letter_count").text(50 - currentLen);
        }); // end keyup
    

        // Difference between event triggering methods and event method with event handlers
        $("#teacher_email").focus();  // focus method
        
        $("#teacher_name").focus(function() {   // focus event method
            $(this).attr("placeholder", "First Last");
        });

});


