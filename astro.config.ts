import { defineConfig, sharpImageService } from "astro/config"
import expressiveCode from "astro-expressive-code"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
	site: "https://bonjourr.fr",
	devToolbar: {
		enabled: false,
	},
	image: {
		service: sharpImageService(),
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en",
					fr: "fr",
				},
			},
		}),
		expressiveCode({
			themes: ["catppuccin-latte", "ayu-dark"],
		}),
	],
})
