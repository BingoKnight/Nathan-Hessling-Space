import React, { useState } from 'react'

export default function PasswordInput({ id, className, label, onChange }) {
	
    const [text, setText] = useState('');

    function handleChange(e, onChange) {
        const value = e.target.value
        setText(value)
        if(onChange)
            onChange(value)
    }

	return (
        <div className={`form-input ${className || ''}`}>
            <input type={'password'} id={id} onChange={e => handleChange(e, onChange)} />
			<label htmlFor={id} className={text ? 'active' : null}>{label}</label>
		</div>
	)
}

