---
title: Hidden features
description: Bonjourr's got more than meets the eye 👀
---

## Alt mode

![Bonjourr's alt mode on quick links](/documentation/customisation/alt-mode.jpg)

Pressing the <kbd>alt</kbd> key in Bonjourr gives you access to useful features such as:

- <kbd>alt</kbd> + <kbd>number</kbd> to open the corresponding quick link (much like switching browser tabs with <kbd>cmd</kbd> / <kbd>Ctrl</kbd> + <kbd>number</kbd>)
- <kbd>alt</kbd> + right click to override Bonjourr's context menu and get the native one instead.
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
