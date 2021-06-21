function signature() {
	const victor = "<a href='https://victr.me/'>Victor Azevedo</a>",
		tahoe = "<a href='https://tahoe.be'>Tahoe Beetschen</a>",
		concat = Math.random() > 0.5 ? `${victor} & ${tahoe}` : `${tahoe} & ${victor}`,
		texte = getLanguage() === 'fr' ? 'Fabriqué en France avec ❤️<br> par' : 'Made in France with ❤️<br> by'

	document.querySelector('#signature').innerHTML = `<p>${texte} ${concat}</p>`
}

function getLanguage() {
	return window.location.href.includes('/fr') ? 'fr' : 'en'
}

function previewSlideshow(time) {
	/*prepare img pour l'overlay
	cet element n'est pas dans le l'index pour ne pas
	charger 2 images en meme temps*/

	let imgnode = document.createElement('img')
	imgnode.id = 'img_below'
	imgnode.setAttribute('alt', 'bonjourr screenshot')
	imgnode.setAttribute('draggable', 'false')

	if (getLanguage() === 'fr') imgnode.src = '../'
	imgnode.src += 'src/images/preview2.jpg'

	document.getElementById('screens').appendChild(imgnode)

	//toggle below opacity (-1s transition)
	let changed = false
	setInterval(function () {
		document.getElementById('img_below').style.opacity = changed ? '0' : '1'
		changed = !changed
	}, time)
}

function browserDetection() {
	function safariSection() {
		let content =
			'<div id="safariSection"><h2>Bonjourr for Safari</h2><iframe src="https://www.youtube.com/embed/tSe3zX_bL-8" frameborder="0" allowfullscreen></iframe><a id="safariDownload" class="downloadButton" href="https://github.com/victrme/Bonjourr/releases/"><img id="dl_icon" src="src/images/safari.svg" alt="safari_icon"><span id="dl_desc">Download Bonjourr for Safari</span></a></div>'

		if (isFrench) {
			content = content.replaceAll(' for ', ' sur ').replace('Download ', 'Télécharger ').replace('src/', '../src/')
		}

		document.querySelector('main').insertAdjacentHTML('afterbegin', content)
		document.getElementById('safariSection').classList.add('visible')
	}

	function setDownloadIcon(from) {
		downloadImage.src = `${isFrench ? '../' : ''}src/images/${from}.svg`
	}

	const isFrench = window.location.href.includes('/fr'),
		downloadButton = document.getElementById('mainDownload'),
		downloadImage = document.getElementById('dl_icon'),
		downloadDesc = document.getElementById('dl_desc'),
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
		isFirefox = typeof InstallTrigger !== 'undefined',
		isSafari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1,
		isChrome = !!window.chrome

	const which = {
		href: 'https://online.bonjourr.fr',
		desc: 'Try Bonjourr Online',
		icon: 'chrome',
	}

	if (isFirefox) {
		which.href = 'https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/'
		which.desc = 'Get Bonjourr on Firefox'
		which.icon = 'firefox'
	}

	if (isChrome) {
		which.href = 'https://chrome.google.com/webstore/detail/bonjourr-startpage/dlnejlppicbjfcfcedcflplfjajinajd'
		which.desc = 'Get Bonjourr on Chrome'
	}

	if (isSafari) {
		safariSection()
		downloadButton.href = '#safariSection'
		which.desc = 'How to install on Safari'
		which.icon = 'safari'
	}

	if (isMobile || isOpera) {
		which.href = 'https://online.bonjourr.fr'
		which.desc = 'Try Bonjourr Online'
		downloadImage.style.display = 'none'
	}

	if (isFrench) {
		which.desc = which.desc
			.replace('Get ', 'Obtenir ')
			.replace('Try ', 'Essayer')
			.replace('How to install on', 'Installer sur')
	}

	downloadButton.href = which.href
	downloadDesc.innerText = which.desc
	setDownloadIcon(which.icon)

	document.querySelector('.DLmenu').style.opacity = '1'
}

window.onload = function () {
	previewSlideshow(6000)
	signature()
	browserDetection()
}
