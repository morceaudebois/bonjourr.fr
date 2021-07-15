---
title: CSS snippets
subtitle: Bonjourr is customisable through its settings interface, but there are many more things you can do! Copy and paste those CSS snippets in their dedicated section of the settings to unlock some new possibilities.
slug: css-snippet
featured: ../assets/backgrounds/daniel-plan-Ryrv5z2A18w-unsplash.jpg
---

#### I don't care about artist exposure
```css
#credit { display: none }
```

#### No more shadows
```css
* #date::before, * #weather::before { box-shadow: none!important }
```

#### I like my backgrounds fast.
```css
* #background_overlay { transition: transform .2s, opacity 0s!important }
```

#### Links are too small!
```css
* #linkblocks_inner { transform: scale(1.2) }
```

#### Links are too low!
```css
* #linkblocks {align-items: flex-start }
```

#### Unicolor is the new meta
```css
* #background { opacity: 0 }
** #background_overlay { background-color: rebeccapurple }
```

#### 23 what, carrots? 
```css
#widget_temp::after { content: '°C' }
```

#### I like my clocks thick
```css
* #center { width: 16px; height: 16px }
* #analogClock span { width: 8px; margin-left: -4px }
* span#analogSeconds { width: 4px }
* #analogClock { border-width: 8px }
```

#### Rolex 😎
```css
* #analogClock { border-width: 1px; background-size: cover; background-image: url("data:image/jpeg;base64,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") }
```

#### You're breathtaking!
```css
* #w_icon { display: none }
* #date, #credit a { color: #00d8f3 }

#interface #main {
    align-items: flex-start
}

* #clock {
    color: #fdf800;
    text-shadow: 5px 5px #00d8f3
}

* #greetings, * #weather_desc {
    text-shadow: none;
    background-color: #fdf800;
    padding: 10px 20px;
    color: black
}
```


*Want your own CSS snippet here? [Contact us](/#further)!*