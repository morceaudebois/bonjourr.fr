---
title: Privacy policy
lang: en
slug: privacy
layout: '../layouts/Docs.astro'
---

# Privacy policy

## In short

We, or the Bonjourr team refers to [Tahoe Beetschen](https://github.com/morceaudebois/) & [Victor Azevedo](https://github.com/victrme/). We do not use collect, store, or share any data the user generates on Bonjourr. Data sent to our API is the minimum required for Bonjourr to work, is completely anonymous and cannot identify a user. The API does not save any logs or data.

## External services

To enjoy every feature, Bonjourr has to communicate with external services. All data your page sends goes to [our open source API](https://github.com/victrme/bonjourr-apis) before accessing the relevent services. This offers a layer of anonymity for the users, much like a VPN.

This API is deployed on Cloudflare Workers, which means we have access to Cloudflare's automatic [account analytics](https://developers.cloudflare.com/analytics/account-and-zone-analytics/account-analytics/#summary-of-metrics) and [worker metrics](https://developers.cloudflare.com/workers/observability/metrics-and-analytics/). These analytics are general info about network traffic, error rates, and bandwidth usage. We can use these metrics to debug potential issues.

Nothing is stored on our end, however we cannot control how the service providers are using your data. You can refer to the privacy policy of each providers below:

### api.bonjourr.fr

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
    Gets search suggestions from Google, Duckduckgo and others. The API is a web scraper and does not directly use the services of these providers.  
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

We do not have access to any of your settings. Settings are stored in the browser using the [extension storage API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage). This storage system is not encrypted so users need to be responsible. Bonjourr will never ask for or store any personal or identifiable data.

By default, Bonjourr will synchronize its settings with your browser account if available. You can opt out by following these steps:

-   **Chrome extension**  
    Synced to your Google account if you are signed in to Chrome with your account & have sync enabled with “Extensions” option enabled in the "Manage what you sync” tab.

-   **Firefox extension**  
    Synced to your Firefox account the same way as Chrome. “Add-ons” must be enabled in the “Choose what to sync” tab.

-   **Online and Safari**  
    Settings are stored locally using the Web Storage API and cannot be synced.

## Background service

When using the extension, Bonjourr [background service](https://github.com/victrme/Bonjourr/blob/master/src/scripts/services/background.js) can open a tab on install, uninstall and when clicking on its toolbar icon. Nothing else runs in the background of your browser. Since the upgrade to manifest v3, the background worker even [shuts down after 30s on inactivity](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle#idle-shutdown) all by itself.
