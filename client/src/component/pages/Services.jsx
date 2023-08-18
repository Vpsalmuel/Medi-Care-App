import React from 'react'
import health from '../../asset/health.png'
import { Animate, initTE } from "tw-elements";
initTE({ Animate });

function Services() {
    return (
        <div className='px-5 mt-10 lg:px-48 lg:bg-black'>
            <div className=' lg:w-[30rem]'>
                <h1 className='text-3xl font-Paytone leading-relaxed text-emerald-900'>Our Services </h1>
                <p className='font-Poppins text-sm '>
                    "Discover our range of premium caregiving services meticulously crafted to offer an exceptional
                    experience for those who have shown immense care in their roles."</p>
            </div>
            <div className='lg:grid lg:grid-cols-3'>
                <div className='px-5 py-5 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Personal Care Assistance</h3>
                    <p className='font-Poppins '> Our dedicated caregivers ensure the well-being and dignity of your loved ones.
                        They assist with essential personal tasks, enhancing comfort and maintaining hygiene</p >
                </div>
                <div className='px-5 py-5 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Companionship & Support</h3>
                    <p className='font-Poppins '>Our caregivers provide meaningful companionship, fostering emotional connections. This social interaction
                        helps combat feelings of isolation and loneliness, promoting overall mental well-being.</p >
                </div>
                <div className='px-5 py-5 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Medication Management</h3>
                    <p className='font-Poppins '>Managing medications can be complex, but our skilled caregivers ensure that medication routines are followed accurately.
                        This reduces the risk of missed doses and helps maintain proper health management.</p >
                </div>
                <div className='px-5 py-5 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Meal Prep & Nutrition</h3>
                    <p className='font-Poppins '>Nutrition plays a vital role in health. Our caregivers prepare nutritious
                        meals tailored to individual dietary needs, promoting overall health and well-being.</p>
                </div>
                <div className='px-5 py-5 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Home Safety Checks</h3>
                    <p className='font-Poppins '>A safe and well-maintained environment is essential. Our caregivers help ensure the
                        home is hazard-free and conducive to your loved ones' well-being, promoting peace of mind.</p>
                </div>
                <div className='px-5 py-5 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Home Safety Checks</h3>
                    <p className='font-Poppins '>A safe and well-maintained environment is essential. Our caregivers help ensure the
                        home is hazard-free and conducive to your loved ones' well-being, promoting peace of mind.</p>
                </div>

            </div>
        </div>

    )
}

export default Services