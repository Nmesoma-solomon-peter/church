import React from 'react'
import './Footer.css'
import SDA_logo from '../assets/SDA_logo.png'

function Footer() {
    return (
        <div className='footer bg-primary container-fluid'>

            <img src={SDA_logo} alt='logo' className='logoo' />
            <div className='foterMenuBox' >
                <a href='#' className='foterMenu'>Latest Events</a>
                <a href='#' className='foterMenu'>Contact</a>
                <a href='#' className='foterMenu'>Join live!</a>
                <a href='#' className='foterMenu'>Donate</a>
            </div>
            <div className='copyright'>SDA Church Iheorji Umuogele © {new Date().getFullYear()}. All Rights Reserved.</div>
        </div>
    )
}

export default Footer