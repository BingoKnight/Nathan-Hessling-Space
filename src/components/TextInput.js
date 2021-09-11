import React, { useState } from 'react'

const TextInput = ({ id, label, disableSpellCheck }) => {
	
    const [text, setText] = useState('');

	return (
        <div className="form-input">
                                                                                {/* important that spellcheck is set to false in this fashion, */}
                                                                                {/* spellcheck is on by default */}
			<input type={'text'} id={id} onChange={e => setText(e.target.value)} spellcheck={disableSpellCheck ? 'false' : ''} />
			<label htmlFor={id} className={text ? 'active' : null}>{label}</label>
		</div>
	)
}

export default TextInput
