import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Welcome from './Welcome'
import Ministries from './Ministries'
import Footer from './Footer'
import Quotes from './Quotes'
import Lwgg from './Lwgg'
import Latestsermon from './Latestsermon'
import Featured from './Featured'
import Joinus from './Joinus'

function Home() {
  return (
    <div>
        <Header />
        <Carousel />
        <Welcome />
        <Lwgg />
        <Quotes />
        <Ministries />
        <Latestsermon />
        <Featured />
        <Joinus /> 
        <Footer />
    </div>
  )
}

export default Home