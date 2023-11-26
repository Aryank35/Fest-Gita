import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import React from "react";

const EventDetails = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full py-4 2xl:h-screen">
      <Navbar />
      <div className=" pt-[60px] h-full">
        <div className=" flex flex-col md:flex-row">
          <div className="left md:w-[50%] md:p-6 p-2">
            <img
              src="./Demo-pics/Robo-wars.webp"
              alt="event-image"
              className=" rounded-xl shadow-md shadow-blue-700"
            />
          </div>
          <div className="right md:w-[50%] md:p-6 p-2">
            <div className="right-container flex flex-col justify-center items-center space-y-4">
              <h1 className="text-white text-2xl md:text-4xl font-semibold">
                Robotics
              </h1>
              <p className="desc text-slate-300 text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam eos incidunt ullam cumque perferendis sapiente.
              </p>
              <div className="rules">
                <p className=" text-white font-semibold text-2xl">Rules</p>
                <ul className="text-slate-300 text-sm md:text-lg list-disc">
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                </ul>
              </div>
              <div className="prizes flex items-center space-x-2 text-white">
                <p className="text-xl flex ">
                  Prize: <span className="text-slate-200 text-lg">5000</span>
                </p>
              </div>
              <div className="timmings flex space-x-3">
                <p className="text-white">
                  Date:{" "}
                  <span className="text-slate-300 text-sm">4/02/2024</span>
                </p>
                <p className="text-white">
                  Time: <span className="text-slate-300 text-sm">9:30 AM</span>
                </p>
              </div>
              <div className="event-Incharge flex flex-col md:flex-row flex-wrap space-y-3 md:space-y-0 md:space-x-4">
                <div className="container-Teachers">
                  <h1 className="text-white font-semibold md:text-xl">
                    Event Incharge
                  </h1>
                  <div className=" flex flex-col  text-white md:text-lg">
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                  </div>
                </div>
                <div className="container-Teachers">
                  <h1 className="text-white font-semibold md:text-xl">
                    Event Coordinator
                  </h1>
                  <div className=" flex flex-col  text-white md:text-lg">
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                  </div>
                </div>
                <div className="container-Coordinator">
                  <h1 className="text-white font-semibold md:text-xl">
                    Event Volunteer
                  </h1>
                  <div className=" flex flex-col  text-white md:text-lg">
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                  </div>
                </div>
              </div>
              <Link
            to='/register'
            class="flex items-center w-[200px] justify-center py-3 text-lg font-medium text-center text-white hover:scale-90 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Register
            
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
