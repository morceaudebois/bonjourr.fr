---
title: Contribute
---

## Donations {#donate}

A few donations go a long way when it comes to open source software. It motivates us to pour more time into Bonjourr, it helps us realise people care about our work and it can open new doors for the future.

[Donate on Ko-fi](https://ko-fi.com/bonjourr)

---

## Reviews {#reviews}

The simplest way to help us out is to leave a review on the extension stores:

- [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/bonjourr-startpage/)
- [Chrome Web Store](https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd)
- [Apple App Store](https://apps.apple.com/app/bonjourr-startpage/id1615431236)
- [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid)

You can also tell your friends about Bonjourr, because if you love it, they probably will too.

---

## Translations {#translate}

Thanks to our contributors, Bonjourr is currently available in 21 languages! Here's how you can update or add a language.

Translations are located in the [`/_locales/`](https://github.com/victrme/Bonjourr/tree/master/_locales) folder on GitHub. Each language folder contains:

- `translations.json` for the main translation.
- `messages.json` for the extension's title and subtitle.
- `overview.md` for the full description on store pages.

To add a new language, copy the `en` folder to your desired language. You also need to add the country code and name to the list in [`src/scripts/langs.ts`](https://github.com/victrme/Bonjourr/blob/master/src/scripts/langs.ts).

If you are familiar with GitHub, you can create a pull request. Otherwise, you can directly send us the modified files by email at <bonjourr.app@protonmail.com> or on our Discord server.

> ⚠️ Don't forget to include your name and a link so we can credit you!

### Test your translation

1. Go to <https://online.bonjourr.fr> and select your language.
2. Open the developer console (`F12`, `Ctrl+Shift+J`, or `Ctrl+Shift+I`).
3. Paste the following code, replacing the parentheses with the contents of `translations.json`.

```js
localStorage.translations = JSON.stringify()
```

4. Reload the page. It should work!

---

## New features {#new-features}

You have some coding skills and a feature in mind you could implement into Bonjourr? Create an issue on GitHub so we can talk about it:

- <https://github.com/victrme/Bonjourr/issues>

If you're feeling creative, you can also suggest or create:

- [CSS snippets](/docs/styles)
- [Custom profiles](/docs/profiles)
