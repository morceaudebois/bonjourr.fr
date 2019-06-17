// Signature aléatoire
$(document).ready(function() {
    var quotes = new Array("<p>Made in France with ❤️<br> by <a href='https://victor-azevedo.me/'>Victor Azevedo</a> & <a href='https://tahoe.be'>Tahoe Beetschen</a></p>", "<p>Made in France with ❤️<br> by <a href='https://tahoe.be'>Tahoe Beetschen</a> & <a href='https://victor-azevedo.me/'>Victor Azevedo</a></p>");
    var randno = Math.floor(Math.random()*(quotes.length));
    $('.signature').append(quotes[randno]);
    console.log(randno);
});


// grecaptcha.ready(function() {

// 	grecaptcha.execute('6LfLHqcUAAAAAO0PzSW4SEPridOLlAQFWSOjl-eE', {action: 'homepage'}).then(function(token) {

// 	  document.getElementById("token").value = token;
// 	});

// });


