import { graphql } from "gatsby"
import React from "react"

export default function Document({ data }) {
    const  { html } = data.markdownRemark
    const { title, stack, featured } = data.markdownRemark.frontmatter

  return (
    <div>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  )
}

export const query = graphql`
  query test($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featured {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
