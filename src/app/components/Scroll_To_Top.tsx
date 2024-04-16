"use client"
import React, { useEffect, useState } from 'react'
import { BiArrowFromTop, BiArrowToTop } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';

function Scroll_To_Top() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    return (
      <div className="scroll-to-top ">
        {isVisible && 
          <div onClick={scrollToTop}>
            <FaArrowUp  className='fixed shadow bottom-10 right-5 z-50 size-14 bg-cyan-100 hover:scale-75 ease-in-out duration-300 rounded-md text-cyan-500 text-3xl p-5 '/>
          </div>}
      </div>
    );
  }

export default Scroll_To_Top