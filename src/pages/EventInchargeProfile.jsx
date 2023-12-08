import React, { useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../Components/Events/EventCard";
import EventInchargeNavbar from "../Components/Profile-Navbar/EventInchargeNavbar";
import WinnerDisplay from "../Components/Winners/WinnerDisplay";
import EventInchargeSidebar from "../Components/Profile-Sidebar/EventInchargeSidebar";
const EventInchargeProfile = () => {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  const [third, setthird] = useState("");
  const [firstPos, setfirstPos] = useState("");
  const [secondPos, setsecondPos] = useState("");
  const [thirdPos, setthirdPos] = useState("");

  const FirstPosition = () => {
    setfirstPos(first);
    setfirst("");
  };

  const SecondPosition = () => {
    setsecondPos(second);
    setsecond("");
  };

  const ThirdPosition = () => {
    setthirdPos(third);
    setthird("");
  };

  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
      <div className="phone-nav md:hidden">
        <EventInchargeNavbar />
      </div>
      <div className="Organiser-Profile-page w-full h-full flex justify-center">
        <div className="nav  hidden md:flex min-h-screen md:w-[20%]">
          <EventInchargeSidebar />
        </div>
        <div className="profile md:w-[80%] flex flex-col py-[60px]">
          <h1 className="text-white font-bold text-center md:text-5xl text-3xl underline underline-offset-8">
            Welcome to your Dashboard!
          </h1>
          <div className="mt-[50px] flex justify-center items-center ">
            <Link to="/eventDetails" className="w-[95%] md:w-[50%]">
              <EventCard name="Event Details" url={"./Demo-pics/tech.jpg"} />
            </Link>
          </div>
          
          <div className="winner md:px-6 mx-auto px-2 w-full">
            <h1 className="text-white font-bold text-center text-3xl my-9">
              Finalise the Winners:
            </h1>
            <div className="space-y-5 mx-auto">
              <div className="first-position flex space-x-3 ">
                <h1 className="font-bold text-xl text-white">
                  1 <sup>st</sup> :
                </h1>
                <input
                  type="text"
                  className="w-[80%] md:w-[40%] rounded-md  outline-none px-2"
                  value={first}
                  onChange={(e) => {
                    setfirst(e.target.value);
                  }}
                />
                <button
                  className="px-4 md:mx-3 py-2 bg-black rounded-lg font-semibold text-white"
                  onClick={FirstPosition}
                >
                  ADD
                </button>
              </div>
              <div className="Second-position flex space-x-3 ">
                <h1 className="font-bold text-xl text-white">
                  2 <sup>nd</sup> :
                </h1>
                <input
                  type="text"
                  className="w-[75%] md:w-[40%] rounded-md  outline-none px-2"
                  value={second}
                  onChange={(e) => {
                    setsecond(e.target.value);
                  }}
                />
                <button
                  className="px-4 md:mx-3 py-2 bg-black rounded-lg font-semibold text-white"
                  onClick={SecondPosition}
                >
                  ADD
                </button>
              </div>
              <div className="Third-position flex space-x-3 ">
                <h1 className="font-bold text-xl text-white">
                  3 <sup>rd</sup> :
                </h1>
                <input
                  type="text"
                  className="w-[75%] md:w-[40%] rounded-md  outline-none px-2"
                  value={third}
                  onChange={(e) => {
                    setthird(e.target.value);
                  }}
                />
                <button
                  className="px-4 md:mx-3 py-2 bg-black rounded-lg font-semibold text-white"
                  onClick={ThirdPosition}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
          <div className=" py-2 md:py-[60px]">
            <WinnerDisplay
              first={firstPos}
              second={secondPos}
              third={thirdPos}
            />
          </div>
          <div className="driveLink flex justify-center items-center space-x-2 flex-wrap">
            <p className="text-white font-bold text-2xl">Drive Link: </p>
            <input
              type="text"
              className="w-[80%] md:w-[40%] rounded-md  outline-none px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInchargeProfile;
