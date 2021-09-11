import React from 'react'
import Layout from "../components/Layout"
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const Contact = () => {
   return <Layout>
       <div className="main-content">
            <h2 className={'content-header'}>Contact Form</h2>
            <div id={'contact-form'}>
                <div className={'row'}>
                    <div className="col">
		    			<TextInput id="first-name-contact" label="First Name" disableSpellCheck={false} />
		    		</div>
                    <div className="col">
		    			<TextInput id="last-name-contact" label="Last Name" disableSpellCheck={false} />
		    		</div>
                </div>
                <div className={'row'}>
                    <div className="col form-input">
		    			<TextInput id="subject-contact" label="Subject" />
		    		</div>
                </div>
                <div className={'row'}>
                    <div className="col">
		    			<textarea placeholder={'Message'}/>
		    		</div>
                </div>
		    	<div className={'row'}>
		    		<div className={'col'}>
		    			<Button label="Send" />	
		    		</div>
	            </div>
            </div>
       </div>
    </Layout>
}

export default Contact
