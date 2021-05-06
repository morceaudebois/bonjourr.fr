<!DOCTYPE html>
<html lang="fr">

<?php include '../config.php' ?>

<head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-136684433-3"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-136684433-3');
	</script>

	<title>Bonjourr · Page d'accueil minimaliste pour Chrome et Firefox</title>
	<meta name="description" content="Améliorez votre expérience de navigation avec Bonjourr, une superbe page d'accueil personnalisable inspirée par iOS." />
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:image" content="../src/preview.jpg">
	<meta property="twitter:image" content="../src/images/preview.jpg">

	<link rel="stylesheet" href="../src/style.css">
	
	<link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
	<link rel="mask-icon" href="../safari-pinned-tab.svg" color="#d58e5b">
	<meta name="theme-color" content="#ffffff">

	<script src="../src/script.js" defer></script>

</head>
<body>

	<div class="background">
		<img src="../src/images/ardiss-hutaff-unsplash.jpg" alt="bonjourr_background">
	</div>

	<div class="content">

		<nav>
			<a href="#contact" title="Contact us">Contact</a>

			<a href="#donate" title="Support our work">Faire un don</a>

			<a href="https://online.bonjourr.fr" title="Use the online version of Bonjourr" id="online">En ligne</a>

			<a href="https://twitter.com/BonjourrTeam" title="Get our latest news">
				<img src="../src/images/twitter.svg" alt="twitter icon">
			</a>

			<a href="https://github.com/victorazevedo-me/Bonjourr">
				<img src="../src/images/github.svg" alt="github icon">
			</a>
			
			<a href="http://instagram.com/getbonjourr">
				<img src="../src/images/instagram.svg" alt="instagram icon">
			</a>
		</nav>

		<div class="hero">
			<div class="title">
				<img src="../src/images/icon.png" srcset="../src/images/icon_2x.png 2x" class="icon" alt="bonjourr logo">
				<h1>Bonjourr</h1>
				<br>
				<p>Page d'accueil personnalisable pour<br>navigateur inspirée par iOS</p>
			</div>

			<div id="screens">
				<img src="../src/images/preview.jpg" alt="bonjourr screenshot" draggable="false">
			</div>
		</div>

		<div class="DLmenu">

			<?php 
			switch (getBrowser()) {
				case 'Google Chrome':
					echo '<a id="mainDownload" class="downloadButton" href="https://chrome.google.com/webstore/detail/bonjourr-startpage/dlnejlppicbjfcfcedcflplfjajinajd"><img id="dl_icon" src="../src/images/chrome.svg" alt="chrome_icon"><span id="dl_desc">Télécharger pour Chrome</span></a>';
					break;
				case 'Mozilla Firefox':
					echo '<a id="mainDownload" class="downloadButton" href="https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/"><img id="dl_icon" src="../src/images/firefox.svg" alt="firefox_icon"><span id="dl_desc">Télécharger pour Firefox</span></a>';
					break;
				case 'Safari':
					echo '<a id="mainDownload" class="downloadButton" href="#safariSection"><img id="dl_icon" src="../src/images/safari.svg" alt="safari_icon"><span id="dl_desc">Installer sur Safari</span></a>';
					break;
				default:
				echo '<a id="mainDownload" class="downloadButton" href="https://online.bonjourr.fr"><span id="dl_desc">Essayer Bonjourr en ligne</span></a>';
			} ?>

			<a href="https://github.com/victorazevedo-me/Bonjourr/blob/master/README.md#install">Autres navigateurs</a>
		</div>
	</div>
	
	<main>
		
		<?php if (getBrowser() === 'Safari') { ?>
		<div id="safariSection">
			<h2>Bonjourr for Safari</h2>

			<iframe src="https://www.youtube.com/embed/tSe3zX_bL-8" frameborder="0" allowfullscreen></iframe>

			<a id="safariDownload" class="downloadButton" href="../dl/Bonjourr.zip"><img id="dl_icon" src="../src/images/safari.svg" alt="safari_icon"><span id="dl_desc">Download Bonjourr for Safari</span></a>
		</div>
		<?php } ?>

		<div id="contact">
			<h2>Contactez-nous</h2>

			<form id="contactform" method="POST" action="../formulaire.php">

				<div class="form_desc">
					<input type="text" name="name" placeholder="Nom" required>
					<input type="email" name="mail" placeholder="Adresse email" required>
					<input type="text" name="subject" placeholder="Sujet" required>
				</div>
				
				<textarea name="message" placeholder="Une question ou un bug à reporter ? N'hésitez pas à nous écrire ici." required></textarea>

				<input type="hidden" name="from" value="contact">

				<div class="envoyer">
					<input type="submit" value="Envoyer le message" name="send">
				</div>
			</form>
		</div>

		<div id="donate">
			<div>
				<h2>Faire un don</h2>
				<p>Si vous souhaitez soutenir notre travail, vous pouvez parler de Bonjourr à vos amis ou faire un don via les boutons ci-dessous.</p>
				
				<div class="buttons">
					<a href="https://www.paypal.com/pools/c/8fwJxNvvAJ" title="Donner via PayPal">
						<div class="donate_button" id="paypal">
							<img src="../src/images/paypal.svg" alt="paypal logo">
						</div>
					</a>

					<a href="https://commerce.coinbase.com/checkout/cb334f57-c5eb-48e5-9204-92c8c43af001" title="Donate in crypto">
						<div class="donate_button" id="crypto">
							<p>Donner en Crypto</p>
						</div>
					</a>
				</div>
			</div>

			<div id="privacy">
				<div>
					<h2>Confidentialité</h2>
					<p>Bonjourr synchronise vos réglages avec votre compte Google Chrome ou Firefox. Nous ne collectons aucune donnée.Bonjourr requière deux permissions :</p>
					<li>Le stockage du navigateur, pour sauvegarder vos arrière-plans.</li>
					<li>La géolocalisation, pour afficher une météo plus précise.</li>
				</div>
			</div>
		</div>
		

	</main>

	<div id="signature"></div>
</body>
</html>
