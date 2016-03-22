// 2 to the power 10
var base = 2;
var total = 1;
var power = 0;
while (power < 10) {
	total = total * base;
	power = power + 1;
}
console.log(base + " to the power " + power + " = " + total);

// do loop
do {
	var name = prompt("Who are you?");
} while (!name);
console.log("I'm " + name);

// for loop
for (var i = 0; i < 13; i = i + 2) {
	console.log(i);
}

// 2 to the power 10 using for
var base = 2;
var total = 1;
for (var power = 0; power < 10; power++) {
	total = total * base;
}
console.log(base + " to the power " + power + " = " + total);

// The first number greater than or equal to 20 and divisible by 7 using break
for (var i = 0; ; i++) {
	if ( i >= 20 && i % 7 === 0)
		break;
}
console.log(i + " is the first number greater than or equal to 20 and divisible by 7");

// switch
switch (prompt("What's the weather like today?")) {
	case "rainy":
		console.log("Take an umbrella.");
		break;
	case "sunny":
		console.log("Enjoy the sun!");
		break;
	case "cloudy":
		console.log("Dismal weather, don't you think?");
		break;
	default:
		console.log("That's unusual.");
		break;
}

// Defining a function
var square = function(x) {
	return x * x;
};

// Examples
var makeNoise = function() {
	console.log("Pling!");
};

var power = function(base, exponent) {
	var result = 1;
	for( var i = 0; i < exponent; i++) {
		result = result * base;
	};
	return result;
};

// Scope
var x = "outside";
var f1 = function() {
	var x = "inside f1";
};
f1();
console.log(x);
var f2 = function() {
	x = "inside f2";
};
f2();
console.log(x);

// Nested scopes
var landscape = function() {
	var result = "";
	var flat = function(size) {
		for (var i = 0; i < size; i++)
			result = result + "_";
	};
	var mountain = function(size) {
		result = result + "/";
		for (var i = 0; i < size; i++)
			result = result + "'";
		result = result + "\\";
	};
	flat(3);
	mountain(4);
	flat(6);
	mountain(2);
	return result;
};

// Blocks don't make the variable local, unless it's a function
var x = 1;
{
	var x = 2;
};
console.log(x);

// Functions as values
var launchMissiles = function(value) {
	console.log("Launch! " + value);
};

// Function declaration is subtly different than function definition
what();
function what(){
	console.log("What!");
};

where();
var where = function(){
	console.log("where!");
};

// How to 'blow the stack'
function chicken() { return egg(); }
function egg() { return chicken(); }
console.log(chicken() + " came first.");

// Power function version with optional parameters handled
var power = function(base, exponent) {
	if (exponent === undefined)
		exponent = 2;
	var result = 1;
	for( var i = 0; i < exponent; i++) {
		result = result * base;
	};
	return result;
};
// Closure
function wrapValue(n) {
	var localVariable = n;
	return function() {return localVariable;};
}

// Multiplying by closure
function multiplier(factor) {
	return function(number) {
		return number * factor;
	};
}

// Exponentiation by closure
function expo(power) {
	return function(number) {
		result = 1;
		for(var i = 0; i < power; i++) 
			result = result * number;
		return result;
	};
}

// Addition by closure
function add(b) {
	return function(a) {
		return a + b;
	};
}

// Subtraction by closure
function subtract(subtrahend) {
	return function(minuend) {
		return minuend - subtrahend;
	};
}

// Factorial by Recursion
function factorial(number) {
	if (number > 0) {
		return number * factorial(number - 1);
	} else {
		return 1;		
	};
}

// Power by Recursion
function power(base, exponent) {
	if (exponent > 0) {
		return base * power(base, exponent - 1);
	} else {
		return 1;		
	};
}

// Quiz: Given a number, find a sequence that starts with 1 and then 
//	either adds 5 or multiplies by 3 to produce that number
function solve(goal) {
	function puzzle(start, sequence, goal) {
		if (start === goal) {
			return sequence;
		} else if (start > goal) {
			return null;
		} else {
			return	puzzle(start + 5, "(" + sequence + " + 5)", goal) ||
							puzzle(start * 3, "(" + sequence + " * 3)", goal);
							
		};
	}
	return puzzle(1, "1", goal);
}

// Cows and Chickens
cowsAndChickens(3,5);

function cowsAndChickens(cows, chickens) {
	console.log(leftPad(cows, 3) + " Cows");
	console.log(leftPad(chickens, 3) + " Chickens");
}

function leftPad(number, width) {
	var string = String(number);
	while (string.length < width)
		string = "0" + string;
	return string;
}


















































































































































































 
	

































































































