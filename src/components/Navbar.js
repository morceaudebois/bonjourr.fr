import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEnvelope, faGlobeAmericas, faDonate } from '@fortawesome/free-solid-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import {Link, useI18next, Trans} from 'gatsby-plugin-react-i18next';

export default function Navbar() {

    const {languages, originalPath} = useI18next();

    return (
        <nav>
            <div className="container">
                <h1 id="logo">
                    {/* <img src='/logo.png'alt="bonjourr logo"/> */}
                    <Link to='/' alt="Go to homepage">Bonjourr</Link>
                </h1>

                <div className="links">
                    <AnchorLink to="/#further">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Contact
                    </AnchorLink>

                    <Link to="/help/">
                        <FontAwesomeIcon icon={faBook} />
                        <Trans>Help</Trans>

                        {/* <div className='sublinks'>
                            <Link to="/documentation/the-dojo-coffee-house"><FontAwesomeIcon icon={faBook} />Use Bonjourr</Link>
                            <Link to="/documentation"><FontAwesomeIcon icon={faBook} />CSS Snippets</Link>
                            <Link to="/documentation"><FontAwesomeIcon icon={faBook} />Other stuff</Link>
                        </div> */}
                    </Link>

                    <a href="https://online.bonjourr.fr">
                        <FontAwesomeIcon icon={faGlobeAmericas} />
                        Online
                    </a>

                    <AnchorLink to="/#donate">
                        <FontAwesomeIcon icon={faDonate} />
                        <Trans>Donate</Trans>
                    </AnchorLink>
                </div>

                <ul className="languages">
                    {languages.map((lng) => (
                    <li key={lng}>
                        <Link to={originalPath} language={lng}>
                        {lng}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
