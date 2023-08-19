import React from 'react'
import Hero from '../Hero'

import Services from './Services'
import Caregivers from './Caregivers'
import Contact from './Contact'
import Footer from '../Footer'

const Home = () => {
  return (
    <div id='home' className='md:mt-40 mt-36'>
        <Hero/>
        {/* <About/> */}
        <Services/>
        <Caregivers/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default Home