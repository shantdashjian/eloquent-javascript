// Flattening
function flatten(array) {
	function concatinate(a,b) {return a.concat(b);}
	return array.reduce(concatinate);
};

// Mother-Child Age Difference
function mother(person) {
	return byName[person.mother];
}

function motherChildAgeDifferences() {
	var differences = [];
	ancestry.forEach(function(person) {
		if (mother(person) != undefined)
			differences.push(person.born - mother(person).born);
	});
	return differences;
}

// Historical life expectancy
function centuryOf(person) {
	return Math.ceil(person.died / 100);
}

function groups(groupOf) {
	var groups = [];
	ancestry.forEach(function(person) {
		if (!groups.includes(groupOf(person)))
			groups.push(groupOf(person));
	});
	return groups.sort();
}

function averageByCentury() {
	var averages = {};
	groups(centuryOf).forEach(function(century) {
		var avg = average((ancestry.filter(function(person) {
								return groupOf(person) == century;})
				.map(function(person) {return age(person);})));
		averages[century] = Math.round(avg);
	});		
	return averages;
}

function groupBy(array, groupOf) {
	var mapped = {};
	groups(groupOf).forEach(function(group) {
		mapped[group] = array.filter(function(element) {
								return groupOf(element) == group;});
	});
	return mapped;	
}

// Every and then some
function every(array, test) {
	for(var i = 0; i < array.length; i++) {
		if (!test(array[i]))
			return false;
	}
	return true;
}

function some(array, test) {
	for(var i = 0; i < array.length; i++) {
		if (test(array[i]))
			return true;
	}
	return false;
}


























	