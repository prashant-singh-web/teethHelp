import Image from "next/image";
import React from "react";
import "../css/home.css";


function Our_Details() {
  
  return (
    <div id="about_us" className="w-full p-5 md:p-20 bg-white grid grid-cols-1 md:grid-cols-2">
      <Image
        src={`/asset/OurService/123.jpg`}
        unoptimized
        alt={"hey"}
        width={0}
        height={0}
        className="w-full h-fit "
      />
      <div className="w-full flex flex-col p-5 space-y-5 ">
        <h4
          data-aos="fade-left"
          className="text-sm font-semibold text-cyan-500"
        >
          WELCOME TO OUR DENTAL CLINIC
        </h4>
        <h2 data-aos="fade-left" className="text-4xl font-bold text-black/80">
          TeethHelp is a Dental Clinic and Innovative Approach to Treatment
        </h2>
        <p data-aos="fade-left" className="paragraph-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non neque
          soluta dignissimos fugit cupiditate earum dolor, optio facere corporis
          ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          voluptatem!
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            data-aos="zoom-in-up"
            className="flex flex-col rounded-md border border-cyan-500 items-center justify-center py-5"
          >
            <h3 className="text-xl font-bold  text-cyan-500">
              {(3000).toLocaleString("en-IN")} +
            </h3>
            <p className="text-sm font-medium text-gray-900/70 mt-2">
              Happy Patients
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            className="flex flex-col rounded-md border border-cyan-500 items-center justify-center py-5"
          >
            <h3 className="text-xl font-bold  text-cyan-500">
              {(2200).toLocaleString("en-IN")} +
            </h3>
            <p className="text-sm font-medium text-gray-900/70 mt-2 px-1 text-center">
              Performed Treatments
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            className="flex flex-col rounded-md border border-cyan-500 items-center justify-center py-5"
          >
            <h3 className="text-xl font-bold  text-cyan-500">20 +</h3>
            <p className="text-sm font-medium text-gray-900/70 mt-2">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Our_Details;
