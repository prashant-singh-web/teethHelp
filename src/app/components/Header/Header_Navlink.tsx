"use client"
import { AppContext, useGlobalHook } from "@/app/GlobalStore/GlobalStore";
import Link from "next/link";
import React, { useContext } from "react";

function Header_Navlink() {
  const {isOpen,setIsOpen}= useContext(AppContext)

  return (
    <div  className={`w-full ${isOpen ? "h-[26rem] py-10 opacity-100":"h-0 overflow-hidden opacity-0 md:h-fit md:opacity-100 "} md:h-fit bg-white absolute top-16 ease-in-out duration-300  left-0 z-50 md:static flex flex-col md:flex-row justify-between  px-20 md:py-0  md:bg-gray-200/40 shadow`}>
      <div className="flex w-full flex-col items-center  md:flex-row my-auto text-sm font-medium text-gray-600/70 space-y-5 md:space-y-0 md:space-x-5 lg:space-x-10">
        <a
onClick={()=>setIsOpen(false)}
          href={`/`}
          className="nav-link"
        >
    
          Home
        </a>
        <a
        onClick={()=>setIsOpen(false)}
          href={`/#expert_dentist`}
          className="nav-link"
        >
          Dentist
        </a>
        <a
        onClick={()=>setIsOpen(false)}
          href={`/#about_us`}
          className="nav-link"
        >
          About
        </a>
        <a
        onClick={()=>setIsOpen(false)}
          href={`/#services`}
          className="nav-link"
        >
          Services
        </a>
        <a
        onClick={()=>setIsOpen(false)}
          href="/#packages_pricing"
          className="nav-link"
        >
          Pricing
        </a>
        
        <a
        onClick={()=>setIsOpen(false)}
          href={`/#bottom_section`}
          className="nav-link"
        >
          Contact
        </a>
      </div>
      <a
      onClick={()=>setIsOpen(false)}
        href={`/#appointment_form`}
        className="text-sm bg-cyan-500 py-3 px-5 md:px-10   md:py-3 text-center mt-4 md:mt-0 text-white font-medium "
      >
        Make Appointment
      </a>
    </div>
  );
}

export default Header_Navlink;
