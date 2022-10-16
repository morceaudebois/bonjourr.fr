<script>
	import { detect } from 'detect-browser'
	import '../styles/_global.scss'

	import DesktopIcon from '../assets/icons/browsers/desktop.svg'
	import ChromeIcon from '../assets/icons/browsers/chrome.svg'
	import EdgeIcon from '../assets/icons/browsers/edge.svg'
	import FirefoxIcon from '../assets/icons/browsers/firefox.svg'
	import SafariIcon from '../assets/icons/browsers/safari.svg'

	const platforms = {
		firefox: {
			link: 'https://addons.mozilla.org/fr/firefox/addon/bonjourr-startpage/',
			icon: FirefoxIcon,
		},
		chrome: {
			link: 'https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-sta/dlnejlppicbjfcfcedcflplfjajinajd',
			icon: ChromeIcon,
		},
		'edge-chromium': {
			link: 'https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid',
			icon: EdgeIcon,
		},
		safari: {
			link: 'https://apps.apple.com/fr/app/bonjourr-startpage/id1615431236',
			icon: SafariIcon,
		},
		ios: {
			link: '/use-bonjourr#-ios-and-android',
			icon: SafariIcon,
		},
	}

	let icon = ''
	let link = ''

	$: {
		const browserName = detect().name

		if (browserName in platforms) {
			icon = platforms[browserName].icon
			link = platforms[browserName].link
		}
	}
</script>

<div class="container">
	<a href="{link}" class="button">
		<div class="icon">
			{#if link && icon}
				<img src="{icon}" alt="" />
			{/if}
		</div>
		<span>
			<slot name="Download" />
		</span>
	</a>

	<a href="https://online.bonjourr.fr" rel="noreferrer" class="button">
		<img src="{DesktopIcon}" class="icon" alt="" />
		<span>
			<slot name="Online" />
		</span>
	</a>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
	}

	.button:first-child {
		margin-right: 1em;
	}

	a.button {
		padding-left: 1.5em;
		padding-right: 1.5em;
		white-space: nowrap;
	}

	@media only screen and (max-width: 450px) {
		.container {
			flex-direction: column;
		}
	}
</style>
