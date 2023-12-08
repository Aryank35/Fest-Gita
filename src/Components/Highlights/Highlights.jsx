import React from "react";
import ImageSlider from "../Hero/ImageSlider";

const Highlights = () => {
  const images = [
    {
      url:'./Demo-pics/College-fest.jpeg'
    },
    {
      url:'./Demo-pics/College-logo.jpg'
    },
    {
      url:'./Slider/Photo1.JPG'
    },
    {
      url:'./Slider/Photo2.JPG'
    },
    {
      url:'./Slider/Photo3.JPG'
    },
    {
      url:'./Slider/Photo4.JPG'
    },
    {
      url:'./Slider/Photo5.JPG'
    },
    {
      url:'./Slider/Photo6.JPG'
    },
    {
      url:'./Slider/Photo7.JPG'
    },
    {
      url:'./Slider/Photo8.JPG'
    },
    {
      url:'./Slider/Photo9.JPG'
    },
    {
      url:'./Slider/Photo10.JPG'
    }, 
    {
      url:'./Slider/Photo11.JPG'
    }, 
    {
      url:'./Slider/Photo12.JPG'
    }]
  return (
    <div className="">
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
    </div>
  );
};

export default Highlights;
