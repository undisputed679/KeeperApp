import React from 'react'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Notes from './pages/Notes'
import Note from './pages/Note'




function Routes() {
    return (
        <div>
            <div>
                <Header />
                {Note.map(noteitem => (

                    <Notes
                        key={noteitem.key}
                        title={noteitem.title}
                        content={noteitem.content}
                        
                    />
                ))}
                <Footer />
            </div>
        </div>
    )
}

export default Routes
