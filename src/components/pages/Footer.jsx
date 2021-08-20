import React from 'react'
import "../styles/footer.css"

function Footer() {
    const year=new Date().getFullYear();
    return (
        <div className="footer">
            <p className="ftp">Copyright © {year}</p>
        </div>
    )
}

export default Footer
