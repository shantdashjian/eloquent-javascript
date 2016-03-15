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

































































