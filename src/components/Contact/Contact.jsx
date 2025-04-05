import React from "react";
import "./Contact.css"; // Import CSS file
import settingVender from "../../assets/settingVender.png";

import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="w-full font-medium">
      <div className="relative">
        {/* Background Image & Overlay */}
        <div className="h-[10vh] md:h-[20vh]">
          <div className="absolute inset-0 bg-orange-700 opacity-80"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[10vh] md:h-[40vh] text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            We’d love to hear from you…
          </h1>
          <div className="w-full h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full mt-8"></div>
        </div>
      </div>
      <div className="form-container">
        <div className="form-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe80A5HFnin0RaoGiUM5qtMK17H3gMDtYknxanBQlVj_D_MNg/viewform?embedded=true"
            className="form-iframe"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
      <div className="mt-14"></div> {/* Adds spacing */}
      {/* Second Section */}
      <div className="flex flex-col sm:flex-row items-center gap-2">
        {/* Text Section (Left Side) */}
        <div className="w-full sm:w-1/2 sm:ml-28 pr-4 sm:pr-8">
          <h2 className="text-7xl font-semibold text-orange-500 mb-3">
            Give us a shout!
          </h2>
          <ul className="pl-5 space-y-6 text-base">
            <li>Drop by the office;</li>
            <div className="mt-14"></div>
            <li>
              <a
                href="https://maps.app.goo.gl/JjZmPE93rFyCaDnj6" // Replace with your exact location URL if needed
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 underline hover:text-orange-600 transition duration-200"
              >
                Get Directions
              </a>
            </li>
            <div className="mt-14"></div>
            <li>Or reach us at</li>
          </ul>
          <div className="mt-4"></div>
          <ul className="pl-5 space-y-4 text-base">
            <li className="flex items-center gap-3">
              <span>Customer Care Number:</span>
              <FaWhatsapp className="text-green-500 mr-0.5" />
              <a
                href="https://wa.me/918308557539"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-black hover:text-orange-600 transition duration-200 underline">
                  +91 8308557539
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span>Email:</span>
              <IoMail className="text-red-500 mr-0.5" />
              <a
                href="mailto:deosthalepraduemna@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-black hover:text-orange-600 transition duration-200 underline">
                  deosthalepraduemna@gmail.com
                </span>
              </a>
            </li>
          </ul>
          <div className="mt-10 pl-5 text-base">
            <span>
              Connect with us and inquire about Smart Micro Retail Solutions for
              your facility
            </span>
          </div>
        </div>
        {/* Image 2 (Right Side) */}
        <div className="w-full sm:w-1/2 flex-center justify-end mr-2 mb-16 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3697.610427975973!2d75.887334!3d17.671018999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQwJzE1LjciTiA3NcKwNTMnMTQuNCJF!5e1!3m2!1sen!2sin!4v1743860324236!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
