# Bonjourr's website
_If you're looking for Bonjourr's source code, head this way: https://github.com/victrme/Bonjourr/_

## 🧑‍💻 How to run the site locally (no coding experience needed!)
1. **Get the code.** Download this repository (green code button → Download ZIP), or use [GitHub Desktop](https://desktop.github.com) if you're comfortable with git.
2. **Install Node.js.** Download the LTS version from https://nodejs.org and run the installer. You might need to restart the computer once installed.
3. **Open a terminal in the project folder.**
   - On Mac: right-click the folder → "Services" → "New Terminal at Folder" (or use the Terminal app)
   - On Windows: open the folder, then type `cmd` in the address bar and press Enter
   - On Linux: you already know
4. **Install pnpm** (only needed once):
```
   npm install -g pnpm
```
5. **Install the project's dependencies** (only needed once):
```
   pnpm install
```
6. **Start the site:**
```
   pnpm dev
```
7. **Open the site:** the terminal will show a link like `http://localhost:4321`, open that in your browser. Changes you make will show up automatically.

To stop the site, go back to the terminal and press `Ctrl+C`.

---

## 🌎 How to add a new language

### 1. Implement language and translate UI

Find your [language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) and add your language to `astro.config.ts` (`locales` and `sidebar`).

Head then to `/src/i18n/ui.ts` where you'll find the strings for the site's UI (nav, header...).

### 2. Translate site pages

English site pages (homepage, goodbye and 404 pages) are located in `/src/pages/`. You need to create a directory in there and name it your language code. Then, duplicate the English pages inside your newly created directory and start translating the files. 

The French version (`/src/pages/fr`) is a good example.

### 3. Translate documentation pages

_You don't have to translate the docs, but if you're extra motivated, you can!_

English docs pages  are located in `/src/content/docs/docs/`. 

Create a directory in `/src/content/docs/` and name it your language code. Then, duplicate the English pages inside your newly created directory and start translating the files. 

The French version (`/src/content/docs/fr/`) is a good example.

__Important things to note while translating the docs:__
- Internal links on translated pages need to start with the correct language code. For example, `/docs/widgets/notes/` becomes `/fr/docs/widgets/notes/` on the French documentation.
- Do not translate custom heading IDs (stuff like `{#quote-types}` after the titles), they need to be identical across translations.

__⚠️ If you're using AI to assist your translation, do give it [Bonjourr's `translations.json` file](https://github.com/victrme/Bonjourr/tree/master/_locales) from your language as a reference. This way, your translation will use the same wording for settings and buttons as Bonjourr does, making it way more accurate.__

thank you!!! 😊

---

## 📚 Useful things to know about how the site works

### Blog

The blog section is a basic JSON file that links to Ko-fi posts. In case of a new post, add it to `src/content/kofi-posts.json`. Thumbnails should be hosted in `/public/blog/` (900px width).

### Images, videos and other assets

- Most images are stored in `/src/assets/` so they can go through Astro's automatic optimisation pipeline.
- Videos and other file types are stored in `/public`

The `@assets/` alias is very useful.

### Documentation
Custom implementation of Starlight and Lucode. Automatic thumbnails through astro-og-canvas configured in `[...slug].ts`.

Heading IDs have a manual implementation so they can be shared between languages.

---

## ✅ To do list

### Will be done but not a priority/not possible yet
- [ ] Better Android support install section
- [ ] Back to top button on docs pages
- [ ] Slightly remake the homepage screenshots
- [ ] Switch GitHub/Ko-fi link buttons to LinkCards with icons [once Starlight supports it](https://github.com/withastro/starlight/discussions/970) 
