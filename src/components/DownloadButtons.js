import React, { useEffect, useState } from 'react'
import { Trans, Link } from 'gatsby-plugin-react-i18next'
import { browserName } from 'react-device-detect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

import ChromeIcon from '../assets/icons/browsers/chrome.svg'
import EdgeIcon from '../assets/icons/browsers/edge.svg'
import FirefoxIcon from '../assets/icons/browsers/firefox.svg'
import SafariIcon from '../assets/icons/browsers/Safari.svg'

const platforms = {
    Firefox: {
        link: 'https://addons.mozilla.org/fr/firefox/addon/bonjourr-startpage/',
        icon: FirefoxIcon,
    },
    Chrome: {
        link: 'https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-sta/dlnejlppicbjfcfcedcflplfjajinajd',
        icon: ChromeIcon,
    },
    Edge: {
        link: 'https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid',
        icon: EdgeIcon,
    },
    Safari: {
        link: 'https://apps.apple.com/fr/app/bonjourr-startpage/id1615431236',
        icon: SafariIcon,
    },
    'Mobile Safari': {
        link: '/use-bonjourr#-ios-and-android',
        icon: SafariIcon,
        label: 'Use on iOS',
    },
}

const DownloadButtons = () => {
    const [icon, setIcon] = useState(platforms.Chrome.icon)
    const [link, setLink] = useState(platforms.Chrome.link)
    const [label, setLabel] = useState('Download')
    const [opacity, setOpacity] = useState(0)

    function handleDlPlatforms({ icon, link, label }) {
        if (label) setLabel(label)
        setIcon(icon)
        setLink(link)
    }

    useEffect(() => {
        if (browserName in platforms) {
            handleDlPlatforms(platforms[browserName])
        }

        setOpacity(1)
    }, [])

    return (
        <div className="container">
            <Link to={link} className="button">
                <div className="icon" style={{ opacity }}>
                    <img src={icon} alt="" />
                </div>
                <span>
                    <Trans>{label}</Trans>
                </span>
            </Link>

            <a href="https://online.bonjourr.fr" rel="noreferrer" className="button">
                <FontAwesomeIcon icon={faDesktop} className="icon" />
                <span>
                    <Trans>Try online</Trans>
                </span>
            </a>
        </div>
    )
}

export default DownloadButtons
