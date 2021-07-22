import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEnvelope, faGlobeAmericas, faDonate, faDesktop } from '@fortawesome/free-solid-svg-icons'
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
                    </Link>

                    <a href="https://online.bonjourr.fr">
                        <FontAwesomeIcon icon={faDesktop} />
                        <Trans>Online</Trans>
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
                        <FontAwesomeIcon icon={faGlobeAmericas} />
                        {lng}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
