import React from 'react'

const Payment = () => {
  return (
    <section class="bg-white dark:bg-gray-900 w-[100%] m-auto md:w-[60%] ">
            <div class=" px-4 py-8   lg:py-16">
                <h2 class="mb-4 text-xl font-bold font-Paytone text-emerald-900 dark:text-white">Payment Method</h2>
                <form action="#">


                    <div>
                        <label htmlFor="duration" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Duration</label>
                        <select id="duration"
                            name="duration" class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                            <option >Select duration</option>
                            <option >3months</option>
                            <option >6months</option>
                            <option >1year</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="numberofvisits" class="block mb-2  pt-5 text-sm font-medium text-emerald-900 dark:text-white">Number of Visit *</label>
                        <select id="numberofvisits"
                            name="numberofvisits"
                             class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                            <option >Select number of Visit</option>
                            <option >once a day</option>
                            <option >2 times a day</option>
                            <option >Everyday</option>
                            <option >Once a week</option>
                        </select>
                    </div>

                    <div className='p-4 border my-8'>
                       <p> N45,000</p>
                    </div>
                    <div>
                        <label htmlFor="numberofvisits" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Payment Mode *</label>
                        <select id="numberofvisits"
                            name="numberofvisits"
                            
                           
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                            <option >Select Payment Mode</option>
                            <option  className='w-80'>Bank Transfer</option>
                            <option >TransferGo</option>
                            <option >Flutterwave</option>
                            <option >Mastercard</option>
                        </select>
                    </div>

                    
                </form>
            </div>
        </section>
  )
}

export default Payment