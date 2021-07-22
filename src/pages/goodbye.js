import React, { useState } from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import '../styles/styles.scss'
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

const Goodbye = (props) => {
    const heroImage = getImage(props.data.heroImage.childImageSharp.gatsbyImageData);

    const [formState, setFormState] = useState({
        message: "",
        email: ""
    })

    const encode = (data) => {
        console.log(data);
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }
    
    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                browser: (new URLSearchParams(props.location.search)).get("from"),
                ...formState
            })
        })

        .then(() => alert("Success!"))
        .catch(error => alert(error));

        e.preventDefault();
    }

    return (
        <Layout>

            <Helmet>
                <body className="goodbye" />
                <meta name="theme-color" content="#367f9e" />
            </Helmet>

            <BgImage image={heroImage} id="hero" className='section'>
                <span className="filter"></span>

                <div className="container">
                    <h2>Thank you for using Bonjourr.</h2>
                    <p>We're sorry to see you go. If you have time, tell us what would make Bonjourr better, thanks! <span role='img' aria-label='happy-emoji'>😊</span></p>

                    <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />

                        {/* <input
                            id="browserSource"
                            type="hidden"
                            name="browserSource"
                            onChange={handleChange}
                            value={browserName}
                        /> */}

                        <textarea
                            id="message"
                            type="text"
                            name="message"
                            onChange={handleChange}
                            value={formState.name}
                            placeholder="Your message..."
                        />

                        <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formState.email}
                            placeholder="Email (optionnal)"
                        />

                        <button type="submit">Send your message</button>
                    </form>
                </div>
            </BgImage>
        </Layout>
    )
}

export default Goodbye

// required queries because new syntax isn't available for background images yet
export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                ns
                data
                language
                }
            }
        },
        heroImage: file(relativePath: { eq: "willian-justen-de-vasconcellos-8sHZE1CXG4w-unsplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    width: 1000
                    quality: 90
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        },
    }
`