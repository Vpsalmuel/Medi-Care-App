import React from 'react'

const About = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div id='about' class="relative isolate overflow-hidden gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light  sm:text-lg dark:text-gray-400">
          <h2 class="mb-4  tracking-tight font-extrabold text-emerald-900 font-Paytone text-3xl  md:text-4xl lg:text-6xl dark:text-white">About US</h2>
          <p class="mb-4 font-Poppins text-sm  md:text-xl lg:text-2xl "> We understand that finding the right caregiver or care recipient is a vital step in ensuring a harmonious caregiving journey.
            Our platform is designed to make this process seamless, personalized, and fulfilling.</p>
          <p class="pt-4 font-Poppins text-sm  md:text-xl lg:text-2xl ">  At Medi-care, our mission is to enrich lives by facilitating genuine connections between caregivers and care recipients.
            We believe that the right match can not only meet the practical needs of care but also provide emotional support, companionship, and a sense of belonging.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src="https://media.istockphoto.com/id/1060998246/photo/young-woman-hugs-senior-woman-in-wheelchair.jpg?s=612x612&w=0&k=20&c=CaYwISrZ-NdwzT06kLiT9lnOMfXFW6V1hV2Kn-alTNE=" alt="office content 1" />
          <img class="mt-4 w-full lg:mt-52 rounded-lg" src="https://media.istockphoto.com/id/493831355/photo/african-senior-patient-with-female-nurse.jpg?s=612x612&w=0&k=20&c=xAj4v5CmwLlK-H1TI0pDPgdGkAYQ5zIGmkfJQE0suBc=" alt="office content 2" />
        </div>
      </div>
    </section>

  )
}

export default About