function getTargetColValues(startRow, targetCol) {
	var mySheet = SpreadsheetApp.getActiveSheet();
	var rows = mySheet.getLastRow();
	var data = [];
	var i;
	for (i = startRow; i <= rows; i++) {
		var range = mySheet.getRange(i, targetCol);
		var values = range.getValues();
		data.push(values[0][0]);
	}
	return data;
}
