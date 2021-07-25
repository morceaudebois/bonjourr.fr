import React from 'react'
import { Trans, Link } from 'gatsby-plugin-react-i18next'
import { browserName } from 'react-device-detect'

export default function downloadButton() {
    let link, icon
    let label = <Trans>Download</Trans>

    // checks for window existence or server side rendering fails
    if (typeof window !== `undefined`) {
        switch (browserName) {
            case 'Firefox':
                link =
                    'https://addons.mozilla.org/fr/firefox/addon/bonjourr-startpage/'
                icon = '/firefox.svg'
                break
            case 'Chrome':
            case 'Chrome WebView':
                link =
                    'https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd?hl=fr&authuser=0'
                icon = '/chrome.svg'
                break
            case 'Safari':
                link = '/use-bonjourr#-safari'
                label = <Trans>Use on Safari</Trans>
                icon = '/safari.svg'
                break
            case 'Mobile Safari':
                link = '/use-bonjourr#-bonjourr-on-ios'
                label = <Trans>Use on iOS</Trans>
                icon = '/safari.svg'
                break
            case 'Edge':
                link =
                    'https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid'
                icon = '/edge.svg'
                break
            default:
                icon = '/logo.png'
                link = 'https://online.bonjourr.fr'
                label = <Trans>Use Bonjourr</Trans>
        }

        let linkContent = () => {
            return (
                <React.Fragment>
                    <div className="icon">
                        <img src={icon} alt={browserName + ' logo'} />
                    </div>
                    <span>{label}</span>
                </React.Fragment>
            )
        }

        if (link.includes('https')) {
            return (
                <a href={link} className="button">
                    {linkContent()}
                </a>
            )
        } else {
            return (
                <Link to={link} className="button">
                    {linkContent()}
                </Link>
            )
        }
    } else {
        return null
    }
}
