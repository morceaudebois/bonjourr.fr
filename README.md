_This is Bonjourr's website.
If you're looking for Bonjourr's source code, head this way: https://github.com/victrme/Bonjourr/_

## Blog

The blog section is a basic JSON file that links to Ko-fi posts. In case of a new post, add it to `src/content/kofi-posts.json`. Thumbnails should ideally be hosted here (900px width).

## Documentation

Custom implementation of Starlight and Lucode. Automatic thumbnails through astro-og-canvas configured in `[...slug].ts`.

## How to add a new language

Find your [language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).

Files to edit:
- `astro.config.ts` (`locales` and `sidebar`)
- `/src/i18n/ui.ts` for (mostly) UI strings
- For site pages, do like `/src/pages/fr` or `/src/pages/ru` with your matching
- For documentation pages, do like `/src/content/docs/fr/`
