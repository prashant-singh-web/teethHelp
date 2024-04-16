import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Our_Docter() {
  const docterListJson = [
    {
      id: 1,
      docterName: "Dr. Lloyd Wilson",
      position: "Head Dentist",
      profileImage: "/asset/docter.jpg",
      docterInfo:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustonatus, laboriosam quia non placeat praesentium? Mollitia veromaxime quidem et!",
        AosDelay: 0
    },
    {
      id: 2,
      docterName: "Dr. Rachel Parker",
      position: "Dentist",
      profileImage: "/asset/doc_2.jpg",
      docterInfo:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustonatus, laboriosam quia non placeat praesentium? Mollitia veromaxime quidem et!",
        AosDelay: 50
    },
    {
      id: 3,
      docterName: "Dr. Ian Smith",
      position: "Head Dentist",
      profileImage: "/asset/doc_3.jpg",
      docterInfo:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustonatus, laboriosam quia non placeat praesentium? Mollitia veromaxime quidem et!",
        AosDelay: 100
    },
    {
      id: 4,
      docterName: "Dr. Alicia Henderson",
      position: "Dentist",
      profileImage: "/asset/doc_2.jpg",
      docterInfo:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustonatus, laboriosam quia non placeat praesentium? Mollitia veromaxime quidem et!",
        AosDelay: 150
    },
  ];

  return (
    <div id="expert_dentist" className="w-full flex flex-col py-28 bg-gray-100 ">
      <h4 data-aos="zoom-in-up" className="text-base font-semibold text-cyan-500 text-center">
        Our Docters
      </h4>
      <h2 data-aos="zoom-in-up" className="text-center text-3xl font-extrabold text-gray-950/80 my-10">
        Qualified Dentist
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 md:px-20 ">
        {docterListJson.map(docter => (
            <div key={docter?.id} data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay={docter.AosDelay} className="w-full flex flex-col group">
            <div className="w-full h-32 relative">
              <Image
                src={docter?.profileImage}
                alt={docter?.docterName}
                width={0}
                height={0}
                unoptimized
                className="size-36 border-8 border-gray-100 object-cover scale scale-125 mt-10 bg-cyan-500 mx-auto rounded-[100%_0%_100%_100%] "
              />
            </div>
            <div className="w-full pt-20 flex flex-col justify-center items-center bg-white group-hover:bg-cyan-500 rounded-md space-y-3 py-10">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                {docter?.docterName}
              </h2>
              <h4 className="text-sm font-medium text-cyan-500 group-hover:text-white">
                {docter?.position}
              </h4>
              <div className="flex space-x-2 flex-row mx-auto">
                <Link
                  href={`/`}
                  className="text-xl p-3 text-white bg-cyan-500 group-hover:bg-cyan-600 rounded-full"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href={`/`}
                  className="text-xl p-3 text-white bg-cyan-500 rounded-full group-hover:bg-cyan-600"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={`/`}
                  className="text-xl p-3 text-white bg-cyan-500 rounded-full group-hover:bg-cyan-600"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href={`/`}
                  className="text-xl p-3 text-white bg-cyan-500 rounded-full group-hover:bg-cyan-600"
                >
                  <FaYoutube />
                </Link>
              </div>
              <p className="px-5 text-sm font-medium leading-5 text-gray-600/70 group-hover:text-gray-200 text-center">
               {docter?.docterInfo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Our_Docter;
