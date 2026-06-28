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
	redirects: {
		"/privacy": {
			status: 301,
			destination: "/docs/reference/privacy-policy/",
		},
		"/fr/privacy": {
			status: 301,
			destination: "/fr/docs/reference/privacy-policy/",
		},
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
			title: "Bonjourr's Documentation",
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
			defaultLocale: "root",
			locales: {
				root: {
					label: "English",
					lang: "en",
				},
				fr: {
					label: "Français",
					lang: "fr",
				},
			},
			sidebar: [
				{
					label: "Getting started",
					translations: {
						fr: "Premiers pas",
					},
					items: ["docs", "docs/quick-guide"],
				},

				{
					label: "Widgets",
					translations: {
						fr: "Widgets",
					},
					items: [
						"docs/widgets/quick-links",
						"docs/widgets/time-and-date",
						"docs/widgets/weather",
						"docs/widgets/notes",
						"docs/widgets/search-bar",
						"docs/widgets/quotes",
						"docs/widgets/pomodoro",
					],
				},

				{
					label: "Customisation",
					translations: {
						fr: "Personnalisation",
					},
					items: [
						"docs/customisation/backgrounds",
						"docs/customisation/layout-and-fonts",
						"docs/customisation/tab-appearance",
						"docs/customisation/profiles",
						"docs/customisation/styles",
						"docs/customisation/hidden-features",
					],
				},

				{
					label: "Managing Bonjourr",
					translations: {
						fr: "Gestion de Bonjourr",
					},
					items: [
						"docs/settings-management/import-and-export",
						"docs/settings-management/syncing",
						"docs/settings-management/notifications",
					],
				},

				{
					label: "Reference",
					translations: {
						fr: "Références",
					},
					items: [
						"docs/reference/faq",
						"docs/reference/settings-reference",
						"docs/reference/changelog",
						"docs/reference/contribute",
						"docs/reference/privacy-policy",
					],
				},
			],
		}),
	],
})
