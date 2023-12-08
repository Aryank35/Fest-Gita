import { IoHelp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import SideNavElements from "../Navbar/SideNavElements";

export default function Sidebar() {
  return (
    <div className="bg-gray-900 min-h-screen w-full py-5">
      <SideNavElements title="Home" icon={<FaHome />} link="/" />

      <SideNavElements
        title="Dashboard"
        icon={<RxDashboard />}
        link="/profile"
      />

      <SideNavElements
        title="Profile Settings"
        icon={<CgProfile />}
        link="/settings"
      />
      <SideNavElements
        title="Notification Center"
        icon={<IoMdNotifications />}
        link="/notifications"
      />
      <SideNavElements
        title="Help and support"
        icon={<IoHelp />}
        link="/help"
      />
    </div>
  );
}
