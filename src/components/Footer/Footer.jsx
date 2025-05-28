import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../../assets/Instagram_icon.png";
import facebookIcon from "../../assets/Facebook_icon.png";
import linkedinIcon from "../../assets/Linkedin_icon.png";
import youtubeIcon from "../../assets/Youtube_icon.png";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

import googleStore from "../../assets/googleStore.jpg";
import appStore from "../../assets/appStore.jpg";
import CircuitLogo from "../CircuitLogo/CircuitLogo";

const hoverGradient =
  "transition-colors duration-300 hover:bg-gradient-to-tr hover:from-pink-600 hover:via-purple-500 hover:to-yellow-400 hover:text-transparent hover:bg-clip-text";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Social Section */}
        <div className="col-span-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4">
            <CircuitLogo className="w-16 h-16 mb-2 sm:mb-0" />
            <h2 className="text-2xl font-bold bg-gradient-to-tr from-pink-600 via-purple-500 to-yellow-400 text-transparent bg-clip-text">
              JIO VENDOR
            </h2>
          </div>
          <p className={`text-base text-gray-700 mb-4 ${hoverGradient}`}>
            India’s best PTM vending machine manufacturer and supplier.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61575210712307"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full transition-all duration-300 hover:bg-gradient-to-tr hover:from-pink-600 hover:via-purple-500 hover:to-yellow-400"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-8 h-8 rounded-full bg-gray-200 object-contain p-1"
              />
            </a>
            <a
              href="https://www.instagram.com/pcb_technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full transition-all duration-300 hover:bg-gradient-to-tr hover:from-pink-600 hover:via-purple-500 hover:to-yellow-400"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-8 h-8 rounded-full bg-gray-200 object-contain p-1"
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full transition-all duration-300 hover:bg-gradient-to-tr hover:from-pink-600 hover:via-purple-500 hover:to-yellow-400"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-8 h-8 rounded-full bg-gray-200 object-contain p-1"
              />
            </a>
            <a
              href="https://www.youtube.com/@JioVendor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] rounded-full transition-all duration-300 hover:bg-gradient-to-tr hover:from-pink-600 hover:via-purple-500 hover:to-yellow-400"
            >
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="w-8 h-8 rounded-full bg-gray-200 object-contain p-1"
              />
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 col-span-1 md:col-span-3">
          {/* Company + Legal */}
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="font-bold mb-3 text-lg">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className={hoverGradient}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={hoverGradient}>
                    Contact
                  </Link>
                </li>
                <li className={hoverGradient}>Careers</li>
                <li>
                  <Link to="/Enquire" className={hoverGradient}>
                    Enquire Now
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h3 className="font-bold mb-3 text-lg">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacypolicy" className={hoverGradient}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms_conditions" className={hoverGradient}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/return_refund_policy" className={hoverGradient}>
                    Return, Refund & Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Offerings */}
          <div className="col-span-1">
            <h3 className="font-bold mb-3 text-lg">Our Offerings</h3>
            <ul className="space-y-2 text-sm">
               <li>
                <Link to="/models" className={hoverGradient}>
                  Beverage PTM Machine
                </Link>
              </li>
               <li>
                <Link to="/models" className={hoverGradient}>
                 Healthy Food PTM Machine
                </Link>
              </li>
               <li>
                <Link to="/models" className={hoverGradient}>
               Automatic PTM Machine
                </Link>
              </li>
               <li>
                <Link to="/models" className={hoverGradient}>
                Smart PTM Machine
                </Link>
              </li>
                  <li>
                <Link to="/models" className={hoverGradient}>
               PTM Machine Operators
                </Link>
              </li>
                  <li>
                <Link to="/models" className={hoverGradient}>
               PTM Machine On Rent
                </Link>
              </li>
                  <li>
                <Link to="/models" className={hoverGradient}>
              Snack PTM Machine On Rent
                </Link>
              </li>
          
            </ul>
          </div>

          {/* Contact Info */}
          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-bold mb-3 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-medium">Contact No:</span>
                <div className="flex items-center gap-1">
                  <FaWhatsapp className="text-green-500" />
                  <a
                    href="https://wa.me/918329987533?text=Let%20me%20know%20more%20details%20about%20PTM%20Machine"
                    target="_blank"
                    className="text-black hover:text-orange-600 underline break-all"
                  >
                    +91 8329987533
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-medium">Email:</span>
                <div className="flex items-center gap-1">
                  <IoMail className="text-red-500" />
                  <a
                    href="mailto:extrauserdata@gmail.com"
                    target="_blank"
                    className="text-black hover:text-orange-600 underline break-all"
                  >
                    extrauserdata@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            {/* <p className={`text-sm ${hoverGradient}`}>
              SUNCITY WING B/2 Apartment building in Solapur, Maharashtra
            </p> */}
            <p className="mt-2">
              {/* <a
                href="https://maps.app.goo.gl/JjZmPE93rFyCaDnj6"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-sm ${hoverGradient}`}
              >
                Get Directions
                <FaMapMarkerAlt className="ml-2 text-red-600" />
              </a> */}
            </p>
            <p className={`mt-4 font-semibold text-sm ${hoverGradient}`}>
              Download our App to get Instant Nourishment
            </p>
            <div className="flex flex-row space-x-4 mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.yourapp.package"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googleStore}
                  alt="Google Play"
                  className="h-14 w-auto cursor-pointer transition-transform duration-300 transform hover:scale-110"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStore}
                  alt="App Store"
                  className="h-14 w-auto cursor-pointer transition-transform duration-300 transform hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
        © 2025 PCB Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
