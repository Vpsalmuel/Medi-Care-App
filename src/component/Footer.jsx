import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
       
            <footer className="bg-emerald-900 text-center text-white relative  ">
                <div className="container px-6 pt-6 mx-auto">
                 
                 

                    {/* <!-- Newsletter sign-up form --> */}
                    <div className="isolate overflow-hidden m-auto py-5 sm:py-10 lg:py-16">
                        <div className="mx-auto max-w-full px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none ">
                                <div className=" ">
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                                    <p className="mt-4 text-lg leading-8 text-gray-300">
                                        Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                                        dolore.
                                    </p>
                                    <div className="mt-6 flex max-w-md m-auto gap-x-4">
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                            placeholder="Enter your email"
                                        />
                                        <button className="text-white rounded-lg font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> <Link to="/signup" className="text-slate-95 text-sm">Login</Link></button>
        
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                            <div
                                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-emerald-300 to-emerald-600 opacity-30"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                    </div>

                    {/* <!-- Copyright information --> */}
                    <div className="mb-6 font-Poppins">
                        <p className='font-Poppins text-center w-[70%] m-auto text-xs md:text-sm lg:text-base'>
                            We're dedicated to providing exceptional caregiver services that make a difference. Our mission is to empower caregivers with the support they deserve and enrich the lives of those they care for.
                        </p>
                    </div>

                    {/* <!-- Links section --> */}
                    <div className="grid md:grid-cols-2 ">
                        <div className="mb-6 font-Poppins">
                            <h5 className="mb-2.5 font-extrabold uppercase font-Poppins">Our Services</h5>

                            <ul className="mb-0 list-none underline text-sm hover:cursor-pointer">
                                <li className='pb-2'>
                                    <a className="text-white">Personal Care Assistance</a>
                                </li>
                                <li className='pb-2'>
                                    <a className="text-white">Companionship & Support</a>
                                </li >
                                <li className='pb-2'>
                                    <a className="text-white">Medication Management</a>
                                </li>
                                <li className='pb-2'>
                                    <a className="text-white">Meal Prep & Nutrition</a>
                                </li>
                                <li className='pb-2'>
                                    <a className="text-white">Home Safety Checks</a>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6 font-Poppins">
                            <h5 className="mb-2.5 font-extrabold uppercase font-Poppins">Quick Links</h5>


                            <ul className="mb-0 list-none underline text-sm hover:cursor-pointer">
                                <li className='pb-2'>
                                    <a className="text-white">Home</a>
                                </li>
                                <li className='pb-2'>
                                    <a className="text-white">Services</a>
                                </li >
                                <li className='pb-2'>
                                    <a className="text-white">Caregivers</a>
                                </li>
                                <li className='pb-2'>
                                    <a className="text-white">Pricing</a>
                                </li>
                                <li className='pb-2'>
                                    <a className="text-white">Contact</a>
                                </li>
                            </ul>
                        </div>



                    </div>
                </div>

                {/* <!-- Copyright section --> */}
                <div
                    className="p-4 text-center bg-black bg-opacity-20 text-xs">
                    © 2023 Copyright:
                    <a className="text-white" href=""
                    > SAIL TEAM 4</a>
                </div>
            </footer>

      
    )
}

export default Footer