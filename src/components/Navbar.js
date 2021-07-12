import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEnvelope, faGlobeAmericas, faDonate } from '@fortawesome/free-solid-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

export default function Navbar() {
    return (
        <nav>
            {/* <h1 id="logo">
                <img src='/logo.png'alt="bonjourr logo"/>
            </h1> */}

            <div className="links">
                <AnchorLink to="/#further">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                </AnchorLink>

                <Link to="/use-bonjourr/">
                    <FontAwesomeIcon icon={faBook} />
                    Help

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
                    Donate
                </AnchorLink>
            </div>
        </nav>
    )
}
