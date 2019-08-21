function getAddrColumn() {
	var mySheet = SpreadsheetApp.getActiveSheet();
	var lastCol = mySheet.getLastColumn();
	var i;
	for (i = 1; i <= lastCol; i++) {
		var range = mySheet.getRange(1, i);
		var values = range.getValues();
		if (values[0][0] === "メールアドレス") {
			return i;
		}
	}
	return 0;
}
