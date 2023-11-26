import React from "react";
// import Box from "./Box";
import ImageSlider from "../Hero/ImageSlider";
const Highlights = ({ images }) => {
  return (
    <div className="">
      <div className=" flex flex-col justify-center items-center md:flex-row w-full h-fit mx-auto ">
        <div className="left md:w-[40%] md:px-[50px] py-[30px] flex justify-center items-center ">
          <h1 className="text-2xl md:text-4xl font-bold text-white">Key Fest Highlights</h1>
        </div>
        {/* <div className="right w-[95%]  sm:w-[50%] sm:pr-[50px] sm:py-[30px] ">
          <div className="Info-box">
            {Array.from({ length: 3 }, (_, i) => (
              <Box key={i} />
            ))}
          </div>
        </div> */}
        {/* right-contents */}
      <div className="right Pt-[25%] w-full md:w-[60%] flex justify-center items-center mx-auto">
        <div className=" py-[50px]">
          <ImageSlider images={images} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Highlights;
