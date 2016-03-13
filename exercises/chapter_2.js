// Looping a Triangle
var stars = ""
for (var i=0; i < 7; i++) {
	stars = stars + "*";
	console.log(stars);
}

// FizzBuzz
for (var i=1; i<101; i++) {
	if ( i % 3 === 0 && i % 5 !== 0) {
		console.log("Fizz");
	} else if ( i % 3 !== 0 && i % 5 === 0) {
		console.log("Buzz");
	} else if ( i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else {
		console.log(i);
	};
}

// Chess Board of size x size
var board = "";
var square = " ";
var size = 8;
function flipColor() {
	if (square === "\u25A0") {
		square = " ";
	} else {
		square = "\u25A0";
	};
};

for (var row = 0; row < size; row++) {
	for (var file = 0; file < size; file++) {
		board = board + square;
		flipColor();
	}
	board = board + "\n";
	flipColor();
};
console.log(board);


	
		
			
	