import EventUpdates from "../Components/Events-updates/EventUpdates";
import Events from "../Components/Events/Events";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Highlights from "../Components/Highlights/Highlights";
import Navbar from "../Components/Navbar/Navbar";

export default function Landing() {
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
    }
    
  ];
  return (
    <>
    {/* #FF0076 – #590FB7 */}
    {/* #402662 – #3900A6 */}
    {/* #000066 – #6699FF */}
        
    <body className="bg-gradient-to-b from-black via-purple-900 to-black h-full"> 
      <Navbar/>
      <Hero />
      <Events/>
      <EventUpdates/>
      <Highlights images = {images}/>
      <Footer/>
      </body>
    </>
  )
}