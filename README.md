_This is Bonjourr's website.
If you're looking for Bonjourr's source code, head this way: https://github.com/victrme/Bonjourr/_

## Blog

The blog section is a basic JSON file that links to Ko-fi posts. In case of a new post, add it to `src/content/kofi-posts.json`. Thumbnails should ideally be hosted here (900px width).

## Documentation

Custom implementation of Starlight and Lucode. Automatic thumbnails through astro-og-canvas configured in `[...slug].ts`.

## How to add a new language

Things to edit:

- `astro.config.ts` `(`locales`and`sidebar`)
- `LanguageSelect.astro`
- For site, duplicate `/src/pages/fr/` into its own folder and change its name to the desired lang code
- For documentation, duplicate `/src/content/docs/fr/` into its own folder, and change its name to the desired lang code
