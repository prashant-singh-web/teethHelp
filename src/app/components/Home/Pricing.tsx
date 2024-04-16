import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosClose } from "react-icons/io";


function Pricing() {
  const pricingAndPackageJson = [
    {
      id: 1,
      packageName: "Basic Plan",
      packagePrice: 399,
      packageIncludedServices: [
        "Teeth Whitening",
        "Teeth Cleaning",
        "Tooth Inspection",
      ],
      packageNotIncluedServices: [
        "Professional Consultation",
        "Tooth Implants",
        "Surgical Extractions",
        "Diagnostic Services",
      ],
    },
    {
      id: 2,
      packageName: "Medium Plan",
      packagePrice: 1299,
      packageIncludedServices: [
        "Teeth Whitening",
        "Teeth Cleaning",
        "Tooth Inspection",
        "Diagnostic Services",
      ],
      packageNotIncluedServices: [
        "Professional Consultation",
        "Tooth Implants",
        "Surgical Extractions",
      ],
    },
    {
      id: 3,
      packageName: "Premium Plan",
      packagePrice: 9999,
      packageIncludedServices: [
        "Teeth Whitening",
        "Teeth Cleaning",
        "Tooth Inspection",
        "Diagnostic Services",
        "Professional Consultation",
        "Tooth Implants",
      ],
      packageNotIncluedServices: ["Surgical Extractions"],
    },
    {
      id: 4,
      packageName: "Ultimate Plan",
      packagePrice: 15999,
      packageIncludedServices: [
        "Teeth Whitening",
        "Teeth Cleaning",
        "Tooth Inspection",
        "Diagnostic Services",
        "Professional Consultation",
        "Tooth Implants",
        "Surgical Extractions",
      ],
      packageNotIncluedServices: [],
    },
  ];
  return (
    <div
      id="packages_pricing"
      className="w-full flex flex-col py-10 bg-gray-200 "
    >
      <h4 data-aos="zoom-in-up" className="text-base font-semibold text-cyan-500 text-center ">
        OUR PRICING
      </h4>
      <h2 data-aos="zoom-in-up" className="text-center text-3xl font-extrabold text-gray-950/80 my-5">
        Pricing & Packages
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-16 gap-5 mt-10 py-5">
        {pricingAndPackageJson.map((packages) => (
          <div
          data-aos="zoom-in-up"
            key={packages.id}
            className="w-full flex flex-col p-5 py-10 border border-cyan-500 rounded-md bg-transparent hover:bg-white hover:shadow-xl ease-linear duration-300 hover:border-transparent"
          >
            <h2 className="text-lg font-bold text-cyan-500 mx-auto">
              {packages.packageName}
            </h2>
            <h4 className="flex flex-row items-center mx-auto text-3xl font-bold text-gray-800/90 my-3">
              <MdCurrencyRupee className="text-2xl " />
              <span>{packages.packagePrice.toLocaleString("en-IN")}</span>{" "}
            </h4>
            <ul className="flex flex-col mt-3 space-y-2 pl-4">
              {packages.packageIncludedServices.map((includedService, ind) => (
                <li key={ind} className="flex flex-row space-x-1">
                  <IoIosArrowRoundForward className="text-lg text-cyan-500 my-auto" />
                  <span className="text-base  text-gray-500/60">
                    {includedService}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col mt-3 space-y-2 pl-4">
              {packages.packageNotIncluedServices.map(
                (notIncluedService, id) => (
                  <li key={id} className="flex flex-row space-x-1">
                    <IoIosClose className="text-lg text-red-500 my-auto" />
                    <del className="text-base  text-gray-800">
                      {notIncluedService}
                    </del>
                  </li>
                )
              )}
            </ul>
            <button className="w-3/4 mx-auto text-sm py-3 bg-cyan-500 text-white font-bold hover:bg-white hover:text-cyan-500 border border-cyan-500 rounded-md mt-5 ease-in-out duration-300">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
