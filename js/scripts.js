// BACK-END LOGIC

var add = function(number1, number2) {
	return number1 + number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));

//alert(add(number1, number2));

var divide = function (number1, number2) {
	return number1 / number2;
};
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert (divide (number1, number2));
//
var multiply = function (number1, number2) {
	return number1 * number2;
};
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert (multiply(number1, number2));
//
var subtract = function (number1, number2) {
	return number1 - number2;
};
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert (subtract (number1, number2));
//
// var bmi = function (weight, height) {
//   return weight / (height * height);
// }
//
// var weight = parseInt(prompt("Enter a number:"));
// var height = parseInt(prompt("Enter another number:"));
//
// alert (bmi (weight, height));
//
// var temperature = function (fahrenheit) {
//     return (fahrenheit - 32) / 1.8;
// }
//
// var fahrenheit = parseInt(prompt("Enter temperature in fahrenheit:"));
//
// alert(temperature(fahrenheit));
//
// var result = temperature(number1);
// alert(result);

// FRONT-END LOGIC

$(document).ready(function() {
	$("form#add").submit(function (event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
	  var number2 = parseInt($("#add2").val());
	  var result = add(number1, number2);
		$("#output").text(result);
	});

		$("form#subtract").submit(function (event) {
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
	  var number2 = parseInt($("#subtract2").val());
	  var result = subtract(number1, number2);
		$("#output").text(result);
	});

		$("form#multiply").submit(function (event) {
		event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
		$("#output").text(result);
	});

	$("form#divide").submit(function (event) {
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
		$("#output").text(result);
	});
});
