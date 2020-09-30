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

var newsFeed = [
	{
		htmlPage: "home.html"
	},
	{
		username: "Maj. Kudaisi",
		timeline: "In my opinion, Pte. Temmy is trying her best to be a good soldier"
	}
];


function validUser(username, password) {
	for(var i=0; i < database.lenght; i++) {
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		}
	}
	return false
}


function signIn(username, password) {
	
	if (validUser(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Wrong username or password!");
	}
}


var userNamePrompt = prompt("What's your username? ");
var passwordPrompt = prompt("What's your password? ");

signIn(userNamePrompt, passwordPrompt);