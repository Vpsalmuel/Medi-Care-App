import React from 'react'

const Guarantor = ({ handleNextStep, GuarantorMaritalStatus, handleChange, GuarantorGender, GuarantorPhone, GuarantorEmail, GuarantorFullName, handlePrevtStep }) => {
    return (
        <section class="bg-white dark:bg-gray-900 w-[100%] m-auto md:w-[60%] ">
            <div class=" px-4 py-8   lg:py-16">
                <h2 class="mb-4 text-xl font-bold font-Paytone text-emerald-900 dark:text-white">Guarantor Information</h2>
                <form action="#">


                    <div class="w-full">
                        <label htmlFor="GuarantorPhone" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white"> Guarantor Full Name</label>
                        <input
                            type="text"
                            id="GuarantorFullName"
                            name="GuarantorFullName"
                            value={GuarantorFullName}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pt-5">
                        <label htmlFor="GuarantorPhone" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Guarantor Email Addres</label>
                        <input
                            type="email"
                            id="GuarantorEmail"
                            name="GuarantorEmail"
                            value={GuarantorEmail}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pt-5 ">
                        <label htmlFor="GuarantorPhone" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Guarantor Phone Number</label>
                        <input type="tel"
                            id="GuarantorPhone"
                            name="GuarantorPhone"
                            value={GuarantorPhone}
                            onChange={handleChange}
                            class="bg-gray-50 border border-gray-300 text-emerald-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full pt-5">
                        <label for="beneficaryaddress" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Guarantor Address</label>
                        <input id="beneficaryaddress" class="block p-2.5 w-full text-sm text-emerald-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Address"></input>
                    </div>

                    <h2 class="mb-4 text-xl font-bold font-Poppins pt-20 text-center text-emerald-900 dark:text-white">Credential Upload</h2>
                    <div class="w-full pt-5">
                        <label for="beneficaryaddress" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Profile Picture</label>
                        <input type='file' id="beneficaryaddress" class="block p-2.5 w-full text-sm text-emerald-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Address"></input>
                    </div>
                    <div class="w-full pt-5">
                        <label for="beneficaryaddress" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">NYSC Certificate</label>
                        <input type='file' id="beneficaryaddress" class="block p-2.5 w-full text-sm text-emerald-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Address"></input>
                    </div>
                    <div class="w-full pt-5">
                        <label for="beneficaryaddress" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">MDCN Current License</label>
                        <input type='file' id="beneficaryaddress" class="block p-2.5 w-full text-sm text-emerald-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Address"></input>
                    </div>
                    <div class="w-full pt-5">
                        <label for="beneficaryaddress" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Medical Certificate</label>
                        <input type='file' id="beneficaryaddress" class="block p-2.5 w-full text-sm text-emerald-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Address"></input>
                    </div>
                    <div class="w-full pt-5">
                        <label for="beneficaryaddress" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">CV</label>
                        <input type='file' id="beneficaryaddress" class="block p-2.5 w-full text-sm text-emerald-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Address"></input>
                    </div>
                    <div class="w-full pt-5">
                        <label for="beneficaryaddress" class="block mb-2 text-sm font-medium text-emerald-900 dark:text-white">Other Relevance Documents</label>
                        <input type='file' id="beneficaryaddress" class="block p-2.5 w-full text-sm text-emerald-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Address"></input>
                    </div>
                    <div className="flex items-start pt-5">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )

}

export default Guarantor