import React from 'react'
import { browserName } from "react-device-detect";
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

let link, icon;
switch (browserName) {
    case 'Firefox':
        link = 'https://addons.mozilla.org/fr/firefox/addon/bonjourr-startpage/'
        icon = <StaticImage src="../assets/firefox.svg" alt={browserName + 'logo'}/>
        break;
    case 'Chrome':
        link = 'https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd?hl=fr&authuser=0'
        icon = <StaticImage src="../assets/chrome.svg" alt={browserName + 'logo'}/>
        break;
    default:
        link = 'try online'
}

const image = getImage('../assets/' + browserName + '.svg')

export default function downloadButton() {
    return (
        <a href={link} className="button">
            {/* <div className="icon">{icon}</div> */}
            <span>Download</span>
            <GatsbyImage image={image} alt={browserName} />
        </a>
    )
}