import React from 'react'
import './Lwgg.css'
function Lwgg() {
  return (
    <div className='container-fluid lwgg'>
      <div className="lwgg_intro">
        <p className='lwgg_introhead'>Your Next Steps</p>
        <p className='lwgg_introp'>No matter where you are in your faith journey, there is always a next step.</p>
        <div className='row lwgg__row'>
          <div className="col col-md-3  ">
            <div className='about_ch lwgg_card'>
              <p className='lwggcol_p'>learn</p>
              <p className='lwggcol_head'>About our church</p>
            </div>
          </div>
          <div className="col col-md-3  ">
            <div className='worship_ch lwgg_card'>
              <p className='lwggcol_p'>worship</p>

              <p className='lwggcol_head'>View Service Times</p>
            </div>
          </div>
          <div className="col col-md-3  ">
            <div className='involve_ch lwgg_card'>
              <p className='lwggcol_p'>Get Involved</p>

              <p className='lwggcol_head'>Upcoming Events</p>
            </div>
          </div>
          <div className="col col-md-3 ">
            <div className='give_ch lwgg_card'>
              <p className='lwggcol_p'>Give </p>

              <p className='lwggcol_head'>Donate to the Church</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lwgg