import React from 'react'
import HelpSupportNavbar from '../Components/Profile-Navbar/HelpSupportNavbar';
import HelpSupportSidebar from '../Components/Profile-Sidebar/HelpSupportSidebar';
import { Link } from 'react-router-dom';
import EventCard from '../Components/Events/EventCard';

const HelpSupportProfile = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full">
      <div className="phone-nav md:hidden">
        <HelpSupportNavbar/>
      </div>
      <div className="Organiser-Profile-page w-full h-full flex justify-center">
        <div className="nav  hidden md:flex min-h-screen md:w-[20%]">
          <HelpSupportSidebar/>
        </div>
        <div className="profile md:w-[80%] flex flex-col py-[60px]">
          <h1 className="text-white font-bold text-center md:text-5xl text-3xl underline underline-offset-8">
            Welcome to your Dashboard!
          </h1>
          <div>
            <h1 className="text-white font-bold text-3xl mt-8 text-center">
              Event Winners
            </h1>
            <div className="event-winners flex justify-around flex-wrap">
              <div className=" flex flex-col sm:flex-row justify-around items-center w-full py-[50px]">
                <Link to="/ahwanWinners" className=" w-[95%] sm:w-[30%]">
                  <EventCard name="Ahwan" url={"./Demo-pics/sports.jpg"} />
                </Link>

                <Link to="/anweshWinners" className=" w-[95%] sm:w-[30%]">
                  <EventCard name="Anwesh" url={"./Demo-pics/tech.jpg"} />
                </Link>

                <Link to="/akankshaWinners" className=" w-[95%] sm:w-[30%]">
                  <EventCard name="Akanksha" url={"./Demo-pics/cultural.webp"} />
                </Link>
                </div>
                <div className='flex flex-col justify-center items-center w-screen space-y-8'>
                <Link to="/support/responsibility" className="w-full flex justify-center">
              <div className="events w-full h-[80px] md:w-[50%] sm:h-[100px] bg-[#2E294E] px-3 rounded-xl opacity-80 hover:scale-90 hover:opacity-30  font-bold text-4xl  hover:text-6xl  flex justify-center items-center shadow-lg shadow-blue-400 ">
                <p className="text-center opacity-100 text-white ">
                  Responsibility
                </p>
              </div>
              </Link>

              <Link to="/support/inputEventDetailsForm" className="w-full flex justify-center">
              <div className="events w-full h-[80px] md:w-[50%] sm:h-[100px] bg-[#2E294E] px-3 rounded-xl opacity-80 hover:scale-90 hover:opacity-30  font-bold text-4xl  hover:text-6xl  flex justify-center items-center shadow-lg shadow-blue-400 ">
                <p className="text-center opacity-100 text-white ">
                  Input Event Details
                </p>
              </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpSupportProfile