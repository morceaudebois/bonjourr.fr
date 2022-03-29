import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Link, useI18next, Trans } from 'gatsby-plugin-react-i18next'
import GatsbyLink from 'gatsby-link'

export default function Navbar() {
    const { language, originalPath } = useI18next()
    const isFr = language === 'fr'
    const langPath = isFr ? 'fr' : ''

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

                    <GatsbyLink to="/use-bonjourr" language="en">
                        <Trans>Docs</Trans>
                    </GatsbyLink>

                    <AnchorLink to={'/' + langPath + '#donate'}>
                        <Trans>Donate</Trans>
                    </AnchorLink>

                    <AnchorLink to={'/' + langPath + '#further'}>Contact</AnchorLink>
                </div>

                <div
                    className="languages"
                    style={{ display: originalPath !== '/' && 'none' }} // Only display lang switch on homepage
                >
                    <Link to={originalPath} language={isFr ? 'en' : 'fr'}>
                        <span role="img" aria-label="globe-emoji">
                            🌍
                        </span>
                        {isFr ? ' en' : ' fr'}
                    </Link>
                </div>
            </div>
        </nav>
    )
}
