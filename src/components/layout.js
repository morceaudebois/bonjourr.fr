import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from "../components/Seo"
import {useTranslation} from 'gatsby-plugin-react-i18next';



export default function Layout({children}) {
    const {t} = useTranslation();

    return (
        <div className="Layout">
            <SEO
                title={t('Startpage for your browser')}
                description={t('Improve your web browsing experience with Bonjourr, a beautiful, customisable and lightweight homepage inspired by iOS.')}
            />

            <Navbar />

            <div className="content">
                {children}
            </div>

            <Footer />

        </div>
    )
}
