import React from 'react'

const Info = ({ handleNextStep, MaritalStatus, handleChange, Gender, school, graduateyear, Religion,handlePrevtStep }) => {
    return (
        <section class="bg-white dark:bg-gray-900 w-[100%] m-auto md:w-[60%] ">
            <div class=" px-4 py-8   lg:py-16">
                <h2 class="mb-4 text-xl font-bold font-Paytone text-emerald-900 dark:text-white">Personal Information</h2>
                <form action="#">


                   
                    <div class="w-full pt-5">
                        <label htmlFor="graduateyear" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Year Graduated</label>
                        <input
                            type="graduateyear"
                            id="graduateyear"
                            name="graduateyear"
                            value={graduateyear}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pt-5">
                        <label htmlFor="school" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Medical School</label>
                        <input type="tel"
                            id="school"
                            name="school"
                            value={school}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>


                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">MDC Number</label>
                        <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="" placeholder="" required="" />
                    </div>
                    <div class="w-full pt-5">
                        <label htmlFor="school" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Account Number</label>
                        <input
                            type="number"
                            id="Religion"
                            name="Religion"
                           
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pt-5">
                        <label htmlFor="country" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pt-5">
                        <label htmlFor="stete" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> State</label>
                        <input
                            type="text"
                            id="stete"
                            name="state"
                           
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pt-5">
                        <label htmlFor="city" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> City</label>
                        <input
                            type="city"
                            id="city"
                           
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pt-5">
                        <label htmlFor="lga" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Local Govts you will be covering</label>
                        <input
                            type="city"
                            id="city"
                           
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pt-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    
                </form>
            </div>
        </section>
    )
}

export default Info