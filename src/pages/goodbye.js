import React, { useState } from 'react'
import Layout from '../components/Layout'

const Goodbye = () => {

    // gets source browser name
    const browserName = (new URLSearchParams(window.location.search)).get('from')
    








    const [formState, setFormState] = useState({
        name: "",
        email: ""
    })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
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
            <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formState.name}
                    placeholder="Nom"
                />

                <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formState.email}
                    placeholder="Email"
                />

                <input
                    id="browserSource"
                    type="text"
                    name="Source browser"
                    onChange={handleChange}
                    value={formState.browserSource}
                    placeholder="The version of Bonjourr you're coming from"
                    
                />

                <button type="submit">Submit</button>
            </form>
        </Layout>
    )
}

export default Goodbye