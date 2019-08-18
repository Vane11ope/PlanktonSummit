function sendMail(name, from, to, subject, body) {
	var options = {
		name: name, from: from
	};
	GmailApp.sendEmail(to, subject, body, options);
}
