function sum(array) {
	var total = 0;
	for (var i = 0; i<array.length; i++)
		total += array[i];
	return total;
}

function forEach(array, action) {
	for (var i = 0; i< array.length; i++)
		action(array[i]);	
}

function greaterThan(n) {
	return function(m) {
		return m > n; 
	};
}

function noisy(f) {
	return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("calling with",arg, "- got", val);
		return val;
	};
}

function transparentWrapping(f) {
	return function() {
		return f.apply(null, arguments);
	};
}




