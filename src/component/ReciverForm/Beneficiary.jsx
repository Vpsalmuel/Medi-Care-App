import React from 'react'

const Beneficiary = (State, handleChange, beneficiaryGender, beneficiaryPhone, beneficiaryEmail, beneficiaryFullName) => {
    return (
        <section class="bg-white dark:bg-gray-900 w-[100%] m-auto md:w-[60%] ">
            <div class=" px-4 py-8   lg:py-16">
                <h2 class="mb-4 text-xl font-bold font-Paytone text-emerald-900 dark:text-white">Add Beneficiary</h2>
                <form action="#">


                    <div class="w-full pb-5">
                        <label htmlFor="beneficiaryFullName" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Beneficiary's Full Name</label>
                        <input
                            type="text"
                            id="beneficiaryFullName"
                            name="beneficiaryFullName"
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full ">
                        <label htmlFor="beneficiaryPhone" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Beneficiary Phone Number</label>
                        <input type="tel"
                            id="beneficiaryPhone"
                            name="beneficiaryPhone"
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pb-5">
                        <label htmlFor="dob" class="block mb-2 text-sm pt-5 font-medium text-emerald-900 dark:text-white">Date of Birth</label>
                        <input type="date"
                            id="dob"
                            name="dob"
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pb-5">
                        <label htmlFor="beneficiaryGender" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Beneficiary Gender</label>
                        <select id="beneficiaryGender"
                            name="beneficiaryGender"
                            value={beneficiaryGender}
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
                            <option value="selected" >Select State</option>
                            <option >Abuja</option>
                            <option >Lagos</option>
                            <option >Rivers</option>
                            <option >Kano</option>
                        </select>
                    </div>
                     <div class="w-full pb-5">
                        <label htmlFor="lga" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Beneficiary LGA*</label>
                        <select id="text"
                            name="lga"
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" >
                            <option >Select LGA</option>
                            <option >Abuja</option>
                            <option >Ikeja</option>
                            <option >Ikorodu</option>
                            <option >Eti-osa</option>
                        </select>
                    </div>

                    <div class="w-full pb-5">
                        <label for="City" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Beneficiary City</label>
                        <input type="text" name="City" id="City" class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="" placeholder="city" required="" />
                    </div>
                    <div class="w-full pb-5">
                        <label for="beneficaryaddress" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Beneficary Address</label>
                        <input id="beneficaryaddress"  class="block p-2.5 w-full text-sm text-emerald-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="address"></input>
                    </div>


                </form>
            </div>
        </section>
    )
}

export default Beneficiary