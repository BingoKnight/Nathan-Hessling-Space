import React, { useState } from "react";
import { Link } from "gatsby";


export default () => {

    const [isMenuActive, setIsMenuActive] = useState(false)

    return <div className={'nav-menu' + (isMenuActive ? ' active' : '')}>
        <button id={'menu-btn'} className={isMenuActive ? ' active' : ''} onClick={() => setIsMenuActive(!isMenuActive)}>
            <svg viewBox="0 0 100 100">
                <>
                    <path id={'menu-path-1'} className={isMenuActive ? 'active' : ''} d="M20,25 l60,0 0,10 -60,0" />
                    <path id={'menu-path-2'} className={isMenuActive ? 'active' : ''} d="M20,45 l60,0 0,10 -60,0"/>
                    <path id={'menu-path-3'} className={isMenuActive ? 'active' : ''} d="M20,65 l60,0 0,10 -60,0"/>
                </>
            </svg>
        </button>
        <ul className={'nav-menu-list'}>
            <li><Link to={'/'} className={'nav-menu-link'}>Home</Link></li>
            <li><Link to={'/about'} className={'nav-menu-link'}>About</Link></li>
            <li><Link to={'/contact'} className={'nav-menu-link'}>Contact</Link></li>
        </ul>
    </div>
}