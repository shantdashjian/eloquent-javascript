function sum(array) {
	var total = 0;
	for (var i = 0; i<array.length; i++)
		total += array[i];
	return total;
}

function range(start, end, step) {
	var array = [];
	if (step == undefined && start < end) {
		step = 1;
	} else if (step == undefined && start > end) {
		step = -1;
	} 
	for(var item = start; item <= end; item = item + step)
		array.push(item);
	return array; 
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

function filter(ancestry, test) {
	var array = [];
	ancestry.forEach(function(object) {
		if (test(object)) 
			array.push(object);
	});
	return array;
}

function map(array, transform) {
	var mapped = [];
	array.forEach(function(object) {
		mapped.push(transform(object));
	});
	return mapped;
}

function transform(object) {
	return object.name;
}

function areTheyOver90(object) {
	return object.died - object.born > 90;
}

function giveEmARaise(salary) {
	return salary + 1000;
}

function reduce(array, combine, start) {
	var current = start;
	array.forEach(function(item) {
		current = combine(current, item);
	});
	return current;
}

function combine(a,b) {
	return a+b;
}

function findYounger(youngest,current) {
	if (current.born < youngest.born)
		return current;
	else
		return youngest;
}




























	




























