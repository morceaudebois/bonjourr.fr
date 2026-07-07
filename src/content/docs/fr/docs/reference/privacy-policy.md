---
title: Politique de confidentialité
image: /documentation/docs-headers/marcsilino-padayachee-tpxOICMarz0-unsplash.jpg
---

<small><i>Dernière mise à jour : 21 nov. 2024, version 20.3.0</i></small>

## En résumé

L'équipe de Bonjourr est composée de [Tahoe Beetschen](https://github.com/morceaudebois/) et de [Victor Azevedo](https://github.com/victrme/). Nous ne collectons, ne stockons et ne partageons aucune des données que vous créez dans Bonjourr. Les informations envoyées à notre API sont strictement limitées au nécessaire pour faire fonctionner Bonjourr, sont entièrement anonymes et ne permettent pas de vous identifier. Notre API ne conserve ni journaux ni données.

## Services externes

Pour profiter de toutes les fonctionnalités, Bonjourr doit communiquer avec différents services externes. Toutes les données envoyées par votre page transitent d'abord par [notre API open source](https://github.com/victrme/bonjourr-apis) avant d'accéder aux services concernés. Cela ajoute une couche d'anonymat pour les utilisateurs, un peu à la manière d'un VPN.

Cette API est déployée sur Cloudflare Workers. Nous avons donc accès aux [statistiques de compte](https://developers.cloudflare.com/analytics/account-and-zone-analytics/account-analytics/#summary-of-metrics) et aux [métriques des Workers](https://developers.cloudflare.com/workers/observability/metrics-and-analytics/) fournies automatiquement par Cloudflare. Ces données concernent uniquement le trafic réseau, les taux d'erreur et l'utilisation de la bande passante, et nous servent uniquement à diagnostiquer d'éventuels problèmes.

Nous ne stockons aucune donnée de notre côté. En revanche, nous ne pouvons pas contrôler la manière dont les fournisseurs de services utilisent les informations qu'ils reçoivent. Vous pouvez consulter leur politique de confidentialité via les liens ci-dessous.

### Actifs dès le premier lancement

#### api.bonjourr.fr

- **Unsplash**
  Récupère les images d'arrière-plan. Au démarrage et lors d'un changement de collection.
  [Conditions d'utilisation de l'API](https://unsplash.com/api-terms)
- **Racle météo**
  Récupère les données météo via les pages d'Accuweather et/ou de Foreca. Se déclenche environ toutes les 40 minutes lorsque l'onglet est actif, ainsi qu'en cas de changement de localisation ou de langue.
  [Code source](https://github.com/victrme/racle-meteo)
- **Quotes**
  Récupère une liste aléatoire de citations. Au démarrage, puis après un changement de source ou toutes les 20 citations.
  [Code source](https://github.com/victrme/i18n-quotes)

#### image.unsplash.com

- **Images Unsplash**
  Sert l'image d'arrière-plan. Au démarrage, puis toutes les heures par défaut, lors d'un changement de collection ou si le cache est perdu.

### Optionnels

#### api.bonjourr.fr

- **Fontsource**
  Récupère la liste des polices les plus populaires lorsque le champ « Famille de police » reçoit le focus ou si le cache est perdu.
  [En savoir plus](https://fontsource.org/docs/getting-started/introduction)
- **Favicon fetcher**
  Récupère les favicons des sites web lors de l'ajout d'un nouveau favori.
  [Code source](https://github.com/victrme/favicon-fetcher)
- **Suggestions de recherche**
  Fournit des suggestions issues de Google, DuckDuckGo et d'autres moteurs. Cette API fonctionne comme un scraper web et ne communique pas directement avec les services de ces fournisseurs.
  [Code source](https://github.com/victrme/search-suggestions)

#### cdn.jsdelivr.net

- **CDN Fontsource**
  Fournit les fichiers de police lors d'un changement de police ou si le cache est perdu.
  [En savoir plus](https://fontsource.org/docs/getting-started/cdn)

#### api.github.com

- **API GitHub Gist**
  Lit et écrit un Gist lorsque vous utilisez le mode de synchronisation « GitHub Gist », à l'ouverture des paramètres ou lors de l'envoi/récupération d'une configuration enregistrée.
  [Documentation de l'API](https://docs.github.com/en/rest/gists/gists#list-gists-for-the-authenticated-user)

## Autorisations

Les extensions de navigateur sont plus sécurisées que les pages web, ce qui signifie que Bonjourr doit demander certaines autorisations pour fonctionner correctement. Plus d'informations sur les autorisations sont disponibles sur
[developer.chrome.com](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)

### Requises

- **Stockage**
  Accès au stockage local et synchronisé de l'extension. Voir plus bas. Utilisé à chaque ouverture d'onglet et lors des modifications des paramètres.

### Optionnelles

- **Favoris**
  Permet de récupérer les favoris du navigateur. Demandée uniquement lors de l'utilisation de l'importation des favoris.
- **Sites les plus visités**
  Permet de récupérer la liste des sites les plus visités. Demandée lors de l'importation et utilisée à chaque nouvel onglet lorsque cette fonctionnalité est activée.

## Stockage des paramètres

Nous n'avons aucun accès à vos paramètres. Ceux-ci sont stockés dans le navigateur via l'[API de stockage des extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage). Ce système de stockage n'est pas chiffré : il appartient donc à chaque utilisateur d'en tenir compte. Bonjourr ne demande ni ne stocke jamais de données personnelles ou permettant de vous identifier.

Par défaut, Bonjourr synchronise ses paramètres avec votre compte navigateur lorsqu'il est disponible. Vous pouvez désactiver cette synchronisation en sélectionnant « Désactivée » dans l'option « Synchronisation », ou selon les modalités suivantes :

- **Extension Chrome**
  Les paramètres sont synchronisés avec votre compte Google si vous êtes connecté à Chrome et que la synchronisation est activée avec l'option « Extensions » dans « Gérer ce que vous synchronisez ».
- **Extension Firefox**
  Fonctionne de la même manière avec votre compte Firefox. L'option « Modules complémentaires » doit être activée dans « Choisir les éléments à synchroniser ».
- **Version en ligne et Safari**
  Les paramètres sont stockés localement via la Web Storage API et ne peuvent pas être synchronisés.

## Service d'arrière-plan

Lorsque vous utilisez l'extension, le [service d'arrière-plan](https://github.com/victrme/Bonjourr/blob/master/src/scripts/services/background.js) de Bonjourr peut ouvrir un onglet lors de l'installation, de la désinstallation ou lorsque vous cliquez sur son icône dans la barre d'outils. Aucun autre processus ne s'exécute en arrière-plan dans votre navigateur. Depuis le passage au Manifest V3, le service d'arrière-plan [s'arrête automatiquement après 30 secondes d'inactivité](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle#idle-shutdown).
