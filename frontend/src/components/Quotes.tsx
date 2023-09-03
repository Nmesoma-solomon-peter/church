import React from 'react'
import './Quotes.css'
function Quotes() {
    return (
        <div className='quotes container-fluid'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-white qinner">
                    <div className="carousel-item active">
                        <h4 className='quote'>
                            <span className='qsign'>“</span>
                            Our heavenly Father has a thousand ways to provide for us, of which we know nothing. <span className='qsignleft'>”</span></h4>

                        <p>― Ellen G. White</p>
                    </div>
                    <div className="carousel-item">
                        <h4 className='quote'><span className='qsign'>“</span>
                            I should not want to live unless I could live to do some good to others.<span className='qsignleft'>”</span></h4>

                        <p>― Ellen White</p>
                    </div>
                    <div className="carousel-item">
                        <h4 className='quote'><span className='qsign'>“</span>Christ is a “tried stone.” Those who trust in Him, He never disappoints. <span className='qsignleft'>”</span></h4>
                        <p> ― Ellen G. White, The Desire of Ages</p>
                    </div>
                </div>
            </div>
        {/* <div>
            <div className='quote'>

            </div>
        </div> */}

        </div>
    )
}

export default Quotes