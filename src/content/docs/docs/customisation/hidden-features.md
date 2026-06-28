---
title: Hidden features
description: Bonjourr's got more than meets the eye 👀
image: /documentation/backgrounds/su-san-lee-g3PyXO4A0yc-unsplash.jpg
---

## Background info

When using the default backgrounds, hover your mouse on the background credits at the bottom left corner of Bonjourr to get the EXIF info of the photo (when available).

<img
  src="/documentation/overview/exif.png"
  alt="Bonjourr's infos on the current photo"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
  loading="lazy"
/>

## Context menu

Bonjourr integrates a custom right-click context menu on most of its interface. Use it to add new quick links, access widget settings easily and control the background.

<img
  src="/documentation/overview/context-menu.png"
  alt="Bonjourr's context menu"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
  loading="lazy"
/>

You can override Bonjourr's context menu to get to the regular one in two ways:

- press <kbd>alt</kbd> + right-click,
- have some text selected on the page.

## Alt mode

![Bonjourr's alt mode on quick links](/documentation/customisation/alt-mode.jpg)

Pressing the <kbd>alt</kbd> key in Bonjourr gives you access to useful features such as:

- <kbd>alt</kbd> + <kbd>number</kbd> to open the corresponding quick link (much like switching browser tabs with <kbd>cmd</kbd> / <kbd>Ctrl</kbd> + <kbd>number</kbd>)
- <kbd>alt</kbd> + right-click to override Bonjourr's context menu and get the native one instead.
- <kbd>alt</kbd> + <kbd>n</kbd> to create a new quick link.

## Advanced settings

Bonjourr 22.3 introduced some advanced settings you can access directly from the JSON area at the bottom of the settings panel. Simply turn them from `false` to `true` and apply the changes to enable them.

<img
	src="/documentation/customisation/advanced-json.jpg"
	alt="The advanced options in Bonjourr"
	loading="lazy"
	style="max-width: 400px; margin-inline: auto; margin-block: 2em;"
/>

The advanced settings currently include:

- **`altMode`**: pass it to `false` to disable all features of the Alt mode.
- **`escKey`**: pass it to `false` to disable the ability to open the settings panel with the <kbd>esc</kbd> key.

These might be useful in certain workflows that require these keys without Bonjourr's interferences.

## Help mode

When Bonjourr crashes, it triggers the Help Mode page that guides you through troubleshooting and presents valuable information such as Bonjourr's server statuses and different storage types.

![Bonjourr's help mode page](/documentation/customisation/help-mode.png)

You can access this page at any time with the <kbd>cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>shift</kbd> + <kbd>?</kbd> keybind.
