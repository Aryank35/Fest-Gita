import React from "react";
import { Link } from "react-router-dom";

function Responsibility() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col justify-center items-center bg-gradient-to-b from-black via-purple-900 to-black">
        <div className="absolute top-4 left-4">
            <Link to="/helpSupportProfile">
           <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">Back</button> 
           </Link>
        </div>
      <h1 className="flex justify-center items-center sm:text-5xl text-3xl font-bold text-white py-5">
        Responsibility
      </h1>
      <div className=" h-fit mx-auto border-2 rounded-xl md:p-6 md:w-[85%] w-[95%] ">
        <form action="" className="flex flex-col space-y-9 p-3 mx-auto">
          <div className="flex items-center sm:space-x-4 text-white">
            <label htmlFor="Role" className="text-lg font-bold">
              Role:
            </label>
            <select name="Role" className=" mx-2 text-black" id="Role">
              <option value="">Responsibility</option>
              <option value="Event Volunteers">Event Volunteers</option>
              <option value="Event Coordinators">Event Coordinators</option>
              <option value="Event Incharge">Event Incharge</option>
              <option value="Organiser">Organiser</option>
            </select>
          </div>
          <div className="flex flex-col sm:space-x-4 text-white ">
            <label htmlFor="Event-Details" className="text-lg font-bold">
              Event Details:
            </label>
            <div className="flex flex-wrap space-y-4 xl:space-y-0  sm:space-x-3 py-3">
              <div className="space-x-2 flex flex-wrap">
                <span className="text-lg font-bold">Event Day: </span>
                <select
                  name="Event-Day"
                  className=" mx-2 text-black"
                  id="Event-Day"
                >
                  <option value="">Choose the Day</option>
                  <option value="Anwesh">Anwesh</option>
                  <option value="Ahwan">Ahwan</option>
                  <option value="Akanksha">Akanksha</option>
                </select>
              </div>
              <div className="space-x-2 flex flex-wrap">
                <span className="text-lg font-bold">Event Id:</span>
                <input
                  type="text"
                  className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                  name="Event-Id"
                  placeholder="Event Id ..."
                />
              </div>
              <div className="space-x-2 flex flex-wrap">
                <span className="text-lg font-bold">Event Name:</span>
                <input
                  type="text"
                  className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                  name="Event-Name"
                  placeholder="Event Name ..."
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center sm:space-x-4 text-white">
            <label htmlFor="Name" className="text-lg font-bold">
              Name:
            </label>
            <input
              type="text"
              className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
              name="Name"
              required
              placeholder="Your Name..."
            />
          </div>
          <div className="flex flex-wrap items-center sm:space-x-4 text-white">
            <label htmlFor="Roll-no" className="text-lg font-bold">
              Roll No:
            </label>
            <input
              type="text"
              className="border-2 px-2 w-full md:w-[60%] h-[35px] rounded-sm outline-none text-black bg-slate-200 "
              name="Roll-No"
              required
              placeholder="Your Roll No: "
            />
          </div>
          <div className="flex flex-wrap justify-around space-y-3 sm:space-y-0 sm:space-x-4 text-white">
            <div>
              <label htmlFor="Email" className="text-lg font-bold">
                Email:
              </label>
              <input
                type="email"
                className="border-2 px-2 w-full h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                name="Email"
                placeholder="abc@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="Password" className="text-lg font-bold">
                Password:
              </label>
              <input
                type="password"
                className="border-2 px-2 w-full h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                name="Password"
                placeholder="Your PassWord"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:justify-around items-center space-y-3 sm:space-y-0 sm:space-x-4 text-white">
            <div className="flex flex-col ">
              <label htmlFor="Phone-Number" className="text-lg font-bold">
                Phone Number:
              </label>
              <input
                type="tel"
                className="border-2 px-2 w-full  h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                name="PhoneNUmber"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="WhatsApp-Number" className="text-lg font-bold">
                WhatsApp Number:
              </label>
              <input
                type="tel"
                className="border-2 px-2 w-full  h-[35px] rounded-sm outline-none text-black bg-slate-200 "
                name="WhatsAppNUmber"
                placeholder="WhatsApp Number"
              />
            </div>
          </div>
          <div className="checkbox flex space-x-3 ">
            <input type="checkbox" name="checked" id="checked" className="w-5"/>
            <span className="text-blue-300 text-sm">All Inputs are Correct ?</span>
          </div>
          <div className="submit flex items-center justify-center pb-4 hover:scale-95 transition-all delay-100">
            <input type="submit" className="px-8 py-3 bg-slate-700 text-white rounded-lg font-semibold shadow-md shadow-blue-400" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Responsibility;
