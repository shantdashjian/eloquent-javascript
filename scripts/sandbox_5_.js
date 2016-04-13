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

function mostAncient(persons) {
	var earliestPerson = persons[0];
	persons.forEach(function(person) {
		if (person.born < earliestPerson.born)
			earliestPerson = person;	
	});
	return earliestPerson;
}

function average(array) {
	function plus(a,b) { return a+b;}
	return array.reduce(plus) / array.length;
}

function age(person) {
	return person.died - person.born;
}

function ages(persons) {
	return persons.map(age);
}

function men(persons) {
	return persons.filter(man);
}

function women(persons) {
	return persons.filter(woman);
}

function man(person) {
	return person.sex == "m";
}

function woman(person) {
	return person.sex == "f";
}

function averageAgeMen(persons) {
	return average(ages(men(persons)));
}

function averageAgeWomen(persons) {
	return average(ages(women(persons)));
}

function directAncestorIsMostAncient(person) {
	console.log(person.name);
	var father = ancestry.filter(function(father) {
									return father.name == person.father;
							})[0];
	if (father == mostAncient(ancestry))
		return true;
	else if (father == undefined)
		return false;
	else {
		return directAncestorIsMostAncient(father);
	}
}

var byName = {};
ancestry.forEach(function(person) { byName[person.name] = person; });

function reduceAncestors(person, f, defaultValue) {
	function valueFor(person) {
		if (person == null)
			return defaultValue;
		else
			return f(person, valueFor(byName[person.mother]),
											valueFor(byName[person.father]));
	}
	return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
	if	(person.name == "Pauwels van Haverbeke")
		 return 1;
	else 
		return (fromMother + fromFather) / 2;
}

// var ph = byName["Philibert Haverbeke"];
// console.log((reduceAncestors(ph, sharedDNA, 0) / 4 * 100).toFixed(2) + "%");

// Find the DNA percentage of known ancestors for a given person, who lived past 70
function ancestorsWhoLivedPast70() {
	return ancestry.filter(function(person) { 
		return person.died - person.born >= 70;
	});
}

function sharedDNAwithAncestor(person, ancestor, fromMother, fromFather) {
	if	(person.name == ancestor.name)
		 return 1;
	else 
		return (fromMother + fromFather) / 2;	
}

function reduceAncestorsWith(person, ancestor, f, defaultValue) {
	function valueFor(person) {
		if (person == null)
			return defaultValue;
		else
			return f(person, ancestor, valueFor(byName[person.mother]),
											valueFor(byName[person.father]));
	}
	return valueFor(person);
}
/*
var allOver70 = ancestorsWhoLivedPast70();
allOver70.forEach(function(ancestor) {
console.log(known.name + " shares " + (reduceAncestorsWith(known,ancestor, sharedDNAwithAncestor, 0) / 4 * 100).toFixed(2) + "%" + " with " + ancestor.name);
});
*/

// Find the percentage of known ancestors, for a given person, who lived past 70
function countAncestors(person, test) {
	function combine(person, fromMother, fromFather) {
		var thisOneCounts = test(person);
		return fromMother + fromFather + (thisOneCounts? 1 : 0);
	}
	return reduceAncestors(person, combine, 0);
}

function longLivingPercentage(person) {
	var all = countAncestors(person, function(person) {
		return true;
	});
	var longLiving = countAncestors(person, function(person) {
		return person.died - person.born >= 70;
	});
	return longLiving / all;
}

/*
function isInSet(person, set) {
	var flag = false;
	set.forEach(function(item) {
		if (person == item)
			flag = true;
	});
	return flag;
}
*/
function isInSet(set, person) {
	return set.indexOf(person.name) > -1;
}

// Chapter 6: The Secret Life of Objects
var rabbit = {};
rabbit.speak = function(line) {
	console.log("The rabbit says '" + line + "'"); 
}

function speak(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'"); 
}

var whiteRabbit = {
	type: "white",
	speak: speak
};

var dog = {};
dog.bark = function(phrase) {
	console.log("The dog barks '" + phrase + "'");
}

function bark(phrase) {
	console.log("The " + this.type + " barks '" + phrase + "'");
}

var jimmie = {type: "bulldog", bark: bark};

var protoRabbit = {
	speak: function(line) {
		console.log("The " + this.type + " rabbit says '" + line + "'");
	}
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";

function Rabbit(type) {
	this.type = type;
}

Rabbit.prototype.speak = function(line) {
		console.log("The " + this.type + " rabbit says '" + line + "'");
}

Rabbit.prototype.dance = function() {
		console.log("The " + this.type + " rabbit can Lindy Hop");
}

// Prototype interference
/*

var map = {};
function storePhi(event, phi) {
	map[event] = phi;
}

storePhi("pizza", 0.5);
storePhi("touched tree", 0.2);

for (var name in map) {
	if (map.hasOwnProperty(name)) {
		console.log(name);
	}
}
*/




























































































































































	




























