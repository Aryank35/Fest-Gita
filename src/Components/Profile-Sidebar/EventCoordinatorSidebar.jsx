
import React from "react";
import { IoHelp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import SideNavElements from '../Navbar/SideNavElements';

const EventCoordinatorSidebar = () => {
    return (
        <div className="bg-gray-900 h-screen w-full py-5">
          <SideNavElements title="Home" icon={<FaHome />} link="/" />
            
          <SideNavElements
            title="CooDashboard"
            icon={<RxDashboard />}
            link="/eventCoordinatorProfile"
          />
          <SideNavElements
            title="Profile Settings"
            icon={<CgProfile />}
            link="/eventCoordinatorSettings"
            
          />
          <SideNavElements
            title="Notification Center"
            icon={<IoMdNotifications />}
            link="/eventCoordinatorNotifications"
          />
          <SideNavElements
            title="Help and support"
            icon={<IoHelp />}
            link="/eventCoordinatorHelp"
          />
        </div>
      );
}

export default EventCoordinatorSidebar