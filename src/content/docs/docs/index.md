---
title: Getting started
---

# Install the extension

Bonjourr is fully supported on:

- [Chrome](https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd)
- [Firefox](https://addons.mozilla.org/firefox/addon/bonjourr-startpage/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid)

---

# Other platforms

You might still be able to install Bonjourr on the following browsers, on a case-by-case basis.

## Safari

Bonjourr can be used on Safari for macOS in just a few seconds:

1. Open the **General** tab in Safari's preferences (`⌘,`).
2. Set **New windows open with** and **New tabs open with** to **Homepage**.
3. Set the homepage to:

```text
https://online.bonjourr.fr
```

<video controls>
    <source src="/documentation/overview/safari-online-install.mp4" type="video/mp4" />
</video>

> [!NOTE]
> Safari was available on the App Store for a few years (including iOS and iPadOS), but has been discontinued since May 2026. The mobile versions sadly don't have a replacement.

## Zen (desktop)

Zen is based on Firefox, which means you can install the Firefox version of Bonjourr on it.

To make everything work correctly:

1. Open Zen's settings and set Bonjourr for both **Homepage and new windows** and **New tabs**.
2. Open `about:config`, accept the warning and search for `zen.urlbar.replace-newtab`.
3. Change its value to `false`.
4. Optionally, right-click a Bonjourr tab and select **Add to essentials**.

<video controls>
    <source src="/documentation/overview/zen-config.webm" type="video/webm" />
</video>

Additionally, Bonjourr supports transparency in Zen using the **Plain background** CSS snippet.

## Brave (desktop)

Being Chromium-based, Brave can install Bonjourr directly from the Chrome Web Store.

## Opera (desktop)

Opera does not allow extensions to replace its new tab page.

A workaround is to use the online version:

1. Empty your Speed Dial.
2. Install the **New Tab Start Page** extension.
3. Open Bonjourr and copy its URL.
4. Configure the extension to use:

```text
https://online.bonjourr.fr
```

We are not affiliated with that extension.

## Vivaldi (desktop)

Although the Chrome version works for new tabs, opening a new window still results in a blank page.

There is currently no solution, but you can follow the GitHub issue about it.

## Chrome, Firefox and other browsers on iOS

Non-Safari browsers on iOS cannot install extensions.

Some browsers, such as Firefox, allow a custom URL for new tabs. In that case, you can use:

```text
https://online.bonjourr.fr
```

Since the page is cached, it remains fast.

## Chrome for Android

Chrome for Android has no extension system, making Bonjourr impossible to install.

Kiwi Browser previously allowed Chrome extensions, but has since been discontinued.

## Firefox for Android

Firefox for Android prevents extensions from replacing the start page.

Until Mozilla changes this behaviour, there is nothing extension developers can do.

A custom homepage option would make it possible to use the online version of Bonjourr, and Mozilla currently has a feature request for it.
