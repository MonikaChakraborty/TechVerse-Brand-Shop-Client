import about1 from "../../assets/about1.jpg";
// import about2 from "../../assets/about2.jpg";
import about2 from "../../assets/about4.jpg";

import { BsFillLightbulbFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FcGlobe } from "react-icons/fc";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useState } from "react";
import YouTube from "react-youtube";
import './About.css'

const AboutUs = () => {
  const [showVideo, setShowVideo] = useState(false);

  const videoOptions = {
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-12 lg:mb-24">
      <div className="flex lg:flex-row flex-col justify-center bg-gradient-to-r from-sky-100 to-teal-400 rounded-xl p-16 lg:p-8">
        <div className="lg:w-[60%] lg:p-16">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">About Us</h1>
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            Discover the TechVerse Difference: Crafting Tomorrow's Technology
            Today
          </h2>
          <p className="text-lg text-gray-600">
            At TechVerse, we are more than just a tech brand; we are
            enthusiasts, innovators, and pioneers in bringing cutting-edge
            technology to your fingertips. Our journey began with a passion for
            redefining the tech landscape, and today, we stand as your go-to
            destination for premium gadgets and electronics. With a commitment
            to quality, innovation, and customer satisfaction, we strive to
            elevate your tech experience.
          </p>

          <div className="mt-4 lg:mt-8 grid grid-cols-2 gap-4 lg:gap-8">
            <h3 className="flex items-center text-gray-600 font-semibold text-lg">
              <BsFillLightbulbFill size={30} className="mr-2 text-yellow-300"></BsFillLightbulbFill>
              Innovative Technology
            </h3>
            <h3 className="flex items-center text-gray-600 font-semibold text-lg">
              <BsPeopleFill size={30} className="mr-2 text-blue-500"></BsPeopleFill>Customer-Centric
              Approach
            </h3>
            <h3 className="flex items-center text-gray-600 font-semibold text-lg">
              <AiFillStar size={30} className="mr-2 text-amber-400"></AiFillStar>Quality Assurance
            </h3>
            <h3 className="flex items-center text-gray-600 font-semibold text-lg">
              <FcGlobe size={30} className="mr-2"></FcGlobe>Global Reach
            </h3>
          </div>
          <button
            className="btn mt-6 lg:mt-12 text-white bg-teal-600 normal-case text-base hover:bg-teal-800"
            
          >Meet With US</button>
        </div>
        <div className="lg:w-[40%] mt-6 lg:mt-12 lg:-ml-12 relative">
          <img
            className="rounded-xl w-[300px] lg:h-[400px] lg:w-[600px] object-cover"
            src={about2}
            alt=""
          />
         
          <img
            className="rounded-xl border-8 border-teal-400 absolute lg:bottom-8  -bottom-10 left-44 lg:left-56 w-[150px] lg:w-[300px] object-cover"
            src={about1}
            alt=""
          />
           <div className="absolute lg:bottom-[215px] bottom-12 left-40 bg-teal-200 rounded-full border border-teal-200 lg:left-52 text-teal-800 cursor-pointer play-icon">
            <BsFillPlayCircleFill onClick={handlePlayClick} size={40}></BsFillPlayCircleFill>
          </div>
          {showVideo && (
            <div className="video-overlay" onClick={handleCloseVideo}>
              <div className="video-container">
                <YouTube
                  videoId="_epHuHdct3k"
                  opts={videoOptions}
                  className="youtube-video"
                />
              </div>
            </div>
          )}
            
        </div>
      </div>
    </div>
  );
};


export default AboutUs;
