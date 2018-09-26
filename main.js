// JavaScript Document

function calc()
{
	//declare required variables
	var numPeople = document.getElementById('numPeople').value;
	var numDays = document.getElementById('numDays').value;
	
	var peopleImg = [document.getElementById('person1'), 	document.getElementById('person2'), document.getElementById('person3')];
	
	//Prepare Food Budget multiplier
	var foodMultiplier  = 0;
	if (document.getElementById('foodBudget1').checked)
		{
			foodMultiplier = 1;
		}
	if (document.getElementById('foodBudget2').checked)
		{
			foodMultiplier = 2;
		}
	if (document.getElementById('foodBudget3').checked)
		{
			foodMultiplier = 4;
		}
	//This formula Estimates as $1200 plane ticket per person and $200 per person per day plus $200 a day for a hotel plus food costs.
	document.getElementById('result').innerHTML = "Your estimated cost of travel is $" + ((numPeople * 1200)+(numDays * numPeople * 200)+(200 * numDays)+(numPeople * foodMultiplier * 50)); 
	
	
	//This section is for displaying the people images correctly
	//Declare Variables
	
}
