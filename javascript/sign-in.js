var database = [
	{
		username: "temmy",
		password: "123456"
	},
	{
		username: "muri68@gmail.com",
		password: "098765"
	}
];

/**var newsFeed = [
	{
		htmlPage: "home.html"
	},
	{
		username: "Maj. Kudaisi",
		timeline: "In my opinion, Pte. Temmy is trying her best to be a good soldier"
	}
];*/


function validateUser(username, password) {
	for(var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		}
	}
	return false
}


function signIn(username, password) {
	
	if (validateUser(username, password)) {
		window.location.assign('home.html');
	} else {
		alert("Wrong username or password! Please sign in.")
	}
}


var userNamePrompt = prompt("What's your username? ");
var passwordPrompt = prompt("What's your password? ");

signIn(userNamePrompt, passwordPrompt);