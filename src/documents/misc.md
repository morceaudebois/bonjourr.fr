---
title: Features overview
subtitle:
slug: misc
orderData: 2
featured: ../assets/backgrounds/meiying-ng-OrwkD-iWgqg-unsplash.jpg
---

## 🛠️ Various tips and tricks

-   `escape` key opens settings.
-   When the searchbar is enabled, typing anywhere will focus the searchbar. However, browsers focus their address bar by default, so you'll have to click anywhere on Bonjourr first.
<!-- -   If you're an advanced user or just curious, you'll want to enable them all at the top of the settings panel.Bonjourr doesn't show all its settings by default.  -->

## 🔖 About Quick Links

You can add up to 30 Quick Links directly from settings, and edit them when you right click on them.

An easy way to add a custom icon to your Quick Link is to upload it on somewhere like Imgur, and use that link as an icon. Or convert your icon to a DataURI. URI must must be <8kb

⚠️ **Notice**: as a security measure, local paths like `file://`, browser settings links like `about:config` or `chrome://extensions` can't be added. However, `localhost:` links will work just fine.

## 🌄 About backgrounds

Bonjourr uses the [Unsplash API](https://unsplash.com/developers) to fetch its backgrounds. We select them manually and store them in four different collections that change according to the time of the day:

-   [During the day](<https://unsplash.com/collections/4933370/bonjourr-backgrounds-(day)>) or [at night](<https://unsplash.com/collections/VI5sx2SDQUg/bonjourr-backgrounds-(night)>)
-   2 hours around [sunrise (Noon)](<https://unsplash.com/collections/yDjgRh1iqkQ/bonjourr-backgrounds-(noon)>) and [sunset (Evening)](<https://unsplash.com/collections/2nVzlQADDIE/bonjourr-backgrounds-(evening)>)

## ☁️ Syncing

Bonjourr is compatible with the syncing features of both [Firefox](https://www.mozilla.org/fr/firefox/sync/) and [Chrome](https://support.google.com/chrome/answer/185277?hl=fr&co=GENIE.Platform%3DDesktop). If you log into your Mozilla/Google account on your browser and enable syncing, Bonjourr should get synced to other instances of the same browser on other computers. This is true for all Bonjourr settings as well as Quick Links.

### Custom Unsplash collection

You can make your own collection of images using [Unsplash](https://unsplash.com/). To do so, you'll need to create an Unsplash account and add all your images to a new collection. Once you're pleased with your selection, you need the collection's ID present in its URL. You will spot it easily since it's the string of random letters and numbers. For example, if your collection's URL is `https://unsplash.com/collections/2170139/wolfdogs-of-unsplash`, the ID is `2170139`.

Head back to Bonjourr and paste the ID in the **Unsplash collection** field. You can add multiple collections by separating them with a comma.

### Local files

Switch your background type from Dynamic to Custom, and you'll be able to drag and drop your own images from your computer to Bonjourr.
