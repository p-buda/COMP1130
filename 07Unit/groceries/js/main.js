/* 
    main.js - registration form
    Author: SCC
    Created: 2-26-2020
    Edited: 2-26-2020
*/
"use strict;"
var groceries = [];
var prices = [];

// Helper function for getting the elements by Id from the document.
var $ = function(id) {
    return document.getElementById(id);
};

var displayCart = function() {
	var html = "<caption>Grocery List</caption><tr><td><b>Item</b></td><td><b>Price</b></td></tr>";
	for(var i = 0; i<groceries.length; i++) {
		html += "<tr><td>" + groceries[i] + "</td><td>" + prices[i] + "</td></tr>";
	}
	$("grocery_table").innerHTML = html;
};

var addGrocery = function() {
	var newItem = $("item").value;
	var newPrice = parseFloat($("price").value);

    groceries.push(newItem);
    prices.push(newPrice.toFixed(2));
};

window.onload = function() {
    $("display_groceries").onclick = displayCart;
    $("add_grocery").onclick = addGrocery;

    // Preload images onload
    var imageList = document.getElementsByTagName("a");
    var imageCaption = $("image_caption");
    var largeImage = $("large_image");
    var image, linkObject, clickedLink;

    for(var i = 0; i < imageList.length; i++) {
        linkObject = imageList[i];
        image = new Image();
        image.src = linkObject.getAttribute("href");

        // Event handler for each link
        linkObject.onclick = function(event) {
            event.preventDefault();
            clickedLink = this;

            largeImage.src = clickedLink.getAttribute("href");
            largeImage.alt = clickedLink.getAttribute("title");
            imageCaption.firstChild.nodeValue = clickedLink.getAttribute("title");
        }
    }

};

