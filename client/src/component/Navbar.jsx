import React from 'react'
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" font-Poppins md:w-full md:flex md:px-11 md:py-4">
            <div className="container mx-auto px-4 py-2 flex items-center md:justify-evenly justify-between">
                <HashLink to="/" className="text-slate-95 text-xl font-bold">Logo</HashLink>
                <div className="md:hidden">
                    <button onClick={toggleNavbar} className="text-slate-95 text-xl">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="md:flex space-x-4">
                        <li><HashLink to="/" className="text-slate-95 text-xl font-bold">Home</HashLink></li>
                        <li><HashLink to="#about" className="text-slate-95 text-xl font-bold">About</HashLink></li>
                        <li><HashLink to="/contact" className="text-slate-95 text-xl font-bold">Contact</HashLink></li>
                        <li><HashLink to="/caregivers" className="text-slate-95 text-xl font-bold">Caregivers</HashLink></li>
                        <li><HashLink to="/services" className="text-slate-95 text-xl font-bold">Our Services</HashLink></li>

                    </ul>
                </div>
                <div className='md:flex md:gap-5 hidden'>

                    <button className=" text-xs  rounded-md font-Poppins px-[30px]  border-emerald-500 border-2 text-emerald-500 hover:border-white hover:text-white hover:bg-gradient-to-r from-emerald-500 to-lime-300  first-letter:justify-center items-center  focus:outline-none focus:shadow-outline"> <HashLink to="/signup" className="text-slate-95 text-base">Login </HashLink></button>
                    <button className="text-white text-sm rounded-md font-Poppins px-[30px] py-[10px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline"> <HashLink to="/signup" className="text-slate-95 text-xl">Sign Up</HashLink></button>
                </div>

            </div>


        </nav>
    );
};

export default Navbar