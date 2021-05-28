window.onload = function() {
	previewSlideshow(6000) //transition time
	signature()
	browserDetection()
}

function signature() {
	const signature = document.getElementById('signature'),
		victor = "<a href='https://victor-azevedo.me/'>Victor Azevedo</a>",
		tahoe = "<a href='https://tahoe.be'>Tahoe Beetschen</a>",
		concat = (Math.random() > .5 ? `${victor} & ${tahoe}` : `${tahoe} & ${victor}`);

	if (getLanguage() === 'fr') {
		signature.innerHTML = "<p>Fabriqué en France avec ❤️<br> par " + concat;
	} else {
		signature.innerHTML = "<p>Made in France with ❤️<br> by " + concat;
	}
	
}

function getLanguage() {
	if (window.location.href.includes('/fr')) {
		return 'fr'
	} else {
		return 'en'
	}
}

function previewSlideshow(time) {

	/*prepare img pour l'overlay
	cet element n'est pas dans le l'index pour ne pas
	charger 2 images en meme temps*/

	let imgnode = document.createElement("img");
	imgnode.id = "img_below";
	imgnode.setAttribute("alt", "bonjourr screenshot");
	imgnode.setAttribute("draggable", "false");

	if (getLanguage() === 'fr') {
		imgnode.src = "../src/images/preview2.jpg";
	} else {
		imgnode.src = "src/images/preview2.jpg";
	}
	

	document.getElementById("screens").appendChild(imgnode);

	//toggle below opacity (-1s transition)
	let changed = false;
	let interval = setInterval(function() {

		document.getElementById('img_below').style.opacity = (changed ? "0" : "1")
		changed = (changed ? false : true) //toggle

	}, time)
}






function browserDetection() {

	const dl_a = document.getElementById("mainDownload"),
		dl_img = document.getElementById("dl_icon"),
		dl_desc = document.getElementById("dl_desc");

	const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false);

	const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
		isFirefox = typeof InstallTrigger !== 'undefined',
		isSafari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1,
		isChrome = !!window.chrome;

	if (isMobile || isOpera) {
		dl_a.href = "https://online.bonjourr.fr";
		dl_desc.innerText = "Try Bonjourr online";
		dl_img.style.display = "none";
	}
	else if (isFirefox) {
		dl_a.href = "https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/";
		dl_desc.innerText = "Get Bonjourr on Firefox";
		dl_img.src = "src/images/firefox.svg";
	}
	else if (isSafari) {
		dl_a.href = "#safariSection";
		dl_desc.innerText = "How to install on Safari";
		dl_img.src = "src/images/safari.svg";

		const content = '<div id="safariSection"><h2>Bonjourr for Safari</h2><iframe src="https://www.youtube.com/embed/tSe3zX_bL-8" frameborder="0" allowfullscreen></iframe><a id="safariDownload" class="downloadButton" href="dl/Bonjourr.zip"><img id="dl_icon" src="src/images/safari.svg" alt="safari_icon"><span id="dl_desc">Download Bonjourr for Safari</span></a></div>';

		// document.querySelector('main').prepend(content);

		document.querySelector('main').insertAdjacentHTML('afterbegin', content);

		document.getElementById("safariSection").classList.add("visible");
	}
	else if (isChrome) {
		dl_a.href = "https://chrome.google.com/webstore/detail/bonjourr-startpage/dlnejlppicbjfcfcedcflplfjajinajd";
		dl_desc.innerText = "Get Bonjourr on Chrome";
		dl_img.src = "src/images/chrome.svg";
	}
	
	else {
		dl_a.href = "https://online.bonjourr.fr";
		dl_desc.innerText = "Try Bonjourr online";
		dl_img.style.display = "none";
	}
}
