
import React from 'react'

import { FaFacebook, FaGithub, FaHome, FaInstagram, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

import { MdEmail } from 'react-icons/md';
import Scroll_To_Top from '../Scroll_To_Top';

function Footer() {
  
  return (
    
        
    <div id='bottom_section' className="w-full z-10 bg-white dark:bg-[#111827] border-t border-cyan-500  md:p-16">
     <Scroll_To_Top/>
      <div className="w-full flex flex-col p-6 ">
      <div className="flex flex-col ">
        <h1 className="text-2xl font-extrabold text-cyan-500 leading-[1.3rem]">
          TEETH <span className="text-black/50">HELP</span>
        </h1>
        <p className="text-sm font-semibold text-gray-500/70 ">
          Dental Services
        </p>
      </div>
      <div className=" grid  place-items-start py-5 grid-cols-2 gap-y-10 md:grid-cols-4 md:grid-rows-1 md:py-10">
          <ul className="text-sm  text-left space-y-3  md:space-y-5 ">
              <li className="font-semibold mb-4 md:mb-8">Quick Link</li>
              <li>
                  <a href="/#home_Section" className="text-gray-500  hover:text-cyan-500">Home</a>
              </li>
              <li>
                  <a href="/#expert_dentist" className="text-gray-500  hover:text-cyan-500">Dentist</a>
              </li>
              <li>
                  <a href="/#about_us" className="text-gray-500  hover:text-cyan-500">About</a>
              </li>
              <li>
                  <a href="/#services" className="text-gray-500  hover:text-cyan-500">Services</a>
              </li>
          </ul>
          <ul className="text-sm  text-left space-y-3  md:space-y-5 ">
              <li className="font-semibold   mb-4 md:mb-8">Services</li>
              <li>
                  <Link href="/#" className="text-gray-500  hover:text-cyan-500 ">Dental Implant</Link>
              </li>
              <li>
                  <Link href="/#" className="text-gray-500  hover:text-cyan-500">Teeth Whitening</Link>
              </li>
              <li>
                  <Link href="/#" className="text-gray-500  hover:text-cyan-500">Tooth Filling</Link>
              </li>
              <li>
                  <Link href="/#" className="text-gray-500  hover:text-cyan-500">Tooth Removal</Link>
              </li>
          </ul>
         
          <ul className="text-sm space-y-5 text-left xsm:space-y-3  md:space-y-5 ">
              <li className="font-semibold   mb-8 xsm:mb-4 md:mb-8">Contact Us</li>
              <table>
                <tbody className='flex flex-col space-y-5'>
                    <tr>
                        <td className='text-xl mb-auto pr-2 text-cyan-500'><FaHome/></td>
                        <td className='text-gray-500 text-sm'>203 Fake St. Mountain View, San Francisco, California, USA</td>
                    </tr>
                    <tr>
                        <td className='text-xl mb-auto pr-2 text-cyan-500'><FaPhone/></td>
                        <td className='text-gray-500 text-sm'>+91-7652021778</td>
                    </tr>
                    <tr>
                        <td className='text-xl mb-auto pr-2 text-cyan-500'><MdEmail/></td>
                        <td className='text-gray-500 text-sm'>prashantsingh7559@gmail.com</td>
                    </tr>

                </tbody>
              </table>
          </ul>
          
          
         
      </div>
      <div className="w-full flex justify-between border-y py-10 border-cyan-500 flex-col md:flex-row space-y-5">
          <div className="flex flex-col text-left">
              <p className="text-sm font-bold ">Subscribe to our newsletter</p>
              <p className=" text-gray-700  mt-2 text-xs">The latest news, articles, and resources, sent to your inbox weekly.</p>
          </div>
          <div className="flex flex-row justify-center items-center w-[90%] "> 
          <input type="text" className="h-fit p-1 rounded-md outline-none border-[1.5px] border-gray-300 focus-within:border-cyan-500 bg-white/10 text-xs w-fit md:text-sm " placeholder="Enter your email"/>
          <button type="submit" className=" px-4 bg-cyan-500 text-white font-bold hover:bg-cyan-400 rounded-md ml-3 py-1 text-xs md:py-[7px]">Subscribe</button></div>
      </div>
      <div className="w-full flex justify-between items-center space-y-5 md:space-y-0 px-8  flex-col py-5 md:flex-row ">
      <p className=" text-sm font-normal dark:text-gray-700 xsm:mb-3">
      @copyright since {new Date().getFullYear()}
    </p>
    <ul className="flex flex-row space-x-4 text-gray-100 text-lg">
      <li className='text-xl p-2 bg-cyan-500 hover:bg-cyan-300 rounded-xl duration-200 ease-in-out'><a href="/home" ><FaInstagram/></a></li>
      <li className='text-xl p-2 bg-cyan-500 hover:bg-cyan-300 rounded-xl duration-200 ease-in-out'><a href="/home" ><FaFacebook/></a></li>
      <li className='text-xl p-2 bg-cyan-500 hover:bg-cyan-300 rounded-xl duration-200 ease-in-out'><a href="/home" ><FaTwitter/></a></li>
      
      <li className='text-xl p-2 bg-cyan-500 hover:bg-cyan-300 rounded-xl duration-200 ease-in-out'><a href="/home" ><FaYoutube/></a></li>
    </ul>
      </div>
      </div>
    </div>
 
  )
}

export default Footer