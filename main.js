// JavaScript Document

function calc()
{
	//declare required variables
	var numPeople = document.getElementById('numPeople').value;
	var numDays = document.getElementById('numDays').value;
	
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
	var estimatedCost = ((numPeople * 1200)+(numDays * numPeople * 200)+(200 * numDays)+(numPeople * foodMultiplier * 50));
	document.getElementById('result').innerHTML = "Your estimated cost of travel is $" + estimatedCost; 
//Logs Estimated cost to console for debugging
	
	//Runs the airlineCalculator
	airlineCalc();
}


function airlineCalc()
{
	//This Function will use the salary input from the index Japan cost estimator. If no value is entered in the salary section, the program will set the "recommended airline" <p> tag to empty. 
console.log("Beginning airline calculation");
	//Essential Variables
	var salary = document.getElementById('salary').value;
	var airlineResult = document.getElementById('airlineResult');
		//Quick change variables (I made these variables incase i needed to change a value quickly (My salary cut offs for which airline the program will output))
	var salaryCutoffLow = 2000;
	var salaryCutoffHigh = 6000;
	
console.log("Inputed salary is " + salary);
	//If input is omitted or entered as 0 the program will return.
	if (salary === null || salary === 0)
		{
window.alert("ERROR: Your inputted value for salary was not within acceptable bounds, please enter a number greater than 0");
		} else{
			if (salary < salaryCutoffLow)
				{
					//If the salary inputed by the user is deemed low (by me) the program will do this.
window.alert("The program has selected the budget tier option");	
window.alert(airlineResult);
					airlineResult.innerHTML = "We recommend Frontier or Spirit Airlines for your travel.";
					
				}
			if (salary > salaryCutoffLow && salary < salaryCutoffHigh)
				{
					//If the salary inputed by the user is deemed average (by me) the program will do this.
window.alert("The program has selected the medium tier option");
					airlineResult.innerHTML = "We recommend Southest or JetBlue for your travel.";
				}
			if (salary > salaryCutoffHigh)
				{
					//If the salary inputed by the user is deemed well above average (by me) the program will do this.
window.alert("The program has selected the First Class tier");
					airlineResult.innerHTML = "We recommend Emirates or Etihad Airways for your travel.";
				}
		}
}

gatherInfo();
//This function shows the user specifications on their system.
function gatherInfo()
{
	//Declare variables
	var heightP = document.getElementById('height');
	var widthP = document.getElementById('width');
	var appnameP = document.getElementById('appname');
	var appversionP = document.getElementById('appversion');
	var onlineP = document.getElementById('online');
	var platformP = document.getElementById('platform');
	
	
	heightP.innerHTML = "Your Screen Height is " + screen.height;
	widthP.innerHTML = "Your Screen Width is " + screen.width;
	appnameP.innerHTML = "Your web browser is " + navigator.appName;
	appversionP.innerHTML = "Your browser version is " + navigator.appVersion;
	onlineP.innerHTML = "Are you currently connected to the internet? " + navigator.onLine;
	platformP.innerHTML = "Your operating system is " + navigator.platform;
}