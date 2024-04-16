import React from 'react'
import Appointment_Form from './Appointment_Form'
import "./Appointment.css"
import Our_Offer from './Our_Offer'

function Appointment_Section() {
  return (
    <div id='appointment_form' className='w-full grid grid-cols-1 lg:grid-cols-2'>
      <Appointment_Form/>
      <Our_Offer/>
    </div>
  )
}

export default Appointment_Section