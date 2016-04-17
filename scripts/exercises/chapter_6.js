// A Vector Type
function Vector(x, y) {
	this.x = x;
	this.y = y;
};

Vector.prototype.plus = function(otherVector){
	return new Vector(this.x + otherVector.x, this.y + otherVector.y);
};

Vector.prototype.minus = function(otherVector) {
	return new Vector(this.x - otherVector.x, this.y - otherVector.y);
};

Object.defineProperty(Vector.prototype, "length", {
	get: function() { return Math.sqrt( Math.pow((this.x - 0),2) + 
																			Math.pow((this.y - 0),2));}
});

// Another Cell
function StretchCell(inner, width, height){
	this.inner = inner;
	this.width = width;
	this.height = height;
};

StretchCell.prototype.minWidth = function() {
 return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function() {
 return Math.max(this.height, this.inner.minHeight());
};

StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
};

// Sequence Interface: Solution 1
/*
// ArraySeq
function ArraySeq(array) {
	this.sequence = array;
};

ArraySeq.prototype.iterate = function(iterations, action){
	for(var i = 0; i < iterations; i++)
		action(this.sequence[i]);
};

Object.defineProperty(ArraySeq.prototype, "size", {
	get: function() {return this.sequence.length;}
});

function logFive(sequence) {
	sequence.iterate(Math.min(5,sequence.size), console.log.bind(console));
};

// RangeSeq

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
};

function RangeSeq(from, to) {
	this.sequence = range(from, to);
};

RangeSeq.prototype.iterate = function(iterations, action){
	for(var i = 0; i < iterations; i++)
		action(this.sequence[i]);
};

Object.defineProperty(RangeSeq.prototype, "size", {
	get: function() {return this.sequence.length;}
});
*/

// Sequence Interface: Solution 2

// ArraySeq
function ArraySeq(array) {
	this.sequence = array;
	if (this.sequence.length != 0)
		this.currentIndex = 0;
	else
		this.currentIndex = undefined;
};

ArraySeq.prototype.reset = function(){
		if (this.sequence.length != 0)
		this.currentIndex = 0;
	else
		this.currentIndex = undefined;
}; 

ArraySeq.prototype.current = function(){
		return this.sequence[this.currentIndex];
};

ArraySeq.prototype.next = function(){
		var currentIndexValue = this.currentIndex;
		this.currentIndex++;
		if (this.currentIndex == this.sequence.length)
			this.currentIndex = 0;
		return this.sequence[currentIndexValue];
}; 

Object.defineProperty(ArraySeq.prototype, "size", {
	get: function() {return this.sequence.length;}
});

function logFive(sequence) {
	sequence.reset();
	for (var i = 0; i < Math.min(5,sequence.size); i++)
		console.log(sequence.next());
};

// RangeSeq

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
};

function RangeSeq(from, to) {
	this.inner = new ArraySeq(range(from, to));
};

RangeSeq.prototype.reset = function(){
		this.inner.reset();
}; 

RangeSeq.prototype.current = function(){
		return this.inner.current();
};

RangeSeq.prototype.next = function(){
		return this.inner.next();
}; 

Object.defineProperty(RangeSeq.prototype, "size", {
	get: function() {return this.inner.sequence.length;}
});



























