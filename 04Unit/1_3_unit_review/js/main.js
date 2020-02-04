/* 
    main.js - review of the recent units
    Author: SCC
    Created: 09-16-2019
    Edited: 09-16-2019
    Notes:
*/

var gradeValue = 0;
var gradeBook = [];

do {
   gradeValue = prompt('Enter a grade value between 0-100 or type 111 to quit.');

   gradeValue = parseFloat(gradeValue);

   if(gradeValue >= 0 && gradeValue <= 100) {
      gradeBook.push(gradeValue);
   }

} while(gradeValue != 111);

for(var x = 0; x < gradeBook.length; x++) {
   document.write('Grade value: ' + gradeBook[x] + '<br>');
}


