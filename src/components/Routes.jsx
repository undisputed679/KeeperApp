import React from 'react'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Notes from './pages/Notes'

function Routes() {
    return (
        <div>
            <div>
                <Header/>
                <Notes/>
                <Footer/>
            </div>
        </div>
    )
}

export default Routes
