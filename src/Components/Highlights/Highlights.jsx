import React from "react";
import ImageSlider from "../Hero/ImageSlider";

const Highlights = () => {
  const images = [
    {
      url:'./Demo-pics/college-fest.webp'
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
      <div className="videos flex items-center justify-center flex-col sm:flex-row flex-wrap sm:space-x-5 mx-auto space-y-5 sm:space-y-0 py-6">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="sm:w-[30%] md:h-[300px] sm:h-[200px] 2xl:h-[400px] 2xl:w-[45%] h-[200px] w-full max-w-screen my-5">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dyTGbrzueMI"
            title={`Dance Performance ${index}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Highlights;
