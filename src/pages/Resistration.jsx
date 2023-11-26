import React from "react";

const Resistration = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 pt-[60px] to-black h-full">
      <h1 className="md:text-5xl text-3xl  font-bold text-center my-8 text-white">Register Yourself</h1>
      <div className=" h-full mx-auto border-2 rounded-xl md:p-6 md:w-[80%] w-[90%] ">
        <form
          action="#"
          className="flex flex-col  space-y-9 p-3 mx-auto"
        >
          <div className="name flex items-center space-x-4 text-white">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="border-2 w-[90%] md:w-[80%]"
              name="name"
              placeholder="Enter your full Name..."
              required
            />
          </div>
          <div className="RollNumber flex  items-center space-x-4 text-white">
            <label htmlFor="RollNumber">Roll Number:</label>
            <input
              type="text"
              name="RollNumber"
              className="border-2 w-[50%]"
              placeholder="Enter your Roll Number..."
              required
            />
          </div>
          <div className="courseInfo text-white flex justify-center flex-row flex-wrap items-center space-y-4 md:space-y-0 space-x-4">
            <div className="space-x-3">
              <label htmlFor="Course">Course:</label>
              <select name="Course" id="Course" className="border-2 text-black" required>
                <option value="BTech">B-Tech</option>
                <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
              </select>
            </div>
            <div className="space-x-3">
              <label htmlFor="Year">Year</label>
              <select name="Year" id="Year" className="border-2 text-black" required>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">Last</option>
              </select>
            </div>
            <div className="space-x-3">
              <label htmlFor="Branch">Branch:</label>
              <select name="Branch" id="Branch" className="border-2 text-black" required>
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
              <input type="radio" name="Gender" value="M" required />
              <span>Male</span>
            </div>
            <div className="space-x-3 ml-3">
              <input type="radio" name="Gender" value="F" required />
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
                required
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor="Whatsapp-Number">Whatsapp Number:</label>
              <input
                type="tel"
                placeholder="0000000000"
                className="border-2 "
                name="PhoneNumber"
                required
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
              required
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
            className=" flex w-[200px] mx-auto px-3 justify-center bg-slate-600 py-3 text-lg rounded-lg hover:cursor-pointer hover:scale-90 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Resistration;
