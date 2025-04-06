import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoFile from "../../assets/video.mp4";
import heroBg from "../../assets/vender_image.png";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      id="hero"
      className="relative w-full min-h-[80vh] bg-center bg-no-repeat bg-cover flex items-center justify-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})`,
      }}
    >
      {/* Main Text Content with added margin-top */}
      <div className="text-center text-white max-w-3xl z-10 mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Reimagining Vending. India's Foremost in Instant Commerce Via Smart
          Micro Retail Solutions!
        </h1>
        <p className="text-base md:text-lg mb-6">
          Our mission is to revolutionize the way people shop and interact with
          their environment through our innovative micro retail solutions.
        </p>

        <Link to="/about">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
            Know More
          </button>
        </Link>

        {/* Video Icon */}
        {!showVideo && (
          <div className="mt-6 flex justify-center">
            <svg
              onClick={() => setShowVideo(true)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-[70px] h-[70px] cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <circle cx="32" cy="32" r="32" fill="rgba(0, 0, 0, 0.4)" />
              <polygon points="26,20 26,44 46,32" fill="#fff" />
            </svg>
          </div>
        )}
      </div>

      {/* Video Overlay - Transparent Background */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
            <video
              src={videoFile}
              controls
              autoPlay
              onEnded={() => setShowVideo(false)} // 👈 Auto-close on video end
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center font-bold hover:bg-gray-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
