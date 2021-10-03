import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { BgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import '../styles/document.scss'
import '../styles/highlight.scss'

export default function Document({ data }) {
    const { title, subtitle, featured } = data.markdownRemark.frontmatter
    const documents = data.allMarkdownRemark.nodes

    const heroImage = [
        `linear-gradient(0deg, rgba(64, 64, 64, 0.4), rgba(64, 64, 64, 0.3))`,
        getImage(featured),
    ]

    return (
        <Layout>
            <Helmet>
                <body className="documentation" />
                <title>{title} · Bonjourr's Documentation</title>
                <meta name="description" content={subtitle} />
            </Helmet>

            <div id="docHero">
                <BgImage image={heroImage} className="hero">
                    <div className="container">
                        <div className="empty"></div>
                        <div className="theContent">
                            <h1>{title}</h1>
                        </div>
                    </div>
                </BgImage>
            </div>

            <article>
                <div className="docNav">
                    <ul>
                        {documents.map(document => (
                            <li key={document.id}>
                                <Link
                                    to={'/' + document.frontmatter.slug}
                                    activeClassName="active"
                                    partiallyActive={true}
                                >
                                    {document.frontmatter.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="content">
                    {/* displays subtitle only if there's one */}
                    {subtitle ? (
                        <p class="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
                    ) : (
                        ''
                    )}
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
                </div>
            </article>
        </Layout>
    )
}

export const query = graphql`
    query test($slug: String, $language: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                featured {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1100
                            quality: 95
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
        allMarkdownRemark(sort: { order: ASC, fields: frontmatter___orderData }) {
            nodes {
                frontmatter {
                    slug
                    title
                }
                id
            }
        }
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`
