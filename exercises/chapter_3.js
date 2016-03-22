// Minimum
function min(a,b) {
	if (a < b)
		return a;
	else
		return b;
}

// isEven by Recursion
function isEven(number) {
	if (number === 0)
		return true;
	else if (number === 1)
		return false;
	else
		return isEven(Math.abs(number -2));
}

// Bean counting
function countBs(string) {
	return countChar(string, "B");
}
function countChar(string, character) {
	counter = 0;
	for (var i = 0; i < string.length; i++)
		if (string.charAt(i) === character)
			counter++;
	return counter;
}

























