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

### No more shadows
_Removes shadows from interface elements._
```css
* #date::before,
* #weather::before {
    box-shadow: none !important;
}
```

### More shadows
_Makes interface texts more readable with shadows_
```css
body #interface {
    text-shadow: 2px 3px 5px rgba(0,0,0,0.5);
}
```

### I like my backgrounds fast.
_Faster background transition on startup._
```css
* #background_overlay {
    transition: transform 0.2s, opacity 0s !important;
}
```

### Links are too small!
_Makes Quick Links larger._
```css
* #linkblocks_inner {
    transform: scale(1.2);
}
```

### Links are too high!
_Makes Quick Link lower._
```css
* #interface #linkblocks {
    align-items: center;
}
```

### Links are all I need
_Hides everything but Quick Links (and center them)._
```css
#interface #time, #interface #main, #interface #sb_container, #interface #quotes_container {
    display: none;
}

#interface #linkblocks {
    flex-grow: unset;
}
```

### Unicolor is the new meta
_Makes background a uniform color. Replace 'rebeccapurple' with your color of choice._
```css
* #background {
    opacity: 0;
}
* #background_overlay {
    background-color: rebeccapurple;
}
```

### 23 what, carrots?
_Adds a C after the temperature._
```css
* #widget p::after {
    content: 'C';
}
```

### I like my clocks thick
_Makes analog clock thicker._
```css
* #interface #time #time-container #analogClock #center {
    width: 16px;
    height: 16px;
}
* #interface #time #time-container #analogClock span {
    width: 8px;
    margin-left: -4px;
}
* #interface #time #time-container span#analogSeconds {
    width: 4px;
}
* #interface #time #time-container #analogClock {
    border-width: 8px;
}
```

### Left-aligned interface
_Aligns interface to the left instead of center._
```css
#interface #main,
#interface #time,
#interface #sb_container,
#interface #linkblocks {
    margin-left: 23%;
    align-items: flex-start;
}

#interface #main #weather #widget {
    justify-content: flex-start;
}

#interface #main #greetings {
    text-align: left;
}

#interface #sb_container #searchbar {
    margin-left: 0px;
}

#interface #linkblocks #linkblocks_inner {
    justify-content: flex-start;
}
```

### Right-aligned interface
_Aligns interface to the right instead of center._
```css
#interface #main,
#interface #time,
#interface #sb_container,
#interface #linkblocks {
    margin-right: 23%;
    align-items: flex-end;
}

#interface #main #weather #widget {
    justify-content: flex-end;
}

#interface #main #greetings {
    text-align: right;
}

#interface #sb_container {
    width: auto;
}

#interface #sb_container #searchbar {
    margin-right: 0px;
}

#interface #linkblocks #linkblocks_inner {
    justify-content: flex-end;
}
```

### Rolex 😎
_Makes analog clock look like a Rolex._
```css
* #interface #time #time-container #analogClock, * #interface #time #time-container #analogClock:hover {
    border-width: 1px;
    background-size: cover;
    background-image: url('https://bonjourr.fr/rolex.png')!important;
}
```

### You're breathtaking!
_Cyberpunk 2077 inspired colors._
```css
* #w_icon {
    display: none;
}
* #date,
#credit a {
    color: #00d8f3;
}

#interface #main {
    align-items: flex-start;
}

* #clock {
    color: #fdf800;
    text-shadow: 5px 5px #00d8f3;
}

* #greetings,
* #weather_desc {
    text-shadow: none;
    background-color: #fdf800;
    padding: 10px 20px;
    color: black;
}
```

_Want your own style snippet here? [Contact us](/#further)!_
