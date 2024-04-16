import React from 'react'
import Header_Details from './Header_Details'
import Header_Navlink from './Header_Navlink'
import "./Header.css"

function Header() {
  return (
    <div className='w-full flex flex-col relative  z-50'>
      
      <Header_Details/>
      <Header_Navlink/>
    </div>
  )
}

export default Header