import React, { useEffect, useState } from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

import Menu from './Menu'


function LoginForm() {
    return (
        <div id="login-form">
		    <TextInput id="email-login" label="Email" />
            <TextInput id="password-loging" label="Password" />
            <Button label="Login" />	
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
