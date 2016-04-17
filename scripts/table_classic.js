var array = [ ["name", "height", "country"],
							["Kilimanjaro", "5895", "Tanzania"],
							["Everest", "8848", "Nepal"],
							["Mount Fuji","3776", "Japan"],
							["Mont Blanc", "4808", "Italy/France"],
							["Vaalserberg", "323", "Netherlands"],
							["Denali", "6168", "United States"],
							["Popocatepetl", "5465", "Mexico"]
						];

function getNoColumns(array) {
	return array[0].length;
}

function getNoRows(array) {
	return array.length;
}

function columnWidth(array, column) {
	var columnArray = array.map(function(row) {return row[column];});	
	var width = columnArray.reduce(function(max, row) {
		return Math.max(max, row.length);
	}, 0);
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



