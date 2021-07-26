import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import { I18nextContext } from 'gatsby-plugin-react-i18next'

export default function Seo({ title, description, siteUrl, image, keywords }) {
    const context = React.useContext(I18nextContext)

    return (
        <StaticQuery
            render={data => {
                const metaTitle = 'Bonjourr · ' + (title || data.site.siteMetadata.title)
                const metaDescription = description || data.site.siteMetadata.description
                const metaUrl = siteUrl || data.site.siteMetadata.siteUrl
                const metaImage = image || data.site.siteMetadata.image
                const metaKeywords = keywords || [
                    'extension',
                    'startpage',
                    'homepage',
                    'browser startpage',
                    'minimalism',
                    'lightweight',
                ]

                return (
                    <Helmet htmlAttributes={{ lang: context.language }}>
                        <title>{metaTitle}</title>

                        <meta name="description" content={metaDescription} />
                        <meta property="og:url" content={metaUrl} />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content={metaTitle} />
                        <meta property="og:description" content={metaDescription} />
                        <meta property="og:image" content={metaImage} />
                        <meta name="keywords" content={metaKeywords} />

                        <meta property="twitter:card" content="summary" />
                        <meta property="twitter:creator" content="BonjourrTeam" />
                        <meta property="twitter:title" content={metaTitle} />
                        <meta property="twitter:description" content={metaDescription} />
                        <meta property="twitter:image" content={metaImage} />
                    </Helmet>
                )
            }}
            query={graphql`
                query DefaultSEOQuery {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                            image
                            author
                            type
                        }
                    }
                }
            `}
        />
    )
}
