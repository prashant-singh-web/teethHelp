import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { IoDesktopSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
function Our_Offer() {
  const ourOfferList = [
    {
      id: 1,
      icon: <IoDesktopSharp/>,
      offerHeading: "Easy Booking",
      offerParagraph:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam delectus aut obcaecati excepturi beatae sunt perferendis enim quam Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      icon: <RiTeamFill/>,
      offerHeading: "Team Dentist",
      offerParagraph:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam delectus aut obcaecati excepturi beatae sunt perferendis enim quam Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      icon: <BiSolidOffer/>,
      offerHeading: "Best Price Guarantee",
      offerParagraph:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam delectus aut obcaecati excepturi beatae sunt perferendis enim quam Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="w-full p-5 md:p-16 flex flex-col bg-white space-y-5 overflow-hidden">
      <p data-aos="fade-left" className="text-base font-medium text-cyan-500">LEARN ANYTHING</p>
      <h2 data-aos="fade-left" className="text-3xl font-bold text-black/80 my-5 mb-8">
        We Offer Best Dental Services
      </h2>
      {ourOfferList.map(list => {return (
        <div data-aos="fade-left" key={list?.id} className="w-full flex flex-col md:flex-row space-x-3 shadow  bg-gray-300/20 p-5 rounded-sm group hover:bg-cyan-500 transition-all duration-300 ease-in-out">
        <div className="text-7xl  my-auto mx-auto py-3 text-cyan-500 group-hover:text-white">
            {list?.icon}
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-gray-800/90 group-hover:text-white">
          {list?.offerHeading}
          </h2>
          <p className="text-sm text-gray-500/50 group-hover:text-gray-100 leading-6">
          {list?.offerParagraph}
          </p>
        </div>
      </div>
      )})}
    </div>
  );
}

export default Our_Offer;
