import React from 'react'
import Layout from "../components/Layout"
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import PageContentLayout from '../components/PageContentLayout'


const Contact = () => {
   return <Layout>
       <PageContentLayout>
            <h2 className={'content-header'}>Contact Form</h2>
            <div className={'form'}>
                <div className={'row'}>
                    <div className="col">
		    			<TextInput id="first-name-contact" label="First Name" disableSpellCheck />
		    		</div>
                    <div className="col">
		    			<TextInput id="last-name-contact" label="Last Name" disableSpellCheck />
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
       </PageContentLayout>
    </Layout>
}

export default Contact
