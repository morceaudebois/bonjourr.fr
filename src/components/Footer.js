import React from 'react'
import { Link } from 'gatsby'
import { Trans } from 'gatsby-plugin-react-i18next'

export default function Footer() {
    if (typeof window !== `undefined`) {
        const AuthorLink = ({ props }) => {
            return (
                <a href={props.href} title={props.title}>
                    {props.text}
                </a>
            )
        }

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

        let signatures =
            Math.random(0.5) > 0.5 ? [tahoe, victor] : [victor, tahoe]

        return (
            <footer>
                <div className="container">
                    <span>
                        © 2019-{new Date().getFullYear()}
                        <Link to="/"> Bonjourr</Link>
                    </span>

                    <span id="signature">
                        <Trans>Made in France with</Trans>{' '}
                        <span role="img" aria-label="heart-emoji">
                            ❤️
                        </span>
                        <br></br>
                        <Trans>by</Trans>{' '}
                        <AuthorLink props={signatures[0]}></AuthorLink> &{' '}
                        <AuthorLink props={signatures[1]}></AuthorLink>
                    </span>

                    <span id="contact">
                        <Trans>Contact us on</Trans>{' '}
                        <a href="https://t.me/BonjourrStartpage">Telegram</a>{' '}
                        <Trans>or</Trans>{' '}
                        <a href="mailto:bonjourr.app@protonmail.com">email</a>
                    </span>
                </div>
            </footer>
        )
    } else {
        return null
    }
}
