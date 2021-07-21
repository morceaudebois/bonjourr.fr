import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"
import { I18nextContext } from 'gatsby-plugin-react-i18next';

export default function Seo ({ title, description, siteUrl, image, author, type , keywords }) {
	const context = React.useContext(I18nextContext);
	
	return (
		<StaticQuery
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

			render={data => {
				const metaTitle = title || data.site.siteMetadata.title
				const metaDescription = description || data.site.siteMetadata.description
				const metaUrl = siteUrl || data.site.siteMetadata.siteUrl
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
						title={metaTitle}
						metaescription={metaDescription}
						htmlAttributes={{ lang: context.language }}
						
						meta={[
							{
								name: "description",
								content: metaDescription,
							},
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