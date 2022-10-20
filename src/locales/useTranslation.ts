import type { AstroGlobal } from 'astro'
import FrenchDict from './fr.json'

export default function useTranslation(Astro: AstroGlobal) {
	function locale() {
		return Astro.url.pathname.substring(1, 3)
	}

	function isFrench() {
		// Works because translated version
		// of website is https://[domain]/fr/[whatever]
		return locale() === 'fr'
	}

	function t(text: string) {
		if (isFrench() && text in FrenchDict) {
			// text is a key in the translation dictionary
			return FrenchDict[text as keyof typeof FrenchDict]
		}

		return text
	}

	return { t, isFrench, locale }
}
