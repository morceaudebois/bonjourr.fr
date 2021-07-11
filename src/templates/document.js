import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as documentStyles from "../styles/document.module.scss"
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

export default function Document({ data }) {
    const  { html } = data.markdownRemark
    const { title, subtitle, featured } = data.markdownRemark.frontmatter
    const documents = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div>
        <BgImage image={getImage(featured)} className={documentStyles.hero}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </BgImage>
      </div>

      <article>
        <div className="docNav">
          <ul>
            {documents.map(document => (
                <li key={document.id}><Link to={'/documentation/' + document.frontmatter.slug}>{document.frontmatter.title}</Link></li>
            ))}
            </ul>
        </div>

        <div dangerouslySetInnerHTML={{__html: html}} />
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
