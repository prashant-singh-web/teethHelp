"use client";
import Image from "next/image";

import Appointment_Section from "./components/Home/appointment_section/Appointment_Section";
import Our_Services from "./components/Home/Our_Services";
import Our_Details from "./components/Home/Our_Details";
import Our_Docter from "./components/Home/Our_Docter";

import TestiMonial from "./components/Home/TestiMonial";
import Pricing from "./components/Home/Pricing";
import Landing_Page from "./components/Home/Landing_Page";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    }),
      AOS.refresh();
  }, []);
  return (
    <main className="flex  flex-col ">
      <Landing_Page />
      <Appointment_Section />
      <Our_Services />
      <Our_Details />
      <Our_Docter />
      <TestiMonial />
      <Pricing />
    </main>
  );
}
