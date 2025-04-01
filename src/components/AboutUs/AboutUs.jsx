import React from "react";
import settingVender from "../../assets/settingVender.png";
import vendingMachine from "../../assets/machine1.jpeg";

const AboutUs = () => {
  return (
    <div className="hidden w-180 md:block font-medium">
      <div className="relative">
        {/* Background Image & Overlay */}
        <div className=" h-[10vh]">
          {" "}
          {/* Increased height here */}
          <div className="absolute inset-0 bg-orange-300 opacity-80"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[60vh] text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Smart Retail Solutions</h1>
          <div className="w-full h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full mt-8"></div>
        </div>
      </div>
      <div className="mt-10"></div> {/* Adds spacing */}
      <div className="bg-white text-gray-900 px-6 md:px-20 py-12">
        <div className="mt-28"></div> {/* Adds spacing */}
        {/* First Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Image 1 (Left Side) */}
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
          />

          {/* Text Section */}
          <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
            <h2 className="text-7xl font-semibold text-orange-500 mb-6">
              About Us
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              Vender is India’s leader in Instant Commerce, offering
              cutting-edge Smart Retail Solutions tailored to food, beverages,
              and related sectors. Our mission is to make everyday convenience
              more accessible, smarter, and safer for everyone. At Vender, we
              are committed to providing top-notch service and operational
              excellence to our customers. Through our innovative, world-class
              solutions, we strive to deliver the highest quality experience.
            </ul>
          </div>
        </div>
        {/* Add Margin Between Image 1 and Image 2 */}
        <div className="mt-28"></div> {/* Adds spacing */}
        {/* Second Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          {/* Text Section (Left Side) */}
          <div className="w-full sm:w-1/2 sm:ml-28 pr-4 sm:pr-8">
            <h2 className="text-6xl font-semibold text-orange-500 mb-3">
              Our Vision & Mission
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>
                VISION: To be India’s Foremost in Instant Commerce via Smart
                Retail Solutions in Food & Beverages and allied categories
              </li>
              <li>
                MISSION: Making everyday convenience available– Easier, Smarter,
                Safer! Staying Consumer-Centric, Data led and Values-based in
                everything we do.
              </li>
            </ul>
          </div>

          {/* Image 2 (Right Side) */}
          <div className="w-full sm:w-1/2 flex justify-end">
            <img
              src={settingVender}
              alt="Vending Machine"
              className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AboutUs;
