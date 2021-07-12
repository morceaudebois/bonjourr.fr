import React from "react"
import Layout from "../components/Layout"
import DownloadButton from "../components/DownloadButton"

import { StaticImage } from "gatsby-plugin-image"
import '../styles/styles.scss'

import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

import Helmet from 'react-helmet'

export default function index({data}) {

    const heroImage = getImage(data.heroImage.childImageSharp.gatsbyImageData);
    console.log((data.heroImage.childImageSharp.gatsbyImageData));
    const openImage = [`linear-gradient(0deg, rgba(148, 148, 148, 0.1), rgba(148, 148, 148, 0.1))`, getImage(data.openImage.childImageSharp.gatsbyImageData)];
    const donateImage = [`linear-gradient(0deg, rgba(64, 64, 64, 0.3), rgba(64, 64, 64, 0.3))`, getImage(data.donateImage.childImageSharp.gatsbyImageData)];

    return (
        <Layout> 

            <Helmet>
                <body className="homepage" />
            </Helmet>
            
            <BgImage image={heroImage} id="hero" className='section'>
                <span className="filter"></span>
                <div className='left' >
                    <h1>Bonjourr</h1>
                    <h2>Startpage for your browser</h2>

                    <div className="container">
                        <DownloadButton />

                        <a href='https://online.bonjourr.fr' target='_blank' rel="noreferrer" className="button">
                            <FontAwesomeIcon icon={faGlobeAmericas} className='icon' />
                            <span>Try online</span>
                        </a>
                    </div>

                    <Link to='/use-bonjourr' className='link'><i>Searching for other browsers?</i></Link>

                </div>

                <div className='right'>
                    <StaticImage src="../assets/heroImage.png" alt="Bonjourr screenshot" width={700} quality={90} placeholder="blurred" />
                </div>
            </BgImage>

            <section id="main" >
                <div id="intro">
                    <h3>Minimalist & lightweight startpage</h3>
                    <p>Bonjourr replaces your new tab page for something more refined and minimal. We took inspiration from Apple’s design language to create a startpage that both looks amazing and feels great to use in your daily life.</p>
                </div>

                <div id="dynBackgrounds">
                    <div className="left">
                        <StaticImage
                            src="../assets/wolf.png"
                            alt="Bonjourr dynamic backgrounds screenshot"
                            width={50}
                            quality= {90}
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </div>

                    <div className="right">
                        <h4>Dynamic Backgrounds</h4>
                        <hr></hr>
                        <p>Bonjourr uses a manually selected collection of the best photos Unsplash has to offer. The mood of the photos changes according to the time of the day, from noon to the end of the night.</p>
                    </div>
                </div>

                <div id="custom">
                    <div className="left">
                        <h4>Customisable</h4>
                        <hr></hr>
                        <p>Because minimalism doesn’t rhyme with lack of features, Bonjourr is stuffed with options. Add in your personal touch by changing the font, adding your own backgrounds or changing the look of your clock.</p>
                    </div>

                    <div className="right">
                        <StaticImage
                            src="../assets/cursive.png"
                            alt="Bonjourr dynamic backgrounds screenshot"
                            width={600}
                            quality= {90}
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </div>
                </div>

                <div id="more">
                    <h4>A few more features</h4>
                    <div className="listContainer">
                        <div className="left">
                            <ul>
                                <li>Quick Links</li>
                                <li>Search bar</li>
                                <li>Google Fonts</li>
                                <li>Multilanguage</li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>Dark mode</li>
                                <li>Weather</li>
                                <li>Hide elements</li>
                                <li>Custom CSS</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            
            <BgImage image={openImage} id="open" className='section'>
                <h3><span role='img' aria-label='lock-emoji'>🔒</span> Free, open source and privacy focused</h3>
                <p>Bonjourr is made by two independent developpers who love things well made and <i>actually</i> think privacy is important. You can use Bonjourr straight away, without having to create or log into any account because we do not collect any data.</p>
            </BgImage>

            <section id="further">
                <h3>Want to go further?</h3>

                <div className="container">
                    <div>
                        <h4>Contact us</h4>
                        <p>Come and hang out on Bonjourr’s official Telegram group. You can tell us about your ideas and read about the latest news about its development.</p>
                        <a href='https://t.me/BonjourrStartpage' className="button">
                            <StaticImage src="../assets/telegram.svg" alt="telegram logo" width={70} className='icon'/>
                            <span>Bonjourr's Telegram</span>
                        </a>
                    </div>

                    <div>
                        <h4>Documentation</h4>
                        <p>Check out Bonjourr’s documentation where we bundled a bunch of pre-made CSS code snippets so you can go even further into customisation.</p>
                        <Link to='/use-bonjourr' className="button">
                            <span role='img' aria-label='happy-emoji' className='icon'>📖</span>
                            <span>Documentation</span>
                        </Link>
                    </div>

                    <div>
                        <h4>Fork Bonjourr</h4>
                        <p>Fork Bonjourr and add your own features on our GitHub repositories. We’re open to pull requests!</p>
                        <a href='https://github.com/victrme/Bonjourr' className="button">
                            <StaticImage src="../assets/github.svg" alt="github logo" width={70} className='icon'/>
                            <span>GitHub repository</span>
                        </a>
                    </div>
                </div>
            </section>

            <BgImage image={donateImage} id="donate" className='section'>
                <h3>Donate <span role='img' aria-label='happy-emoji'>😊</span></h3>
                <p>Since Bonjourr is entirely free and doesn’t collect nor sell your data, we don’t earn any money out of this project, apart from donations. Supporting our work financially is very important if you want us to keep updating it, and we appreciate every single donation.</p>

                <div className="buttons">
                    <a href='https://ko-fi.com/bonjourr' className="button">
                        <StaticImage src="../assets/ko-fi.svg" alt="ko-fi logo" width={70} className='icon'/>
                        <span>Donate</span>
                    </a>

                    <a href='https://commerce.coinbase.com/charges/Y2DYYZCG' className="button">
                        <StaticImage src="../assets/btc.svg" alt="bitcoin logo" width={70} className='icon'/>
                        <span>Donate in crypto</span>
                    </a>
                </div>


            </BgImage>
        
        </Layout>
    )
}

export const query = graphql`
    query {
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
