import React from 'react'
import EventInchargeSidebar from '../Components/Profile-Sidebar/EventInchargeSidebar';
import Alert from "../Components/Notification/Alert";
import EventInchargeNavbar from '../Components/Profile-Navbar/EventInchargeNavbar';

const EventInchargeNotifications = () => {
    return (
        <div className=" flex flex-col justify-center w-screen h-full bg-gradient-to-b from-black via-purple-900 to-black">
          <div className="navbar w-full sm:hidden">
            <EventInchargeNavbar/>
            
          </div>
          <div className=" flex justify-center w-full h-full">
            <div className="w-[20%] hidden sm:flex h-screen">
              <EventInchargeSidebar/>
            </div>
            <div className="hero sm:w-[80%] h-full m-4 flex-col justify-center text-center item-center ">
              <p className="text-3xl font-bold text-white">Notification page....</p>
              <div className=" sm:w-[80%] mx-auto py-5">
                <Alert />
                <Alert />
                <Alert />
                <Alert />
                <Alert />
              </div>
            </div>
          </div>
        </div>
      );
}

export default EventInchargeNotifications