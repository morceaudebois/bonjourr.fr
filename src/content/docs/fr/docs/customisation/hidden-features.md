---
title: Fonctionnalités cachées
description: Bonjourr cache plus de choses qu’il n’y paraît 👀
image: /documentation/backgrounds/su-san-lee-g3PyXO4A0yc-unsplash.jpg
---

## Infos sur les arrière-plans

Avec les arrière-plans par défaut, il est possible d’obtenir les informations EXIF d’une image en survolant les crédits affichés en bas à gauche de Bonjourr (quand elles sont disponibles).

<img
  src="/documentation/overview/exif.png"
  alt="Informations de l’image actuelle dans Bonjourr"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
  loading="lazy"
/>

## Menu contextuel

Bonjourr intègre un menu contextuel personnalisé accessible par clic droit dans la plupart de l’interface. Il permet d’ajouter des liens rapides, d’accéder aux réglages des widgets ou de contrôler l’arrière-plan plus facilement.

<img
  src="/documentation/overview/context-menu.png"
  alt="Menu contextuel de Bonjourr"
  style="max-width: 400px; margin-inline: auto; margin-block: 2em; display: block;"
  loading="lazy"
/>

Le menu natif du navigateur reste accessible de deux façons :

- en maintenant <kbd>alt</kbd> puis clic droit,
- en sélectionnant du texte sur la page.

## Mode Alt

![Mode Alt de Bonjourr sur les liens rapides](/documentation/customisation/alt-mode.jpg)

En maintenant la touche <kbd>alt</kbd> dans Bonjourr, plusieurs actions rapides deviennent disponibles :

- <kbd>alt</kbd> + <kbd>numéro</kbd> ouvre le lien rapide correspondant (comme pour changer d’onglet avec <kbd>cmd</kbd> / <kbd>Ctrl</kbd> + <kbd>numéro</kbd>)
- <kbd>alt</kbd> + clic droit affiche le menu du navigateur à la place de celui de Bonjourr
- <kbd>alt</kbd> + <kbd>n</kbd> crée un nouveau lien rapide

## Réglages avancés

Depuis la version 22.3, Bonjourr propose des réglages avancés accessibles via la zone JSON en bas du panneau de configuration. Il suffit de passer les valeurs de `false` à `true` puis d’appliquer les changements.

<img
	src="/documentation/customisation/advanced-json.jpg"
	alt="Options avancées de Bonjourr"
	loading="lazy"
	style="max-width: 400px; margin-inline: auto; margin-block: 2em;"
/>

Les options avancées disponibles actuellement :

- **`altMode`** : passer à `false` pour désactiver toutes les fonctionnalités du mode Alt
- **`escKey`** : passer à `false` pour désactiver l’ouverture des paramètres avec la touche <kbd>esc</kbd>

Ces options peuvent être utiles dans certains environnements où ces raccourcis entrent en conflit avec d’autres usages.

## Mode d’assistance

Lorsqu’une erreur survient, Bonjourr affiche une page d’assistance permettant de diagnostiquer le problème. Elle donne notamment accès aux informations de statut des services et aux différents types de stockage utilisés.

![Page d’assistance de Bonjourr](/documentation/customisation/help-mode.png)

Cette page peut aussi être ouverte à tout moment avec le raccourci <kbd>cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>shift</kbd> + <kbd>?</kbd>.
