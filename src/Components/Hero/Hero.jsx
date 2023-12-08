import React from "react";

const Hero = () => { 
  return (
    <div style={{ backgroundImage: `url(./Demo-pics/cultural.webp)` }} className="flex justify-center items-center bg-no-repeat bg-cover bg-center  h-screen w-full ">
      {/* left-contents */}
      <div className="left w-full mx-auto flex justify-center items-center ">
        <div className=" flex flex-col items-center justify-center ">
          <div className="header text-center ">
            <h1 className=" text-2xl sm:text-6xl font-bold text-white ">
              Welcome Back
            </h1>
            <span className=" text-4xl sm:text-8xl font-bold text-white">Akanksha 2024!</span>
          </div>

          <div className="desc flex flex-col justify-center items-center">
            <p className="py-5 text-lg text-white font-semibold text-center">
              Join us for a week full of excitement, learning and entertainment
            </p>
          </div>

          {/* login-register buttons */}
          
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
