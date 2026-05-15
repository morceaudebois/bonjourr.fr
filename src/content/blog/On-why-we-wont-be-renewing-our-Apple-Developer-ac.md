---
title: "Why Bonjourr for Safari is leaving the App Store "
description: "descirprprpperzrzerpzezprezrzepofisjhsmdfglsd fjogicmlezrctomsdrf"
pubDate: "2026-03-29"
author: "Tahoe"
image: "https://storage.ko-fi.com/cdn/useruploads/display/374df8a2-43d7-4421-84f2-4ac76b89a074_screenshot2026-03-28at16.15.44.png"
---

Hi peeps! Hope you're all doing well. We come to you today with some news, although this time not of the good variety. After much deliberation, we’ve decided we will not be renewing our Apple Developer account, which means **the Safari version of Bonjourr will stop receiving updates from the App Store**.

## Why we’re doing this

As you might expect, this wasn't an easy decision to make. Building and maintaining the App Store version of Bonjourr **has required lots of time and money over the years**. Let me give you some context however, and I think you'll understand.

Let's start with a simple pie:

![Bonjourr's userbase distribution, as of March 2026](https://storage.ko-fi.com/cdn/useruploads/display/c46c1ca6-890f-47df-9a3f-650b7ff760c5_screenshot2026-03-27at13.29.20.png)

_Bonjourr's userbase distribution, as of March 2026_

As you can see, **Bonjourr for Safari has only accumulated around 4,000 users since 2022** across macOS, iOS, and iPadOS. It’s not nothing, but compared to our other platforms, barely 1% isn’t much. That would be perfectly **fine if Safari was easy to deal with and free** (or one-time payment) to publish to, but you probably get where I’m going with this: **it’s neither of those things**.

In fact, the App Store version of Bonjourr is by far our most time consuming version to develop and maintain. The main culprit is that Apple doesn't treat Safari extensions as... browser extensions, but as apps. This implies **a totally different workflow**: you need to compile files with Xcode, adding a lot of extra work and potential problems. Add in the fact that Safari itself often has **peculiar bugs that are difficult to reproduce and fix**, and you get an unfortunate situation **where the least used version of Bonjourr requires the most work**.

[Our soon to be defunct App Store listing 🥲](https://storage.ko-fi.com/cdn/useruploads/display/ad11f33b-a2bb-47b1-a14a-62ca1d51f078_screenshot2026-03-28at16.15.15.png "Our soon to be defunct App Store listing 🥲")

There is the infamous **99€ yearly fee** that Apple requires developers to pay, too. This fee is understandable in the case of companies who make a living out of it, but it's **a hard pill to swallow every year** for small open source developers like us, especially since **Apple prohibits us to advertise our Ko-fi page** in Bonjourr. You can ask for donations, but <u>they have to pass through their system</u>, which once again adds more work and overhead for us (and of course imposes a 10% cut for Apple).

Besides, these Safari numbers in our pie chart are only **vague estimates** based on total downloads and deletions, as **Apple doesn’t provide proper analytics for extensions**. Since the App Store considers apps and Safari extensions the same, the tools they provide are made for apps, and apps only. This means they only count daily active users of the companion app, not making any sense for a Safari extension as that thing only gets open once at the beginning, and then never again.

**So in short, we’re left with a situation where the App Store version of Bonjourr:**

- **is the most annoying and time-consuming to deal with**
- **is by far the most expensive**
- **probably brings in very few donations**
- **has the least users**

And on top of that, we're treated like third-class citizens by Apple.

## I’m a Safari user, what do I do now?

If you’ve already downloaded Bonjourr for Safari, **you’ll be able to keep using it for a good while**. The extension won’t be listed anymore on the App Store, but it will remain downloadable from your previously downloaded apps page for the foreseeable future.

It won’t be receiving updates anymore though, which means **if we were to change how our APIs provide data, some features will break.**

Once this becomes a problem, you’ll be **encouraged to switch to the online version of Bonjourr** (the way we were already handling the Safari for macOS version before putting it on the App Store). There, **you will receive updates and have a very similar experience** to the one you were having on the App Store. This will be documented on our website soon!

![Bonjourr for Safari running on iOS](https://storage.ko-fi.com/cdn/useruploads/display/3b63d105-d768-4961-97b2-7b7f385ac194_199af0af-1876-4098-a81a-ee8ba49acefe_dsc04594.jpg)

_Bonjourr for Safari running on iOS_

Unfortunately, if you’re using Safari on iOS or iPadOS, there’s no real alternative. Apple doesn’t allow changing the homepage outside of extensions.

## Why did it fail?

It’s hard to pinpoint a single reason why the App Store version of Bonjourr failed, but we do have a few ideas!

The main thing could be that Safari users are way more inclined to use their default ecosystem, and have a pretty different culture when it comes to customization. **Apple’s always been very half-hearted when it comes to Safari extensions**, on both the developer and consumer sides: they rarely market them or talk about them, meaning most users probably don’t even know they can actually install extensions.

We thought the fact that Bonjourr targets Apple aesthetic enthusiasts would be enough to counteract this, but it unfortunately didn’t go that way.

We struggled finding ways to promote it ourselves as well. The main way we advertised Bonjourr for other platforms was through browsers subreddits like r/firefox or r/MicrosoftEdge, but we couldn’t find similar Apple-centric and popular enough subreddits that allowed self-promotion. Word of mouth can only go so far, especially when it comes to something as niche as Bonjourr is.

It really is unfortunate that we couldn't make this work. We realize some of you care about Bonjourr for Safari, and that it makes a lot of sense (in theory) to have it available on Apple's browser. We think it's the right decision however, as it will leave us with more time to focus on Bonjourr itself for everybody else. We want to thank you all for your support over the years, and promise our next post will be more positive!

**TL;DR: Bonjourr for Safari on the App Store is too much effort for too little reward because Apple likes to make things unnecessarily difficult. Existing users can keep using the Mac's App Store version for a while, but will have to switch back to the online version eventually. iOS & iPadOS however won't have alternatives.**
