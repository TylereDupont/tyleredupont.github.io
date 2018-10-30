function calculateTime ()
{
	var input = document.getElementById('date').value;
	var inputDate = new Date(input);
	var today = new Date();

	//This calculation will tell me the miliseconds between today and the inputed date
	var msBetween = today.getTime() - inputDate.getTime();
	//Convert miliseconds to days
	var daysDifference = msBetween/(1000*60*60*24);
	//Convert days to years, and save remainder for next calculation
	var yearsPassed = Math.floor(daysDifference/365);
		var remainder = daysDifference % 365;
	//Convert remainder to months (Divisions of 31) and pass on remainder variable to daysPassed
	var monthsPassed = Math.floor(remainder/31);
		remainder = remainder % 31;
	var daysPassed = Math.round(remainder);

	document.getElementById('output').innerHTML = "Years: " + yearsPassed + " Months: " + monthsPassed + " Days: " + daysPassed;
}