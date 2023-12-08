import React from 'react'
import EventCoordinatorNavbar from '../Components/Profile-Navbar/EventCoordinatorNavbar'
import EventCoordinatorSidebar from '../Components/Profile-Sidebar/EventCoordinatorSidebar'
import { Link } from 'react-router-dom'
import EventCard from '../Components/Events/EventCard'

const EventParticipants = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
       <div className="phone-nav md:hidden">
        <EventCoordinatorNavbar />
      </div>
      <div className="Organiser-Profile-page w-full h-full flex justify-center">
        <div className="nav  hidden md:flex md:w-[20%]">
          <EventCoordinatorSidebar />
        </div>
        <div className="profile md:w-[80%] flex flex-col py-[60px]">
         <h1 className='font-bold text-white text-4xl text-center'> Event Participants</h1>
        </div>
      </div>
    </div>
  )
}

export default EventParticipants