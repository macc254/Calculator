//addition or sum
var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert("The sum is " + result);

//subtraction

var subtract = function(number1, number2) {
  return number1 - number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert("The subtraction output is " + result);

//multiplication
var multiply = function(number1, number2) {
  return number1 * number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert("The multiplication output is " + result);


//division
var divide = function(number1, number2) {
  return number1 / number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert("The division output is " + result);

//modulus

var modulus = function(number1, number2) {
  return number1 % number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = modulus(number1, number2);
alert("The modulus is " + result);
