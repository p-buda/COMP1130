// I used these in the web console to introduce variables, data types, and some operations.

var price;
// undefined
typeof price;
// "undefined"
price = 100;
// 100
typeof price;
// "number"
var score = 33.1;
typeof score;
// "number"
var temp = -40;
typeof temp;
// "number"
var largeNumber = Infinity;
typeof largeNumber;
// "number"


var name = "Mickey Mouse";
typeof name;
// "string"
var emptyStr = "";
typeof emptyStr
// "string"

var flag = true;
typeof flag;
// "boolean"
flag = false;
typeof flag
// "boolean"

/* OPERATORS: */

var quantity = 44;
var price = 20;
var total = price * quantity;
var halfPrice = price / 2;
halfPrice
// 10
price % 2
// 0
price = price + 1;
// 21
price % 2
// 1
price++;
price
// 22
price--;
price
// 21
price+=2;
// 23
price-=2
// 21

/* Floating point values are sometimes not precise */
var triangleArea = (3 * 0.0125)/2
triangleArea
// 0.018750000000000003

/* Concatenation */
var city = "Mankato";
var state = "MN";
var address = city + state;
address
// "MankatoMN"
address = city + ', ' + state;
address
// "Mankato, MN"