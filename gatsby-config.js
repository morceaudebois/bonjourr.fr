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
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: { duration: 600 }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
}
