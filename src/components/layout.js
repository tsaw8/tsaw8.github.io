import React, { useState, useEffect } from 'react'

import '../assets/scss/main.scss'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    const [isLoading, setLoading] = useState('is-loading')
    let timeoutId = null

    useEffect(() => {
        timeoutId = setTimeout(() => {
            setLoading('')
        }, 100);

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    })

    return (
        <div className={`body ${isLoading}`}>
            <div id="wrapper">
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}


export default Layout
