---
title: Syncing
# description:
# thumbnail:
---

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
