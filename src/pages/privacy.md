---
title: Privacy policy
slug: privacy
layout: '../layouts/Docs.astro'
featured: ../backgrounds/kir-simakov-ZN3Hsru3SIM.webp
---

## Third party APIs

-   **Openweathermap**  
    Fetches weather data. Triggers every 30min when tab is active. On location or Language change. No requests when description & icon are hidden.

-   **Unsplash**  
    Fetches background images. On startup & every hour by default. On collection change.

-   **Google fonts**  
    Fetches list of most popular fonts. On "font family" input focus. When losing cache.

## Homemade APIs

These APIs were made by and for Bonjourr, and are open source. Anyone can fork and host them using Netlify edge functions or Cloudflare Workers.

-   **Favicon fetcher**  
    Fetches websites favicon. Triggers when adding a new quick link.  
    [Source code](https://github.com/victrme/favicon-fetcher)

-   **Quotes**  
    Gets a random list of quotes. Once on startup, and after changing quote type or every 20 quotes.  
    [Source code](https://github.com/victrme/i18n-quotes)

-   **Geol**  
    Gets approximate location. Once on startup, every time settings are reset.  
    [Source code](https://github.com/victrme/geol)

## Permissions

Extensions are more secured than webpages, that means Bonjourr needs to ask for permission to function properly. More about permissions on [developer.chrome.com](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)

-   **Unlimited Storage**  
    Allows more than 1 Mo per item. Only used for storing local backgrounds, but is unused since 1.17.0.

-   **Geolocation**  
    Get precise location. On startup and when weather is updated: see openweathermap.

-   **Bookmarks**  
    Get a list of browser bookmarks. Optional. Only requested when using bookmark import option.

## Settings storage

We, [the Bonjourr team](https://github.com/victrme/Bonjourr#authors), do not have access to any of your settings. We do not use telemetry. Your page only sends requests to the relevent APIs. By default, Bonjourr will synchronize its settings with your browser account if available.

-   **Chrome extension:** Synced to your Google account if you are signed in to Chrome with your account & have sync enabled with “Extensions” option enabled in the "Manage what you sync” tab.

-   **Firefox extension:** Synced to your Firefox account the same way as Chrome. “Add-ons” must be enabled in the “Choose what to sync” tab.

-   **Online and Safari**: Settings are stored locally using the Web Storage API.
