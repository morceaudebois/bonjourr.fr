---
title: Privacy policy
lang: en
slug: privacy
layout: '../layouts/Docs.astro'
featured: ../backgrounds/kir-simakov-ZN3Hsru3SIM.webp
---

## External services

To enjoy every feature, Bonjourr has to communicate with external services. Almost all requests your page sends goes to [our open source API](https://github.com/victrme/bonjourr-apis) before accessing the relevent services. This allows us to keep our access keys secure, and also offers a layer of anonymity for the users, much like a VPN.

Our API is deployed on Cloudflare Workers, which means we have access to [Cloudflare's network analytics](https://developers.cloudflare.com/analytics/types-of-analytics/), such as the number of requests and their origin per server.

### api.bonjourr.lol

-   **Openweathermap**  
    Fetches weather data. Triggers every 30min when tab is active. On location or Language change. No requests when description & icon are hidden.  
    [Privacy policy](https://openweather.co.uk/privacy-policy#data_me_collect)

-   **Unsplash**  
    Fetches background images. On startup and on collection change.  
    [API terms](https://unsplash.com/api-terms)

-   **Fontsource**  
    Fetches list of most popular fonts. On "font family" input focus. When losing cache.  
    [More info](https://fontsource.org/docs/getting-started/introduction)

-   **Favicon fetcher**  
    Retrieves the favicon of websites. Fires when adding a new favorites.  
    [Source code](https://github.com/victrme/favicon-fetcher)

-   **Quotes**  
    Gets a random list of quotes. Once at startup, and after changing quote type or every 20 quotes.  
    [Source code](https://github.com/victrme/i18n-quotes)

-   **Search Suggestions**  
    Gets search suggestions from Google, Duckduckgo and others. The API is a web scraper and does not directly use the services of these providers. No data is saved on our end, but Google definitely does.  
    [Source code](https://github.com/victrme/search-suggestions)

### cdn.jsdelivr.net

-   **Fontsource CDN**  
    Serves the font file. When changing font or losing cache.  
    [CDN info](https://fontsource.org/docs/getting-started/cdn)

### image.unsplash.com

-   **Unsplash Image**  
    Serves the background image. On startup & every hour by default. On collection change. When losing cache.

## Permissions

Extensions are more secured than webpages, that means Bonjourr needs to ask for permission to function properly. More about permissions on [developer.chrome.com](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)

-   **Storage**  
    Access the local and synchronized extension storage. More info below. On every tab and settings change.

-   **Bookmarks**  
    Get a list of browser bookmarks. Optional. Only requested when using bookmark import option.

## Settings storage

We, [the Bonjourr team](https://github.com/victrme/Bonjourr?tab=readme-ov-file#-authors), do not have access to any of your settings. We do not use telemetry. By default, Bonjourr will synchronize its settings with your browser account if available. Bonjourr storage is not encrypted, do not store passwords !

-   **Chrome extension**  
    Synced to your Google account if you are signed in to Chrome with your account & have sync enabled with “Extensions” option enabled in the "Manage what you sync” tab.

-   **Firefox extension**  
    Synced to your Firefox account the same way as Chrome. “Add-ons” must be enabled in the “Choose what to sync” tab.

-   **Online and Safari**  
    Settings are stored locally using the Web Storage API.

## Background service

Bonjourr [background service](https://github.com/victrme/Bonjourr/blob/master/src/scripts/services/background.js) only opens a tab on install, uninstall and when clicking on its toolbar icon.
