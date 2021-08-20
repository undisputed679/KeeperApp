import React from 'react'
import '../styles/notes.css'

function Notes(props) {
    return (
        <div className="note">
            <p className="nh">{props.title} </p>
            <p className="np">{props.content}</p>
        </div>
    )
}

export default Notes
