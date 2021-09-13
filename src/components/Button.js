import React from 'react'

function Button(props) {
    const { id, label, onClick } = props
    const width = props.width || "125px"
    const height = props.height || "40px"

    function handleClick(onClick) {
        if(onClick)
            onClick()
    }

	return (	
        <div className="form-button">
            <button id={id} style={{ width, height }} onClick={() => handleClick(onClick)}>{label}</button>
		</div>
	)
}

export default Button
