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
        <Route path="/notifications" element={<Notification />} />
        <Route path="/anwesh" element={<Anwesh/>}/>
        <Route path="/ahwan" element={<Ahwan/>}/>
        <Route path="/akanksha" element={<Akanksha/>}/>
        <Route path="/help" element={<Help />} />
        <Route path="/anweshWinners" element={<AnweshWinnerPage/>} />
        <Route path="/ahwanWinners" element={<AhwanWinnerPage/>} />
        <Route path="/akankshaWinners" element={<AkankshaWinnersPage/>} />
        <Route path="/ahwanBoys" element={<AhwanEventBoys/>}/>
        <Route path="/ahwanGirls" element={<AhwanEventGirls/>}/>

      </Routes>
    </BrowserRouter>
  );
}
