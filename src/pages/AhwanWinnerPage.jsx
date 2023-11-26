import React from 'react'
import EventWinners from '../Components/Events/EventWinners'
import ProfileNav from '../Components/Profile-Navbar/ProfileNav'
import Sidebar from '../Components/Profile-Sidebar/Sidebar'


const AhwanWinnerPage = () => {
  return (
    <div>
        <div>
        <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full">
      <div className="phone-nav md:hidden">
        <ProfileNav />
        
      </div>
      <div className="Organiser-Profile-page w-full h-full flex justify-center">
        <div className="nav  hidden md:flex md:w-[20%]">
          <Sidebar /> 
        </div>
        <div className="profile md:w-[80%] flex flex-col py-[60px] md:py-5">
          
          <div>
            <h1 className="text-white font-bold text-3xl mt-8 text-center">
              Ahwan Winners
            </h1>
            <div className="event-winners flex justify-around flex-wrap">
              <div className=" flex flex-col flex-wrap sm:flex-row justify-around items-center w-full py-[50px]">
                <EventWinners EventName= "Long Jump"/>
                <EventWinners EventName= "Long Jump"/>
                <EventWinners EventName= "Long Jump"/>
                <EventWinners EventName= "Long Jump"/>
                <EventWinners EventName= "Long Jump"/>
                <EventWinners EventName= "Long Jump"/>
                <EventWinners EventName= "Long Jump"/>
                <EventWinners EventName= "Long Jump"/>
                <EventWinners EventName= "Long Jump"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default AhwanWinnerPage