var add = function(number1, number2) {
	return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

//alert(add(number1, number2));

var divide = function (number1, number2) {
	return number1 / number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));

// alert (divide (number1, number2));

var multiply = function (number1, number2) {
	return number1 * number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert (multiply(number1, number2));

var subtract = function (number1, number2) {
	return number1 - number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert (subtract (number1, number2));

var bmi = function (weight, height) {
  return weight / (height * height);
}

// var weight = parseInt(prompt("Enter a number:"));
// var height = parseInt(prompt("Enter another number:"));
//
// alert (bmi (weight, height));

var temperature = function (fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

// var fahrenheit = parseInt(prompt("Enter temperature in fahrenheit:"));
//
// alert(temperature(fahrenheit));

var result = temperature(number1);
alert(result);
