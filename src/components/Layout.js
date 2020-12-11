import React from 'react'
import Header from './Header'
import '../styles/global.css'


export default ({ children }) => (
    <div>
        <title>Nathan Hessling's Space</title>
        <Header />
        <div className={'main-content'}>{children}</div>
    </div>
)