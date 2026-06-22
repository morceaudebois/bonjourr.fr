---
title: Frequently asked questions
description: Frequently asked questions
thumbnail: /documentation/backgrounds/ryan-klaus-Xa0BLOXVxrQ-unsplash.jpeg
---

## 🦊 How do I get rid of **"Extension (B...t Startpage)"** on Firefox?

When using **Bonjourr on Firefox**, you might notice that it adds a button that says **"Extension (B...t Startpage)"** at the start of your search bar of your new tabs.

<img
  src="/documentation/faq/firefox-extension-info.png"
  alt="Firefox informs you about which extension is creating the page"
  style="max-width: 600px; margin-inline: auto; margin-block: 2em; display: block;"
  loading="lazy"
/>

This is a **security measure** taken by Mozilla to help you identify where the page is coming from. If you had installed an extension that had some malicious intentions, it could be very handy to know which extension generates the malicious page.

Although this label isn't necessary for Bonjourr, there's **unfortunately no easy way to disable it**, and we have **no control over it** as developers.

### **...but there's a way?**

If there's a will, there' a way! Although a slightly hacky one in this case. It involves the **`userChrome.css`** file, which is essentially a CSS stylesheet you can create that can style the **entire UI of Firefox**.

<img
  src="/documentation/faq/firefox-no-more-extension-box.png"
  alt="Extension box is gone"
  style="max-width: 600px; margin-inline: auto; margin-block: 2em; display: block;"
  loading="lazy"
/>

You can set it up in a few minutes following [this tutorial](https://www.userchrome.org/). Then, simply add this to the file and the extension box will disappear after a browser restart:

```css
{userchrome}
```

## 🔎 Is there a way to automatically focus on Bonjourr's searchbar?

The default behaviour of most browsers is to **focus on their native searchbar** whenever you open a new tab. Even if you have Bonjourr's searchbar enabled, you'll quickly notice that this behaviour doesn't change, which means you have to **manually click** on Bonjourr's searchbar every time if you want to use it.

A workaround you could do is hit the `esc` key which will focus on Bonjourr, then hit the `/` key to focus on its search bar.

We understand this isn't ideal, however, there currently is **no way to change this behaviour**.

The idea is that since this is **native to the browser** and happens *"outside"* of Bonjourr, it occurs **before Bonjourr has even loaded**, which implies we don't have control over it and can't override it in any way. Some other extensions, like [**New Tab Override**](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/), get around this problem by asking for **additional permissions**, which we might do as an **optional feature** in the future.

You can follow the development of this feature on [**this GitHub issue**](https://github.com/victrme/Bonjourr/issues/503).