import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { IoHelp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import SideNavElements from "../Navbar/SideNavElements";


const EventInchargeSidebar = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full py-5">
      <SideNavElements title="Home" icon={<FaHome />} link="/" />

      <SideNavElements
        title="IncDashboard"
        icon={<RxDashboard />}
        link="/eventInchargeProfile"
      />
      <SideNavElements
        title="Profile Settings"
        icon={<CgProfile />}
        link="/eventInchargeSettings"
      />
      <SideNavElements
        title="Update Event-Details"
        icon={<FontAwesomeIcon icon={faGear} />}
        link="/support/inputEventDetailsForm"
      />
      <SideNavElements
        title="Notification Center"
        icon={<IoMdNotifications />}
        link="/eventInchargeNotifications"
      />
      <SideNavElements
        title="Help and support"
        icon={<IoHelp />}
        link="/eventInchargeHelp"
      />
    </div>
  );
};

export default EventInchargeSidebar;
