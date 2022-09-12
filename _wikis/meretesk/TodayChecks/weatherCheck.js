function weatherCheck() {
	const weatherNode = document.getElementById("weather");
	weatherNode.innerText = " "
	var windVar = wind[Math.floor(Math.random()*wind.length)];
	var rainVar = precipitation[Math.floor(Math.random()*precipitation.length)];
	var tempVar = temperature[Math.floor(Math.random()*temperature.length)];
	weatherNode.innerText += "Today it is " + tempVar + ", " + rainVar + ", and " + windVar;
}