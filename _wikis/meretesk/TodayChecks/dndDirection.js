function determineDirection() {
	const lostNode = document.getElementById("lost");
	lostNode.innerText = " "
	var direction = veeredDirection[Math.floor(Math.random()*veeredDirection.length)];
	lostNode.innerText += "They are " + direction;
	
}