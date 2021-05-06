<?php

	ob_start();

    function sanitizeString(string $s) {
    	return filter_var($s, FILTER_SANITIZE_STRING);
    }

    function validateMail(string $s) {

    	$success = filter_var($s, FILTER_VALIDATE_EMAIL);
    	return ($success ? $s : false);
    }

    function randomHash() {

    	$hash = "";

    	for ($i=0; $i < 8; $i++) { 
    		
    		$hash = $hash . chr(mt_rand(97, 122));
    	}

    	return $hash;
    }
    
    $err = [];
    $hash = randomHash();

    if ($_POST["from"] == "goodbye") {
    	
    	$from = "Désinstallation Bonjourr";

    } else if ($_POST["from"] == "goodbye_chrome") {
    	
    	$from = "Désinstallation Bonjourr Chrome";

    } else if ($_POST["from"] == "goodbye_firefox") {
    	
    	$from = "Désinstallation Bonjourr Firefox";
        $mail = validateMail(sanitizeString($_POST["mail"]));

    } else if ($_POST["from"] == "contact") {

    	$from = "Contact Bonjourr";
    	
    	if (!empty($_POST["name"]) && !empty($_POST["subject"])) {

	    	$name = sanitizeString($_POST["name"]);
	   	 	$subject = sanitizeString($_POST["subject"]);

	    } else {
	    	array_push($err, "All the fields have not been filled");
	    }

    } else {

    	array_push($err, "Can't decide where the form come from");
    }


    if (!empty($_POST["mail"])) {
    	$mail = validateMail(sanitizeString($_POST["mail"]));
    	if (!$mail) array_push($err, "Mail is not correct");
    }

    if (!empty($_POST["message"])) {

    	$message = sanitizeString($_POST["message"]);
    	if (strlen($message) < 20) array_push($err, "Message too short");

    } else {

    	array_push($err, "Message has not been filled");
    }

    $intro = ($_POST["from"] == "contact" ? "$hash - $name ( $mail )" : "$hash");

    $formattedMessage = 

		"<div>
			<span>$intro</span>
            <p>$mail</p>
			<p><b>$subject</b></p>
			<p>$message</p>
		</div>";

	$to = "mail@tahoe.be";
	$header = "Content-type: text/html; charset=iso-8859-1";

    if (count($err)) {
    	
    	$title = "Error";

    } else {

    	//fake 'message sent' if it contains an URL
    	$reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
    	$hasURL = preg_match($reg_exUrl, $text);
    	
    	if (!$hasURL) mail($to, $from, $formattedMessage, $header);

    	$title = "Message sent !";
    }
?>

<!DOCTYPE html>
<html>
	<head>
		<title><?= $title ?></title>
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

			<?php if (empty($err)): ?>
			
				<h2>Message Sent - You'll be redirected to the Bonjourr website.</h2>
		    	
			<?php endif; ?>

			<?php if (count($err)): ?>

				<h2>Error - You'll be redirected to the Bonjourr website.</h2>
				<p><?= join(', ', $err) ?></p>

			<?php endif; ?>
			
		</div>

		
		<script>

			setTimeout(function() {
				window.location.replace("https://bonjourr.fr/");
			}, 6000);

		</script>

	</body>

	<?php

	$content = ob_get_clean();
	echo $content

	?>
</html>

