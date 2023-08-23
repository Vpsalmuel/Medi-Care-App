import React from 'react'


const Biodata = ({ handleNextStep, MaritalStatus, handleChange, Gender, Phone, Email, FullName }) => {
    return (
        <section class="bg-white dark:bg-gray-900 w-[100%] m-auto md:w-[60%] ">
        <div class=" px-4 py-8   lg:py-16">
            <h2 class="mb-4 text-2xl text-center font-bold font-Paytone text-emerald-900 dark:text-white">Caregiver Application Form</h2>
            <p class="mb-4 text-xl font-bold  text-center  w-[40rem] m-auto font-Poppins text-emerald-900 dark:text-white">It just takes a few minutes to sign up and get fast, easy access to care, 24/7</p>
            <form action="#">


                <div class="w-full pb-5">
                    <label htmlFor="FullName" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Full Name</label>
                    <input
                        type="text"
                        id="FullName"
                        name="FullName"
                        class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
                <div class="w-full">
                        <label htmlFor="rEmai" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Email Addres</label>
                        <input
                            type="email"
                            id="Email"
                            name="Email"
                            value=""
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                
                <div class="w-full pt-5 ">
                    <label htmlFor="Phone" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Phone Number</label>
                    <input type="tel"
                        id="Phone"
                        name="Phone"
                        class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
                <div class="w-full pb-5 pt-5">
                    <label htmlFor="Gender" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Gender</label>
                    <select id="Gender"
                        name="Gender"
                        value={Gender}
                        class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                        <option value="selected">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                 <div class="w-full pb-5">
                    <label htmlFor="State" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">State *</label>
                    <select id="text"
                        name="State"
                        class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                        <option value="selected" >Marital Satus</option>
                        <option >Select status</option>
                        <option >Married</option>
                        <option >Single</option>
                        <option >Divorce</option>
                    </select>
                </div>

                <div class="w-full pb-5">
                    <label for="beneficaryaddress" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Address</label>
                    <input id="beneficaryaddress"  class="block p-2.5 w-full text-sm text-emerald-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Address"></input>
                </div>


            </form>
        </div>
    </section>
    )
}

export default Biodata