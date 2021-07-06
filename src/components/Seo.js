import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

export default function Seo ({ title, description, url, image, author, type , keywords }) {
	return (
		<StaticQuery
			query={graphql`
                query DefaultSEOQuery {
                    site {
                        siteMetadata {
                            title
                            description
                            url
                            image
                            author
                            type
                        }
                    }
                }
            `}

			render={data => {
				const metaTitle = title || data.site.siteMetadata.title
				const metaDescription = description || data.site.siteMetadata.description
				const metaUrl = url || data.site.siteMetadata.url
				const metaImage = image || data.site.siteMetadata.image
				const metaAuthor = author || data.site.siteMetadata.author
                const metaType = type || data.site.siteMetadata.type
				const metaKeywords = keywords || [
					"extension",
					"startpage",
					"homepage",
					"browser startpage",
					"minimalism",
					"lightweight",
				]

				return (
					<Helmet
						title={title}
						meta={[
							{
								property: "og:url",
								content: metaUrl,
							},
							{
								property: "og:type",
								content: metaType,
							},
							{
								property: "og:title",
								content: metaTitle,
							},
							{
								property: "og:description",
								content: metaDescription,
							},
							{
								property: "og:image",
								content: metaImage,
							},
							{
								property: "twitter:card",
								content: metaDescription,
							},
							{
								property: "twitter:creator",
								content: metaAuthor,
							},
							{
								property: "twitter:title",
								content: metaTitle,
							},
							{
								property: "twitter:description",
								content: metaDescription,
							},
							{
								property: "twitter:image",
								content: metaImage,
							},
						].concat(
							metaKeywords && metaKeywords.length > 0
								? {
										name: "keywords",
										content: metaKeywords.join(", "),
								  }
								: []
						)}
					/>
				)
			}}
		/>
	)
}