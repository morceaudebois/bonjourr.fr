import React from "react"
import Layout from "../components/Layout"
import DownloadButton from "../components/DownloadButton"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/styles.scss'

import { Link } from "gatsby"
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

                        <div className="container">
                            <DownloadButton />

                            <a href='https://online.bonjourr.fr' target='_blank' rel="noreferrer" className="button">
                                <FontAwesomeIcon icon={faGlobeAmericas} className='icon' />
                                <span>Try online</span>
                            </a>
                        </div>

                        <Link to='/download' className='link'><i>Searching for other browsers?</i></Link>


                    </div>

                    <div className='right'>
                        <StaticImage src="../assets/heroImage.png" alt="Bonjourr screenshot" width={800} />
                    </div>
                </section>

                <section id="main">
                    <div id="intro">
                        <h3>Minimalist & lightweight startpage</h3>
                        <p>Bonjourr replaces your new tab page for something more refined and minimal. We took inspiration from Apple’s design language to create a startpage that both looks amazing and feels great to use in your daily life.</p>
                    </div>

                    <div id="dynBackgrounds">
                        <div className="left">
                            <StaticImage
                                src="../assets/wolf.png"
                                alt="Bonjourr dynamic backgrounds screenshot"
                                width={700}
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
                                width={700}
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
                
                <section id='open'>
                    <h3><span role='img' aria-label='lock-emoji'>🔒</span> Free, open source and privacy focused</h3>
                    <p>Bonjourr is made by two independent developpers who love things well made and <i>actually</i> think privacy is important. You can use Bonjourr straight away, without having to create or log into any account because we do not collect any data.</p>
                </section>

                <section id="further">
                    <h3>Want to go further?</h3>

                    <div className="container">
                        <div>
                            <h5>Contact us</h5>
                            <p>Come and hang out on Bonjourr’s official Telegram group. You can tell us about your ideas and read about the latest news about its development.</p>
                            <a href='https://t.me/BonjourrStartpage' className="button">
                                <StaticImage src="../assets/telegram.svg" alt="telegram logo" width={70} className='icon'/>
                                <span>Bonjourr's Telegram</span>
                            </a>
                        </div>

                        <div>
                            <h5>Documentation</h5>
                            <p>Check out Bonjourr’s documentation where we bundled a bunch of pre-made CSS code snippets so you can go even further into customisation.</p>
                            <a href='/' className="button">
                                <span role='img' aria-label='happy-emoji' className='icon'>📖</span>
                                <span>Documentation</span>
                            </a>
                        </div>

                        <div>
                            <h5>Fork Bonjourr</h5>
                            <p>Fork Bonjourr and add your own features on our GitHub repositories. We’re open to pull requests!</p>
                            <a href='https://github.com/victrme/Bonjourr' className="button">
                                <StaticImage src="../assets/github.svg" alt="github logo" width={70} className='icon'/>
                                <span>GitHub repository</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section id="donate">
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


                </section>
            
            </Layout>
    )
}