import React from 'react'
import { Link } from 'react-router-dom'
import Caregiverbg from '../../asset/care-givers-bg.51544542.png'

const Caregivers = () => {
  return (
    <div className='p-5 mt-20 flex flex-col items-center'>
      <div>
        <h3 className='text-3xl font-Paytone font-bold leading-relaxed text-emerald-900'>Hire a Caregiver for your elderly loved ones</h3>
        <p className='font-Poppins pt-8 pb-8 '>We’ll provide access to In-home care, companionship, and 24/7 live-in services for your elderly loved ones.</p>
        <button className="text-white text-sm rounded-lg font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> <Link to="/signup" className="text-slate-95 text-xl">Get Started</Link></button>
        <img src={Caregiverbg} alt="" className='mt-10 mb-10 rounded-md' />
      </div>
      <div>
        <h3 className='text-3xl font-Poppins font-bold leading text-emerald-900'>Key Features</h3>
        <p className='font-Poppins pt-8 pb-8 '>We work with qualified nurses and well trained non - medical caregivers  We ensure your Elderly loved one always have the care and companionship they need.</p>
      </div>
      <section className='bg-emerald-50 text-center mb-10 '>
        <h3 className='text-2xl pb-12 pt-10 px-10 font-Poppins font-bold leading text-emerald-900'>Get Started in simple Steps</h3>
        <div className='py-10 px-10 hover:bg-slate-50'>
          <p className='bg-emerald-100 w-20 rounded-2xl m-auto text-emerald-900'>Step 1</p>
          <h3 className='font-Poppins font-bold leading text-emerald-900 pb-5 pt-5'>Fill Caregivers request form</h3>
          <p>Register elderly and add details of your elderly loved one.</p>
        </div>
        <div className='py-10 px-10 hover:bg-slate-50'>
          <p className='bg-emerald-100 w-20 rounded-2xl m-auto text-emerald-900'>Step 2</p>
          <h3 className='font-Poppins font-bold leading text-emerald-900 pb-5 pt-5'>Get Scheduled for Assessment</h3>
          <p>Within 24 hours of submitting the form, we will schedule a visit to examine the elderly's care needs.</p>
        </div>
        <div className='py-10 px-10  hover:bg-slate-50'>
          <p className='bg-emerald-100 w-20 rounded-2xl m-auto text-emerald-900'>Step 3</p>
          <h3 className='font-Poppins font-bold leading text-emerald-900 pb-5 pt-5'>Get Matched to a caregiver</h3>
          <p>If available in your location a caretaker is matched to you</p>
        </div>
        <div className='py-10 px-10  hover:bg-slate-50'>
          <p className='bg-emerald-100 w-20 rounded-2xl m-auto text-emerald-900'>Step 3</p>
          <h3 className='font-Poppins font-bold leading text-emerald-900 pb-5 pt-5'>Make payment</h3>
          <p>Payment are in one click, and its easy to make</p>
        </div>
      </section>
      <button className="text-white text-sm rounded-lg  font-Poppins w-[50%] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> <Link to="/signup" className="text-slate-95 text-xl">Get Started</Link></button>
    </div>
  )
}

export default Caregivers


