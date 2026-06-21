import { defineConfig, sharpImageService } from "astro/config"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import starlight from "@astrojs/starlight"

export default defineConfig({
	site: "https://bonjourr.fr",
	devToolbar: {
		enabled: false,
	},
	image: {
		service: sharpImageService(),
	},
	integrations: [
		icon(),
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en",
					fr: "fr",
				},
			},
		}),
		starlight({
			title: "My delightful docs site",
			disable404Route: true,
			expressiveCode: {
				themes: ["catppuccin-latte", "github-dark"],
			},
		}),
	],
})
