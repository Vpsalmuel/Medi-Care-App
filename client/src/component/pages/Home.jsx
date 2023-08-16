import React from 'react'
import Hero from '../Hero'
import About from './About'
import Services from './Services'
import Caregivers from './Caregivers'
import Contact from './Contact'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Caregivers/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default Home