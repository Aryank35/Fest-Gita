import React from "react";
import { IoHelp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import SideNavElements from "../Navbar/SideNavElements";


const OrganiserSidebar = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full py-5">
      <SideNavElements title="Home" icon={<FaHome />} link="/" />
      
      <SideNavElements
        title="OrgDashboard"
        icon={<RxDashboard />}
        link="/organiserProfile"
      />
      <SideNavElements
        title="Profile Settings"
        icon={<CgProfile />}
        link="/organiserSettings"
        
      />
      <SideNavElements
        title="Notification Center"
        icon={<IoMdNotifications />}
        link="/organiserNotifications"
      />
      <SideNavElements
        title="Help and support"
        icon={<IoHelp />}
        link="/organiserHelp"
      />
    </div>
  );
};

export default OrganiserSidebar;
