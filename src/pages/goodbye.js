import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import '../styles/styles.scss'

const Goodbye = props => {
    const [formState, setFormState] = useState({
        message: '',
        browserSource: new URLSearchParams(props.location.search).get('from') || '',
        email: '',
    })

    const encode = data => {
        console.log(data)
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
    }

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'contact',
                ...formState,
            }),
        })
            .then(() => success())
            .catch(error => alert(error))

        e.preventDefault()
    }

    function success() {
        document.getElementById('formContainer').innerHTML =
            '<h2>Thank you for your message, it has been sent.<h2>'
    }

    return (
        <Layout>
            <Helmet>
                <body className="goodbye" />
                <meta name={`robots`} content={`noindex, nofollow`} />
            </Helmet>

            <div id="hero" className="section">
                <span className="background"></span>

                <div id="formContainer">
                    <h2>Thank you for using Bonjourr.</h2>
                    <p>
                        We're sorry to see you go. If you have time, tell us what would make
                        Bonjourr better, thanks!{' '}
                        <span role="img" aria-label="happy-emoji">
                            😊
                        </span>
                    </p>

                    <form
                        id="form"
                        onSubmit={handleSubmit}
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <input
                            id="browserSource"
                            type="hidden"
                            name="browserSource"
                            onChange={handleChange}
                            value={formState.browserSource}
                        />

                        <textarea
                            id="message"
                            type="text"
                            name="message"
                            onChange={handleChange}
                            value={formState.name}
                            placeholder="Your message"
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
            </div>
        </Layout>
    )
}

export default Goodbye

export const query = graphql`
    query ($language: String!) {
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
