import React, { useState, useEffect } from 'react'
import Header from './Header'
import { MobileMenuOverlay } from './Menu'
import '../styles/global.css'


export default function Layout({ children }) {

    const [isMenuActive, setIsMenuActive] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const updateWindowWidth = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }

    useEffect(() => { 
        updateWindowWidth();
        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, [])

    return (
        <div>
            <title>Nathan Hessling's Space</title>
            <MobileMenuOverlay isMenuActive={isMenuActive} windowWidth={windowWidth} />
            <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} windowWidth={windowWidth} />
            <div>{children}</div>
        </div>
    )
}
