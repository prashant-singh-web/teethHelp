import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import "../css/home.css";

function TestiMonial() {
  const testimoniesJson = [
    {
      id: 1,
      testiminial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit distinctio unde sed molestias doloremque iste!",
      clientName: "Prashant Singh",
      clientProfession: "Developer",
      clientImage: "/asset/docter.jpg",
    },
    {
      id: 2,
      testiminial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit distinctio unde sed molestias doloremque iste!",
      clientName: "Prashant Singh",
      clientProfession: "Web Developer",
      clientImage: "/asset/docter.jpg",
    },
    {
      id: 3,
      testiminial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit distinctio unde sed molestias doloremque iste!",
      clientName: "Vivek Singh",
      clientProfession: "Web Developer",
      clientImage: "/asset/docter.jpg",
    },
    {
      id: 4,
      testiminial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit distinctio unde sed molestias doloremque iste!",
      clientName: "Vivek Singh",
      clientProfession: " Dentist",
      clientImage: "/asset/docter.jpg",
    },
    {
      id: 5,
      testiminial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit distinctio unde sed molestias doloremque iste!",
      clientName: "Prashant Singh",
      clientProfession: "Developer",
      clientImage: "/asset/docter.jpg",
    },
    {
      id: 6,
      testiminial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit distinctio unde sed molestias doloremque iste!",
      clientName: "Prashant Singh",
      clientProfession: "Web Developer",
      clientImage: "/asset/docter.jpg",
    },
    {
      id: 7,
      testiminial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit distinctio unde sed molestias doloremque iste!",
      clientName: "Vivek Singh",
      clientProfession: "Web Developer",
      clientImage: "/asset/docter.jpg",
    },
    {
      id: 8,
      testiminial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit distinctio unde sed molestias doloremque iste!",
      clientName: "Vivek Singh",
      clientProfession: " Dentist",
      clientImage: "/asset/docter.jpg",
    },
  ];
  const [direction, setDirection] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollXReff: any = useRef();
 
  
  const handleScroll = () => {
    const element = scrollXReff.current;
    const totalScrollWidth = element.scrollWidth - element.offsetWidth;
    const scrollPosition = element.scrollLeft;
    const scrollPercentage = (scrollPosition / totalScrollWidth) * 100;
    setDirection(scrollPercentage);
}
const scrollToBottom = () => {
  if (scrollXReff.current) {
    if (scrollXReff.current.scrollWidth !== 0) {
      scrollXReff.current.scrollLeft = scrollXReff.current.scrollWidth;
    } 
  }
};
const scrollToBottom1 = () => {
  alert(scrollXReff.current.scrollWidth)
};

 

  return (
    <div className="w-full flex flex-col py-20 bg-gray-200 ">
      <h4 data-aos="zoom-in-up" className="text-base font-semibold text-cyan-500 text-center">
        TESTIMONIAL
      </h4>
      <h2 data-aos="zoom-in-up" className="text-center text-3xl font-extrabold text-gray-950/80 my-5">
        Happy Customers
      </h2>
      <div
      onScroll={handleScroll}
        ref={scrollXReff}
        className="w-full  scroll-smooth transition-all ease-in-out duration-1000 flex flex-row p-5 py-7 md:p-10 overflow-x-scroll space-x-4 scrollbar"
      >
        {testimoniesJson.map((testimonies) => (
          <div data-aos="zoom-in-up" key={testimonies?.id} className="min-w-80 h-fit  flex flex-col">
            <div className="w-full p-5 py-10 rounded-md bg-white shadow-sm relative before:absolute before:p-3 before:bg-white before:-bottom-3 before:rotate-45  before:left-5">
              <div className="absolute text-xl p-4 text-white rounded-full -top-6 left-3 bg-cyan-500">
                <FaQuoteLeft />
              </div>
              <p className="text-base text-gray-600/80 ">
                ❝{testimonies.testiminial}❞
              </p>
            </div>
            <div className="flex flex-row mt-8 space-x-3">
              <Image
                src={testimonies.clientImage}
                alt="h"
                width={0}
                height={0}
                unoptimized
                className="size-16 ring-2 ring-cyan-500 rounded-full"
              />
              <div className="flex flex-col">
                <h2 className="text-base font-bold text-black">
                  {testimonies.clientName}
                </h2>
                <h6 className="text-sm font-bold text-cyan-500">
                  {testimonies.clientProfession}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-3/4 mx-auto h-1 bg-cyan-500 rounded-full relative overflow-hidden">
        <div className={`absolute h-full bg-gray-500 w-full`} style={{
    width: `${direction}%`}}></div>
   
      </div>
      
    </div>
  );
}

export default TestiMonial;
