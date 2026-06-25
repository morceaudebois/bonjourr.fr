import { defineConfig, sharpImageService } from "astro/config"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import starlight from "@astrojs/starlight"

import lucode from "lucode-starlight"
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
			lastUpdated: true,
			editLink: {
				baseUrl: "https://github.com/morceaudebois/bonjourr.fr/tree/starlight-doc/",
			},
			plugins: [lucode()],
			customCss: ["./src/styles/starlight.css"],
			components: {
				PageFrame: "./src/components/CustomPageFrame.astro",
			},
			sidebar: [
				{
					label: "Getting started",
					items: ["docs", "docs/interface-overview", "docs/settings-panel"],
				},

				{
					label: "Widgets",
					items: [
						"docs/widgets/quick-links",
						"docs/widgets/time-and-date",
						"docs/widgets/weather",
						"docs/widgets/notes",
						"docs/widgets/search-bar",
						"docs/widgets/quotes",
						"docs/widgets/pomodoro-timer",
					],
				},

				{
					label: "Customisation",
					items: [
						"docs/customisation/backgrounds",
						"docs/customisation/layout-and-fonts",
						"docs/customisation/tab-appearance",
						"docs/customisation/profiles",
						"docs/customisation/css-snippets",
						"docs/customisation/hidden-features",
					],
				},

				{
					label: "Managing Bonjourr",
					items: [
						"docs/settings-management/import-and-export",
						"docs/settings-management/syncing",
						"docs/settings-management/notifications",
					],
				},

				{
					label: "Reference",
					items: [
						"docs/reference/faq",
						"docs/reference/settings-reference",
						"docs/reference/changelog",
						"docs/reference/contributing",
						"docs/reference/privacy-policy",
					],
				},
			],
		}),
	],
})
