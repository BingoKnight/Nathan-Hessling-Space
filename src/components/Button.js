import React from 'react'

const Button = props => {
    const { id, label } = props
    const width = props.width || "125px"
    const height = props.height || "40px"

	return (	
        <div className="form-button">
			<button id={id} style={{ width, height }}>{label}</button>
		</div>
	)
}

export default Button
