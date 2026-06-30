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
		"/docs/styles": {
			status: 301,
			destination: "/docs/customisation/styles/",
		},
		"/fr/docs/styles": {
			status: 301,
			destination: "/fr/docs/customisation/styles/",
		},
		// there's a bunch more in Cloudflare rules
	},
	// re-enables HTML whitespaces after Astro 7 update https://github.com/withastro/astro/commit/57ead0d5938e5988e3f896f3d6f8ef4516c4923f
	compressHTML: false,
	integrations: [
		icon(),
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en",
					fr: "fr",
					ru: "ru",
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
			routeMiddleware: "./src/routeData.ts",
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
				ru: {
					label: "Русский",
					lang: "ru",
				},
			},
			sidebar: [
				{
					label: "Getting started",
					translations: {
						fr: "Premiers pas",
						ru: "Первые шаги",
					},
					items: ["docs", "docs/quick-guide"],
				},

				{
					label: "Widgets",
					translations: {
						fr: "Widgets",
						ru: "Виджеты",
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
						ru: "Персонализация",
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
						ru: "Настройка Bonjourr",
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
						ru: "Ресурсы",
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
