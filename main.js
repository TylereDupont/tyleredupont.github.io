// JavaScript Document

function calc()
{
	//declare required variables
	var numPeople = document.getElementById('numPeople').value;
	var numDays = document.getElementById('numDays').value;
	
	//This formula Estimates as $1200 plane ticket per person and $200 per person per day plus $200 a day for a hotel.
	document.getElementById('result').innerHTML = "Your estimated cost of travel is $" + ((numPeople * 1200) + (numDays * numPeople * 200) + 200); 
}