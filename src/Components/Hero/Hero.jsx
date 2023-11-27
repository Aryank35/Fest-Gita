import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(./Demo-pics/cultural.jpg)` }} className="flex justify-center items-center bg-no-repeat bg-cover bg-center  h-screen w-full ">
      {/* left-contents */}
      <div className="left w-full mx-auto flex justify-center items-center ">
        <div className=" flex flex-col items-center justify-center ">
          <div className="header text-center">
            <h1 className=" text-2xl sm:text-6xl font-bold text-white">
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
          <div className="login-register md:hidden  space-x-2 sm:space-x-5 jusce">
            <Link to="/login">
            <button className="w-[100px] border-[2px] border-black px-[20px] py-[6px] sm:px-[30px] sm:py-[8px] text-white bg-orange-400 font-semibold hover:scale-[0.85] hover:delay-100 sm:text-lg rounded-[15px] text-center ">
              Login
            </button>
            </Link>
            <Link to="/resgister">
            <button className="w-fit hidden border-[2px] border-black px-[20px] py-[6px] sm:px-[30px] sm:py-[8px] text-white bg-slate-800 font-semibold hover:scale-[0.85] hover:delay-100 sm:text-lg rounded-[15px] text-center ">
              Register Now
            </button>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
