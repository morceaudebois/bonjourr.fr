import { defineConfig, sharpImageService } from "astro/config"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import starlight from "@astrojs/starlight"
import starlightThemeTerminal from "starlight-theme-terminal"

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
			favicon: "/favicon-32x32.png",
			disable404Route: true,
			// plugins: [starlightThemeTerminal()],
			expressiveCode: {
				themes: ["catppuccin-latte", "github-dark"],
			},
			customCss: [
				// Relative path to your custom CSS file
				"./src/styles/starlight.css",
			],
			components: {
				PageFrame: "./src/components/CustomPageFrame.astro",
			},
		}),
	],
})
