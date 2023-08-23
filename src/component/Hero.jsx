import React from 'react'
import heroimg from '../Assets/login-image.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Hero = () => {
  return (



    <div className="relative isolate px-6 lg:px-8 " id='hero'>

      <div className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-6xl md:flex md:gap-10 py-24 sm:py-36 lg:pt-36">

        <div className="text-left">
          <h1 className="text-3xl font-Paytone leading-relaxed text-emerald-900 md:text-4xl lg:text-6xl">
            Give your Parents the gift of a Healthy, Long Life.
          </h1>
          <p className="mt-6 font-Poppins text-sm  md:text-xl lg:text-2xl">
            Subscribe to regular caregivers home visits for them for as low as ₦15,000 per month.
          </p>
          <div className="my-10 flex items-center justify-start gap-x-6">

            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="  rounded-lg font-Poppins px-[20px] py-[5px] border-emerald-500 border-2 text-emerald-500 hover:border-white hover:text-white hover:bg-gradient-to-r from-emerald-500 to-lime-300  first-letter:justify-center items-center   focus:outline-none focus:shadow-outline"> <Link to="/carerecieverreg" className="text-slate-95 text-sm">Get Started </Link></motion.button >
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="text-white rounded-lg font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> <Link to="/login" className="text-slate-95 text-sm">Login</Link></motion.button >
          </div>

        </div>

        <img initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8, }
          } src={heroimg} className='rounded-xl  md:w-[40%] md:h-[50%] ' alt='' />
      </div>

    </div>

  )
}

export default Hero