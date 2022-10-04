---
title: Style snippets
subtitle: Bonjourr is customisable through its settings interface, but there are many more things you can do! Copy and paste those style snippets in their dedicated section of the settings to unlock some new possibilities.
slug: css-snippet
orderData: 4
featured: ../assets/backgrounds/daniel-plan-Ryrv5z2A18w-unsplash.jpg
---

### I don't care about artist exposure

_Hides Unsplash photo author credits._

```css
#credit {
    display: none;
}
```

### I want my own greeting

_Sets a custom greeting phrase instead of Good Morning, Good Afternoon, etc._

```css
#greetings:before {
    content: 'Your custom greeting';
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    text-transform: none;
}

#greetings {
    visibility: hidden;
    position: relative;
}
```

### I like my backgrounds fast.

_Faster background transition on startup._

```css
#background_overlay {
    transition: transform 0.2s, opacity 0s;
}
```

### Widgets are too low!

_Makes Widgets higher._

```css
#interface #widgets {
    justify-content: flex-start;
}
```

### Now they're too high...

_Makes Widgets lower._

```css
#interface #widgets {
    justify-content: flex-end;
    padding-bottom: 2em;
}
```

### Links are all I need

_Hides everything but Quick Links (and centers them)._

```css
#interface #time,
#interface #main,
#interface #sb_container,
#interface #notes_container,
#interface #quotes_container {
    display: none;
}
```

### Unicolor is the new meta

_Makes background a uniform color. Replace 'rebeccapurple' with your color of choice._

```css
#background {
    opacity: 0;
}
#background_overlay {
    background-color: rebeccapurple;
}
```

### 23 what, carrots?

_Adds a C after the temperature._

```css
#tempContainer p::after {
    content: 'C';
}
```

### I like my clocks thick

_Makes analog clock thicker._

```css
#interface {
    --anlg-w: 4px; /* Change size here */
}
#interface #time #time-container #analogClock #center {
    width: calc(var(--anlg-w) * 4);
    height: calc(var(--anlg-w) * 4);
}
#interface #time #time-container #analogClock {
    border-width: calc(var(--anlg-w) * 2);
}
#interface #time #time-container #analogClock span {
    width: calc(var(--anlg-w) * 2);
    margin-left: calc(var(--anlg-w) * -1);
}
#interface #time #time-container #analogClock span#analogSeconds {
    width: var(--anlg-w);
}
```

### Left or right aligned interface

_Aligns interface to the sides instead of center._

```css
#interface {
    width: 70%;
    margin: auto;

    /* Remove the one you DON'T want */

    /* Right */
    --flex: flex-end;
    --text: right;

    /* Left */
    --flex: flex-start;
    --text: left;
}

#interface #main,
#interface #time {
    align-items: var(--flex);
}

#interface #greetings,
#interface #weather,
#interface #widgets #quotes_container,
#interface #widgets #quotes_container #author {
    text-align: var(--text);
}

#interface #main #weather #tempContainer {
    justify-content: var(--flex);
}

#interface #widgets {
    align-self: var(--flex);
}

#interface #widgets #linkblocks,
#interface #widgets #sb_container {
    margin: 0;
    align-self: var(--flex);
}
```

### Rolex 😎

_Makes analog clock look like a Rolex._

```css
* #interface #time #time-container #analogClock,
* #interface #time #time-container #analogClock:hover {
    border-width: 1px;
    background-size: cover;
    background-image: url('https://bonjourr.fr/rolex.png') !important;
}
```

_Want your own style snippet here? [Contact us](/#further)!_
