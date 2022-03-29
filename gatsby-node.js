const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query documents {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.nodes.forEach(({ frontmatter }) => {
        actions.createPage({
            path: '/' + frontmatter.slug,
            component: path.resolve('./src/templates/document.js'),
            context: { slug: frontmatter.slug },
        })
    })
}
