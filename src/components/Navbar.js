import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faEnvelope, faGlobeAmericas, faDonate } from '@fortawesome/free-solid-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Navbar() {
    return (
        <nav>
            {/* <h1 id="logo">
                <img src='/logo.png'alt="bonjourr logo"/>
            </h1> */}

            <div className="links">
                <AnchorLink to="/#main">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    Bonjourr
                </AnchorLink>

                <AnchorLink to="/#further">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                </AnchorLink>

                <a href="https://online.bonjourr.fr">
                    <FontAwesomeIcon icon={faGlobeAmericas} />
                    Online
                </a>

                <AnchorLink to="/#donate">
                    <FontAwesomeIcon icon={faDonate} />
                    Donate
                </AnchorLink>
            </div>
        </nav>
    )
}
