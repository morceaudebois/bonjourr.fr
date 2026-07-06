_This is Bonjourr's website.
If you're looking for Bonjourr's source code, head this way: https://github.com/victrme/Bonjourr/_

## Blog

The blog section is a basic JSON file that links to Ko-fi posts. In case of a new post, add it to `src/content/kofi-posts.json`. Thumbnails should ideally be hosted here (900px width).

## Documentation

Custom implementation of Starlight and Lucode. Automatic thumbnails through astro-og-canvas configured in `[...slug].ts`.

## How to add a new language

__Step by step:__
1. Find your [language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).
2. Add your language to `astro.config.ts` (`locales` and `sidebar`).
3. Translate UI strings in `/src/i18n/ui.ts`.
4. For site pages, `/src/pages/fr` and `/src/pages/ru` are good examples.
5. For documentation pages, `/src/content/docs/fr/` is a good example.

Headings on translated documentation pages need to have their IDs set manually based on the English version, like so: 
`## Utiliser Bonjourr sur Chrome {#using-bonjourr-on-chrome}`

Internal links on translated pages need to start with the correct language code. For example, `/docs/widgets/notes/` becomes `/fr/docs/widgets/notes/` on the French documentation.
 
The Widgets and Customisation categories of the documentation are likely to change a lot in the coming weeks/months, so don't bother translating them for now. The rest should be pretty stable.

__⚠️ If you're using AI to assist your translation, do give it [Bonjourr's `translations.json` file](https://github.com/victrme/Bonjourr/tree/master/_locales) from your language as a reference. This way, your translation will use the same wording for settings and buttons as Bonjourr does, making it way more accurate.__

## To do list
- [ ] Improve navigation layout on mobile/narrow screens/other languages
- [ ] Complete docs pages:
    - [x] Quick links
    - [x] Time and date
    - [x] Weather
    - [ ] Notes
    - [ ] Search bar
    - [ ] Quotes
    - [ ] Pomodoro
    - [ ] Backgrounds
    - [ ] Layout
    - [ ] Tab appearance
    - [ ] Profiles
    - [ ] CSS snippets
- [ ] Import updated docs pages to French
- [ ] Add custom heading IDs to French
- [ ] Android support 
