import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Seo from "../components/Seo"

export default function Layout({ children }) {
    return (
        <div className="layout">

            <Seo />

            <Navbar />

            <div className="content">
                { children }
            </div>

            <Footer />

        </div>
    )
}
