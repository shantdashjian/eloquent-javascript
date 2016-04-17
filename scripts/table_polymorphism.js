/*var mountains = [ ["name", "height", "country"],
							["Kilimanjaro", "5895", "Tanzania"],
							["Everest", "8848", "Nepal"],
							["Mount Fuji","3776", "Japan"],
							["Mont Blanc", "4808", "Italy/France"],
							["Vaalserberg", "323", "Netherlands"],
							["Denali", "6168", "United States"],
							["Popocatepetl", "5465", "Mexico"]
						];
*/
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
  module.exports = MOUNTAINS;
  
// Table polymorphism starts here
function rowHeights(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		},0);
	});
}

function colWidths(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}

function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);
	
	function drawLine(blocks, lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join(" ");
	}
	
	function drawRow(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});
		
		return blocks[0].map(function(_, lineNo) {
			return drawLine(blocks, lineNo);
		}).join("\n");
	}
	
	return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; i++)
		result += string;
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
};

TextCell.prototype.minHeight = function() {
	return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};

// Building a 5 X 5 checkerboard
var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 5; j++) {
		if ((j+i) % 2 == 0)
			row.push(new TextCell("##"));
		else
			row.push(new TextCell("  "));
			
	}
	rows.push(row);
}
console.log(drawTable(rows));

// Mountains
function UnderlinedCell(inner) {
 this.inner = inner;
};

UnderlinedCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
	return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height - 1)
				.concat([repeat("-", width)]);
};

function dataTable(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlinedCell(new TextCell(name));
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			var value = row[name];
			// This was changed
			if (typeof value == "number")
				return new RTextCell(String(value));
			else
				return new TextCell(String(value));
		});
	});
	return [headers].concat(body);
}

Object.defineProperty(TextCell.prototype, "heightProp", {
	get: function() {return this.text.length;}
});

function RTextCell(text) {
	TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(repeat(" ", width - line.length) + line);
	}
	return result;
};

console.log(drawTable(dataTable(MOUNTAINS)));

// Table polymorphism ends here

/*
function getNoColumns(array) {
	return array[0].length;
}

function getNoRows(array) {
	return array.length;
}

function columnWidth(array, column) {
	var width = -Infinity;
	
	for(var row = 0; row < getNoRows(array); row++) {
		if(array[row][column].length > width)
			width = array[row][column].length;
	}
	return width;
}

function getEveryColumnWidth(array) {
	var widths = [];
	for(var col = 0; col < getNoColumns(array); col++)
		widths[col] = columnWidth(array, col);
	return widths;
}

function padRight(string, character, size) {
	for (var i = 0; i<size; i++)
		string = string + character;
	return string;
}

function newLine(string) {
	return string + "\n";
}

function addRowToString(array, string, row, everyColumnWidth) {
	for (var i = 0; i < getNoColumns(array); i++) 
		string = string + padRight(array[row][i], ' ', everyColumnWidth[i] 
																		- array[row][i].length + 1);
	string = newLine(string);
	return string;
}

function addLineToString(array, string, everyColumnWidth) {
	for (var i = 0; i < getNoColumns(array); i++) {
		string = string + padRight("", '_', everyColumnWidth[i]);
		string = string + ' ';
	}
	string = newLine(string);
	return string;
}

function toString(array) {
	var everyColumnWidth = getEveryColumnWidth(array);
	var string = "";
	var noColumns = getNoColumns(array);
	var noRows = getNoRows(array);
	string = addRowToString(array, string, 0, everyColumnWidth);
	string = addLineToString(array, string, everyColumnWidth);
	for(var row = 1; row < noRows; row++)
		string = addRowToString(array, string, row, everyColumnWidth);
	return string;
}

var string = toString(array);
console.log(string);
*/


