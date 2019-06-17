<!DOCTYPE html>
<html>
	<head>
		<title>Your message has been sent</title>
		<meta charset="utf-8"></meta>

		<style>

			@font-face {
			    font-family: 'sf_pro_displaylight';
			    src: url('src/fonts/sf-pro-display-light-webfont.woff2') format('woff2'),
			         url('src/fonts/sf-pro-display-light-webfont.woff') format('woff');
			    font-weight: normal;
			    font-style: normal;
			}

			body {
				
				color: white;
			    font-family: sf_pro_displaylight, Helvetica Neue, Helvetica, Arial;
			}

			.background {
				z-index: -1;
				position: fixed;
				width: 100vw;
				height: 100vh;
				background-image: url("src/images/ardiss-hutaff-unsplash.jpg");
				background-size: cover;
				background-position: center center;
				filter: blur(30px) brightness(.7);
				transform: scale(1.25); 
			}

			.redirection {
				width: 90%;
				margin: auto;
				height: 100vh;
				display: flex;
				justify-content: center;
				align-items: center;				
			}
						
		</style>
	</head>

	<body>
		
		<div class="background"></div>

		<div class="redirection">
			<h2>Your message has been sent. You'll be redirected to the Bonjourr website.</h2>
		</div>

		<?php


		    // Ma clé privée
		  $secret = "6LfLHqcUAAAAALmzB362BenKdu5nFcW4ud7QHbey";
		  // Paramètre renvoyé par le recaptcha
		  $response = $_POST['g-recaptcha-response'];
		  // On récupère l'IP de l'utilisateur
		  $remoteip = $_SERVER['REMOTE_ADDR'];

		  $api_url = "https://www.google.com/recaptcha/api/siteverify?secret=" 
		      . $secret
		      . "&response=" . $response
		      . "&remoteip=" . $remoteip ;

		  $decode = json_decode(file_get_contents($api_url), true);

		  if ($decode['success'] == true) {
		    
		    $name = $_POST["name"];
		    $mail = $_POST["mail"];
		    $subject = $_POST["subject"];
		    $message = $_POST["message"];

		    $formattedMessage = 

		    "<div>
		    <p>Message sent from the Bonjourr website form.</p>
		      <p>Nom : $name</p>
		      <p>Email : $mail</p>
		      <p>Message : <br><br>$message</p>
		    </div>";

		    // send email
		    mail("mail@tahoe.be", $subject, $formattedMessage, "Content-type: text/html; charset=iso-8859-1");
		  }
		?>
		<script>

		setTimeout(function() {
			window.location.replace("https://bonjourr.fr/");
		}, 4000);

		</script>


	</body>
</html>

