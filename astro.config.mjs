import { defineConfig } from 'astro/config'

// https://astro.build/config
import svelte from '@astrojs/svelte'

export default defineConfig({
	integrations: [svelte()],
})
