/* 
    main.js
    Author: SCC
    Created: 11-18-2019
    Edited: 11-18-2019
*/
'use strict;'
$(document).ready(function() {

    $.getJSON('./data/books.json', function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $('#book_list').append(
                    value.author + '. ' + value.title + '. ' + value.year + '<br>'
                );
                console.log(key, value);
            });
        });
    });
});