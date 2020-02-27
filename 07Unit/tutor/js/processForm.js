/* 
    processForm.js - registration form
    Author: SCC
    Created: 10-07-2019
    Edited: 2-25-2020
*/
"use strict;"
var tutors = ["Ben", "Becky", "Julio", "Jerry"];
var subjects = ["Math", "English", "Math", "Physics"];
var ratings = [3.5, 3.6, 3.9, 4.0];

// Helper function for getting the elements by Id from the document.
var $ = function(id) {
    return document.getElementById(id);
};

var displayTutors = function() {
	var html = "<caption>Tutors List</caption><tr><td><b>Name</b></td><td><b>Subject</b></td></tr>";
	for(var i = 0; i<tutors.length; i++) {
		html += "<tr><td>" + tutors[i] + "</td><td>" + subjects[i] + "</td></tr>";
	}
	$("tutors_table").innerHTML = html;
};

var displayBest = function() {
    var name = tutors[0];
    var bestRating = ratings[0];
    for(var c = 1; c < ratings.length; c++) {
        if(ratings[c] > bestRating) {
            bestRating = ratings[c];
            name = tutors[c];
        }
    }

    var html = "The tutor with the best ratings is " + name + " with the rating of " + bestRating.toFixed(1);
    $("highly_rated").innerHTML = html;
};

var validateInput = function(event) {
    var userName = $("username").value;

    if(userName === "") {
        event.preventDefault();
        $("username").nextElementSibling.firstChild.nodeValue = " Name is required.";
    }
};

window.onload = function() {
    $("display_tutors").onclick = displayTutors;
    $("display_best").onclick = displayBest;
    $("username").focus();
    $("submit_session").onclick = validateInput;
};

