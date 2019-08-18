function getTargetColValues(startRow, targetCol) {
	var mySheet = SpreadsheetApp.getActiveSheet();
	var rows = mySheet.getLastRow();
	var i;
	for (i = startRow; i <= rows; i++) {
		var range = mySheet.getRange(i, targetCol);
		var values = range.getValues();
		var value = values[0][0];
		Logger.log(value);
	}
}
