import React from 'react'
import Header from '../Header.jsx/Header'
import Footer from '../Footer/Footer'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout