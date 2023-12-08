import React from 'react'
import HelpSupportNavbar from '../Components/Profile-Navbar/HelpSupportNavbar';
import HelpSupportSidebar from '../Components/Profile-Sidebar/HelpSupportSidebar';
import Alert from "../Components/Notification/Alert";


const HelpSupportNotification = () => {
    return (
        <div className=" flex flex-col justify-center w-screen h-full bg-gradient-to-b from-black via-purple-900 to-black">
          <div className="navbar w-full sm:hidden">
            <HelpSupportNavbar/>
            
          </div>
          <div className=" flex justify-center w-full h-full">
            <div className="w-[20%] hidden sm:flex h-screen">
              <HelpSupportSidebar/>
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

export default HelpSupportNotification