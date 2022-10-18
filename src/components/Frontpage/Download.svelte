<script>
	import { onMount } from 'svelte'
	import { detect } from 'detect-browser'

	import DesktopIcon from '../../assets/icons/browsers/desktop.svg'
	import ChromeIcon from '../../assets/icons/browsers/chrome.svg'
	import EdgeIcon from '../../assets/icons/browsers/edge.svg'
	import FirefoxIcon from '../../assets/icons/browsers/firefox.svg'
	import SafariIcon from '../../assets/icons/browsers/safari.svg'

	let icon = ''
	let link = ''

	onMount(() => {
		switch (detect().name) {
			case 'firefox': {
				link = 'https://addons.mozilla.org/fr/firefox/addon/bonjourr-startpage/'
				icon = FirefoxIcon
				break
			}

			case 'edge-chromium': {
				link = 'https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid'
				icon = EdgeIcon
				break
			}
			case 'safari': {
				link = 'https://apps.apple.com/fr/app/bonjourr-startpage/id1615431236'
				icon = SafariIcon
				break
			}
			case 'ios': {
				link = '/use-bonjourr#-ios-and-android'
				icon = SafariIcon
				break
			}
			default: {
				link =
					'https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-sta/dlnejlppicbjfcfcedcflplfjajinajd'
				icon = ChromeIcon
			}
		}
	})
</script>

<div class="container">
	<a href="{link}" class="button">
		<div class="icon">
			<img src="{icon}" alt="" style="{'opacity: ' + (icon ? 1 : 0)}" />
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
	a {
		min-width: 200px;
	}

	.container {
		display: flex;
		justify-content: center;
		gap: 1em;
	}

	@media only screen and (max-width: 450px) {
		.container {
			flex-direction: column;
		}
	}
</style>
