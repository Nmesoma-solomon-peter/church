import React from 'react'
import './Welcome.css'
import churchs from '../assets/churchs.jpg'


function Welcome() {
    return (
        <div className='container-fluid welcome'>
            <div>
                {/* <div className='intro'>
                    <h4 className='text-primary mb-3'>Welcome to SDA Church Iheorji-Umuogele !</h4>
                </div> */}
                <p className='welcome_p'>
                    It is not earthly rank, nor birth, nor nationality, nor religious privilege, which proves that we are members of the family of God; it is love, a love that embraces all humanity.
                </p>
            </div>

            <div className='row mt-5'>
                <div className="col col-md-6">
                    <div className="introimg">
                        <img src={churchs} alt="church_members" className='welcome__img' />
                    </div>
                </div>
                <div className="col col-md-6">
                    <div className='welcome__intro'>
                        <p className='w_introsubp'>Welcome to Seventh-day Adventist church Iheorji-Umuogele</p>
                        <p></p>
                        <p>The Seventh-day Adventist Church, often referred to as the SDA Church, is a Protestant Christian denomination that emerged in the mid-19th century. Founded on the principles of the Second Great Awakening, the church places a strong emphasis on the Second Coming of Jesus Christ and the observance of the Sabbath, which is traditionally observed from Friday evening to Saturday evening....</p>

                        <button className='btn btn-primary btn-lg'>More About Us</button>

                    </div>
                </div>
            </div>












            {/* <div className='mt-5'>
                <iframe width="100%" height="445" src="https://www.youtube.com/embed/IYWF_lfhhiY?controls=0"></iframe>
                       
                // remove below link
                <object data='https://www.youtube.com/embed/nfk6sCzRTbM?autoplay=1' width='560px' height='315px'>
                </object>
            </div> */}

            {/* <div className='address_box mt-5'>
                <h4>let's worship together next sabbath (Saturday)</h4>
                <h6>SABBATH SCHOOL : 8:30 AM - 10:30 AM  </h6>
                <h6> DIVINE SERVICE : 11:00 AM - 1:00 PM </h6>
                <h6> Venue: 180 Ohanku Rd </h6>
                <a href='/media'><button className='btn btn-lg btn-secondary text-white mt-4'>Join Us live!</button> </a>

            </div> */}
        </div>
    )
}

export default Welcome