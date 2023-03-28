import React from 'react'
import SDA_logo from '../assets/SDA_logo.png'
import './Header.css'
import { Link } from "react-router-dom"



function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    {/* <p className="nav-link" href="#">Home</p> */}
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    {/* <p className="nav-link" href="#">Home</p> */}
                    <a className="nav-link" href="#">About us </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <a className="nav-link" href="#">Contact Us </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <a className="nav-link" href="#">Media </a>
                  </Link>
                </li>

                <button className='btn btn-lg bg-secondary text-white'>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Payment/Donations
                  </Link>
                  </button>
              </ul>
            </div>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Header