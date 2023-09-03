import React from 'react'
import './Featured.css'
import masterg from '../assets/masterg.jpg'

function Featured() {
    return (
        <div className='container-fluid'>
            <div className="row f_row">
                <div className="col col-md-6">
                    <div className='featured'>
                        <img src={masterg} alt="masterg" className='featured__img' />
                    </div>
                </div>
                <div className="col col-md-6">
                    <div>
                        <p className='featured_p1'>FEATURED EVENT</p>
                        <p className='featured_p2'>MasterGuide centenary Anniversary</p>
                        <p className='featured_p3'>March 19 @ 8:00 am - 5:00 pm</p>
                        <p className='featured_p4'>The MasterGuides centenary Anniversary is a celebrated to thank God for how long he has lead the aba south conference Master...</p>

                        <button className='btn btn-lg btn-primary me-5 featured_btn'> View Event</button>
                        <button className='btn btn-lg btn-secondary'> More Events</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured