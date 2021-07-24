import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

import DownloadButton from "../components/DownloadButton"
import '../styles/styles.scss'

import {Link, Trans } from 'gatsby-plugin-react-i18next';

// fix huge fontawesome
config.autoAddCss = false

const IndexPage = ({data}) => {

    // const heroImage = getImage(data.heroImage.childImageSharp.gatsbyImageData);
    const openImage = [`linear-gradient(0deg, rgba(148, 148, 148, 0.1), rgba(148, 148, 148, 0.1))`, getImage(data.openImage.childImageSharp.gatsbyImageData)];
    const donateImage = [`linear-gradient(0deg, rgba(64, 64, 64, 0.3), rgba(64, 64, 64, 0.3))`, getImage(data.donateImage.childImageSharp.gatsbyImageData)];

    return (
        <Layout> 

            <Helmet>
                <body className="homepage" />
                <meta name="theme-color" content="#367f9e" />
                <link rel="preload" as="image" href="/heroImage2x.webp"/>
            </Helmet>
            
            <div id="hero" className='section'>
                <span className="background"></span>
                <div className='left' >
                    <h1>Bonjourr</h1>
                    <h2><Trans>Startpage for your browser</Trans></h2>

                    <div className="container">
                        <DownloadButton />

                        <a href='https://online.bonjourr.fr' target='_blank' rel="noreferrer" className="button">
                            <FontAwesomeIcon icon={faDesktop} className='icon' />
                            <span><Trans>Try online</Trans></span>
                        </a>
                    </div>

                    <Link to='/use-bonjourr' className='link'><i><Trans>Searching for other browsers?</Trans></i></Link>

                </div>

                <div className='right'>
                    {/* <StaticImage
                        src="../assets/heroImage.png"
                        alt="Bonjourr screenshot"
                        width={600}
                        quality={90}
                        placeholder="blurred"
                        loading="eager"
                    /> */}

                    <img src="/heroImage.webp" srcset="/heroImage2x.webp 2x" alt="Bonjourr screenshot" width="1000px" height="653px"/>
                    
                </div>
            </div>

            <section id="main" >
                <div id="intro">
                    <h3><Trans>Minimalist & lightweight startpage</Trans></h3>
                    <p><Trans>Bonjourr replaces your new tab page for something more refined and minimal. We took inspiration from Apple’s design language to create a startpage that both looks amazing and feels great to use in your daily life.</Trans></p>
                </div>

                <div id="dynBackgrounds">
                    <div className="left">
                        <StaticImage
                            src="../assets/wolf.png"
                            alt="Bonjourr dynamic backgrounds screenshot"
                            quality= {85}
                            placeholder="blurred"
                            width= {480}
                        />
                    </div>

                    <div className="right">
                        <h4><Trans>Dynamic Backgrounds</Trans></h4>
                        <hr></hr>
                        <p><Trans>Bonjourr uses a manually selected collection of the best photos Unsplash has to offer. The mood of the photos changes according to the time of the day, from noon to the end of the night.</Trans></p>
                    </div>
                </div>

                <div id="custom">
                    <div className="left">
                        <h4><Trans>Customisable</Trans></h4>
                        <hr></hr>
                        <p><Trans>Because minimalism doesn’t rhyme with lack of features, Bonjourr is stuffed with options. Add in your personal touch by changing the font, adding your own backgrounds or changing the look of your clock.</Trans></p>
                    </div>

                    <div className="right">
                        <StaticImage
                            src="../assets/cursive.png"
                            alt="Bonjourr dynamic backgrounds screenshot"
                            quality= {85}
                            placeholder="blurred"
                            width= {480}
                        />
                    </div>
                </div>

                <div id="more">
                    <h4><Trans>A few more features</Trans></h4>
                    <div className="listContainer">
                        <div className="left">
                            <ul>
                                <li><Trans>Quick Links</Trans></li>
                                <li><Trans>Search bar</Trans></li>
                                <li><Trans>Google Fonts</Trans></li>
                                <li><Trans>Multilanguage</Trans></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li><Trans>Dark mode</Trans></li>
                                <li><Trans>Weather</Trans></li>
                                <li><Trans>Hide elements</Trans></li>
                                <li><Trans>Custom CSS</Trans></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            
            <BgImage image={openImage} id="open" className='section'>
                <h3><span role='img' aria-label='lock-emoji'>🔒</span> <Trans>Free, open source and privacy focused</Trans></h3>
                <p><Trans>Bonjourr is made by two independent developpers who love things well made and <i>actually</i> think privacy is important. You can use Bonjourr straight away, without having to create or log into any account because we do not collect any data.</Trans></p>
            </BgImage>

            <section id="further">
                <h3><Trans>Want to go further?</Trans></h3>

                <div className="container">
                    <div>
                        <h4><Trans>Contact us</Trans></h4>
                        <p><Trans>Come and hang out on Bonjourr’s official Telegram group. You can tell us about your ideas and read about the latest news about its development.</Trans></p>
                        <a href='https://t.me/BonjourrStartpage' className="button">
                            <StaticImage src="../assets/telegram.svg" alt="telegram logo" width={70} className='icon'/>
                            <span><Trans>Bonjourr's Telegram</Trans></span>
                        </a>
                    </div>

                    <div>
                        <h4><Trans>Documentation</Trans></h4>
                        <p><Trans>Check out Bonjourr’s documentation where we bundled a bunch of pre-made CSS code snippets so you can go even further into customisation.</Trans></p>
                        <Link to='/use-bonjourr' className="button">
                            <span role='img' aria-label='happy-emoji' className='icon'>📖</span>
                            <span><Trans>Documentation</Trans></span>
                        </Link>
                    </div>

                    <div>
                        <h4><Trans>Fork Bonjourr</Trans></h4>
                        <p><Trans>Fork Bonjourr and add your own features on our GitHub repositories. We’re open to pull requests!</Trans></p>
                        <a href='https://github.com/victrme/Bonjourr' className="button">
                            <StaticImage src="../assets/github.svg" alt="github logo" width={70} className='icon'/>
                            <span><Trans>GitHub repository</Trans></span>
                        </a>
                    </div>
                </div>
            </section>

            <BgImage image={donateImage} id="donate" className='section'>
                <h3><Trans>Donate</Trans><span role='img' aria-label='happy-emoji'> 😊</span></h3>

                <p><Trans>Since Bonjourr is entirely free and doesn’t collect nor sell your data, we don’t earn any money out of this project, apart from donations. Supporting our work financially is very important if you want us to keep updating it, and we appreciate every single donation.</Trans></p>

                <div className="buttons">
                    <a href='https://ko-fi.com/bonjourr' className="button">
                        <StaticImage src="../assets/ko-fi.svg" alt="ko-fi logo" width={70} className='icon'/>
                        <span><Trans>Donate</Trans></span>
                    </a>

                    <a href='https://commerce.coinbase.com/charges/Y2DYYZCG' className="button">
                        <StaticImage src="../assets/btc.svg" alt="bitcoin logo" width={70} className='icon'/>
                        <span><Trans>Donate in crypto</Trans></span>
                    </a>
                </div>


            </BgImage>
        
        </Layout>
    )
}

export default IndexPage;

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
        openImage: file(relativePath: { eq: "meiying-ng-OrwkD-iWgqg-unsplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    width: 1100
                    quality: 95
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        },
        donateImage: file(relativePath: { eq: "ray-hennessy-DAHUS8W4rNE-unsplash.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    width: 1100
                    quality: 95
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                )
            }
        },
    }
`
