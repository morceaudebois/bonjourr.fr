import React from 'react'
import GatsbyLink from 'gatsby-link'
import { Link, Trans } from 'gatsby-plugin-react-i18next'

const AuthorLink = ({ href, title, text }) => {
    return (
        <a href={href} title={title}>
            {text}
        </a>
    )
}

export default function Footer() {
    if (typeof window !== `undefined`) {
        const victor = {
            href: 'https://victr.me',
            title: "Victor's portfolio",
            text: 'Victor Azevedo',
        }

        const tahoe = {
            href: 'https://tahoe.be',
            title: "Tahoe's portfolio",
            text: 'Tahoe Beetschen',
        }

        let signatures = Math.random(0.5) > 0.5 ? [tahoe, victor] : [victor, tahoe]

        return (
            <footer>
                <div className="container">
                    <span>
                        © 2019-{new Date().getFullYear()}
                        <Link to="/"> Bonjourr</Link>
                        <br />
                        <GatsbyLink to="/privacy" language="en">
                            <small>Privacy policy</small>
                        </GatsbyLink>
                    </span>

                    <span id="signature">
                        <Trans>Made in France with</Trans>{' '}
                        <span role="img" aria-label="heart-emoji">
                            ❤️
                        </span>
                        <br></br>
                        <Trans>by</Trans> <AuthorLink {...signatures[0]} /> &{' '}
                        <AuthorLink {...signatures[1]} />
                    </span>

                    <span id="contact">
                        <Trans>Contact us on</Trans>{' '}
                        <a href="https://t.me/BonjourrStartpage">Telegram</a> <Trans>or</Trans>{' '}
                        <a href="mailto:bonjourr.app@protonmail.com">email</a>
                    </span>
                </div>
            </footer>
        )
    } else {
        return null
    }
}
