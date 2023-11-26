import React from "react";

const EventCard = (props) => {
  return (
    <div className="w-full h-full rounded-xl mb-5 md:mb-8 ">
      <div
        style={{ backgroundImage: `url(${props.url})` }}
        className="events w-full h-[150px] sm:h-[250px] bg-cover bg-center bg-no-repeat px-3 rounded-xl opacity-80 hover:scale-90 hover:opacity-30 shadow-lg font-bold text-4xl  hover:text-6xl shadow-black flex justify-center items-center "
      >
        <p className="text-center opacity-100 text-white ">
          {props.name}
        </p>
      </div>
      
    </div>
  );
};

export default EventCard;
