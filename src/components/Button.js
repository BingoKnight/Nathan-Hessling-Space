import React from 'react'

const Button = ({ id, label }) => {
	return (	
		<div className="form-button">
			<button id={id}>{label}</button>
		</div>
	)
}

export default Button
