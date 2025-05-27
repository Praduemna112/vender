import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Email from "./Email";

const Contact = () => {
  return (
    <div className="w-full font-medium">
      {/* === HERO SECTION === */}
      <section
        id="hero"
        className="relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[60vh] bg-gradient-to-br from-pink-500 via-blue-400 to-yellow-400 flex flex-col items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center text-center mt-32 sm:mt-36 md:mt-44 lg:mt-52 gap-y-6 sm:gap-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            We’d love to hear from you…
          </h1>
          <p className="max-w-4xl text-base sm:text-lg md:text-xl text-white font-semibold px-2">
            At PCB Technology, we offer a wide range of PTM vending machine models,
            allowing you to customize them to dispense a variety of products.
          </p>
          <div className="w-screen h-10 sm:h-14 md:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full" />
        </div>
      </section>

      {/* === GET IN TOUCH HEADING === */}

      <div className="py-8 px-4 sm:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          <span>Let's Get </span>
          <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
            In Touch
          </span>
        </h2>
      </div>

      {/* === EMAIL FORM SECTION === */}
      <div className="px-4 sm:px-10 mb-16">
        <Email />
      </div>
      <div className="py-8 px-4 sm:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          <span>How can </span>
          <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
            We Help
          </span>
        </h2>
      </div>

      {/* === CONTACT INFO SECTION === */}

      <div className="px-4 sm:px-10 mb-20 flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-red-200 md:hover:shadow-2xl md:hover:-translate-y-2 transform transition duration-300">

            <h3 className="text-xl font-semibold text-green-600 flex items-center gap-2 mb-2">
              <FaWhatsapp className="text-2xl" />
              WhatsApp
            </h3>
            <p className="text-gray-700 mb-2">
              Chat with our support team directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/918329987533?text=Let%20me%20know%20more%20details%20about%20PTM%20Machine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-green-700 font-medium underline hover:text-green-900"
            >
              +91 8329987533
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 border border-red-200 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
            <h3 className="text-xl font-semibold text-red-600 flex items-center gap-2 mb-2">
              <IoMail className="text-2xl" />
              Email Us
            </h3>
            <p className="text-gray-700 mb-2">
              Send us your queries or proposals via email.
            </p>
            <a
              href="mailto:extrauserdata@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-red-700 font-medium underline hover:text-red-900"
            >
              extrauserdata@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
