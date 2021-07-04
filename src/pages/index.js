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
                    {/* <div className="filter"></div> */}
                    <div>
                        <h1>Bonjourr</h1>
                        <h2>Startpage for your browser</h2>

                        <DownloadButton />

                        <button>
                            <FontAwesomeIcon icon={faGlobeAmericas} />
                            <span>Try online</span>
                        </button>
                    </div>

                    <div>
                        <StaticImage
                            src="../assets/heroImage.png"
                            alt="A dinosaur"
                            layout="constrained"
                            placeholder= 'dominantColor'
                        />
                    </div>
                </section>
            </Layout>
    )
}