<!DOCTYPE html>
<html>
	<head>
		<title>Your message has been sent</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link rel="icon" href="src/images/bonjourr_favicon.png" />
		<link rel="apple-touch-icon" href="src/images/bonjourr_favicon.png" />
		<link rel="stylesheet" href="src/style.min.css" />
	</head>

	<body>
		
		<div class="background">
			<img src="src/images/ardiss-hutaff-unsplash.jpg" alt="bonjourr_background">
		</div>

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

			function test_input($data) {
				$data = trim($data);
				$data = stripslashes($data);
				$data = htmlspecialchars($data);
				return $data;
			}

		  if ($decode['success'] == true) {
		    
		    $name = test_input($_POST["name"]);
		    $mail = test_input($_POST["mail"]);
		    $subject = test_input($_POST["subject"]);
		    $message = test_input($_POST["message"]);

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

