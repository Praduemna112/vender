import React from "react";
import settingVender from "../../assets/settingVender.png";
import vendingMachine from "../../assets/machine1.jpeg";

const AboutUs = () => {
  return (
    <div className="w-full font-medium">
      <div className="relative">
        {/* Background Image & Overlay */}
        <div className="h-[10vh] md:h-[20vh]">
          <div className="absolute inset-0 bg-orange-300 opacity-80"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[30vh] md:h-[60vh] text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Smart Retail Solutions
          </h1>
          <div className="w-full h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full mt-8"></div>
        </div>
      </div>

      <div className="bg-white text-gray-900 px-4 md:px-20 py-12">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          {/* Image 1 (Left Side) */}
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full md:w-1/2 h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
          />

          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-4xl md:text-7xl font-semibold text-orange-500 mb-6">
              About Us
            </h2>
            <p className="text-base md:text-lg">
              Vender is India’s leader in Instant Commerce, offering
              cutting-edge Smart Retail Solutions tailored to food, beverages,
              and related sectors. Our mission is to make everyday convenience
              more accessible, smarter, and safer for everyone. At Vender, we
              are committed to providing top-notch service and operational
              excellence to our customers. Through our innovative, world-class
              solutions, we strive to deliver the highest quality experience.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-20">
          {/* Text Section */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 order-2 md:order-1 mt-8 md:mt-0">
            <h2 className="text-4xl md:text-6xl font-semibold text-orange-500 mb-4">
              Our Vision & Mission
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
              <li>
                <strong>VISION:</strong> To be India’s Foremost in Instant
                Commerce via Smart Retail Solutions in Food & Beverages and
                allied categories.
              </li>
              <li>
                <strong>MISSION:</strong> Making everyday convenience available–
                Easier, Smarter, Safer! Staying Consumer-Centric, Data-led, and
                Values-based in everything we do.
              </li>
            </ul>
          </div>

          {/* Image 2 (Right Side) */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src={settingVender}
              alt="Vending Machine"
              className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
