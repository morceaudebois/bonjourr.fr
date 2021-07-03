import { Link } from 'gatsby'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faEnvelope, faGlobeAmericas, faDonate } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav>
            <h1>Bonjourr</h1>

            <ul className="links">
                <Link to="/">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    Why Bonjourr
                </Link>
                
                <Link to="/">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                </Link>
                
                <Link to="/">
                    <FontAwesomeIcon icon={faGlobeAmericas} />
                    Try online
                </Link>
                
                <Link to="/">
                    <FontAwesomeIcon icon={faDonate} />
                    Donate
                </Link>
            </ul>
        </nav>
    )
}
