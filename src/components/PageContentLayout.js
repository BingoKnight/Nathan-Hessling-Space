import React from 'react'


export default function PageContentLayout({ children }) {
    return (
        <div className="page-content-backdrop">
            <div className="page-content-body">
                {children}
            </div>
        </div>
    )
}
