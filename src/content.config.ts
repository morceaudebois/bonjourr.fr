// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content"

// 2. Import loader(s)
import { glob, file } from "astro/loaders"

// 3. Import Zod
import { z } from "astro/zod"

// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		author: z.string().default("Bonjourr Team"),
		tags: z.array(z.string()).optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: z.string(),
		imageAlt: z.string().optional(),
	}),
})

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog }
