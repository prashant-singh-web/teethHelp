import React from 'react'
import "../css/home.css"

function Landing_Page() {
  return (
    <div style={{
      backgroundImage:"url(/asset/landingPage.jpg",
    }} className='w-full h-[100vh]  home_img '>
      <div className="w-full h-full bg-black/5 grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex flex-col justify-center items-center p-5 space-y-5 bg-cyan-600/20" >
          <h2 data-aos="fade-up"    
   
  className='text-5xl font-bold text-white mb-5'>A Brighter Dental Experienced</h2>
          <p data-aos="fade-up"  data-aos-delay="50" className='text-base  text-gray-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem consequatur necessitatibus impedit tenetur ipsam distinctio sed cumque quaerat, ducimus consequuntur.</p>
          <div data-aos="fade-up"  data-aos-delay="100" className="w-full lg:w-3/4 grid grid-cols-2 gap-5 mr-auto">
       <a className='w-full bg-cyan-500 rounded-md text-sm font-medium text-center py-3 text-white' href="/#appointment_form">Book Appointment</a>
       <a className='w-full bg-white rounded-md text-sm font-medium text-center py-3 text-cyan-500' href="/#services">Our Services</a>
       </div>
        </div>
     
      </div>
    </div>
  )
}

export default Landing_Page