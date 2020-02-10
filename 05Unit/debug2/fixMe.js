/*
This program has four errors to fix. Once they are fixed, the program displays a few messages
on the web page:
1. It first announces that it can sort a list.
2. Next it shows the list to be sorted.
3. Then it displays a message that below is the sorted list.
4. Finally, it displays the sorted list.
*/

/* 
************************************
BUG 1: Syntax error.
************************************
 */

document.write("***This program sorts a list of words in alphabetical order.***<br>";

/* 
************************************
BUG 2: Reference error.
************************************
 */
var aList = "Microsoft,Apple,Xerox,IBM,HP,Dell";
document.write("This is a list I want to sort: " + list + "<br>");

/* 
************************************
BUG 3: Type error.
************************************
 */

Document.write("Below is the same list but sorted in the alphabetical order.<br>");

/* 
************************************
BUG 4: Logic error: Array not sorting the values.
************************************
 */
// Input to this function is any number of comma-separated words.
// The function converts a list of words into an array.
// The function then sorts from "a" to "z" and returns the sorted array.

var sortValues = function(values) {
	var valuesToSort = values;
	// Notice that we can use String object method called "split()" to split any string into array
	// See https://www.w3schools.com/jsref/jsref_split.asp for details on the split() method.

	// This next line of code should split the input string on every comma 
	// and put the separated pieces into an array where each element is just one word.
	// The resulting array should be then assigned to the "sortArray" array variable.
	var sortArray = valuesToSort.split();

	// Now the Array's built-in sort() method should sort the array from a-z.
	sortArray.sort();

	// Return "sortArray"
	return sortArray;
};

// This line should display a list of words sorted from a-z on the web page.
document.write(sortValues(aList) + "<br>");
