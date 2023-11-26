import React from "react";

const ProfileSetting = () => {
  return (
    <div>
      <div className=" h-full md:mt-[100px] md:p-6 w-[100%] mt-2 ">
        <form
          action="#"
          className="flex flex-col space-y-5 p-3 mx-auto"
        >
          <div className="name flex items-center space-x-4 text-white">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="border-2 w-[90%] md:w-[80%]"
              name="name"
              placeholder="Enter your full Name..."
            />
          </div>
          <div className="RollNumber flex  items-center space-x-4 text-white">
            <label htmlFor="RollNumber">Roll Number:</label>
            <input
              type="text"
              name="RollNumber"
              className="border-2 w-[50%]"
              placeholder="Enter your Roll Number..."
            />
          </div>
          <div className="courseInfo text-white flex justify-center flex-row flex-wrap items-center space-y-4 md:space-y-0 space-x-4">
            <div className="space-x-3">
              <label htmlFor="Course">Course:</label>
              <select name="Course" id="Course" className="border-2 text-black">
                <option value="BTech">B-Tech</option>
                <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
              </select>
            </div>
            <div className="space-x-3">
              <label htmlFor="Year">Year</label>
              <select name="Year" id="Year" className="border-2 text-black">
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">Last</option>
              </select>
            </div>
            <div className="space-x-3">
              <label htmlFor="Branch">Branch:</label>
              <select name="Branch" id="Branch" className="border-2 text-black">
                <option value="">Branch</option>
                <option value="CSE">CSE</option>
                <option value="CSIT">CSIT</option>
                <option value="CSDS">CSDS</option>
                <option value="CSAI">CSAI</option>
                <option value="CST">CST</option>
                <option value="CIVIL">CIVIL</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="MECHANICAL">ME</option>
              </select>
            </div>
          </div>
          <div className="gender text-white flex justify-center flex-wrap items-center ">
            <label htmlFor="Gender">Gender:</label>
            <div className="space-x-3 ml-3">
              <input type="radio" name="Gender" value="M" />
              <span>Male</span>
            </div>
            <div className="space-x-3 ml-3">
              <input type="radio" name="Gender" value="F" />
              <span>Female</span>
            </div>
          </div>
          <div className="numbers text-white flex justify-center space-y-4 md:space-y-0 flex-col md:flex-row  items-center md:space-x-4">
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="PhoneNumber">Phone Number:</label>
              <input
                type="tel"
                placeholder="0000000000"
                className="border-2 "
                name="PhoneNumber"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="Whatsapp-Number">Whatsapp Number:</label>
              <input
                type="tel"
                placeholder="0000000000"
                className="border-2 "
                name="PhoneNumber"
              />
            </div>
          </div>
          <div className="mail text-white flex my-3 justify-center  items-center space-x-4">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              name="Email"
              className="border-2 w-[75%]"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="stay text-white flex justify-center items-center space-x-4">
            <label htmlFor="stay">Hosteller / Day Boarder:</label>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
              <input type="radio" name="Staying" value="Hosteller" />
              <span className="text-sm md:text-xl">Hosteller</span>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
              <input type="radio" name="Staying" value="Day Boarder" />
              <span className="text-sm md:text-xl">Day Boarder</span>
            </div>
          </div>
          <input
            type="submit"
            id="submit"
            className=" flex mx-auto w-[200px] justify-center px-3 bg-slate-600 py-3 text-lg rounded-lg hover:cursor-pointer hover:scale-90 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default ProfileSetting;
