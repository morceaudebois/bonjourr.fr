/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`, {
      resolve: "gatsby-plugin-anchor-links",
      options: { duration: 600 }
    },
    `gatsby-transformer-sharp`, {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90
        }
      }
    }
  ],
  siteMetadata: {
    title: 'Bonjourr · Startpage for you browser',
    description: 'Improve your web browsing experience with Bonjourr, a beautiful, customisable and lightweight homepage inspired by iOS.',
    url: 'https://bonjourr.fr',
    image : '/logo.png',
    author : 'Tahoe Beetschen',
    type : 'website'
  }
}
