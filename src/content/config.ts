import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string(),
		author: z.string().default("Bonjourr Team"),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
	}),
})

export const collections = {
	blog: blogCollection,
}
