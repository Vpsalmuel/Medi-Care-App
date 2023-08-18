import React from 'react'
import heroimg from '../asset/login-image.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='mt-16 px-5  flex flex-col gap-10 text-xl  lg:items-center ' >
      <div className='font-Poppins w-[80%] lg:flex'>
        <div className='lg:w-[70%] '>
          <h1 className='text-2xl md:text-lg font-Paytone leading-relaxed pb-4 text-emerald-900'>
            Give your Parents the gift of a Healthy, Long Life.
          </h1>
          <p className='text-sm'>Subscribe to regular caregivers home visits for them for as low as ₦15,000 per month.</p>
        </div>
        <div className='lg:flex lg:gap-5 pt-6 flex gap-4'>

          <button className="  rounded-lg font-Poppins px-[20px]  border-emerald-500 border-2 text-emerald-500 hover:border-white hover:text-white hover:bg-gradient-to-r from-emerald-500 to-lime-300  first-letter:justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> <Link to="/signup" className="text-slate-95 text-sm">Get Started </Link></button>
          <button className="text-white rounded-lg font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> <Link to="/signup" className="text-slate-95 text-sm">Login</Link></button>
        </div>
      </div>

      <img src={heroimg} className=' rounded-3xl lg:max-w-[40%]' />

    </div>
  )
}

export default Hero