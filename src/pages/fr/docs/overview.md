---
title: Liste de fonctionnalitées
subtitle:
lang: fr
slug: overview
orderData: 2
layout: ../../../layouts/Docs.astro
featured: /backgrounds/neha-maheen-mahfin-IskqApmpcAw.webp
---

## Choses diverses

-   Passez votre souris sur les crédits du fond d'écran pour voir les infos exif.
-   En activant l'option de moteur de recherche personnalisé, la barre de recherche devient compatible avec tous les moteurs de recherche, ce qui inclut des choses comme YouTube (`https://www.youtube.com/results?search_query=%s`).

## Mise en page

Vous avez le choix entre trois mises en page différentes : simple, double et triple colonne. Chaque mise en page enregistre la position et l'alignement de vos widgets de manière indépendante.

Ces options n'affectent que la mise en page actuelle :

-   Toggle des widgets (Boutons Activer)
-   Toutes les options de mise en page dans la boîte à outils
-   Réinitialiser la mise en page

## Quick links

Vous pouvez ajouter et importer des liens à partir des paramètres, et les modifier en faisant un clic droit dessus.

Une façon simple d'ajouter une icône personnalisée à votre lien rapide est de la télécharger sur un site comme Imgur, et d'utiliser ce lien comme icône. Vous pouvez également convertir votre icône en une URI de données (max 8kB).

⚠️ **Attention**: par mesure de sécurité, les chemins locaux comme `file://`, des liens sur les paramètres du navigateur comme `about:config` ou `chrome://extensions` ne peut pas être ajouté. Cependant, les liens `localhost:` fonctionneront très bien.

## Fond d'écran

Bonjourr utilise [l'API Unsplash](https://unsplash.com/developers) pour récupérer ses arrière-plans. Nous les sélectionnons manuellement et les stockons dans quatre collections différentes qui changent selon l'heure de la journée :

-   [Pendant la journée](<https://unsplash.com/collections/4933370/bonjourr-backgrounds-(day)>) ou [la nuit](<https://unsplash.com/collections/VI5sx2SDQUg/bonjourr-backgrounds-(night)>)
-   2 heures entre [le lever du soleil (Noon)](<https://unsplash.com/collections/yDjgRh1iqkQ/bonjourr-backgrounds-(noon)>) et [le coucher de soleil (Evening)](<https://unsplash.com/collections/2nVzlQADDIE/bonjourr-backgrounds-(evening)>)

### Collection Unsplash personnalisé

Vous pouvez créer votre propre collection d'images en utilisant [Unsplash](https://unsplash.com/). Pour ce faire, vous devez créer un compte Unsplash et ajouter toutes vos images à une nouvelle collection. Une fois que vous êtes satisfait de votre sélection, vous avez besoin de l'ID de la collection présent dans son URL. Vous le repérerez facilement puisqu'il s'agit d'une chaîne de lettres et de chiffres aléatoires. Par exemple, si l'URL de votre collection est `https://unsplash.com/collections/2170139/wolfdogs-of-unsplash`, l'ID est `2170139`.

Retournez sur Bonjourr et collez l'ID dans le champ **Collection Unsplash**. Vous pouvez ajouter plusieurs collections en les séparant par une virgule.

### Images locale

Passez du type d'arrière-plan Dynamique à Personnalisé, et vous pourrez faire glisser et déposer vos propres images de votre ordinateur vers Bonjourr.

## Gestion des paramètres

Bonjourr vous permet d'exporter tous vos paramètres dans un fichier. Vous pouvez utiliser cette fonction si vous souhaitez les sauvegarder ou les partager avec quelqu'un. Vous pourrez à votre tour importer ces paramètres dans n'importe quelle instance de Bonjourr.

Pour ce faire, il suffit d'aller en bas de votre panneau de paramètres, puis de cliquer sur Exporter comme fichier dans la gestion des paramètres. Votre fichier sera téléchargé. Sur votre autre instance de Bonjourr, vous pouvez alors aller dans l'onglet Importation de la gestion des paramètres et déposer votre fichier. Bonjourr rechargera la page et tous vos paramètres seront appliqués.

### Synchronisation du navigateur

Bonjourr est compatible avec les fonctions de synchronisation automatique des deux applications suivantes [Firefox](https://www.mozilla.org/firefox/sync/) et [Chrome](https://support.google.com/chrome/answer/185277). Si vous vous connectez à votre compte Mozilla/Google sur votre navigateur et que la synchronisation est activée dans votre navigateur, Bonjourr devrait être synchronisé avec d'autres instances du même navigateur sur d'autres ordinateurs. Cela fonctionne pour tous les paramètres de Bonjourr ainsi que pour les liens rapides.

## Raccourcis clavier

### Général

| Keys                  | Action                       |
| --------------------- | ---------------------------- |
| Echap                 | Ouvre / ferme les paramêtres |
| E (ciblé sur un lien) | Modifie le lien              |

### Notes

Vous pouvez utiliser ces raccourcis clavier lorsque vous modifiez votre Note. Remplacez `Ctrl` par `cmd` sous macOS.

| Keys           | Action         |
| -------------- | -------------- |
| Ctrl + Maj + 1 | Grand titre    |
| Ctrl + Maj + 2 | Moyen titre    |
| Ctrl + Maj + 3 | Petit titre    |
| Ctrl + Maj + 4 | Liste à puce   |
| Ctrl + Maj + 5 | List de tâches |
