import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Link, useI18next, Trans } from 'gatsby-plugin-react-i18next'

export default function Navbar() {
    const { language, originalPath } = useI18next()
    const langPath = language === 'en' ? '' : 'fr/'
    const otherLang = language === 'en' ? 'fr' : 'en'

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

                    <AnchorLink to={'/' + langPath + '#donate'}>
                        <Trans>Donate</Trans>
                    </AnchorLink>

                    <AnchorLink to={'/' + langPath + '#further'}>Contact</AnchorLink>
                </div>

                <div className="languages">
                    <Link to={originalPath} language={otherLang}>
                        <span role="img" aria-label="globe-emoji">
                            🌍
                        </span>
                        {' ' + otherLang}
                    </Link>
                </div>
            </div>
        </nav>
    )
}
