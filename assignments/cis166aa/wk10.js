var position = navigator.geolocation.getCurrentPosition(showLocation, denied);

function showLocation (position){
	var currentLat = position.coords.latitude;
	var currentLon = position.coords.longitude;
	var mapOptions = {
		center: new google.maps.LatLng(currentLat, currentLon),
		zoom: 11
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	//Update P tags with latitude longitude and altitude
	var longitude = document.getElementById('longitude');
	var latitude = document.getElementById('latitude');
	var altitude = document.getElementById('altitude');
	longitude.innerHTML = "Your longitude: " + position.coords.longitude;
	latitude.innerHTML = "Your latitude: " + position.coords.latitude;

	if (position.coords.altitude === null){
		altitude.innerHTML = "Your altitude: Requires mobile device";
	} else {
		altitude.innerHTML = "Your altitude: " + position.coords.altitude;
	}
	
}
function denied (){
	console.log("Error location allowance denied");
}
//Show users their information
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
