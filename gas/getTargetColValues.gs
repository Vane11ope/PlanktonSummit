function myFunction() {
	var mySheet = SpreadsheetApp.getActiveSheet();
	var rows = mySheet.getLastRow();
	var startRow = 2;
	var targetCol = 3;
	var i;
	for (i = start; i < rows; i++) {
		var range = mySheet.getRange(i, targetCol);
		var values = range.getValues();
		var value = values[0][0];
		Logger.log(value);
	}
}
