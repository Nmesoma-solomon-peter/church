import React from 'react'
import './Contact.css'
import Header from './Header'
import Footer from './Footer'
import Map from './Map'
import Contactrow from './Contactrow'
import Contact_Banner from './Contact_Banner'
function Contact() {
    return (
        <div>
            <Header />
            <Map />
            {/* <Contact_Banner /> */}
            <Contactrow />
            <Footer />

        </div>
    )
}

export default Contact