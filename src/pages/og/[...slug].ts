import { getCollection } from "astro:content"
import { OGImageRoute } from "astro-og-canvas"
import path from "node:path"
import sharp from "sharp"
import os from "node:os"

const entries = await getCollection("docs")
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]))

async function darkenImage(imagePath: string): Promise<string> {
	const input = path.join(process.cwd(), "public", imagePath)
	const tmpFile = path.join(os.tmpdir(), path.basename(imagePath))

	await sharp(input)
		.composite([
			{
				input: Buffer.from([0, 0, 0, 110]), // RGBA: black at ~55% opacity
				raw: { width: 1, height: 1, channels: 4 },
				tile: true,
				blend: "over",
			},
		])
		.toFile(tmpFile)

	return tmpFile
}

export const { getStaticPaths, GET } = await OGImageRoute({
	pages,
	param: "slug",
	getImageOptions: async (_id, page: (typeof pages)[number]) => {
		const bgImagePath = await darkenImage(
			page.data.image ?? "/documentation/backgrounds/saad-chaudhry-sAJlWye9at8-unsplash.jpg",
		)

		return {
			title: page.data.title.replace(/\p{Emoji}/gu, "").trim(),
			description: page.data.description,
			padding: 120,
			fonts: [
				"https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf",
				"https://api.fontsource.org/v1/fonts/inter/latin-700-normal.ttf",
			],
			font: {
				title: { families: ["Inter"], color: [255, 255, 255], weight: "Bold" },
				description: { families: ["Inter"], color: [255, 255, 255] },
			},
			bgImage: { path: bgImagePath },
		}
	},
})
