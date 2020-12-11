import React from 'react'


export default ({ children, backgroundImage, url }) => {

    return (
        <a className={'card-btn'} href={url}>
            <div className={'card'}>
                <div
                    className={'card-background'}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                />
                <div className="card-text">{children}</div>
            </div>
        </a>
    )
}