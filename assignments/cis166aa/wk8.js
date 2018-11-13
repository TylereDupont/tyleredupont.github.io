var list = ["Bananas ", "Eggs ", "Bread ", "Milk "];
var outputList = document.getElementsByClassName("shopping-list-item");
var xButtons = document.getElementsByClassName("shopping-list-x-button");
var textInputValue = document.getElementById("text-input").value;
//Functions to run instantly
reloadList();

function addItem (item){
	if (list.length == outputList.length){
		window.alert("List full");
	}else {
	list.push(item);
	reloadList();
	}
}
function removeItem(index, amount){
	list.splice(index, amount);
	reloadList();
}
function reloadList(){
	//First Resets all the possible output paragraphs
	for (var i = 0; i < outputList.length; i++) {
		outputList[i].innerHTML = "";
		xButtons[i].style.display = 'none';

	}
	//Then sets values to the output paragraphs, and sets their display to block
	for (var i = 0; i < list.length; i++) {
		outputList[i].display = 'block';
		outputList[i].innerHTML = list[i];
		xButtons[i].style.display = 'block';

		console.log(outputList[i] + i);
	}
	//Update string list of all items
	var stringOutput = document.getElementById('string-output');
	//Reset string out to empty
	stringOutput.innerHTML = "Your list "
	for (var i = 0; i <list.length; i++) {
		stringOutput.innerHTML += list[i];
	}
}
