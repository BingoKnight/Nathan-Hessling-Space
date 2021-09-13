import React from "react";
import { Link } from "gatsby";
import { routes, desktopMenuLinkKeys, mobileMenuLinkKeys } from '../routes'


function MenuLinks({ menuLinks }) {
    return menuLinks.map(routeName =>
        <li><Link to={routes[routeName].path} className={'nav-menu-link'}>{routes[routeName].title}</Link></li>)
}


export function MobileMenuOverlay({ isMenuActive, windowWidth }) {
    if(windowWidth && windowWidth < 1281) {
        return (
            <div className={`mobile-menu-overlay ${isMenuActive ? 'active' : ''}`}>
                <div className="overlay-content">
                    <MenuLinks menuLinks={mobileMenuLinkKeys} />
                </div>
            </div>
        )
    }

    return null
}


export default function Menu({ isMenuActive, setIsMenuActive, windowWidth }) {
    if(windowWidth && windowWidth < 1281)
        return (
            <>
                <div className="header-spacer"></div>
                <div className={'nav-menu hamburger-menu'}>
                    <button id={'menu-btn'} className={`${isMenuActive ? ' active' : ''}`} onClick={() => setIsMenuActive(!isMenuActive)}>
                        <svg viewBox="0 0 100 100">
                            <path id={'menu-path-1'} className={isMenuActive ? 'active' : ''} d="M20,25 l60,0 0,10 -60,0" />
                            <path id={'menu-path-2'} className={isMenuActive ? 'active' : ''} d="M20,45 l60,0 0,10 -60,0"/>
                            <path id={'menu-path-3'} className={isMenuActive ? 'active' : ''} d="M20,65 l60,0 0,10 -60,0"/>
                        </svg>
                    </button>
                </div>
            </>
        )
    else
        return (
            <div>
                <ul className={'nav-menu-list'}>
                    <MenuLinks menuLinks={desktopMenuLinkKeys} />
                </ul>
            </div>
        )
}
