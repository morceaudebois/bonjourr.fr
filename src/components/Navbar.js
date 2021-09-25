import React from 'react'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { Link, useI18next, Trans } from 'gatsby-plugin-react-i18next'

export default function Navbar() {
    const { language, languages, originalPath } = useI18next()
    const lang = language === 'en' ? '' : 'fr/'

    return (
        <nav>
            <div className="container">
                <div className="links">
                    <Link to="/" id="homeLink">
                        <Trans>Home</Trans>
                    </Link>

                    <a href="https://online.bonjourr.fr">
                        <Trans>Online</Trans>
                    </a>

                    <Link to="/use-bonjourr" id="docsLink">
                        <Trans>Docs</Trans>
                    </Link>

                    <AnchorLink to={'/' + lang + '#donate'}>
                        <Trans>Donate</Trans>
                    </AnchorLink>

                    <AnchorLink to={'/' + lang + '#further'}>Contact</AnchorLink>
                </div>

                <ul className="languages">
                    {languages.map(lng => (
                        <li key={lng}>
                            <Link to={originalPath} language={lng}>
                                <span role="img" aria-label="globe-emoji"> {' '} 🌍 </span>
                                {lng}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
