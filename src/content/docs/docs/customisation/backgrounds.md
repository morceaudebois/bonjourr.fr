---
title: Backgrounds
# description:
# thumbnail:
---

## 🖼️ Backgrounds

Bonjourr lets you fully customize your new tab experience with beautiful and dynamic backgrounds. Whether you prefer curated photos, immersive videos, or your own local files, there are plenty of options to make it feel personal.

### Images

Bonjourr offers several ways to customize your background with beautiful images. Here's how it works!

#### Bonjourr Daylight

By default, Bonjourr uses the [Unsplash API](https://unsplash.com/developers) to fetch its backgrounds from a feature we call Bonjourr Daylight. We select them manually and store them in four different collections that change according to the time of the day:

- One for [the morning](<https://unsplash.com/collections/GD4aOSg4yQE/bonjourr-backgrounds-(noon)>) (2h around sunrise).
- One for [the day](<https://unsplash.com/collections/o8uX55RbBPs/bonjourr-backgrounds-(day)>).
- One for [the evening](<https://unsplash.com/collections/3M2rKTckZaQ/bonjourr-backgrounds-(evening)>) (2h around sunset).
- And one for [the night](<https://unsplash.com/collections/bHDh4Ae7O8o/bonjourr-backgrounds-(night)>).

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

Just like [with images](/docs/customisation/backgrounds/#bonjourr-daylight), Bonjourr also offers curated video backgrounds that change with the time of day.

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

The URLs option is another way to import your own images into Bonjourr, but instead of having them on your computer, you source them from a remote server.

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
