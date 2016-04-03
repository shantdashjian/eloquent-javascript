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