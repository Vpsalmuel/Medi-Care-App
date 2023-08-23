import React from 'react'

const Recieveraccount = ({ handleChange, handlePasswordChange, aboutus, Phone, Email, FullName }) => {
    return (
        <section class="bg-white dark:bg-gray-900 w-[100%] m-auto md:w-[60%] ">
            <div class=" px-4 py-8 ">
                <h2 class="mb-4 text-2xl text-center font-bold font-Paytone text-emerald-900 dark:text-white">Create an Account</h2>
                <p class="mb-4 text-sm font-bold font-Poppins  text-center w-80 m-auto pb-12 text-emerald-900 dark:text-white">It just takes a few minutes to sign up and get fast, easy access to care, 24/7</p>
                <form action="#">


                    <div class="w-full pb-5">
                        <label htmlFor="fullname" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">  Full Name</label>
                        <input
                            type="text"
                            id="FullName"
                            name="FullName"
                            value={FullName}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pb-5">
                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Email Address</label>
                        <input
                            type="email"
                            id="Email"
                            name="Email"
                            value={Email}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pb-5">
                        <label htmlFor="Phone" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Phone Number</label>
                        <input type="tel"
                            id="Phone"
                            name="Phone"
                            value={Phone}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    
                        <label htmlFor="dob" class="block mb-2 text-sm pt-5 font-medium text-emerald-900 dark:text-white">Date of Birth</label>
                        <input type="date"
                            id="dob"
                            name="dob"
                            value={""}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>

                    <div className='pb-5'> 
                        <label htmlFor="aboutus" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Where did you hear about us </label>
                        <select id="aboutus"
                            name="aboutus"
                            value={aboutus}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                            <option value="selected"></option>
                            <option value="Our website">Our website</option>
                            <option value="Twitter">Twitter</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className='pb-5'>
                        <label for="password" className="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Password *</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handlePasswordChange} />
                    </div>
                    <div>
                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Confirm Password *</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handlePasswordChange} />
                    </div>




                </form>
            </div>
        </section>
    )
}


export default Recieveraccount