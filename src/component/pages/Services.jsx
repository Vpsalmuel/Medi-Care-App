import React from 'react'
import health from '../../Assets/health.png'






function Services() {
    
    return (
        <div class="relative isolate overflow-hidden items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols drop-out  lg:px-6 sm:py-32" id='services'>
            <div className=' '>
               <h1 className='text-3xl font-Paytone leading-relaxed text-emerald-900 md:text-4xl lg:text-6xl'>Our Services </h1>
                <p className='font-Poppins text-sm  md:text-xl lg:text-2xl  pt-5 pb-10'>
                    "Discover our range of premium caregiving services meticulously crafted to offer an exceptional
                    experience for those who have shown immense care in their roles."</p>
            </div>
            <div className='md:grid md:grid-cols-2 xl:grid-cols-3 relative'>
                
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins font-bold text-xl text-emerald-900 pb-12'>Personal Care Assistance</h3>
                    <p className='font-Poppins text-sm '> Our dedicated caregivers ensure the well-being and dignity of your loved ones.
                        They assist with essential personal tasks, enhancing comfort and maintaining hygiene</p >
                </div>
                 
                  <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Companionship & Support</h3>
                    <p className='font-Poppins text-sm '>Our caregivers provide meaningful companionship, fostering emotional connections. This social interaction
                        helps combat feelings of isolation and loneliness, promoting overall mental well-being.</p >
                </div>
                    
                
               
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Medication Management</h3>
                    <p className='font-Poppins text-sm '>Managing medications can be complex, but our skilled caregivers ensure that medication routines are followed accurately.
                        This reduces the risk of missed doses and helps maintain proper health management.</p >
                </div>
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Meal Prep & Nutrition</h3>
                    <p className='font-Poppins text-sm '>Nutrition plays a vital role in health. Our caregivers prepare nutritious
                        meals tailored to individual dietary needs, promoting overall health and well-being.</p>
                </div>
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins   font-bold text-xl text-emerald-900 pb-12'>Home Safety Checks</h3>
                    <p className='font-Poppins text-sm '>A safe and well-maintained environment is essential. Our caregivers help ensure the
                        home is hazard-free and conducive to your loved ones' well-being, promoting peace of mind.</p>
                </div>
                <div className='px-3 py-3 hover:bg-emerald-50 mt-5 rounded-lg'>
                    <img src={health} alt="" />
                    <h3 className='font-Poppins  font-bold text-xl text-emerald-900 pb-12'>Home Safety Checks</h3>
                    <p className='font-Poppins text-sm '>A safe and well-maintained environment is essential. Our caregivers help ensure the
                        home is hazard-free and conducive to your loved ones' well-being, promoting peace of mind.</p>
                </div>

            </div>
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white-500 to-emerald-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>

    )
}

export default Services