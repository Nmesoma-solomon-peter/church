import React from 'react'
import SDA_logo from '../assets/SDA_logo.png'
import './Header.css'
import { Link } from "react-router-dom"



function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary header">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={SDA_logo} className='logo' /></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header bg-primary">
              {/* <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5> */}
              <div className='offcanvas-title' id="offcanvasScrollingLabel">
                <img src={SDA_logo} className='logo' />
              </div>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body bg-primary">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    {/* <p className="nav-link" href="#">Home</p> */}
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                  </Link>
                </li>

                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>About us</a>
                  <ul className='dropdown-menu dropdownabout' aria-labelledby='navbarDropdown'>
                    <Link to="/mission" style={{ textDecoration: 'none' }}>
                      <li><a className='dropdown-item nav-linkdp' href='#'>Our Mission</a></li>
                    </Link>
                    <Link to="/believe" style={{ textDecoration: 'none' }}>
                      <li><a className='dropdown-item nav-linkdp' href='#'>What we believe</a></li>
                    </Link>
                    <Link to="/gallery" style={{ textDecoration: 'none' }}>
                      <li><a className='dropdown-item nav-linkdp' href='#'>Gallary</a></li>
                    </Link>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/media" style={{ textDecoration: 'none' }}>
                    <a className="nav-link">Media </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/ministries" style={{ textDecoration: 'none' }}>
                    <a className="nav-link">Ministries</a>
                  </Link>
                </li>


                <li className="nav-item">
                  <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <a className="nav-link" href="#">Contact Us </a>
                  </Link>
                </li>

                
              </ul>
              <Link to="/payments" style={{ textDecoration: 'none' }}>
                  <button className='btn btn-lg header_btn'>
                    Payment/Donations
                  </button>
                </Link>
            </div>
          </div>
        </div>

      </nav >
    </div >
  )
}

export default Header