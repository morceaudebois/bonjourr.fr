---
title: Features overview
subtitle:
slug: overview
orderData: 2
layout: '../../layouts/Docs.astro'
featured: /backgrounds/neha-maheen-mahfin-IskqApmpcAw.webp
---

## General

-   Hover your mouse on the background credits to see exif infos
-   When enabling the custom search engine option, the searchbar becomes compatible with all search engines, which includes things like YouTube (`https://www.youtube.com/results?search_query=%s`).

## Quick Links

You can add and import Quick Links from the settings, and edit them when you right click on them.

An easy way to add a custom icon to your Quick Link is to upload it on somewhere like Imgur, and use that link as an icon. You can also convert your icon to a Data URI (max 8kB).

⚠️ **Notice**: as a security measure, local paths like `file://`, browser settings links like `about:config` or `chrome://extensions` can't be added. However, `localhost:` links will work just fine.

## Backgrounds

Bonjourr uses the [Unsplash API](https://unsplash.com/developers) to fetch its backgrounds. We select them manually and store them in four different collections that change according to the time of the day:

-   [During the day](<https://unsplash.com/collections/4933370/bonjourr-backgrounds-(day)>) or [at night](<https://unsplash.com/collections/VI5sx2SDQUg/bonjourr-backgrounds-(night)>)
-   2 hours around [sunrise (Noon)](<https://unsplash.com/collections/yDjgRh1iqkQ/bonjourr-backgrounds-(noon)>) and [sunset (Evening)](<https://unsplash.com/collections/2nVzlQADDIE/bonjourr-backgrounds-(evening)>)

### Custom Unsplash collection

You can make your own collection of images using [Unsplash](https://unsplash.com/). To do so, you'll need to create an Unsplash account and add all your images to a new collection. Once you're pleased with your selection, you need the collection's ID present in its URL. You will spot it easily since it's the string of random letters and numbers. For example, if your collection's URL is `https://unsplash.com/collections/2170139/wolfdogs-of-unsplash`, the ID is `2170139`.

Head back to Bonjourr and paste the ID in the **Unsplash collection** field. You can add multiple collections by separating them with a comma.

### Local files

Switch your background type from Dynamic to Custom, and you'll be able to drag and drop your own images from your computer to Bonjourr.

## Fonts

Bonjourr gets its fonts from Google Fonts. If you want to see previews of the fonts Bonjourr offers, please visit [this page](https://fonts.google.com/).

## Settings management

Bonjourr allows you to export all your settings into a file. You can use this feature if you want to save them or share them to someone. You will in turn be able to import said settings into any instance of Bonjourr.

To do so, simply go to the bottom of your settings pannel, then click Export as file in the settings management. Your file will be downloaded. On your other instance of Bonjourr, you can then go to the Import tab of the settings management and drop your file. Bonjourr will reload and all your settings will be applied.

### Browser syncing

Bonjourr is compatible with the automatic syncing features of both [Firefox](https://www.mozilla.org/fr/firefox/sync/) and [Chrome](https://support.google.com/chrome/answer/185277?hl=fr&co=GENIE.Platform%3DDesktop). If you log into your Mozilla/Google account on your browser and have syncing enabled in your browser, Bonjourr should get synced to other instances of the same browser on other computers. This is true for all Bonjourr settings as well as Quick Links.

## Keybindings

| Keys                | Action                  |
| ------------------- | ----------------------- |
| Escape              | Opens / closes settings |
| E (focused on link) | Edits links             |

### Notes

You can use these keyboard shortcuts while editing your Note. Replace `Ctrl` by `cmd` on macOS.

| Keys             | Action          |
| ---------------- | --------------- |
| Ctrl + Enter     | Apply changes   |
| Ctrl + Shift + C | Adds checkboxes |
| Ctrl + I         | Italics         |
| Ctrl + B         | Bold            |
| Ctrl + S         | Strike          |
| Ctrl + U         | URL             |
