const id = name => document.getElementById(name);

const checkMobile = (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false);

window.onload = function() {

	//signature aleatoire
	let victor = "<a href='https://victor-azevedo.me/'>Victor Azevedo</a>";
	let tahoe = "<a href='https://tahoe.be'>Tahoe Beetschen</a>";

	if (Math.random() > .5) {
		id('signature').innerHTML = `<p>Made in France with ❤️<br> by ${victor} & ${tahoe}`
	} else {
		id('signature').innerHTML = `<p>Made in France with ❤️<br> by ${tahoe} & ${victor}`
	}

    //rajoute la video
	id('insert_video').innerHTML = '<video id="screen" autoplay="autoplay" loop="loop" muted="muted"><source type="video/mp4" src="src/images/notagif.mp4"></video>';
}