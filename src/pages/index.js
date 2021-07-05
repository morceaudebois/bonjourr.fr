import React from "react"
import Layout from "../components/Layout"
import DownloadButton from "../components/DownloadButton"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

export default function index() {

        return (
            <Layout>
                
                <section id="hero">
                    <span className="filter"></span>
                    <div className='left'>
                        <h1>Bonjourr</h1>
                        <h2>Startpage for your browser</h2>

                        <DownloadButton />

                        <a href='https://online.bonjourr.fr' className="button">
                            <FontAwesomeIcon icon={faGlobeAmericas} className='icon' />
                            <span>Try online</span>
                        </a>
                    </div>

                    <div className='right'>
                        <StaticImage
                            src="../assets/heroImage.png"
                            alt="A dinosaur"
                            width={800}
                            placeholder= 'dominantColor'
                        />
                    </div>
                </section>
            </Layout>
    )
}