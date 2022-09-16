---
title: Privacy policy
slug: privacy
featured: ../assets/backgrounds/meiying-ng-OrwkD-iWgqg-unsplash.jpg
---

| APIs           | Actions                            | Frequency                                                                                                      |
| -------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Openweathermap | Fetches weather data               | Every 30min when tab is active. On Location / Language change. No requests when description & icon are hidden. |
| ipapi.co       | Get approximate location           | Once on startup, every time settings are reset.                                                                |
| Unsplash       | Fetches background images          | On startup & every hour by default. On collection change.                                                      |
| Google Fonts   | Fetches list of most popular fonts | On “font family” input focus. If font list storage is lost.                                                    |

<br />
<br />

| Permissions       | Actions                         | Frequency                                                   |
| ----------------- | ------------------------------- | ----------------------------------------------------------- |
| Unlimited Storage | Allows more than 1MB per item   | Only used for storing local backgrounds                     |
| Geolocation       | Get precise location            | On startup and on geolocation option change.                |
| Bookmarks         | Get a list of browser bookmarks | Optional. Only requested when using bookmark import option. |

## Settings storage

We, [the Bonjourr team](https://github.com/victrme/Bonjourr#authors), do not have access to any of your settings. We do not use telemetry. Your page only sends requests to the relevent APIs. By default, Bonjourr will synchronize its settings with your browser account if available.

-   **Chrome extension:** Synced to your Google account if you are signed in to Chrome with your account & have sync enabled with “Extensions” option enabled in the "Manage what you sync” tab.

-   **Firefox extension:** Synced to your Firefox account the same way as Chrome. “Add-ons” must be enabled in the “Choose what to sync” tab.

-   **Online, Safari & Non-synced Extensions**: Settings are stored locally using the Web Storage API.
