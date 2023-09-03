import React from 'react'
import './Vidplay.css'

function Vidplay() {
    return (
        <div className='vidplay container-fluid'>
            <div className='live'>
                <iframe width="100%" height="445" src="https://www.youtube.com/embed/-4nqx7yQxjE?controls=1"></iframe>
            </div>
            <div className='vidjoin'>
                Join us on our social platforms
            </div>
            <div className='social_dev'>
            <i className="bi bi-facebook social"></i>
            <i className="bi bi-youtube social"></i>
            <i className="bi bi-instagram social"></i>
            </div>
            <div className='contact_row'>
                <button className='btn btn-lg vid_Contact'>Contact Us</button>
                <button className='btn btn-lg vid_Donate'>Payments / Donates</button>
            </div>
        </div>
    )
}

export default Vidplay