import React, { useState } from 'react'

const TextInput = ({ id, label }) => {
	
	const [text, setText] = useState('');

	return (
		<div className="form-input">
			<input type={'text'} id={id} onChange={e => setText(e.target.value)}/>
			<label htmlFor={id} className={text ? 'active' : null}>{label}</label>
		</div>
	)
}

export default TextInput
