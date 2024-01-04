import React from "react";
import ImageSlider from "../Hero/ImageSlider";
import { Link } from "react-router-dom";
import EventCard from "../Events/EventCard";

const Highlights = () => {
  const images = [
    {
      url:'./image-slider/glimpse.webp'
    },
    {
      url:'./Demo-pics/college-logo.webp'
    },
    {
      url:'./image-slider/Photo1.webp'
    },
    {
      url:'./image-slider/Photo2.webp'
    },
    {
      url:'./image-slider/Photo3.webp'
    },
    {
      url:'./image-slider/Photo4.webp'
    },
    {
      url:'./image-slider/Photo5.webp'
    },
    {
      url:'./image-slider/Photo6.webp'
    },
    {
      url:'./image-slider/Photo7.webp'
    },
    {
      url:'./image-slider/Photo8.webp'
    },
    {
      url:'./image-slider/Photo9.webp'
    },
    {
      url:'./image-slider/Photo10.webp'
    }, 
    {
      url:'./image-slider/Photo11.webp'
    }, 
    {
      url:'./image-slider/Photo12.webp'
    }]
  return (
    <div className=" w-full">
      <div className=" flex flex-col justify-center items-center md:flex-row w-full h-fit mx-auto ">

        {/* left content  */}
        <div className="left md:w-[40%] md:px-[50px] py-[30px] flex justify-center items-center ">
          <h1 className="text-2xl md:text-4xl font-bold text-white">Key Fest Highlights</h1>
        </div>
        
        {/* right-contents */}
      <div className="right Pt-[25%] w-full md:w-[60%] flex justify-center items-center mx-auto">
        <div className=" py-[50px]">
          <ImageSlider images={images}/>
        </div>
      </div>
      
      </div>

      <div className="last-year-gallery flex justify-center items-center my-10">
      <Link to="/gallery" className=" w-[90%] sm:w-[70%] ">
          <EventCard name="2023 Fest Gallery" url={"./Gallery/gallery.webp"} />
        </Link> 
      </div>
      
    </div>
  );
};

export default Highlights;
