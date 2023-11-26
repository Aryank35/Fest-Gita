import React from "react";
import EventBox from "../Components/Event-box/EventBox";
import Navbar from "../Components/Navbar/Navbar";

const Anwesh = () => {
  const AnweshElements = [
    {
      url:"./Demo-pics/tech.jpg",
      EventName:"Codathon",
      desc:"Show your Codding skills",
      details:[
        {
            EventIncharge:"Xyz",
            EventCoordinators:["ABC","XYZ","RST"],
            volunteers:["Rohan","Mohan","Simran"],
            timming:"12:15 pm"
        }
      ]
    },
    {
        url:"./Demo-pics/tech.jpg",
        EventName:"Codathon",
        desc:"Show your Codding skills",
        details:[
          {
              EventIncharge:"Xyz",
              EventCoordinators:["ABC","XYZ","RST"],
              volunteers:["Rohan","Mohan","Simran"],
              timming:"12:15 pm"
          }
        ]
      },
  ];
  return (
    <div>
        <Navbar/>
      {/* Tech Fest */}
      <div className=" pt-[60px] bg-gradient-to-b from-black via-purple-900 to-black h-full flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold my-4 text-white">Anwesh</h1>
        <p className="text-sm mb-8 text-slate-200">
          Welcome to the gateway of innovation! Our Techfest Registration Page
          is your ticket to an exhilarating world of technology and creativity.
        </p>
        <div className="Event-Container w-full flex justify-around flex-wrap">
          <EventBox url = {AnweshElements[0].url} />
          <EventBox url = {AnweshElements[0].url}/>
          <EventBox url = {AnweshElements[0].url}/>
          <EventBox url = {AnweshElements[0].url}/>
          <EventBox url = {AnweshElements[0].url}/>
          <EventBox url = {AnweshElements[0].url}/>
          <EventBox url = {AnweshElements[0].url}/>
          <EventBox url = {AnweshElements[0].url}/>
          <EventBox url = {AnweshElements[0].url}/>
        </div>
      </div>
    </div>
  );
};

export default Anwesh;
