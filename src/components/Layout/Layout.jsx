import React from 'react'
import Header from '../Header.jsx/Header'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>

        </>
    )
}

export default Layout