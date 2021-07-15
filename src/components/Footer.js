import React from 'react'
import {Link} from 'gatsby'

const victor = <a href='https://victr.me/'>Victor Azevedo</a>
const tahoe = <a href='https://tahoe.be'>Tahoe Beetschen</a>
const sig = Math.random(0.5) > 0.5 ? <span>{victor} & {tahoe}</span> : <span>{tahoe} & {victor}</span>

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <span>© 2019-{new Date().getFullYear()}<Link to='/' > Bonjourr</Link></span>

                <span id="signature">Made in France with <span role='img' aria-label='heart-emoji'>❤️</span><br></br>by {sig}</span>
                
                <span id='contact'>Contact us on <a href="https://t.me/BonjourrStartpage">Telegram</a> or <a href="mailto:bonjourr.app@protonmail.com">email</a></span>
            </div>
        </footer>
    )
}
