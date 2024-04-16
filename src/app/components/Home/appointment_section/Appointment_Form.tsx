import React from "react";

function Appointment_Form() {
  return (
    <div className="w-full p-5 md:p-16 bg-cyan-500  flex flex-col">
      <p data-aos="fade-right" className="text-base font-medium text-white">We are here for you :)</p>
      <h2 data-aos="fade-right" className="text-3xl font-bold text-white my-5">Make An Appointment</h2>
      <div className="w-full grid grid-cols-2 gap-5 my-5">
        <div data-aos="fade-right" className="flex flex-col ">
          <label htmlFor="fullname" className="form-label">
            FULL NAME
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Full Name"
            className="input-control"
          />
        </div>
        <div data-aos="fade-left" className="flex flex-col ">
          <label htmlFor="client_Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="client_Email"
            placeholder="Email"
            className="input-control"
          />
        </div>
        <div data-aos="fade-right" className="flex flex-col ">
          <label htmlFor="appointment_Date" className="form-label">
            Appointment Date
          </label>
          <input
            type="date"
            id="appointment_Date"
            placeholder="Appointment Date"
            className="input-control"
          />
        </div>
        <div data-aos="fade-left" className="flex flex-col ">
          <label htmlFor="appointment_Time" className="form-label">
            Appointment Time
          </label>
          <input
            type="time"
            id="appointment_Time"
            placeholder="Appointment Time"
            className="input-control"
          />
        </div>
        <div data-aos="fade-right" className="flex flex-col">
          <label htmlFor="client_Number" className="form-label">
            Your Number
          </label>
          <input
            type="tel"
            id="client_Number"
            placeholder="Number"
            className="input-control"
            pattern="^(\\+91[\\-\\s]?)?[0]?(91)?[789]\\d{9}$"
          />
        </div>
        <div data-aos="fade-left" className="flex flex-col">
          <label htmlFor="docter_List" className="form-label">
            Select Your Docter
          </label>
          <select name="" id="docter_List" className="input-control">
            <option value="select a option" className=" appearance-none text-black text-base " defaultValue={"select a option"}>select a option</option>
            <option value="dr aman singh" className=" appearance-none text-black text-base ">dentist 1</option>
            <option value="dr aman singh" className=" appearance-none text-black text-base ">dentist 2</option>
          </select>
        </div>
        <div data-aos="fade-right" className="flex flex-col col-span-2">
          <label htmlFor="textMsg" className="form-label">
            Enter your message
          </label>
          
          <textarea name="" id="textMsg" cols={30} rows={10} placeholder="Enter Your Massage" className="input-control border mt-2 "></textarea>
        </div>
        <button data-aos="fade-right" className="w-full bg-white py-2 text-sm font-medium text-cyan-500 rounded-md shadow-md">Submit</button>
      </div>
    </div>
  );
}

export default Appointment_Form;
