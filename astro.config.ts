import { defineConfig, sharpImageService } from "astro/config"
import expressiveCode from "astro-expressive-code"
import sitemap from "@astrojs/sitemap"
import rehypeFigureTitle from "rehype-figure-title"

export default defineConfig({
	site: "https://bonjourr.fr",
	devToolbar: {
		enabled: false,
	},
	image: {
		service: sharpImageService(),
	},
	markdown: {
		rehypePlugins: [[rehypeFigureTitle, { className: "figure" }]],
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
			themes: ["catppuccin-latte", "github-dark"],
		}),
	],
})
