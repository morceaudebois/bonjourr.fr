import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Sidebar() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark {
            nodes {
                frontmatter {
                slug
                title
            }
            id
            }
            }
        }`)

        const projects = data.allMarkdownRemark.nodes
    
    return (
        <div>
            <ul>
                {projects.map(project => (
                    <li key={project.id}><Link to={'/documentation/' + project.frontmatter.slug}>{project.frontmatter.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}

