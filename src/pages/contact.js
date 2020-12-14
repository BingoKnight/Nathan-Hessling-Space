import React from 'react'
import Layout from "../components/Layout";

const Contact = () => (
    <Layout>
        <h2 className={'content-header'}>Contact Form</h2>
        <div id={'contact-form'}>
            <div className={'row'}>
                <div className="col"><input type={'text'} placeholder={'First Name'}/></div>
                <div className="col"><input type={'text'} placeholder={'Last Name'}/></div>

            </div>
            <div className={'row'}>
                <div className="col"><input type={'text'} placeholder={'Subject'}/></div>
            </div>
            <div className={'row'}>
                <div className="col"><textarea placeholder={'Message'}/></div>
            </div>
        </div>
    </Layout>
)

export default Contact