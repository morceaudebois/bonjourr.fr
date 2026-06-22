---
title: Features overview
description: Features overview
thumbnail: /documentation/backgrounds/saad-chaudhry-sAJlWye9at8.jpg
---

## 🖥️ Main interface tips

When using the default backgrounds, hover your mouse on the background credits at the bottom left corner of Bonjourr to get the EXIF info of the photo (when available).

<img
  src="/documentation/overview/exif.png"
  alt="Bonjourr's infos on the current photo"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
  loading="lazy"
/>

#### Context menu

Bonjourr integrates a custom right click context menu on most of its interface. Use it to add new quick links, access widget settings easily and control the background.

<img
  src="/documentation/overview/context-menu.png"
  alt="Bonjourr's context menu"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
  loading="lazy"
/>

You can override Bonjourr's context menu to get to the regular one in two ways:

- press `alt` + right click,
- have some text selected on the page.

---

## ⚙️ General settings tips

### Accessing the settings panel

There are two ways you can access the settings of Bonjourr:

- Click on the ⚙️ icon in the bottom right corner.
- Hit the `esc` key of your keyboard (while focused on the page).
- Right click on the page to access the context menu

### Show all settings

Bonjourr has lots of settings. To make it easier for newcomers, we hide most of the more advanced ones by default. You can enable them by toggling <bjr>Show all settings</bjr> at the very top of the settings panel.

### Hide settings icon

When toggling the <bjr>Hide settings icon</bjr> option, the icon is still clickable at the same position as before.

<video autoplay loop muted playsinline>
  <source src="/documentation/overview/hide-icon.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## 📌 Tab appearance

You can customize the text and icon (called favicon) your browser uses for Bonjourr. Text is limited to 80 characters, and icons can only be emojis.

<img
  src="/documentation/overview/tab-appearance.png"
  alt="Bonjourr's customised tab"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
  loading="lazy"
/>

The emoji option might be limited by your browser:

