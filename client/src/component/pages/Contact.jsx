import React from 'react'

const Contact = () => {
  return (
    <div className='p-5 mt-20'>
      <div className='text-center '>
        <h10 className='text-3xl font-Paytone leading-relaxed text-emerald-900 '>
          Get in touch with us
        </h10>
        <p className='text-emerald-900 text-lg py-5 font-Poppins' >Our office is open from 9am - 5pm week days</p>
      </div>
      <div className='p-5 mb-5 font-Poppins bg-emerald-50 '>
        <h3 className='font-bold pb-2  '>Contact Information</h3>

        <p className=' text-sm pb-2'>Address: 2 Muba Abiru Street, Ikorodu, LAgos.</p>
        <p className=' text-sm pb-2'>Email:<span className='text-emerald-900 '>  medicare@medicare.org</span></p>
        <p className=' text-sm pb-2'>Call or Whatsapp <span className='text-emerald-900 '>  +2348000010232</span></p>
        <p className=' text-sm pb-2'>Give us a call, we endeavour to answer all enquires with 2 hour on business days</p>
      </div>
      {/* <form action="post" className='flex flex-col gap-10 gap font-Poppins'>
        <p className='text-emerald-900 text-lg py-5 font-Poppins'>Send a message</p>
        <div className='flex flex-col gap-2'>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" name="fullname" id="" placeholder='Full Name' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder='name@gmail.com' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="fullname">Message</label>
          <input type="text" name="fullname" id="" />
        </div>
        <button type='submit' className="text-white text-sm rounded-lg  font-Poppins w-[50%] py-[20px] bg-gradient-to-r from-emerald-500 to-lime-300 justify-center items-center  inline-flex focus:outline-none focus:shadow-outline">Send Message</button>
      </form> */}
      <div class="block  rounded-lg bg-white font-Poppins p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form typeof=''>
        <p className='text-emerald-900 text-lg py-5 font-Poppins'>Send a message</p>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput7"
              placeholder="Name" />
            <label
              for="exampleInput7"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-emerald-900 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Name
            </label>
          </div>


          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput8"
              placeholder="Email address" />
            <label
              for="exampleInput8"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-emerald-900 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Email address
            </label>
          </div>


          <div class="relative mb-6" data-te-input-wrapper-init>
            <textarea
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"></textarea>
            <label
              for="exampleFormControlTextarea13"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-emerald-900 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Message
            </label>
          </div>

          <div
            class="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox"
              value=""
              id="exampleCheck10" />
            <label
              class="inline-block pl-[0.15rem] text-sm hover:cursor-pointer"
              for="exampleCheck10">
              Send me a copy of this message
            </label>
          </div>


          <button
            type="submit"
            class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-gradient-to-r from-emerald-500 to-lime-300  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Send
          </button>
        </form>
      </div>

    </div>
  )
}

export default Contact