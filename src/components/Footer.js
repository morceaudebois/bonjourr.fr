import React from 'react'
import { Link } from 'gatsby'

const victor = <a href='https://victr.me/'>Victor Azevedo</a>
const tahoe = <a href='https://tahoe.be'>Tahoe Beetschen</a>
const sig = Math.random(0.5) > 0.5 ? <span>{victor} & {tahoe}</span> : <span>{tahoe} & {victor}</span>

export default function Footer() {
    return (
        <footer>
            <span>© 2019-{new Date().getFullYear()} Bonjourr</span>
            <span id="signature">Made in France with <span role='img' aria-label='heart-emoji'>❤️</span><br></br>by {sig}</span>
            <span>Contact us on <Link to="/">Telegram</Link> or <Link to="/">email</Link></span>
        </footer>
    )
}
