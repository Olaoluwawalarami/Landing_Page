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

var userNamePrompt = prompt("What's your username? ");
var passwordPrompt = prompt("What's your password? ");

function signIn(user, pass) {
	if (user === database[0].username || database[1].username &&
		pass === database[0].password || database[1].password) {
		window.location.assign('home.html');
	} else {
		alert("Wrong username or password!");
	}
}

signIn(userNamePrompt, passwordPrompt);