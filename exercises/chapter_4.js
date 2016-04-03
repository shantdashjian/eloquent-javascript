// The Sum of a Range
function range(start, end, step) {
	if (step == undefined && start < end)
		step = 1;
	if (step == undefined && start > end)
		step = -1;
	var array = [];
	if (start < end) {
		for(var i = start; i <= end; i = i + step)
		 array.push(i);
	} else {
		for(var i = start; i >= end; i = i + step)
		array.push(i);
	}
	return array;
}

function sum(array) {
	var sum = 0;
	for (var i = 0; i< array.length; i++)
		sum = sum + array[i];
	return sum;
}

// Reversing an array
function reverseArray(array) {
	var reverse = [];
	for(var i = 0; i < array.length; i++)
		reverse.unshift(array[i]);
	return reverse;
}

function reverseArrayInPlace(array) {
	for(var i = 0; i < array.length/2; i++) {
		var temp = array[i];
		array[i] = array[array.length-1-i];
		array[array.length-1-i] = temp;
	}
	return array;
}

// A List
var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};

function arrayToList(array) {
	var list = {};
	list = {
		value: array[array.length-1],
		rest: null
	};
	for (var i = array.length-2; i >=0; i--)
		prepend(array[i], list);
	return list;
}

function listToArray(list) {
	var array = [];
	do {
		array.push(list.value);
		list = list.rest;	
	} while (list != null) ;
	return array;
}

function prepend(element, list) {
	list = {
			value: element,
			rest: list
		}	
	return list;
}

function nth(list, index) {
	for (var i = 0; i < index; i++) {
		list = list.rest;	
		if (list == null)
			break;
	}
	if (i == index) {
		return list.value;
	} else {
		return undefined;
	}
}

// Recursive version of nth
function nth(list, index) {
	if (index == 0 && list != null) {
		return list.value;	
	} else if (list == null){
		return undefined;
	} else {
		return nth(list.rest, index-1);
	}
}













































