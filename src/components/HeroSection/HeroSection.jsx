import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero-text">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Reimagining Vending. India’s Foremost in Instant Commerce Via Smart
          Micro Retail Solutions!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Our mission is to revolutionize the way people shop and interact with
          their environment through our innovative micro retail solutions.
        </p>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
          Know More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
