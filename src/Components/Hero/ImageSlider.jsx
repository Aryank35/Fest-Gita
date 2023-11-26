// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <div className="relative shadow-sm shadow-black border w-[93%] sm:w-[95%] h-[200px] sm:h-[300px] md:h-[450px] overflow-hidden rounded-xl mx-auto">
  {images.map((image, index) => (
    <div
      key={index}
      className={` w-full h-full transition-transform duration-500 ${
        index === currentIndex ? "opacity-100 z-10" : "opacity-0 -z-1"
      }`}
      style={{ transform: `translatey(-${currentIndex * 100}%)` }}
    >
      <img
        className="w-[100%] h-[100%] object-fill object-center rounded-xl "
        src={image.url}
        alt={`Slide ${index + 1}`}
      />
    </div>
  ))}
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 scale-90 text-white h-8"
    onClick={prevSlide}
  >
    <img src="./slider-arrow/left-arrow.png" alt="left-arrow" className="px-3 w-full h-6 py-2 bg-white rounded-full " />
  </button>
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 scale-90 text-white h-8"
    onClick={nextSlide}
  >
    <img src="./slider-arrow/right-arrow.png" alt="right-arrow" className="px-3 w-full h-6 py-2 bg-white rounded-full " />
  </button>
</div>

  );
};

export default ImageSlider;
