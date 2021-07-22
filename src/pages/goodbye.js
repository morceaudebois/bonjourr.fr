import React, { useState } from 'react'
import Layout from '../components/Layout'

const Goodbye = (props) => {

    // gets source browser name
    const browserName = (new URLSearchParams(props.location.search)).get("from");


    const [formState, setFormState] = useState({
        message: "",
        email: "",
        browserSource: browserName
    })

    const encode = (data) => {
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
            body: encode({ "form-name": "contact", ...formState })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
          e.preventDefault();
    }

    return (
        <Layout>
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
        </Layout>
    )
}

export default Goodbye