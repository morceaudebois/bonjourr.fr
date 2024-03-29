---
title: Features overview
lang: en
slug: overview
layout: '../../layouts/Docs.astro'
---

# Features overview

## Interface

-   Hover your mouse on the background credits to see exif infos

## Show all settings

Bonjourr has lots of options. In an attempt to not be jarring for newcomers, we decided to hide most of them by default. If you're an advanced user, you can enable all those options by toggling **Show all settings** at the very top of the settings menu.

## Hide settings icon

When selecting the "Hide settings icon", the icon is still clickable at the same position as before. You can also open the settings menu by pressing the `Escape` key.

<video src="/documentation/videos/hide-icon.mp4" controls muted></video>

## Backgrounds

Bonjourr uses the [Unsplash API](https://unsplash.com/developers) to fetch its backgrounds. We select them manually and store them in four different collections that change according to the time of the day:

-   [During the day](<https://unsplash.com/collections/4933370/bonjourr-backgrounds-(day)>) or [at night](<https://unsplash.com/collections/VI5sx2SDQUg/bonjourr-backgrounds-(night)>)
-   2 hours around [sunrise (Noon)](<https://unsplash.com/collections/yDjgRh1iqkQ/bonjourr-backgrounds-(noon)>) and [sunset (Evening)](<https://unsplash.com/collections/2nVzlQADDIE/bonjourr-backgrounds-(evening)>)

### Custom Unsplash collection

You can make your own collection of images using [Unsplash](https://unsplash.com/). To do so, you'll need to create an Unsplash account and add all your images to a new collection. Once you're pleased with your selection, you need the collection's ID present in its URL. You will spot it easily since it's the string of random letters and numbers. For example, if your collection's URL is `https://unsplash.com/collections/2170139/wolfdogs-of-unsplash`, the ID is `2170139`.

Head back to Bonjourr and paste the ID in the **Unsplash collection** field. You can add multiple collections by separating them with a comma.

### Local files

Switch your background type from Dynamic to Custom, and you'll be able to drag and drop your own images from your computer to Bonjourr.

## Quick Links

You can add and import Quick Links from the settings, and edit them when you right click on them.

An easy way to add a custom icon to your Quick Link is to upload it on somewhere like Imgur, and use that link as an icon. You can also convert your icon to a Data URI (max 8kB).

⚠️ **Notice**: as a security measure, local paths like `file://`, browser settings links like `about:config` or `chrome://extensions` can't be added. However, `localhost:` links will work just fine.

### Link folders

Links folders are pretty cool. You can drag and drop them. Dragging a folder on another will add the content of the dragged folder in the target. Deleting a folder with links inside will also delete those links.

### Link pages

You can organize your links even more with link pages. To add a page, right click next to the default page. You cannot remove the default page, you can rename it. Deleting a page will remove the links inside.

<video src="/documentation/videos/link-pages.mp4" controls muted></video>

## Search bar

When enabling the custom search engine option, the searchbar becomes compatible with all search engines, which includes things like YouTube (`https://www.youtube.com/results?search_query=%s`).

## Notes

Notes uses Markdown to create titles, lists, and checkboxes. To transform a line, just add these characters at the start of a line:

-   `# ` big heading
-   `## ` medium heading
-   `### ` small heading
-   `- ` classic list
-   `[ ] ` checkbox
-   `[x] ` checkbox, checked

Other Markdown features, like italics, are not available currently.

## Fonts

Bonjourr gets its fonts from Fontsource. If you want to see previews of the fonts Bonjourr offers, please visit [this page](https://fontsource.com/).

## Page layouts

There are 3 different page layouts to choose from: single, double and triple column. Each layout saves the position and alignment of your widgets independently.

These options only affect the current layout:

-   Widget toggle (Enable switches)
-   All options in grid toolbox
-   Reset layout

<video src="/documentation/videos/move-elem.mp4" controls muted></video>

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

You can use these keyboard shortcuts while editing your Note. Replace `Ctrl` by `Cmd` on macOS.

| Keys             | Action            |
| ---------------- | ----------------- |
| Ctrl + Shift + 1 | To big heading    |
| Ctrl + Shift + 2 | To medium heading |
| Ctrl + Shift + 3 | To small heading  |
| Ctrl + Shift + 4 | To bullet list    |
| Ctrl + Shift + 5 | To todo list      |
