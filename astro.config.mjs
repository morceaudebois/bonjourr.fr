import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import netlify from '@astrojs/netlify/edge-functions'

export default defineConfig({
	integrations: [svelte()],
	// base: '/astro',
	output: 'server',
	adapter: netlify(),
})
