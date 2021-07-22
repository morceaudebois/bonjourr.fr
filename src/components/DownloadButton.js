import React from 'react'
import { Trans } from 'gatsby-plugin-react-i18next';

let link, icon;
let label = <Trans>Download</Trans>;


function detectBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") !== -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") !== -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") !== -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true )) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
} 


switch (detectBrowser()) {
    case 'Firefox':
        link = 'https://addons.mozilla.org/fr/firefox/addon/bonjourr-startpage/'
        icon = '/firefox.svg'
        break;
    case 'Chrome':
    case 'Chrome WebView':
        link = 'https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd?hl=fr&authuser=0'
        icon = '/chrome.svg'
        break;
    case 'Safari':
        link = '/use-bonjourr#-safari'
        label = 'Use on Safari'
        icon = '/safari.svg'
        break;
    case 'Mobile Safari':
        link = '/use-bonjourr#-bonjourr-on-ios'
        label = 'Use on iOS'
        icon = '/safari.svg'
        break;
    case 'Edge':
        link = 'https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid'
        icon = '/edge.svg'
        break;
    default:
        icon = '/logo.png'
        link = 'https://online.bonjourr.fr'
        label = <Trans>Use Bonjourr</Trans>;
}

export default function downloadButton() {
    return (
        <a href={link} className="button">
            <div className="icon">
                <img src={icon} alt={detectBrowser() + ' logo'}/>
            </div>
            <span>{label}</span>
        </a>
    )
}