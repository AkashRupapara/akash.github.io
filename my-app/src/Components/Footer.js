import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faHeart} from '@fortawesome/free-regular-svg-icons'

function Footer() {
    return (
        <div style={{textAlign: "center", marginTop:"2%", marginBottom:"2%"}}>
            Made with <img src="/Images/heart.png" style={{height:"0.5cm"}}/> Akash Rupapara
        </div>
    )
}

export default Footer
