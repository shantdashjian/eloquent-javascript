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