import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videoFile from "../../assets/video.mp4";
import heroBg from "../../assets/vender_image.png";
import TypeWriter from "./TypeWriter";
import PlayButton from "./PlayButton"; // ✅ import your PlayButton component

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (showVideo) {
        setShowVideo(false);
      }
    };

    if (showVideo) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showVideo]);

  return (
    <div
      id="hero"
      className="relative w-full min-h-screen bg-center bg-no-repeat bg-cover flex items-center justify-center px-4 py-12 sm:py-16 md:py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
      }}
    >
      {/* Main Text Content */}
      <div className="text-center text-white max-w-4xl z-10 mt-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Reimagining Vending. India’s Foremost in Instant Commerce Via Smart
          Micro Retail Solutions!
          <TypeWriter />
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
          Our mission is to revolutionize the way people shop and interact with
          their environment through our innovative micro retail solutions.
        </p>

        {/* Gradient Know More Button */}
        <Link to="/about">
          <button className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 text-white py-2 px-6 rounded-full hover:opacity-90 transition duration-300 text-sm sm:text-base md:text-lg shadow-lg">
            Know More
          </button>
        </Link>

        {/* ✅ Custom Play Button Component */}
        {!showVideo && (
          <div className="mt-6 flex justify-center">
            <PlayButton size={80} onClick={() => setShowVideo(true)} />
          </div>
        )}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-[100vw] max-h-[100vh] flex justify-center items-center">
            <video
              src={videoFile}
              controls
              autoPlay
              onEnded={() => setShowVideo(false)}
              className="w-full h-full max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-5 right-5 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-gray-300 z-50"
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
