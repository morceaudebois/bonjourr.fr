import { Link } from 'gatsby'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faEnvelope, faGlobeAmericas, faDonate } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav>
            <h1 id="logo">Bonjourr</h1>

            <ul className="links">
                <Link to="/">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    Bonjourr
                </Link>

                <Link to="/">
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                </Link>

                <Link to="/">
                    <FontAwesomeIcon icon={faGlobeAmericas} />
                    Online
                </Link>

                <Link to="/">
                    <FontAwesomeIcon icon={faDonate} />
                    Donate
                </Link>
            </ul>
        </nav>
    )
}
