/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Bonjourr · Startpage for you browser',
    description: 'Improve your web browsing experience with Bonjourr, a beautiful, customisable and lightweight homepage inspired by iOS.',
    url: 'https://bonjourr.fr',
    image : '/logo.png',
    author : 'Tahoe Beetschen',
    type : 'website'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
  ],
}
