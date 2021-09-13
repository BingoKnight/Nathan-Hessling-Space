import React, { useState } from 'react'

const TextInput = ({ id, className, label, disableSpellCheck, onChange }) => {
	
    const [text, setText] = useState('');

    function handleChange(e, onChange) {
        const value = e.target.value
        setText(value)
        if(onChange)
            onChange(value)
    }

	return (
        <div className={`form-input ${className || ''}`}>
                                                                                {/* important that spellcheck is set */}
                                                                                {/* to false in this fashion, */}
                                                                                {/* spellcheck is on by default */}
			<input type={'text'} id={id} onChange={e => handleChange(e, onChange)} spellcheck={disableSpellCheck ? 'false' : ''} />
			<label htmlFor={id} className={text ? 'active' : null}>{label}</label>
		</div>
	)
}

export default TextInput
