---
title: Politique de confidentialité
lang: fr
slug: privacy
layout: ../../layouts/Docs.astro
featured: ../../backgrounds/kir-simakov-ZN3Hsru3SIM.webp
---

## Services externes

Pour profiter de toutes les fonctionnalités, Bonjourr doit communiquer avec des services externes. Presque toutes les requêtes envoyées par la page passent par [notre API open source](https://github.com/victrme/bonjourr-apis) avant d'accéder aux autres services. Cela nous permet de garder nos clés d'accès sécurisées et offre également une couche d'anonymat pour les utilisateurs, un peu comme un VPN.

Notre API est déployée sur Cloudflare Workers, ce qui signifie que nous avons accès aux [analyses réseau de Cloudflare](https://developers.cloudflare.com/analytics/types-of-analytics/), comme le nombre de requêtes et leur origine par serveur.

### api.bonjourr.lol

-   **Openweathermap**  
    Récupère les données météo. Se déclenche toutes les 30 minutes lorsque l'onglet est actif. Quand on change de localisation ou de langue. Aucune requête lorsque la description et l'icône sont masquées.  
    [Politique de confidentialité](https://openweather.co.uk/privacy-policy#data_me_collect)

-   **Unsplash**  
    Récupère des images. Au démarrage et quand on change de collection.  
    [Conditions de l'API](https://unsplash.com/api-terms)

-   **Fontsource**  
    Récupère la liste des polices les plus populaires. Lorsque le focus est sur "la famille de polices". Quand on perd le cache.  
    [Plus d'informations](https://fontsource.org/docs/getting-started/introduction)

-   **Favicon fetcher**  
    Récupère le favicon des sites web. Se déclenche lors de l'ajout d'un nouveau favori.  
    [Code source](https://github.com/victrme/favicon-fetcher)

-   **Citations**  
    Obtient une liste aléatoire de citations. Une fois au démarrage, puis après avoir changé le type de citation ou toutes les 20 citations.  
    [Code source](https://github.com/victrme/i18n-quotes)

-   **Suggestions de recherche**  
    Obtient des suggestions de recherche de Google, Duckduckgo et d'autres. L'API est un scraper web et n'utilise pas directement les services de ces fournisseurs. Aucune donnée n'est sauvegardée de notre côté, mais Google le fait certainement.  
    [Code source](https://github.com/victrme/search-suggestions)

### cdn.jsdelivr.net

-   **Fontsource CDN**  
    Sert le fichier de police. Lors du changement de police ou en cas de perte de cache.  
    [Informations sur le CDN](https://fontsource.org/docs/getting-started/cdn)

### image.unsplash.com

-   **Image Unsplash**  
    Sert l'image de fond. Au démarrage et toutes les heures par défaut. Quand on change de collection. Quand on perd le cache.

## Autorisations

Les extensions sont plus sécurisées que les pages web, ce qui signifie que Bonjourr doit demander l'autorisation pour fonctionner correctement. Plus d'informations sur les autorisations sur [developer.chrome.com](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)

-   **Stockage**  
    Accède au stockage local et synchronisé de l'extension. Plus d'informations ci-dessous. À chaque changement d'onglet et de paramètres.

-   **Signets**  
    Obtenir une liste des signets du navigateur. Facultatif. Demandé uniquement lors de l'utilisation de l'option d'importation de signets.

## Stockage des paramètres

Nous, [l'équipe Bonjourr](https://github.com/victrme/Bonjourr?tab=readme-ov-file#-authors), n'avons pas accès à vos paramètres. Nous n'utilisons pas de télémétrie. Par défaut, Bonjourr synchronisera ses paramètres avec votre compte de navigateur s'il est disponible. Le storage sur Bonjourr n'est pas chiffré, n'enregistrez pas de mots de passe !

-   **Extension Chrome**  
    Synchronisé avec votre compte Google si vous êtes connecté à Chrome avec votre compte et que la synchronisation est activée avec l'option "Extensions" activée dans l'onglet "Gérer ce que vous synchronisez".

-   **Extension Firefox**  
    Synchronisé avec votre compte Firefox de la même manière que Chrome. Les "Modules complémentaires" doivent être activés dans l'onglet "Choisir ce que vous synchronisez".

-   **En ligne et Safari**  
    Les paramètres sont stockés localement à l'aide de l'API de stockage Web.

## Service en arrière-plan

Le [service en arrière-plan](https://github.com/victrme/Bonjourr/blob/master/src/scripts/services/background.js) de Bonjourr ne fait qu'ouvrir un onglet lors de l'installation, de la désinstallation et lorsque vous cliquez sur son icône dans la barre d'outils.
