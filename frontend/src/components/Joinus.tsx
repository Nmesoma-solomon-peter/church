import React from 'react'
import './Joinus.css'
import hands from '../assets/hands.jpg'
function Joinus() {
    return (
        <div className='container-fluid joinus'>
            <div className='joininner '>
                <p className='join__p1'>Join Us at Church</p>
                <p className='join__p2'>Experience God's presence at church this Saturday</p>
                <div className='joinusbtn'>
                    <button className='btn btn-lg btn-secondary '>Get Direction</button>
                </div>
                <p className='date'>Saturday
                    8:30am -11:30am & 6pm : vesper service</p>
            </div>
        </div>
    )
}

export default Joinus