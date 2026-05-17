import React from 'react'
import Header from '../Header.jsx/Header'
import Footer from '../Footer/Footer'
import "./Layout.scss";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className='layout__container'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout