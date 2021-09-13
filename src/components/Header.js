import React from 'react'
import { Link } from 'gatsby'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

import Menu from './Menu'
import LinkButton from './LinkButton'
import { routes } from '../routes'


function LoginForm({ windowWidth }) {
    if(windowWidth && windowWidth > 1625)
        return (
            <>
                <div className={'header-spacer'} />
                <div id="login-form">
                    <div className="row align-items-base">
                        <div className="col"><TextInput id="email-login" label="Email" /></div>
                        <div className="col"><TextInput id="password-loging" label="Password" /></div>
                        <div className="col"><Button label="Login" width="80px" height="40px" /></div>
                        <div className="col"><Link to={routes.signup.path} className={'nav-menu-link'}>Sign up</Link></div>
                    </div>
                </div>
            </>
        )
    else if(windowWidth && windowWidth > 1280)
        return (
            <>
                <div className={'header-spacer'} />
                <div id="login-form">
                    <div className="row align-items-base">
                        <div className="col"><LinkButton id={'login-btn'} label={'Login'} /></div>
                        <div className="col"><Link to={routes.signup.path} className={'nav-menu-link'}>Sign up</Link></div>
                    </div>
                </div>
            </>
        )
    else return null
}


export default function Header({ isMenuActive, setIsMenuActive, windowWidth }) {
    return (
        <div class={'header-box'}>
            <div className={'header-content'}>
                <span className='header'>NH</span>
                <Menu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} windowWidth={windowWidth} />
                <LoginForm windowWidth={windowWidth} />
            </div>
        </div>
    )
}
