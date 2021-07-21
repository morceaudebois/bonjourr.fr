/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteUrl = process.env.URL || 'http://localhost:8000/'

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Bonjourr · Startpage for you browser',
    description: 'Improve your web browsing experience with Bonjourr, a beautiful, customisable and lightweight homepage inspired by iOS.',
    siteUrl: siteUrl,
    image : '/logo.png',
    author : 'Tahoe Beetschen',
    type : 'website',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 690,
              quality: 90,
              backgroundColor: `transparent`
            },
          },
          `gatsby-remark-autolink-headers`
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: { duration: 600 }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/documents/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/assets/backgrounds/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdownImages`,
        path: `${__dirname}/src/assets/documentation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: siteUrl,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
 
      }
    },
  ],
}
