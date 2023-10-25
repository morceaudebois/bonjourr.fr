## 🚀 Sitemap

```
/
├── src/
│   └── pages/
│       ├── fr/
│       │   ├── docs/
│       │   │   ├── platforms
│       │   │   ├── overview
│       │   │   ├── help
│       │   │   ├── profiles
│       │   │   └── styles
│       │   ├── goodbye
│       │   ├── submit
│       │   ├── privacy
│       │   └── index
│       ├── docs/
│       │   ├── platforms
│       │   ├── overview
│       │   ├── help
│       │   ├── profiles
│       │   └── styles
│       ├── goodbye
│       ├── submit
│       ├── privacy
│       └── index
└── package.json
```

## Des infos

Les pages index.astro sont juste la pour avoir la bonne route, sinon tout se trouve dans `/src/components/Frontpage.astro`.

Le SEO est direct dans la page de Layout: `/src/layouts/Layout.astro`

Le javascript nécessaire sur la frontpage utilise des composants Svelte, ex: `/src/components/Signatures.svelte`

Les images de la documentation doivent être dans `public/`, là ou gatsby pouvait les prendre depuis `src/assets`. Pour pouvoir les importer il faut utiliser MDX (pas trop nécessaire actuellement)

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                             |
| :---------------------- | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm run build`        | Build your production site to `./dist/`            |
| `pnpm run preview`      | Preview your build locally, before deploying       |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm run astro --help` | Get help using the Astro CLI                       |
