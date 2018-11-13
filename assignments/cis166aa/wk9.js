//Gather neccessary variables
	//Inputs
var nameInput = document.getElementById("name").value;
var emailInput = document.getElementById("email").value;
var messageInput = document.getElementById("message").value;
	//Outputs
var nameOutput = document.getElementById("name-output");
var emailOutput = document.getElementById("email-output");
var messageOutput = document.getElementById("message-output");

//Main function to be ran by form button
function convert(){
	//Take input from the name/email/message Inputs and use .replace to remove any unnecessary chracters
	nameOutput.innerHTML = nameInput.replace(/\W/g, '');
	emailOutput.innerHTML = emailInput;
	messageOutput.innerHTML = messageInput.replace(/\W/g, '');
}
