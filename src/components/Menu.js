import React from "react";
import { Link } from "gatsby";


function MenuLinks({ menuLinks }) {
    return menuLinks.map(link => <li><Link to={link.path} className={'nav-menu-link'}>{link.name}</Link></li>)
}


export function MobileMenuOverlay({ isMenuActive, menuLinks, windowWidth }) {
    if(windowWidth && windowWidth < 900) {
        return (
            <div className={`mobile-menu-overlay ${isMenuActive ? 'active' : ''}`}>
                <div className="overlay-content">
                    <MenuLinks menuLinks={menuLinks} />
                </div>
            </div>
        )
    }

    return null
}


export default function Menu({ isMenuActive, setIsMenuActive, menuLinks, windowWidth }) {
    if(windowWidth && windowWidth < 900)
        return (
            <>
                <div className="header-spacer"></div>
                <div className={'nav-menu hamburger-menu'}>
                    <button id={'menu-btn'} className={`${isMenuActive ? ' active' : ''}`} onClick={() => setIsMenuActive(!isMenuActive)}>
                        <svg viewBox="0 0 100 100">
                            <>
                                <path id={'menu-path-1'} className={isMenuActive ? 'active' : ''} d="M20,25 l60,0 0,10 -60,0" />
                                <path id={'menu-path-2'} className={isMenuActive ? 'active' : ''} d="M20,45 l60,0 0,10 -60,0"/>
                                <path id={'menu-path-3'} className={isMenuActive ? 'active' : ''} d="M20,65 l60,0 0,10 -60,0"/>
                            </>
                        </svg>
                    </button>
                </div>
            </>
        )
    else
        return (
            <div>
                <ul className={'nav-menu-list'}>
                    <MenuLinks menuLinks={menuLinks} />
                </ul>
            </div>
        )
}
