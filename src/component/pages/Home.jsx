import React from 'react'
import Hero from '../Hero'

import Services from './Services'
import Caregivers from './Caregivers'
import Contact from './Contact'

import About from './About'


const Home = () => {
  return (
    <div className='md:mt-40 mt-36 drop-in-2'>
        <Hero/>
        <Services/>
        <Caregivers/>
        <About/>
        <Contact/>
      
      
        
    </div>
  )
}

export default Home