---
title: Liste de fonctionnalitées
lang: fr
slug: overview
layout: ../../../layouts/Docs.astro
---

# Liste de fonctionnalitées

## Interface

-   Survolez votre souris sur les crédits du fond d'écran pour voir les infos exif.

## Afficher tous les réglages

Bonjourr est rempli d'options. Afin de ne pas être trop intimidant, la plupart de ces options sont cachées par défaut. Si vous êtes un utilisateur avancé, vous pouvez les afficher en activant l'option **Afficher tous les réglages** tout en haut du panneau de réglages.

## Cacher l'icône des réglages

Lorsque vous sélectionnez l'option "Cacher l'icône des réglages", l'icône reste cliquable au même endroit qu'auparavant. Vous pouvez également ouvrir le menu des réglages en appuyant sur la touche `Echap`.

<video src="/documentation/videos/hide-icon.mp4" controls muted></video>

## Fond d'écran

Bonjourr utilise [l'API Unsplash](https://unsplash.com/developers) pour récupérer ses arrière-plans. Nous les sélectionnons manuellement et les stockons dans quatre collections différentes qui changent selon l'heure de la journée :

-   [Pendant la journée](<https://unsplash.com/collections/4933370/bonjourr-backgrounds-(day)>) ou [la nuit](<https://unsplash.com/collections/VI5sx2SDQUg/bonjourr-backgrounds-(night)>)
-   2 heures entre [le lever du soleil (Noon)](<https://unsplash.com/collections/yDjgRh1iqkQ/bonjourr-backgrounds-(noon)>) et [le coucher de soleil (Evening)](<https://unsplash.com/collections/2nVzlQADDIE/bonjourr-backgrounds-(evening)>)

### Collection Unsplash personnalisé

Vous pouvez créer votre propre collection d'images en utilisant [Unsplash](https://unsplash.com/). Pour ce faire, vous devez créer un compte Unsplash et ajouter toutes vos images à une nouvelle collection. Une fois que vous êtes satisfait de votre sélection, vous avez besoin de l'ID de la collection présent dans son URL. Vous le repérerez facilement puisqu'il s'agit d'une chaîne de lettres et de chiffres aléatoires. Par exemple, si l'URL de votre collection est `https://unsplash.com/collections/2170139/wolfdogs-of-unsplash`, l'ID est `2170139`.

Retournez sur Bonjourr et collez l'ID dans le champ **Collection Unsplash**. Vous pouvez ajouter plusieurs collections en les séparant par une virgule.

### Images locale

Passez du type d'arrière-plan Dynamique à Personnalisé, et vous pourrez faire glisser et déposer vos propres images de votre ordinateur vers Bonjourr.

## Quick links

Vous pouvez ajouter et importer des liens à partir des paramètres, et les modifier en faisant un clic droit dessus.

Une façon simple d'ajouter une icône personnalisée à votre lien rapide est de la télécharger sur un site comme Imgur, et d'utiliser ce lien comme icône. Vous pouvez également convertir votre icône en une URI de données (max 8kB).

⚠️ **Attention**: par mesure de sécurité, les chemins locaux comme `file://`, des liens sur les paramètres du navigateur comme `about:config` ou `chrome://extensions` ne peut pas être ajouté. Cependant, les liens `localhost:` fonctionneront très bien.

### Dossiers de liens

Les dossiers de liens sont très intéressants. Vous pouvez les faire glisser et les déposer. En faisant glisser un dossier sur un autre, le contenu du dossier glissé est ajouté à la cible. La suppression d'un dossier contenant des liens supprime aussi ces liens.

## Barre de recherche

En activant l'option de moteur de recherche personnalisé, la barre de recherche devient compatible avec tous les moteurs de recherche, ce qui inclut des choses comme YouTube (`https://www.youtube.com/results?search_query=%s`).

## Notes

Notes utilise le système Markdown pour pouvoir faire des titres, des listes, et des cases à cocher. Pour transformer une ligne, il suffit de rajouter ces caractères en début de ligne:

-   `# ` titre gros
-   `## ` titre moyen
-   `### ` titre petit
-   `- ` liste classique
-   `[ ] ` case à cocher
-   `[x] ` case à cocher, coché

Les autres implémentations de Markdown, comme l'italique, ne sont pas encore disponible.

## Police d'écriture

Bonjourr récupère les polices de caractères depuis Fontsource. Si vous voulez voir les aperçus des polices proposées par Bonjourr, allez sur le [site de Fontsource](https://fontsource.com/).

## Mise en page

Vous avez le choix entre trois mises en page différentes : simple, double et triple colonne. Chaque mise en page enregistre la position et l'alignement de vos widgets de manière indépendante.

Ces options n'affectent que la mise en page actuelle :

-   Toggle des widgets (Boutons Activer)
-   Toutes les options de mise en page dans la boîte à outils
-   Réinitialiser la mise en page

## Gestion des paramètres

Bonjourr vous permet d'exporter tous vos paramètres dans un fichier. Vous pouvez utiliser cette fonction si vous souhaitez les sauvegarder ou les partager avec quelqu'un. Vous pourrez à votre tour importer ces paramètres dans n'importe quelle instance de Bonjourr.

Pour ce faire, il suffit d'aller en bas de votre panneau de paramètres, puis de cliquer sur Exporter comme fichier dans la gestion des paramètres. Votre fichier sera téléchargé. Sur votre autre instance de Bonjourr, vous pouvez alors aller dans l'onglet Importation de la gestion des paramètres et déposer votre fichier. Bonjourr rechargera la page et tous vos paramètres seront appliqués.

### Synchronisation du navigateur

Bonjourr est compatible avec les fonctions de synchronisation automatique des deux applications suivantes [Firefox](https://www.mozilla.org/firefox/sync/) et [Chrome](https://support.google.com/chrome/answer/185277). Si vous vous connectez à votre compte Mozilla/Google sur votre navigateur et que la synchronisation est activée dans votre navigateur, Bonjourr devrait être synchronisé avec d'autres instances du même navigateur sur d'autres ordinateurs. Cela fonctionne pour tous les paramètres de Bonjourr ainsi que pour les liens rapides.

## Raccourcis clavier

### Général

| Touches               | Action                       |
| --------------------- | ---------------------------- |
| Échap                 | Ouvre / ferme les paramètres |
| E (ciblé sur un lien) | Modifie le lien              |

### Notes

Vous pouvez utiliser ces raccourcis clavier lorsque vous modifiez votre Note. Remplacez `Ctrl` par `cmd` sous macOS.

| Touches        | Action          |
| -------------- | --------------- |
| Ctrl + Maj + 1 | Grand titre     |
| Ctrl + Maj + 2 | Moyen titre     |
| Ctrl + Maj + 3 | Petit titre     |
| Ctrl + Maj + 4 | Liste à puce    |
| Ctrl + Maj + 5 | Liste de tâches |
