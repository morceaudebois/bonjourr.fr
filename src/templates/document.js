import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/document.scss"
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import Helmet from 'react-helmet'

export default function Document({ data }) {
    const  { html } = data.markdownRemark
    const { title, subtitle, featured } = data.markdownRemark.frontmatter
    const documents = data.allMarkdownRemark.nodes

    const heroImage = [`linear-gradient(0deg, rgba(64, 64, 64, 0.4), rgba(64, 64, 64, 0.3))`, getImage(featured)]

  return (
    <Layout>
      <Helmet>
        <body className="documentation" />
        <title>{title} · Bonjourr's Documentation</title> 
        <meta name="description" content={subtitle} />
      </Helmet>

      <div id="docHero">
        <BgImage image={heroImage} className='hero'>
          <div className="container">
            <div className="empty"></div>
            <div className="theContent">
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
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
                      to= {'/' + document.frontmatter.slug}  
                      activeClassName="active"
                      partiallyActive={true}>
                        {document.frontmatter.title}
                    </Link >

                  </li>
            ))}
            </ul>
        </div>

        <div className="html" dangerouslySetInnerHTML={{__html: html}} />
      </article>
    </Layout>

  )
}

export const query = graphql`
  query test($slug: String) {
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
    },
    allMarkdownRemark {
      nodes {
          frontmatter {
          slug
          title
      }
      id
      }
    }
  }
`