- Firefox has imperfect scaling/alignments ([GitHub issue](https://github.com/victrme/Bonjourr/issues/431)).
- Microsoft Edge & Safari don't support it at all.

s

Here is how you can write emojis:

- Windows: `WIN + .` (Windows Key + dot)
- macOS: `CTRL + CMD + Space`
- You can also copy and paste them from the Internet: [unicode.org/emoji/charts/full-emoji-list](https://unicode.org/emoji/charts/full-emoji-list.html).

---

## 🖼️ Backgrounds

Bonjourr lets you fully customize your new tab experience with beautiful and dynamic backgrounds. Whether you prefer curated photos, immersive videos, or your own local files, there are plenty of options to make it feel personal.

### Images

Bonjourr offers several ways to customize your background with beautiful images. Here's how it works!

#### Bonjourr Daylight

By default, Bonjourr uses the [Unsplash API](https://unsplash.com/developers) to fetch its backgrounds from a feature we call Bonjourr Daylight. We select them manually and store them in four different collections that change according to the time of the day:

- One for [the morning](https://unsplash.com/collections/GD4aOSg4yQE/bonjourr-backgrounds-(noon)) (2h around sunrise).
- One for [the day](https://unsplash.com/collections/o8uX55RbBPs/bonjourr-backgrounds-(day)).
- One for [the evening](https://unsplash.com/collections/3M2rKTckZaQ/bonjourr-backgrounds-(evening)) (2h around sunset).
- And one for [the night](https://unsplash.com/collections/bHDh4Ae7O8o/bonjourr-backgrounds-(night)).

#### Unsplash Collections

You can use any collection on Unsplash as a background source in Bonjourr. This allows you to carefully curate your own images from Unsplash. To do so:

1. Find one you like by going to [unsplash.com](https://unsplash.com), search for a subject and go to the Collections tab.
2. Once you've clicked on the collection you want, check out its URL. What you want is the ID, which is the string of random letters and numbers. For example, if your collection's URL is `https://unsplash.com/collections/2170139/wolfdogs-of-unsplash`, the ID is `2170139`.
3. Head back to Bonjourr and after having checked <bjr>Show all settings</bjr> at the top of the settings panel, paste the ID in the <bjr>Unsplash collection</bjr> field. You can add multiple collections by separating them with a comma.

<video autoplay loop muted playsinline>
  <source src="/documentation/overview/custom-unsplash-collection.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

#### Unsplash Search

If you have a theme in mind, you can use the Unsplash Search feature and let Unsplash do the work for you: just type in a keyword and it will start fetching backgrounds related to that keyword. You can even set several of them by separating them with a comma.

### Videos

Thanks to [Pixabay](https://pixabay.com/)'s free video library, Bonjourr lets you set videos as your backgrounds. They're fun, dynamic, and bring your homepage to life in a way static images can't.

However, videos can be more demanding on your device. They require more processing power, which can slow things down and drain battery faster. Also, since video files are larger than images, a fast internet connection is recommended for a smooth experience.

Additionally, we try to go out of our way to never integrate AI generated content to our background collections. If anything AI were to slip through, be sure to tell us about it [via email](mailto:bonjourr.app@protonmail.com) and we'll gladly remove it.

#### Bonjourr Daylight

Just like [with images](#images-bonjourr-daylight), Bonjourr also offers curated video backgrounds that change with the time of day.

#### Pixabay Search

Similar to [Unsplash Search](#unsplash-search), you can enter keywords in Bonjourr to fetch related videos from Pixabay's library.

### Local files

The local files option allows you to easily set images or videos from your device to Bonjourr.

Click <bjrbtn>+ Add new</bjrbtn> to import files from your computer. Most video and image file formats are supported, and Bonjourr will handle duplicates if need be.

<img
  src="/documentation/overview/local-files.png"
  alt="Bonjourr's local files section"
  loading="lazy"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
/>

By selecting an image/video and clicking <bjrbtn>Options</bjrbtn>, you can individually adjust the positioning, size and playback speed of each file. Reducing the zoom to its minimum sets the size automatically.

A drawback of local files is that they can't be synced between devices; this is a technical limit and security browsers have set up when it comes to extensions.

### URLs

The URLs option is another way to import your own images into Bonjourr, but instead of having them on your computer, you source them from a distant server.

<img
  src="/documentation/overview/background-urls.png"
  alt="Bonjourr's background URLs option"
  loading="lazy"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
/>

This is great if you want more flexibility. If you're a power user, you could do something like setting up a dynamic URL where the backgrounds change according to your exact preferences, such as certain times of the day or month.

Additionaly, the background URLs options has another great perk over Local files: it can be synced across browsers.

### Solid color

The solid color option allows you to choose a specific color for your background if you like to keep things especially minimalist.

### Texture overlay

Textures are overlays on top of any background. There are many types you can try, and they will typically look better over a blurred background or a solid color.

Most textures can be edited through their color, opacity and density to get to the perfect result.

### Fade in time

You can specify the speed at which the backgrounds fade in when you open a new tab. Color backgrounds are always at 0ms. Reducing the fade in time to 0 will make the new tab page flicker, because the background image needs to load.

---

## 🔗 Quick Links

Quick links are a way to easily manage the websites you visit regularly.

### Basic usage

To add Quick Links, right-click on the page or open the Quick Links section in the settings. They are editable if you right click on them (or long press on mobile), which allows you to change their titles, URLs, icons and delete them.

<video autoplay loop muted playsinline>
  <source src="/documentation/overview/links-usage.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

You can easily reorder your links by drag and dropping them, just like you would do on a phone. Additionally, dropping a link on another link will create a folder that contains them both. You can also edit that folder via right click.

💡 **Tip:** A mouse middleclick on a folder will open all its contained links at once.

### Importing your links

Bonjourr integrates a way to import the existing links from your browser. To access it, click the <bjrbtn>Import bookmarks</bjrbtn> button. Depending on your browser, you will be shown multiple groups of links you will be able to import, such as your most visited websites and your bookmarks toolbars.

<img
  src="/documentation/overview/bookmarks-modal.png"
  alt="Bonjourr's bookmarks modal"
  loading="lazy"
/>

You can select one or multiple groups, and then import them.

#### Syncing

Some importable groups, such as bookmarks, can be synced with your browser if you decide to click on <bjrbtn>Sync with browser</bjrbtn> before importing. This means they won't be editable in Bonjourr, but Bonjourr will update its links whenever you edit your bookmarks directly in the browser.

Some groups (like the "Most visited" on Chrome) are only importable while synced and will get updated in Bonjourr whenever your browser decides to do so.

#### Google Apps

If you use Chrome, Bonjourr will offer you to import Google Apps as a way to replicate Chrome's default startpage's behaviour.

### Link groups

You can organize your links with link groups, an optional feature you can enable in settings. To add a group, hover to the right of the group titles until you see the `+` icon. You can rename and delete groups by right clicking on them. Deleting a group will delete all the links it contains.

Just like with folders, you can:

- Drag and drop links from group to group.
- Drag and drop groups to reorder them.
- Rename a group by right clicking it.

You can pin groups by selecting <bjrbtn>Pin this group</bjrbtn> after opening the context menu from the group title. This will make it so the group is always visible.

<img
  style="max-width: 400px; margin-inline: auto; display: block"
  src="/documentation/overview/link-groups.gif"
  alt="Bonjourr's link groups"
  loading="lazy"
/>

### Link icons

You can configure your links' icons from three different modes.

#### Website favicon (default)

In the default mode, icons are automatically retrieved from our homemade service [favicon-fetcher](https://github.com/victrme/favicon-fetcher). If you find that a website is missing its icon, you can create an issue [on GitHub](https://github.com/victrme/Bonjourr/issues) or send us an email, and we will do our best to fix it.

#### Local files

Easily customize you link icons by importing them directly from your computer. Most image file formats are allowed, such as JPG, PNG, WebP, (non animated) GIF, and SVG.

#### Distant URL

This mode allows you to set a distant URL to any image file you want on the Internet. This URL can be:

- A distant URL: `https://en.wikipedia.org/favicon.ico`.
- A locally hosted URL: `http://127.0.0.1:4321/favicon.ico`.
- A [Data URI](https://dopiaza.org/tools/datauri/index.php) smaller than 8kb: `data:image/gif;base64,R0lGOD...AA7`.

But not a:

- File path: `file:///Users/Me/Pictures/flowers.png`.

#### Cache policy

Icons from [favicon-fetcher](https://github.com/victrme/favicon-fetcher) are stored in the browser cache for a year. As long as the browser cache is not cleared, icons are not fetched (or updated) by the page. However, if the browser cache is often cleared or storage space is limited on your device, icons will have to be fetched from our service again.

Icons you add manually from a distant URL will have a different cache policy that we are not in control of, which might cause the icon to be fetched often or even every time.

⚠️ *Notice*: as a security measure, local paths like `file://`, browser settings links like `about:config` or `chrome://extensions` can't be added. However, `localhost:` links will work just fine.

---

## 🕰️ Time and date

The analog clock feature has many options you can play around with and get to really cool styles.

<img src="/documentation/overview/clock-styles.png" alt="Bonjourr's clock styles" loading="lazy" />

Some things to know:

- Clicking the 🌙/☀️ icons on the sliders will switch from black to white.
- The analog clock background is blurred when its opacity is above 0.

### World clocks

<img
  src="/documentation/overview/world-clocks.png"
  alt="Bonjourr's world clock feature"
  loading="lazy"
/>

<bjr>World clocks</bjr> allows you to add multiple clocks with different timezones. Removing the name of a world clock will remove the clock entirely.

---

## 🌤️ Weather

Precise geolocation needs access to your device's GPS. Some browsers or systems might not allow access based on its privacy setting. macOS / Safari often causes problems.

If there are multiple cities with the same name in your country, it might cause an issue. A good trick to fix this is to choose the name of the closest city with a unique name.

Bonjourr doesn't have a "Refresh weather" option yet, but you can still do it by manually toggling between units (Celsius → Fahrenheit → Celsius).

### Detailed weather

<bjr>Detailed weather</bjr> allows you to easily go to a weather provider's website to get a detailed weather report. Once enabled, you can click on the weather widget to go to your chosen website.

<video autoplay loop muted playsinline>
  <source src="/documentation/overview/weather-report.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

⚠️ We are in no way affiliated with MSN, Accuweather, Yahoo!, or Windy.com. These websites offer reports from different data provider, hence the choices.

---

## ✍️ Notes

Notes uses [Markdown](https://www.markdownguide.org/cheat-sheet/) to create titles, lists, and checkboxes. To transform a line, just add these characters at the start of a line:

- `#` large heading
- `##` medium heading
- `###` small heading
- `-` classic list
- `[ ]` checkbox (notice the space between the brackets)
- `[x]` checkbox, checked

<video autoplay loop muted playsinline>
  <source src="/documentation/overview/notes.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

Currently, other Markdown features, such as italics, are not supported.

### Keybindings

You can use these keyboard shortcuts while editing your Note. Replace `Ctrl` with `cmd` on macOS.

| Keys                  | Action               |
| ---------------------- | --------------------- |
| Ctrl/cmd + Shift + 1   | Create large heading |
| Ctrl/cmd + Shift + 2   | Create medium heading |
| Ctrl/cmd + Shift + 3   | Create small heading |
| Ctrl/cmd + Shift + 4   | Create bullet list |
| Ctrl/cmd + Shift + 5   | Create todo list |

---

## 🔎 Search bar

### Suggestions

Suggestions are provided by our own API. You can learn all about it and its source code [here](https://github.com/victrme/search-suggestions).

### Custom search engine

There are many search engines available by default in Bonjourr, and you can even add others if needed. To do so, select <bjr>Custom</bjr> in the Search engine option of the search bar. When the <bjr>URL request</bjr> input appears, simply paste in the URL of the search engine and replace the searched text by `%s`.

For example, if you search "coffee" on YouTube, you'll see that the URL will be `https://www.youtube.com/results?search_query=coffee`.

In this case, you just need to replace `coffee` with `%s`, giving you this result: `https://www.youtube.com/results?search_query=%s`.

Paste it in the input and you'll now be able to use the corresponding search engine from Bonjourr.

<video autoplay loop muted playsinline>
  <source src="/documentation/overview/custom-search.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

This method will work with the vast majority of search engines, making Bonjourr compatible with almost all of them.

**💡 Tip!** Hitting the **/** key will focus on the search bar.

---

## 🗣 Quotes

The quotes widget can fetch quotes from multiple sources:

- By default, our **[open source quotes API](https://github.com/victrme/i18n-quotes)** available in multiple languages. These are general motivational or inspirational quotes that the community can manage through pull requests.
- The **[InspiroBot](https://inspirobot.me/) API**, an AI that generates seemingly inspirational quotes, but with a humorous twist. It parodies traditional motivational quotes from the point of view of an AI. Although we are not affiliated with InspiroBot, we've always found this service fun and thought it'd be nice to have it in Bonjourr. It is important to note that it's at least 10 years old and <u>**has nothing to do with the recent generative AI trend**</u>.
- The **[Kaamelott API](https://github.com/sin0light/api-kaamelott)**, quotes from a french comedy TV show. Only available in French.
- **Stoic** quotes that reflect the [Stoicism philosophy](https://en.wikipedia.org/wiki/Stoicism).
- **Hitokoto**, japanese inspirational quotes.
- **Custom**, add your own quotes directly from Bonjourr's UI.
- **URL**, add quotes from a distant CSV file.

### Importing your own quotes

There are two ways you can import your own quotes: directly from Bonjourr, or from a distant URL. In both cases, here is the formatting your quotes need to adopt:

```json
Author, Your quote.
Author, Your second quote\nThis time with a line break!
```

#### With the custom quotes option

Once the custom quotes option is selected, you can simply add quotes to it by respecting the formatting shown above.

This option is limited to 8kB of text, which is about 50 regularly sized quotes. This is because Bonjourr uses [storage.sync](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) to store data, and each object is limited to 8kB. **If you need more quotes, we advise using the URL option instead.**

#### With the URL option (CSV file)

Select the URL option to link Bonjourr to the direct URL of a CSV file that contains all your quotes.

The easiest way to do this is to use GitHub Gist, a service that allows you to very easily create and host a file:

1. Create an account [on GitHub](https://github.com) if you don't already have one, and log in.
2. Head to the [GitHub Gist page.](https://gist.github.com/)
3. Give your file a description, like "My Bonjourr quotes".
4. Give it a filename, like `bonjourr_quotes.csv`. It can be anything as long as it ends with `.csv`.
5. Start typing your quotes with the formatting shown above (you'll be able to edit them later if you want).
6. Once done, you can hit the <bjrbtn>Create secret gist</bjrbtn> button. It will save the file and show you what it looks like as a table.
7. Click the <bjrbtn>Raw</bjrbtn> button, copy the URL of the page that opens and paste it in the URL input of Bonjourr. Voilà!

<video autoplay loop muted playsinline>
  <source src="/documentation/overview/quotes-gist.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## ⏱️ Pomodoro timer

The Pomodoro widget allows you to use the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) in Bonjourr, a time management method designed to help you work more efficiently.

<img src="/documentation/overview/pomodoro.png" alt="The Pomodoro widget" loading="lazy" />

The widget shall be used as per the original technique:

1. Decide on the task to be done.
2. Set the Pomodoro timer (typically for 25 minutes).
3. Work on the task.
4. End work when the timer rings and take a short break (typically 5–10 minutes).
5. Go back to Step 2 and repeat until you complete four pomodori.
6. After four pomodori are done, take a long break (typically 20 to 30 minutes) instead of a short break. Once the long break is finished, return to step 2.

The Pomodoro widget keeps track of time even if you close Bonjourr (although won't ring if no Bonjourr tab is open). Use the <bjr>Focus mode</bjr> to avoid being tempted by your Quick Links or other widgets. You can edit the time of each mode in the widget's settings, when <bjr>Show all settings</bjr> is enabled.

---

## 📚 Fonts

Bonjourr gets its fonts from Fontsource. If you want to see previews of the fonts Bonjourr offers, please visit [fontsource.org](https://fontsource.org/).

---

## 📄 Page layouts

There are 3 different page layouts to choose from: single, double and triple column. Each layout saves the position and alignment of your widgets independently.

These options only affect the current layout:

- Widget toggle (enable switches)
- All options in grid toolbox
- Reset layout

<video autoplay loop muted playsinline>
  <source src="/documentation/overview/move-elem.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## 💾 Settings management

Bonjourr allows you to export all your settings into a file. You can use this feature if you want to save them or share them to someone. You will in turn be able to import said settings into any instance of Bonjourr.

To do so, simply go to the bottom of your settings pannel, then click the <bjrbtn>Export</bjrbtn> button in the settings management. Your file will be downloaded. On your other instance of Bonjourr, click the <bjrbtn>Import</bjrbtn> button and select your previously exported file. Bonjourr will reload and all your settings will be applied.

The settings include everything you've ever modified in Bonjourr, except for the local files you've uploaded (backgrounds and icons).

### Synchronization type

Bonjourr has multiple ways to share its settings between instances. In all cases, all settings will be synchronised except local backgrounds. For now, only the native browser syncing is automatic.

#### Browser

Bonjourr is by default configured to use the automatic syncing features of both [Firefox](https://www.mozilla.org/fr/firefox/sync/) and [Chrome](https://support.google.com/chrome/answer/185277?hl=fr&co=GENIE.Platform%3DDesktop). If you log into your Mozilla/Google account on your browser and have syncing enabled in your browser, Bonjourr should get synchronised to other instances of the same browser on other devices.

#### Github Gist (cross browser)

Bonjourr also has a way to synchronise its data accross multiple browsers thanks to GitHub Gist (for example, if you use Chrome and Firefox at the same time).

<img
  src="/documentation/overview/github-sync.png"
  alt="A configured example of GitHub Gist synchronization"
  loading="lazy"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
/>

Here's a step by step guide on how to configure it:

1. Select "GitHub Gist" in <bjr>Synchronization type</bjr>.
2. Log in to [GitHub](https://github.com/) and create an authentification token by following [this guide on docs.github.com](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token), or by following the steps shown below:

   <video autoplay loop muted playsinline>
     <source src="/documentation/overview/gist-sync.webm" type="video/mp4" />
     Your browser does not support the video tag.
   </video>

3. Go back to Bonjourr and paste your token in the <bjr>Authentification token</bjr> input. Paste that token in as many Bonjourr instances as you need to synchronize.
4. From there, you can either use the <bjrbtn>Get</bjrbtn> button to download your settings from the server, or the <bjrbtn>Send</bjrbtn> button to upload them. The <bjr>Server status</bjr> area helps you by showing when the last upload was made.

Bonjourr is not affiliated with GitHub, and no connections to `api.github.com` are made until you select this option AND enter a valid token. More details on our [privacy page](/privacy).

#### Distant URL

This option is essentially the same as importing a settings file from your computer, except you will do it from a distant URL. As it removes the step of having to transfer the settings file to every single device, this could be handy for power users who might need to set up many instances of Bonjourr at once.

Simply host your settings file somewhere ([pastebin.com](https://pastebin.com/) can be a good choice), enter its direct URL in Bonjourr and click the <bjrbtn>Get</bjrbtn> button.

---

## ⌨️ Keybindings

| Keys                     | Action                       |
| ------------------------ | ----------------------------- |
| Escape                   | Opens / closes settings      |
| E (focused on link)      | Edits links                  |
| / (forward slash)        | Focus on the search bar      |
| alt + N                  | Create new quick link        |
| alt + number [1-9]       | Open corresponding quick link |

### Notes

Refer to the [notes section](#notes).

---

## ❤️ Supporters notification

The supporters notification was introduced with Bonjourr 20.4 and is our way to thank people who support us [on Ko-Fi](https://ko-fi.com/bonjourr). It appears at the start of each month and reflects the donations of the previous month.

<img
  src="/documentation/overview/supporters.png"
  alt="The supporters notification"
  loading="lazy"
/>

If you'd like your name to appear in the supporters notification, you can [donate on Ko-Fi](https://ko-fi.com/bonjourr). If you'd like to donate without having your name appear in it, be sure to send us a message when you donate.

The supporters notification can be fully disabled in the settings panel, <bjr>Show all settings</bjr> first, then <bjr>Supporters notification</bjr> in the "Notifications" category.