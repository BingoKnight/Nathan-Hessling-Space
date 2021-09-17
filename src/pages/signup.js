import React, { useState } from 'react'
import Layout from '../components/Layout'
import PageContentLayout from '../components/PageContentLayout'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import PasswordInput from '../components/PasswordInput'


export default function Signup() {

    const [passwordMatch, setPasswordMatch] = useState('')
    const [emailMatch, setEmailMatch] = useState('')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    function validateEmail(email, emailState, setEmail) {
        setEmail(email)

        if(email && emailState)
            email === emailState ? setEmailMatch('valid') : setEmailMatch('invalid')
        else 
            setEmailMatch('')
    }

    function validatePassword(password, passwordState, setPassword) {
        setPassword(password)

        if(password && passwordState)
            password === passwordState ? setPasswordMatch('valid') : setPasswordMatch('invalid')
        else 
            setPasswordMatch('')
    }

    function submitRegistration() {
        if(password1 !== password2 || email1 !== email2)
            return

        const signUpRequestBody = {
            first_name: firstName,
            last_name: lastName,
            email1: email1,
            email2: email2,
            password1: password1,
            password2: password2
        }

        const signUpRequestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signUpRequestBody)
        }

        fetch(`${process.env.GATSBY_API_BASE_URL}/api/v1/user/registration`, signUpRequestOptions)
            .then(response => response.json())
            .then(data => console.log(data))

    }

    return (
        <Layout>
            <PageContentLayout>
                <h2 className={'content-header'}>Sign up</h2>
                <div className={'form'}>
                    <div className={'row'}>
                        <div className="col">
                            <TextInput
                                id="first-name-signup"
                                label="First Name"
                                onChange={setFirstName}
                                disableSpellCheck 
                            />
    		    		</div>
                        <div className="col">
                            <TextInput
                                id="last-name-signup"
                                label="Last Name"
                                onChange={setLastName}
                                disableSpellCheck 
                            />
    		    		</div>
                    </div>
                    <div className={'row'}>
                        <div className="col">
                            <TextInput
                                id="email-signup"
                                className={emailMatch} 
                                label="Email"
                                onChange={value => validateEmail(value, email2, setEmail1)}
                                disableSpellCheck
                            />
    		    		</div>
                        <div className="col">
                            <TextInput
                                id="email-confirmation-signup"
                                className={emailMatch} 
                                label="Confirm Email"
                                onChange={value => validateEmail(value, email1, setEmail2)}
                                disableSpellCheck
                            />
    		    		</div>
                    </div>
                    <div className={'row'}>
                        <div className="col">
                            <PasswordInput
                                id="password-signup"
                                className={passwordMatch} 
                                label="Password"
                                onChange={value => validatePassword(value, password2, setPassword1)}
                            />
    		    		</div>
                        <div className="col">
                            <PasswordInput 
                                id="password-confirmation-signup"
                                className={passwordMatch} 
                                label="Confirm Password"
                                onChange={value => validatePassword(value, password1, setPassword2)}
                            />
    		    		</div>
                    </div>
    		    	<div className={'row'}>
    		    		<div className={'col'}>
    		    			<Button label="Sign up" onClick={submitRegistration} />	
    		    		</div>
    	            </div>
                </div>
            </PageContentLayout>
        </Layout>
    )
}
