/* 
    app.js
    Author: SCC
    Created: 11-20-2019
    Edited: 4-5-2020
*/
"use strict;"

$(document).ready(function() {

    var keyword = "";
    var flickrUrl = "";

    $("#search_keyword").click(function() {
        keyword = $("#keyword").val();
        if(keyword === "") {
            $("#photos").html("<p>Please enter a keyword.</p>")
        } else {
            flickrUrl = "https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=" + keyword;

            // DEBUG: 
            // console.log(keyword);
            // console.log(flickrUrl);

            $.ajax({
                type: "get",
                url: flickrUrl,
                dataType: "json",
                error: function(xhrObj, statMessage, errMessage) {
                    console.log("Error: " + xhrObj.status + ", message: " + statMessage + ", description: " + errMessage);
                    $("#photos").html("<p>An error occured.</p>")
                },
                success: function(dataReceived) {
                    var html = "";
                    // console.log("Success");
                    $.each(dataReceived.items, function(i, item) {
                        if(i < 5) { // limit the number of pictures.
                        html += "<h2>" + item.title + "</h2>";
                        html += "<img src=\"" + item.media.m + "\" alt=\"Image of " + keyword + "\">";
                        }
                    });
                    $("#photos").html(html);
                }
            });
        } // End of if/else empty keyword checker
    });

});