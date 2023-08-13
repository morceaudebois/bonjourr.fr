---
title: Politique de confidentialité
lang: fr
slug: privacy
layout: ../../layouts/Docs.astro
featured: ../../backgrounds/kir-simakov-ZN3Hsru3SIM.webp
---

## APIs tierces

-   **Openweathermap**  
     Récupère la météo. Se déclenche toutes les 30 minutes quand l'onglet est actif. En cas de changement de position ou de langue. Pas de requète quand la description et l'icône sont cachées.

-   **Unsplash**  
     Récupère les images d'arrière-plan. Au démarrage et toutes les heures par défaut. Au changement de collection.

-   **Google Fonts**  
     Récupère la liste des polices les plus populaires. Quand on clique sur la zone de texte "Police". Quand il n'y a plus de cache.

## APIs maison

Ces API ont été créées par et pour Bonjourr, et sont open source. Tout le monde peut les forker et les héberger en utilisant les fonctions edge Netlify ou les Cloudflare Workers.

-   **Favicon fetcher**  
     Récupère la favicon des sites web. Se déclenche lors de l'ajout d'un nouveau favoris.  
     [Code source](https://github.com/victrme/favicon-fetcher)

-   **Citations**  
     Obtient une liste aléatoire de citations. Une fois au démarrage, et après avoir changé de type de citation ou toutes les 20 citations.  
     [Code source](https://github.com/victrme/i18n-quotes)

-   **Geol**  
     Obtient la localisation approximative. Une fois au démarrage, à chaque fois que les paramètres sont réinitialisés.  
     [Code source](https://github.com/victrme/geol)

## Permissions

Les extensions sont plus sécurisées que les pages web, ce qui signifie que Bonjourr doit demander des permissions pour fonctionner correctement. En savoir plus sur les permissions sur [developer.chrome.com](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)

-   **Stockage illimité**  
    Autorise plus de 1 Mo par élément. Utilisé uniquement pour le stockage des arrière-plans locaux, mais inutilisé depuis la version 1.17.0.

-   **Géolocalisation**  
    Obtenir la localisation précise. Au démarrage et lorsque la météo est mise à jour: voir openweathermap.

-   **Favoris**  
    Obtenir une liste des favoris du navigateur. Facultatif. N'est demandé que lors de l'utilisation de l'option d'importation de favoris.

## Stockage des paramètres

Nous, [l'équipe Bonjourr](https://github.com/victrme/Bonjourr#authors), n'avons accès à aucun de vos paramètres. Nous n'utilisons pas de télémétrie. Votre page n'envoie que des requêtes aux API pertinentes. Par défaut, Bonjourr synchronisera ses paramètres avec le compte de votre navigateur s'il est disponible.

-   **Extension Chrome**  
    Synchronisée avec votre compte Google si vous êtes connecté à Chrome avec votre compte et que la synchronisation est activée avec l'option "Extensions" dans l'onglet "Gérer ce que vous synchronisez".

-   **Extension Firefox**  
    Synchronisée avec votre compte Firefox de la même manière que pour Chrome. L'option "Add-ons" doit être activée dans l'onglet "Choisir ce que vous synchronisez".

-   **Online et Safari**  
    Les paramètres sont stockés localement à l'aide de l'API de stockage Web.
