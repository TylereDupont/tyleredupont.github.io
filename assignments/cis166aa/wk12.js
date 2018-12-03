//Ask for location info usage if yes run showLocation else, print error message to console
var position = navigator.geolocation.getCurrentPosition(showLocation, denied);



function showLocation (position){
	var currentLat = position.coords.latitude;
	var currentLon = position.coords.longitude;
	//Setup map options for google maps api
	var mapOptions = {
		center: new google.maps.LatLng(currentLat, currentLon),
		zoom: 13
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	//Update P tags with latitude longitude and altitude
	var longitude = document.getElementById('longitude');
	var latitude = document.getElementById('latitude');
	var altitude = document.getElementById('altitude');
	longitude.innerHTML = "Your longitude: " + position.coords.longitude;
	latitude.innerHTML = "Your latitude: " + position.coords.latitude;
	//Check if altitude is null. If it is change string to not say "null"
	if (position.coords.altitude === null){
		altitude.innerHTML = "Your altitude: Requires mobile device";
	} else {
		altitude.innerHTML = "Your altitude: " + position.coords.altitude + " M";
	}
	
}
function denied (){
	console.log("Error location allowance denied");
}
//Show users their information
//Gather P tag variables seperately incase they need to change later
var heightP = document.getElementById('height');
var widthP = document.getElementById('width');
var appnameP = document.getElementById('appname');
var appversionP = document.getElementById('appversion');
var onlineP = document.getElementById('online');
var platformP = document.getElementById('platform');

//Apply values to paragraph labels
heightP.innerHTML = "Your Screen Height is " + screen.height;
widthP.innerHTML = "Your Screen Width is " + screen.width;
appnameP.innerHTML = "Your web browser is " + navigator.appName;
appversionP.innerHTML = "Your browser version is " + navigator.appVersion;
onlineP.innerHTML = "Are you currently connected to the internet? " + navigator.onLine;
platformP.innerHTML = "Your operating system is " + navigator.platform;

//Wk 12 Area
//Increase font size function uses index as an argument so I can use one function instead of 5
function ChangeFontSize (index){
	//Change h4 tag font size to index value * 15
	$("h4").css("font-size", index * 18);
	//Change p tag font size to index value * 10
	$("h4").next().css("font-size", index * 10);
}


var inverted = false;
//Save original background color in a variable so that if it changes later i dont need to change it here too.
var originalBGColor = $("body").css("background-color");
//Changes the background color and font color of the last section on the html doc
function InvertColors(){
	//Check if section is already inverted using boolean. If not invert, if it is set back to normal.
	if (inverted){
		//Select 
		$("body").css("background-color", originalBGColor);
		$("body").css("color", "black");
		inverted = false;
	} else {
		$("body").css("background-color", "black");
		$("body").css("color", "white");
		inverted = true;
	}
}