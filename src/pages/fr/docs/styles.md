---
title: Morceaux de code sympatoche
subtitle:
slug: css
orderData: 3
layout: ../../../layouts/Docs.astro
featured: /backgrounds/kir-simakov-ZN3Hsru3SIM.webp
---

Bonjourr est personnalisable par le biais de son interface de paramètres, mais vous pouvez faire bien d'autres choses ! Copiez et collez ces extraits de style dans leur section dédiée des paramètres pour débloquer de nouvelles possibilités.

## Je veux mon propre message d'accueil

_Définit une phrase d'accueil personnalisée au lieu de Bonjour, Bon après-midi, etc._

```css
#greetings:before {
	content: "Votre message d'accueil personnalisé";
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

## J'ai besoin de plus d'espace vertical

_Par défaut, Bonjourr réserve un certain espace pour le pied de page (les crédits et icône des paramètres) afin que le reste de l'interface ne déborde pas dessus. Ce code supprime cet espace réservé et donne plus d'espace vertical à vos widgets. Cela peut être utile si vous avez un petit écran et beaucoup de widgets, mais peut entraîner des problèmes de débordement dans certaines situations._

```css
footer {
	position: absolute;
	bottom: 0;
}

#interface {
	max-height: 100vh;
}
```

## Je me fiche de l'exposition de l'artiste

_Cache les crédits d'auteur de la photo Unsplash._

```css
#credit {
	display: none;
}
```

## J'aime que mes arrière-plans soient rapides.

_Transition d'arrière-plan plus rapide au démarrage._

```css
#background_overlay {
	transition: transform 0.2s, opacity 0s;
}
```

## Les widgets sont trop bas !

_Rend les widgets plus élevés._

```css
#interface #widgets {
	justify-content: flex-start;
}
```

## Maintenant, ils sont trop élevés....

_Rend les widgets plus bas._

```css
#interface #widgets {
	justify-content: flex-end;
	padding-bottom: 2em;
}
```

## Les liens sont tout ce dont j'ai besoin

_Masque tout sauf les liens rapides (et les centre)._

```css
#interface #time,
#interface #main,
#interface #sb_container,
#interface #notes_container,
#interface #quotes_container {
	display: none;
}
```

## L'unicolore est la nouvelle méta

_Donne une couleur uniforme à l'arrière-plan. Remplacez "rebeccapurple" par la couleur de votre choix._

```css
#background {
	opacity: 0;
}
#background_overlay {
	background-color: rebeccapurple;
}
```

## 23 quoi, carottes ?

_Ajoute un C après la température._

```css
#tempContainer p::after {
	content: 'C';
}
```

## J'aime mes horloges épaisses

_Rend l'horloge analogique plus épaisse._

```css
#interface {
	--anlg-w: 4px; /* Changez la taille ici */
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

## Interface alignée à gauche ou à droite

_Aligne l'interface sur les côtés au lieu du centre._

```css
#interface {
	width: 70%;
	margin: auto;

	/* Retirez celui que vous ne voulez PAS */

	/* Droite */
	--flex: flex-end;
	--text: right;

	/* Gauche */
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

## Rolex 😎

_Fait ressembler une horloge analogique à une Rolex._

```css
* #interface #time #time-container #analogClock,
* #interface #time #time-container #analogClock:hover {
	border-width: 1px;
	background-size: cover;
	background-image: url('https://bonjourr.fr/rolex.png') !important;
}
```

<br><br>

_Vous voulez votre propre extrait de style ici ? [Contactez nous](/#further)!_
