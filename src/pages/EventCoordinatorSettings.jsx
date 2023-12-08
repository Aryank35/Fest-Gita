import React from 'react'
import EventCoordinatorSidebar from '../Components/Profile-Sidebar/EventCoordinatorSidebar';
import ProfileSetting from '../Components/ProfileSetting/ProfileSetting';
import EventCoordinatorNavbar from '../Components/Profile-Navbar/EventCoordinatorNavbar';

const EventCoordinatorSettings = () => {
    return (
        <div className=" bg-gradient-to-b from-black via-purple-900 to-black flex flex-col justify-center w-screen h-full ">
          <div className="navbar w-full sm:hidden">
            <EventCoordinatorNavbar/>
          </div>
          <div className=" flex justify-center w-full h-full">
            <div className="w-[20%] hidden sm:flex h-screen">
              <EventCoordinatorSidebar/>
            </div>
            <div className="hero md:w-[80%] w-full h-full md:m-4 flex-col justify-center text-center item-center ">
              <p className="text-3xl font-bold text-white">Profile Settings</p>
              <ProfileSetting/>
            </div>
          </div>
        </div>
      );
}

export default EventCoordinatorSettings