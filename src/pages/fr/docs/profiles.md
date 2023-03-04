---
title: Profiles customisés
subtitle:
slug: profiles
orderData: 4
layout: ../../../layouts/Docs.astro
featured: /backgrounds/joe-eitzen-ByDY5eqhP.webp
---

Voici quelques thèmes préétablis que vous pouvez importer en bas des paramètres de Bonjourr.
Vous voulez votre propre profil personnalisé ici ? [Contactez nous!](/#further)

### Cyberpunk 2077

![Thème Cyberpunk 2077 Bonjourr](/documentation/profiles/cyberpunk.webp)

```json
{
	"background_blur": 0,
	"background_bright": 0.71,
	"background_type": "dynamic",
	"clock": {
		"ampm": false,
		"analog": false,
		"face": "none",
		"seconds": false,
		"timezone": "auto"
	},
	"css": "* #w_icon { display: none }\n* #date, #credit a { color: #00d8f3 }\n\n* #clock {\n color: #fdf800;\n text-shadow: 5px 5px #00d8f3\n}\n\n* #greetings, * #weather_desc {\n text-shadow: none;\n background-color: #fdf800;\n padding: 10px 20px;\n color: black\n}",
	"cssHeight": 211,
	"dark": "enable",
	"dynamic": { "collection": "He87uFs-2zg", "every": "tabs", "lastCollec": "user", "time": 0 },
	"font": {
		"availWeights": ["400", "500", "600", "700", "800", "900"],
		"family": "Orbitron",
		"size": "15",
		"url": "https://fonts.googleapis.com/css?family=Orbitron:700",
		"weight": "400"
	},
	"greeting": "V",
	"searchbar": false,
	"textShadow": 0
}
```

### Le passionné de l'espace

![Thème Espace Bonjourr](/documentation/profiles/space.webp)

```json
{
	"background_blur": 0,
	"background_bright": 0.5,
	"background_type": "dynamic",
	"clock": { "ampm": false, "analog": false, "seconds": true, "timezone": "auto" },
	"css": "/* Change weather text here */\n\n#interface #current::after {\n  content: ' on earth.'\n}\n\n/* the rest */\n\n#interface { color: #dfe1cc!important }\n#interface #time #date { margin-left: 50px }\n#interface #time {\n  flex-direction: row;\n  flex-wrap: wrap\n}\n\n#showSettings button img {\n  filter: sepia(1)\n}\n\n",
	"cssHeight": 280,
	"dark": "system",
	"dynamic": { "every": "hour", "collection": "858219,136301,235,s9aRSbDoSg8", "time": 0 },
	"font": {
		"availWeights": ["400", "700"],
		"family": "Space Mono",
		"size": "13",
		"url": "https://fonts.googleapis.com/css?family=Space Mono:700",
		"weight": "700"
	},
	"greeting": "Neil",
	"hide": [[0, 0], [0, 0, 1], [0], [0]],
	"searchbar": false,
	"showall": true,
	"usdate": true
}
```

### Floral

![Thème floral Bonjourr](/documentation/profiles/floral.webp)

```json
{
	"background_blur": 0,
	"background_bright": 0.9,
	"background_type": "dynamic",
	"clock": { "ampm": false, "analog": false, "seconds": true, "timezone": "auto" },
	"css": "#interface, #credit a {color: #6d8161 !important }\n\n#interface #date::before,\n#interface #weather::before { box-shadow: none }",
	"cssHeight": 220,
	"dark": "disable",
	"dynamic": { "collection": "2AC1c6JsJh8", "every": "hour", "lastCollec": "user", "time": 0 },
	"font": {
		"availWeights": ["400"],
		"family": "DM Serif Display",
		"size": "16.75",
		"url": "https://fonts.googleapis.com/css?family=DM%20Serif%20Display:400",
		"weight": "400"
	},
	"hide": [[0, 0], [0, 0, 1], [0], [0]],
	"textShadow": 0
}
```

### Pas Momentum

![Thème Pas Momentum Bonjourr](/documentation/profiles/not_momentum.webp)

```json
{
	"background_blur": 0,
	"background_bright": 0.7,
	"background_type": "dynamic",
	"clock": {
		"ampm": false,
		"analog": false,
		"face": "none",
		"seconds": false,
		"timezone": "auto"
	},
	"css": "* #analogClock { margin-bottom: 1em }\n* #date { display: none }\n* #time { font-size: 2em }\n\n* #clock {\nline-height: 1.1em\n}\n\n#interface { height: 80vh; padding-top: 10vh }\n#interface #time {justify-content: flex-end}\n#interface #main {justify-content: flex-start}\n\n",
	"cssHeight": 312,
	"dark": "enable",
	"dynamic": { "collection": "", "every": "day", "lastCollec": "day", "time": 1629873600400 },
	"font": { "availWeights": [], "family": "", "url": "", "weight": "600" },
	"greeting": "Victor.",
	"hide": [[0, 0], [0, 1, 0], [0], [1]],
	"reviewPopup": "removed",
	"searchbar": false,
	"showall": true
}
```
