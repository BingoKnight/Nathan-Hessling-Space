import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

import Menu from './Menu'


function LoginForm() {
    return (
        <div id="login-form">
            <div className="row align-items-base">
                <div className="col"><TextInput id="email-login" label="Email" /></div>
                <div className="col"><TextInput id="password-loging" label="Password" /></div>
                <div className="col"><Button label="Login" width="80px" height="40px" /></div>
                <div className="col"><Link to={'#'} className={'nav-menu-link'}>Sign up</Link></div>
            </div>
        </div>
    )
}


export default function Header({ isMenuActive, setIsMenuActive, menuLinks, windowWidth }) {

    // const fullQuote = "\"Don't make your problems your customer's problems\" \"Don't make your problems your customer's problems\" \"Don't make your problems your customer's problems\""
    // const [printedQuote, setPrintedQuote] = useState("")
    // const [typeWriterCounter, setTypeWriterCounter] = useState(0)
    //
    // useEffect(() => {
    //     function writeQuote() {
    //         if(printedQuote.length < fullQuote.length) {
    //             setPrintedQuote(printedQuote + fullQuote[printedQuote.length])
    //         }
    //     }
    //
    //     let typeWriterTimer = setTimeout(() => writeQuote(), 75)
    //     return () => {
    //         clearTimeout(typeWriterTimer)
    //     }
    //     // }
    // }, [printedQuote])

    // return (
    //     <div id={'hero-banner'}>
    //         <div class={'header-box'}>
    //             <span className='header'>NH</span>
    //             <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} menuLinks={menuLinks} windowWidth={windowWidth} />
    //         </div>
    //         <div class={'header-body'}>
    //             <div>
    //                 <span id={'typewriter-text'} className={printedQuote.length < fullQuote.length ? 'active' : ''}>{printedQuote}</span>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div class={'header-box'}>
            <div className={'header-content'}>
                <span className='header'>NH</span>
                <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} menuLinks={menuLinks} windowWidth={windowWidth} />
                <div className={'header-spacer'} />
                <LoginForm />
            </div>
        </div>
    )
}
