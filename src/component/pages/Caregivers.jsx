import { Link } from 'react-router-dom'
import Caregiverbg from '../../asset/care-givers-bg.51544542.png'





const Caregivers = () => {


  return (
    <section id='caregivers' class="relative isolate overflow-hidden  px-14  lg:px-[13rem] sm:py-32">
   
     
      <div className=' flex flex-col items-center' >
        <div>
          <h3 className='text-3xl md:text-4xl lg:text-6xl font-Paytone font-bold leading-relaxed lg:w-[60rem] text-emerald-900'>Hire a Caregiver for your elderly loved ones</h3>
          <p className='font-Poppins pt-8 pb-8 text:sm md:text-xl lg:text-2xl  '>We’ll provide access to In-home care, companionship, and 24/7 live-in services for your elderly loved ones.</p>
          <button className="text-white text-sm rounded-lg font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> <Link to="/signup" className="text-slate-95 text-xl">Get Started</Link></button>
          <img src={Caregiverbg} alt="" className='mt-10 mb-10 rounded-3xl' />
        </div>
        <div>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-Poppins font-extrabold leading text-emerald-900'>Key Features</h3>
          <p className='font-Poppins pt-8 pb-8 text:sm md:text-xl lg:text-2xl '>We work with qualified nurses and well trained non - medical caregivers  We ensure your Elderly loved one always have the care and companionship they need.</p>
        </div>
        <section className='bg-emerald-50 text-center mb-10 '>
          <h3 className='text-2xl pb-12 pt-10 px-10 font-Poppins font-bold leading text-emerald-900'>Get Started in simple Steps</h3>
          <div className='md:grid md:grid-cols-2'>
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
          </div>
        </section>
        <button className="text-white text-sm rounded-lg  font-Poppins w-[50%] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> <Link to="/signup" className="text-slate-95 text-xl">Get Started</Link></button>
      </div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-500 to-white-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}

export default Caregivers


