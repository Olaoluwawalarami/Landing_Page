var button = document.getElementById('enter');
var message = document.getElementById("message");
var ul = document.querySelector("#textnode");

function inputLength() {
	return message.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(message.value));
	ul.appendChild(li);
	message.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

message.addEventListener("keypress", addListAfterKeypress);