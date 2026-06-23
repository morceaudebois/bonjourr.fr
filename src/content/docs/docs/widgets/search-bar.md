---
title: 🔎 Search bar
# description:
# thumbnail:
---

### Suggestions

Suggestions are provided by our own API. You can learn all about it and its source code [here](https://github.com/victrme/search-suggestions).

### Custom search engine

There are many search engines available by default in Bonjourr, and you can even add others if needed. To do so, select <bjr>Custom</bjr> in the Search engine option of the search bar. When the <bjr>URL request</bjr> input appears, simply paste in the URL of the search engine and replace the searched text by `%s`.

For example, if you search "coffee" on YouTube, you'll see that the URL will be `https://www.youtube.com/results?search_query=coffee`.

In this case, you just need to replace `coffee` with `%s`, giving you this result: `https://www.youtube.com/results?search_query=%s`.

Paste it in the input and you'll now be able to use the corresponding search engine from Bonjourr.

<video autoplay loop muted playsinline>
  <source src="/documentation/overview/custom-search.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>

This method will work with the vast majority of search engines, making Bonjourr compatible with almost all of them.

**💡 Tip!** Hitting the **/** key will focus on the search bar.
