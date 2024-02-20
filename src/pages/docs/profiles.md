---
title: Custom profiles
subtitle:
lang: en
slug: profiles
orderData: 4
layout: '../../layouts/Docs.astro'
featured: /backgrounds/joe-eitzen-ByDY5eqhP.webp
---

Here are some pre-made themes you can import at the bottom of the settings of Bonjourr.
Want your own custom profile here? [Contact us!](/#further)

## Cyberpunk 2077

![Cyberpunk 2077 Bonjourr theme](/documentation/profiles/cyberpunk.webp)

```json
{
	"showall": true,
	"dark": "enable",
	"greeting": "V",
	"time": true,
	"main": true,
	"background_blur": 0,
	"background_bright": 0.71,
	"background_type": "unsplash",
	"quicklinks": true,
	"textShadow": 0,
	"css": "#date, #credit, #credit a { color: #00d8f3 }\n\n#clock {\n color: #fdf800;\n text-shadow: 5px 5px #00d8f3\n}\n\n#greetings, #weather_desc {\n text-shadow: none;\n background-color: #fdf800;\n padding: 10px 20px;\n color: black\n}",
	"hide": {
		"weatherdesc": false,
		"weathericon": true
	},
	"clock": {
		"analog": false,
		"seconds": false,
		"size": 1
	},
	"unsplash": {
		"collection": "He87uFs-2zg",
		"every": "tabs",
		"lastCollec": "user",
		"time": 0
	},
	"font": {
		"size": "15",
		"family": "Orbitron",
		"system": false,
		"weight": "600",
		"weightlist": ["400", "500", "600", "700", "800", "900"]
	}
}
```

## The Space Enthusiast

![Space Bonjourr theme](/documentation/profiles/space.webp)

```json
{
	"showall": true,
	"greeting": "Neil",
	"pagegap": 1,
	"pagewidth": 1600,
	"time": true,
	"main": true,
	"dateformat": "eu",
	"background_blur": 0,
	"background_bright": 0.5,
	"background_type": "unsplash",
	"quicklinks": true,
	"css": "/* Change weather text here */\n\n#interface #current::after {\n content: 'C on earth.'\n}\n\n/* the rest */\n\n#interface { color: #dfe1cc!important }\n#interface #time #date { margin: 0 50px }\n#interface #time {\n display: flex;\n align-items: center;\n justify-content: center;\n flex-wrap: wrap;\n}\n\n#showSettings button img {\n filter: sepia(1)\n}\n\n",
	"hide": {
		"weatherdesc": false,
		"weathericon": true
	},
	"clock": {
		"ampm": false,
		"analog": false,
		"seconds": true,
		"size": 1
	},
	"unsplash": {
		"collection": "858219,136301,235,s9aRSbDoSg8",
		"lastCollec": "user",
		"time": 1706435865689
	},
	"font": {
		"size": "13",
		"family": "Space Mono",
		"system": false,
		"weight": "700",
		"weightlist": ["400", "700"]
	}
}
```

## Floral

![Floral Bonjourr theme](/documentation/profiles/floral.webp)

```json
{
	"time": true,
	"main": true,
	"background_blur": 0,
	"background_bright": 1,
	"background_type": "unsplash",
	"quicklinks": true,
	"textShadow": 0,
	"css": "#interface, #credit a {\n color: #6d8161;\n}",
	"hide": {
		"weatherdesc": false,
		"weathericon": true
	},
	"clock": {
		"ampm": false,
		"analog": false,
		"seconds": true
	},
	"unsplash": {
		"collection": "2AC1c6JsJh8",
		"every": "day",
		"lastCollec": "user",
		"time": 0
	},
	"font": {
		"family": "DM Serif Display",
		"system": false,
		"weight": "400",
		"weightlist": ["400"]
	}
}
```

## Not Momentum

![Not Momentum Bonjourr theme](/documentation/profiles/not_momentum.webp)

```json
{
	"pagegap": 0,
	"time": true,
	"main": true,
	"quicklinks": true,
	"hide": {
		"date": true,
		"weatherdesc": true,
		"weathericon": false,
		"clock": false
	},
	"clock": {
		"analog": false,
		"size": 1.875
	},
	"font": {
		"weight": "700"
	},
	"move": {
		"layouts": {
			"single": {
				"grid": [["time"], ["main"], ["quicklinks"]],
				"items": {
					"time": {
						"box": "end center",
						"text": ""
					},
					"main": {
						"box": "baseline center",
						"text": ""
					}
				}
			},
			"selection": "single"
		}
	}
}
```
