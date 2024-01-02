import React from "react";
import EventInchargeNavbar from "../Components/Profile-Navbar/EventInchargeNavbar";
import EventInchargeSidebar from "../Components/Profile-Sidebar/EventInchargeSidebar";
import InputEventDetailsForm from "./Input pages/InputEventDetailsForm";

const InputEventDetails = () => {
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
          <InputEventDetailsForm />
        </div>
      </div>
    </div>
  );
};

export default InputEventDetails;
