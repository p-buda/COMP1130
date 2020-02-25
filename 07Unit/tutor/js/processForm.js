/* 
    processForm.js - registration form
    Author: SCC
    Created: 10-07-2019
    Edited: 2-25-2020
*/
"use strict;"
var tutors = ["Ben", "Becky", "Julio", "Jerry"];
var subjects = ["Math", "English", "Math", "Physics"];

// Helper function for getting the elements by Id from the document.
var $ = function(id) {
    return document.getElementById(id);
};

var displayTutors = function() {
	var html = "<h2>Tutors List</h2><tr><td><b>Name</b></td><td><b>Subject</b></td></tr>";
	for(var i = 0; i<tutors.length; i++) {
		html += "<tr><td>" + tutors[i] + "</td><td>" + subjects[i] + "</td></tr>";
	}
	$("tutors_table").innerHTML = html;
};

window.onload = function() {
    $("display_tutors").onclick = displayTutors;
    $("username").focus();
};

