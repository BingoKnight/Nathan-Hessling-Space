import React from 'react'

const LinkButton = props => {
    const { id, label } = props

	return (	
        <div>
			<button id={id} className="nav-menu-link">{label}</button>
		</div>
	)
}

export default LinkButton
