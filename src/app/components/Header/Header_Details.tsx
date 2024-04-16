"use client"
import { useGlobalHook} from "@/app/GlobalStore/GlobalStore";
import React from "react";
import { CgClose } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function Header_Details() {
  const {isOpen,setIsOpen} = useGlobalHook()
  
  return (
    <div className="w-full flex flex-row p-5 justify-evenly bg-white">
      <div className="flex flex-col mr-auto md:mr-0 ">
        <h1 className="text-2xl font-extrabold text-cyan-500 leading-[1.3rem]">
          TEETH <span className="text-black/50">HELP</span>
        </h1>
        <p className="text-sm font-semibold text-gray-500/70 ">
          Dental Services 
        </p>
      </div>
      <div className=" flex-row justify-center hidden md:flex">
        <IoMdTime className="text-5xl p-1 text-cyan-500 " />
        <div className="flex flex-col  my-auto">
          <h1 className="text-sm font-medium text-cyan-500 ">
            Monday - Friday
          </h1>
          <p className="text-xs font-medium text-gray-500/70 ">8:00AM-8:00PM</p>
        </div>
      </div>
      <div className="hidden md:flex flex-row justify-center">
        <FaPhone className="text-5xl p-2 text-cyan-500 " />
        <div className="flex flex-col  my-auto">
          <h1 className="text-sm font-medium text-cyan-500 ">Call Us</h1>
          <p className="text-xs font-medium text-gray-500/70 ">
            +91 7652021778
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-row justify-center">
        <MdLocationPin className="text-5xl p-2 text-cyan-500 " />
        <div className="flex flex-col  my-auto">
          <h1 className="text-sm font-medium text-cyan-500 ">Loaction</h1>
          <p className="text-xs font-medium text-gray-500/70 ">Varanasi,U.P</p>
        </div>
      </div>
      {
        isOpen ? <CgClose  onClick={()=>setIsOpen((isOpen:boolean) => !isOpen)} className="text-xl md:hidden  text-cyan-500 my-auto"/>: <RxHamburgerMenu onClick={()=>setIsOpen((isOpen:boolean) => !isOpen)} className="text-xl md:hidden text-cyan-500 my-auto"/>
      }
     
      
    </div>
  );
}

export default Header_Details;
