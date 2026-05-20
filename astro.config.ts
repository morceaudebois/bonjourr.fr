import { defineConfig, sharpImageService } from "astro/config"
import expressiveCode from "astro-expressive-code"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"

export default defineConfig({
	site: "https://bonjourr.fr",
	devToolbar: {
		enabled: false,
	},
	image: {
		service: sharpImageService(),
	},
	integrations: [
		[icon()],
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
			themes: ["catppuccin-latte", "github-dark"],
		}),
	],
})
