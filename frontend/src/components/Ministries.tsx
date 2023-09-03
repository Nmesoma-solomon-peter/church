import React from 'react'
import './Ministries.css'
// import youth from '../assets/youth.jpg'
import aylogo from '../assets/aylogo.png'
import amo_logo from '../assets/amo_logo.png'
import awm_logo from '../assets/awm_logo.png'
import children_logo from '../assets/children_logo.png'


function Ministries() {
    return (
        <div className='ministry container-fluid'>
            <div className='Minis'>
                <p className='minis_intro_head'>Experience. Connect. Grow </p>
                <p className='minis_intro_p'>Join our ministries to get connected through service</p>
            </div>
            {/* <div className='row'>

                <div className="col col-md-3  colLine youth">
                    <div className='minisHead'>Youth Ministry</div>
                    <div className='minisP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis pariatur ab facilis incidunt illo cum, culpa reprehenderit </div>
                    <a href="http://">Read More</a>
                    <img src={aylogo} alt='ministryLogo' className='minislogo' />
                </div>


                <div className="col col-md-3 colLine men">
                    <div className='minisHead'>A.M.O</div>
                    <div className='minisP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis pariatur ab facilis incidunt illo cum, culpa reprehenderit </div>
                    <a href="http://">Read More</a>
                    <img src={amo_logo} alt='ministryLogo' className='minislogo' />
                </div>

                <div className="col  col-md-3 colLine women">
                    <div className='minisHead'>Women Ministry</div>
                    <div className='minisP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis pariatur ab facilis incidunt illo cum, culpa reprehenderit </div>
                    <a href="http://">Read More</a>
                    <img src={awm_logo} alt='ministryLogo' className='minislogo' />
                </div>
                <div className="col col-md-3 children">
                    <div className='minisHead'>Children Ministry</div>
                    <div className='minisP'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis pariatur ab facilis incidunt illo cum, culpa reprehenderit </div>
                    <a href="http://">Read More</a>
                    <img src={children_logo} alt='ministryLogo' className='minislogo' />
                </div>
            </div> */}

            <div className='row lwgg__row'>
                <div className="col col-md-3">
                    <div className='youth minis_card '>
                        <p className='lwggcol_p'>Youth</p>
                        <p className='lwggcol_head'><a href='#' className='mini_link'>learn more </a></p>
                    </div>
                </div>
                <div className="col col-md-3">
                    <div className='women minis_card '>
                        <p className='lwggcol_p'>Women</p>

                        <p className='lwggcol_head'><a href='#' className='mini_link'>learn more </a></p>
                    </div>
                </div>
                <div className="col col-md-3 ">
                    <div className='men minis_card '>
                        <p className='lwggcol_p'>Men</p>

                        <p className='lwggcol_head'><a href='#' className='mini_link'>learn more </a></p>
                    </div>
                </div>
                <div className="col col-md-3 ">
                    <div className='children minis_card '>
                        <p className='lwggcol_p'>Children</p>

                        <p className='lwggcol_head'><a href='#' className='mini_link'>learn more </a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ministries