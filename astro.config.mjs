import { defineConfig } from 'astro/config'

// https://astro.build/config
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'

export default defineConfig({
	integrations: [mdx(), svelte()],
})
