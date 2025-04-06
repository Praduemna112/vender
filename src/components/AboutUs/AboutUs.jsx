import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import settingVender from "../../assets/settingVender.png";
import vendingMachine from "../../assets/machine1.jpeg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="w-full font-medium overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="w-full h-[30vh] sm:h-[35vh] md:h-[25vh] overflow-hidden">
          <div className="absolute inset-0 bg-orange-700 opacity-80"></div>
        </div>

        <div
          className="relative z-10 flex flex-col items-center justify-center h-[30vh] sm:h-[35vh] md:h-[30vh] text-white text-center"
          data-aos="fade-down"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 break-words max-w-screen-sm mx-auto">
          Smart Retail Solutions
          </h1>
          <div className="w-full h-16 sm:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full mt-4"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white text-gray-900 px-4 md:px-20 py-12">
        {/* About Us Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12"
          data-aos="fade-up"
        >
          {/* Image */}
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full md:w-1/2 h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
            data-aos="fade-right"
          />

          {/* Text */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
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

        {/* Vision & Mission Section */}
        <div
          className="flex flex-col md:flex-row items-center gap-8 mt-20"
          data-aos="fade-up"
        >
          {/* Text */}
          <div className="w-full md:w-1/2 md:order-1" data-aos="fade-right">
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

          {/* Image */}
          <div className="w-full md:w-1/2 md:order-2" data-aos="fade-left">
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
