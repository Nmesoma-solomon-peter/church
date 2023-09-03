import React from 'react'
import './Carousel.css'
import dove from '../assets/dove.jpg'
import prayer from '../assets/prayer.jpg'
import church from '../assets/church.jpg'
import singers from '../assets/singers.jpg'


function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={prayer} className="d-block w-100 prayer" alt="..." />
                        <div>
                            <div className="carousel-caption prayertext">
                                <p className='caro__p1'>Welcome to God's family.</p>
                                <p className='caro__p2'>Let's worship God together</p>
                                <p className='caro__p3'>He knows. listens. and Answers</p>
                                <div className='btn__box'>
                                    <button className="btn inperson__btn  btn-primary btn-lg carobtn">Join in person</button>

                                    <button className="btn live__btn btn-secondary btn-lg carobtn"> watch us live</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* second carousel */}
                    <div className="carousel-item ">
                        <img src={church} className="d-block w-100" alt="..." />

                        <div>
                            <div className="carousel-caption prayertext">
                                <p className='caro__p1'>Feel the presence of God.</p>
                                <p className='caro__p2'>Join our congregation</p>
                                <p className='caro__p3'>Unite. Discover. Grow.</p>
                                <div className='btn__box'>
                                    <button className="btn inperson__btn  btn-primary btn-lg">Join in person</button>

                                    <button className="btn live__btn btn-secondary btn-lg"> watch us live</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3rd carousel */}
                    <div className="carousel-item ">
                        <img src={singers} className="d-block w-100" alt="..." />

                        <div>
                            <div className="carousel-caption prayertext">
                                <p className='caro__p1'>Worship God through music.</p>
                                <p className='caro__p2'>Enjoy spirit filled gosple music</p>
                                <p className='caro__p3'>Listen. Meditate. Worship</p>
                                <div className='btn__box'>
                                    <button className="btn inperson__btn  btn-primary btn-lg">Join in person</button>

                                    <button className="btn live__btn btn-secondary btn-lg"> watch us live</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}

export default Carousel