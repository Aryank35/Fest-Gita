import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notification from "./pages/Notification";
import Help from "./pages/Help";
import Landing from "./pages/Landing";
import Resistration from "./pages/Resistration";
import Login from "./pages/Login";
import Anwesh from "./pages/Anwesh";
import Ahwan from "./pages/Ahwan";
import Akanksha from "./pages/Akanksha";
import About from "./pages/About";
import Coordinators from "./pages/Coordinators";
import EventDetails from "./pages/EventDetails";
import OrganiserProfile from "./pages/OrganiserProfile";
import AnweshWinnerPage from "./pages/AnweshWinnerPage";
import AhwanWinnerPage from "./pages/AhwanWinnerPage";
import AkankshaWinnersPage from "./pages/AkankshaWinnersPage";
import AhwanEventBoys from "./pages/AhwanEventBoys";
import AhwanEventGirls from "./pages/AhwanEventGirls";
import OrganiserSetting from "./pages/OrganiserSetting";
import OrganiserNotification from "./pages/OrganiserNotification";
import OrganiserHelp from "./pages/OrganiserHelp";
import EventInchargeProfile from "./pages/EventInchargeProfile";
import EventInchargeSettings from "./pages/EventInchargeSettings";
import EventInchargeNotifications from "./pages/EventInchargeNotifications";
import EventInchargeHelp from "./pages/EventInchargeHelp";
import EventCoordinatorProfile from "./pages/EventCoordinatorProfile";
import EventCoordinatorSettings from "./pages/EventCoordinatorSettings";
import EventCoordinatorsNotifications from "./pages/EventCoordinatorsNotifications";
import EventCoordinatorsHelp from "./pages/EventCoordinatorsHelp";
import InputEventDetails from "./pages/InputEventDetails";
import HelpSupportProfile from "./pages/HelpSupportProfile";
import HelpSupportSettings from "./pages/HelpSupportSettings";
import HelpSupportNotification from "./pages/HelpSupportNotification";
import EventParticipants from "./pages/EventParticipants";
import NavToPages from "./pages/NavToPages";
import TechFestEvents from "./pages/TechFestEvents";
import Robotics from "./pages/Robotics";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About/>} />
        <Route path="/coordinators" element={<Coordinators/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Resistration/>} />
        <Route path="/eventDetails" element={<EventDetails/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/organiserProfile" element={<OrganiserProfile/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/organiserSettings" element={<OrganiserSetting/>}/>
        <Route path="/notifications" element={<Notification />} />
        <Route path="/organiserNotifications" element={<OrganiserNotification/>}/>
        <Route path="/anwesh" element={<Anwesh/>}/>
        <Route path="/ahwan" element={<Ahwan/>}/>
        <Route path="/akanksha" element={<Akanksha/>}/>
        <Route path="/help" element={<Help />} />
        <Route path="/organiserHelp" element={<OrganiserHelp/>} />
        <Route path="/anweshWinners" element={<AnweshWinnerPage/>} />
        <Route path="/ahwanWinners" element={<AhwanWinnerPage/>} />
        <Route path="/akankshaWinners" element={<AkankshaWinnersPage/>} />
        <Route path="/ahwanBoys" element={<AhwanEventBoys/>}/>
        <Route path="/ahwanGirls" element={<AhwanEventGirls/>}/>
        <Route path="/eventInchargeProfile" element={<EventInchargeProfile/>} />
        <Route path="/eventInchargeSettings" element={<EventInchargeSettings/>} />
        <Route path="/eventInchargeNotifications" element={<EventInchargeNotifications/>} />
        <Route path="/eventInchargeHelp" element={<EventInchargeHelp/>} />
        <Route path="/eventCoordinatorProfile" element={<EventCoordinatorProfile/>} />
        <Route path="/eventCoordinatorSettings" element={<EventCoordinatorSettings/>} />
        <Route path="/eventCoordinatorNotifications" element={<EventCoordinatorsNotifications/>} />
        <Route path="/eventCoordinatorHelp" element={<EventCoordinatorsHelp/>} />
        <Route path="/inputEventDetails" element={<InputEventDetails/>}/>
        <Route path="/helpSupportProfile" element={<HelpSupportProfile/>} />
        <Route path="/helpSupportSettings" element={<HelpSupportSettings/>} />
        <Route path="/helpSupportNotifications" element={<HelpSupportNotification/>} />
        <Route path="/eventParticipants" element={<EventParticipants/>}/>
        <Route path="/navToPages" element={<NavToPages/>}/>
        <Route path="/techFestEvents" element={<TechFestEvents/>}/>
        <Route path="/robotics" element={<Robotics/>}/>
      </Routes>
    </BrowserRouter>
  );
}
