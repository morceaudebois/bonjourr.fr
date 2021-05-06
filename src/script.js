window.onload = function() {
	previewSlideshow(6000) //transition time
	signature()
}

function signature() {
	const signature = document.getElementById('signature'),
		victor = "<a href='https://victor-azevedo.me/'>Victor Azevedo</a>",
		tahoe = "<a href='https://tahoe.be'>Tahoe Beetschen</a>",
		concat = (Math.random() > .5 ? `${victor} & ${tahoe}` : `${tahoe} & ${victor}`);

	signature.innerHTML = "<p>Made in France with ❤️<br> by " + concat;
}

function previewSlideshow(time) {

	/*prepare img pour l'overlay
	cet element n'est pas dans le l'index pour ne pas
	charger 2 images en meme temps*/

	let imgnode = document.createElement("img");
	imgnode.id = "img_below";
	imgnode.setAttribute("alt", "bonjourr screenshot");
	imgnode.setAttribute("draggable", "false");
	imgnode.src = "src/images/preview2.jpg";

	document.getElementById("screens").appendChild(imgnode);

	//toggle below opacity (-1s transition)
	let changed = false;
	let interval = setInterval(function() {

		document.getElementById('img_below').style.opacity = (changed ? "0" : "1")
		changed = (changed ? false : true) //toggle

	}, time)
}