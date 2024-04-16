

import Image from "next/image";
import React from "react";
import "../css/home.css"

function Our_Services() {
  const ourServiceJson = [
    {
      id: 1,
      iconPath: "/asset/OurService/implant.png",
      serviceHeading: "Dental Implant",
      serviceParagraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quasi maiores eum mollitia cum tempore!",
    },
    {
      id: 2,
      iconPath: "/asset/OurService/tooth.png",
      serviceHeading: "Dental Protection",
      serviceParagraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quasi maiores eum mollitia cum tempore!",
    },
    {
      id: 3,
      iconPath: "/asset/OurService/dental-care.png",
      serviceHeading: "Dental Care",
      serviceParagraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quasi maiores eum mollitia cum tempore!",
    },
    {
      id: 4,
      iconPath: "/asset/OurService/toothWhiting.png",
      serviceHeading: "Teeth Whitening",
      serviceParagraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quasi maiores eum mollitia cum tempore!",
    },
    {
      id: 5,
      iconPath: "/asset/OurService/dental-surgery.png",
      serviceHeading: "Tooth Removal",
      serviceParagraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quasi maiores eum mollitia cum tempore!",
    },
    {
      id: 6,
      iconPath: "/asset/OurService/dentist-chair.png",
      serviceHeading: "Tooth Inpection",
      serviceParagraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quasi maiores eum mollitia cum tempore!",
    },
    {
      id: 7,
      iconPath: "/asset/OurService/tooth-filling.png",
      serviceHeading: "Tooth Filling",
      serviceParagraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quasi maiores eum mollitia cum tempore!",
    },
    {
      id: 8,
      iconPath: "/asset/OurService/dental-treatment.png",
      serviceHeading: "Tooth Treatment",
      serviceParagraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quasi maiores eum mollitia cum tempore!",
    },
  ];
 
  return (
    <div id="services" className="w-full flex flex-col py-10 bg-white ">
      <h4 data-aos="zoom-in-up" className="text-base font-semibold text-cyan-500 text-center">
        Services
      </h4>
      <h2 data-aos="zoom-in-up" className="text-center text-3xl font-extrabold text-gray-950/80 my-10">
        Our Toothcare Services
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5">
        {ourServiceJson.map((service) => (
          <div
          data-aos="flip-left"
          data-aos-duration="1300"
            key={service?.id}
            className="group w-full p-5 py-8 flex flex-col space-y-5 justify-center rounded-md shadow items-center bg-gray-50 hover:bg-cyan-500 "
          >
            <Image
              src={service?.iconPath}
              alt={service?.serviceHeading}
              width={100}
              height={100}
              unoptimized
              className="bg-cyan-500 size-28 rounded-full p-4 mx-auto group-hover:bg-cyan-800/40 transition-all ease-in-out duration-300"
            />
            <h2 className="text-lg font-semibold text-gray-950/80 group-hover:text-gray-50">
              {service?.serviceHeading}
            </h2>
            <p className="paragraph-1 text-center">
              {service?.serviceParagraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Our_Services;
