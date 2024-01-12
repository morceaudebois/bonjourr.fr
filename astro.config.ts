import { defineConfig, squooshImageService } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://docs.astro.build/en/guides/integrations-guide/sitemap/#i18n
const sitemapOptions = {
	i18n: {
		defaultLocale: 'en',
		locales: {
			en: 'en',
			fr: 'fr',
		},
	},
}

export default defineConfig({
	site: 'https://bonjourr.fr',
	integrations: [sitemap(sitemapOptions)],
	image: {
		service: squooshImageService(),
	},
})
