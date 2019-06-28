// Signature aléatoire
$(document).ready(function() {
    var quotes = new Array("<p>Made in France with ❤️<br> by <a href='https://victor-azevedo.me/'>Victor Azevedo</a> & <a href='https://tahoe.be'>Tahoe Beetschen</a></p>", "<p>Made in France with ❤️<br> by <a href='https://tahoe.be'>Tahoe Beetschen</a> & <a href='https://victor-azevedo.me/'>Victor Azevedo</a></p>");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.signature').append(quotes[randno]);
});


grecaptcha.ready(function() {

	grecaptcha.execute('6LfLHqcUAAAAAO0PzSW4SEPridOLlAQFWSOjl-eE', {action: 'homepage'}).then(function(token) {

	  document.getElementById("token").value = token;
	});

});

window.onload = function() {
	 document.getElementById('insert_video').innerHTML = '<video id="screen" autoplay="autoplay" loop="loop" muted="muted"><source type="video/mp4" src="src/images/notagif.mp4"></video>';
}

function CheckMobile() {
	var Mobile = true;

	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		return true;
	}
	else {
		return false;
	}
}

function AllowOnline() {
	var isChecked = CheckMobile();

	if (isChecked === false) {
		window.open("https://online.bonjourr.fr"); 
  		
	}
	else {
  		alert("Bonjourr is not available on mobile devices. You can use it on your computer.");
	}
}

// if (checkMobile()) alert("Pas dispo sur mobile");
// ou 
// (checkMobile() ? alert("Pas dispo sur mobile") : window.open(url))
