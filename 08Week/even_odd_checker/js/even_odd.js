/* 
    even_odd.js - practicing jQuery essential selectors, methods, event methods
    Author: SCC
    Created: 10-21-2019
    Edited: 10-21-2019
*/
'use strict;'

$(document).ready(function() {

    $('#check_button').click(function() {
        var userNumber = $('#user_number').val();
        userNumber = parseInt(userNumber);
        if(userNumber === '' || isNaN(userNumber)) {
            $('#user_number').next().text(' Enter a valid number');
        } else {
            if(userNumber % 2 === 0) {
                $('.answer').text(userNumber + ': this number is even.')
            }
            else {
                $('.answer').text(userNumber + ': this number is odd.')
            }
        }
    }); // End of button click()

    $("#user_number").click(function() {
        $("#user_number").next().text(" *");
        $('#user_number').val("");
    }); // End of input click

}); // End of ready()