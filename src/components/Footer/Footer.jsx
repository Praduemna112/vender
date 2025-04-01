import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Company Section */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Contact Us
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Careers
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Enquire Now
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-blue-600 cursor-pointer hover:text-orange-500 transition-transform duration-300 transform hover:scale-110" />
            <FaInstagram className="text-pink-500 cursor-pointer hover:text-orange-500 transition-transform duration-300 transform hover:scale-110" />
            <FaLinkedinIn className="text-blue-700 cursor-pointer hover:text-orange-500 transition-transform duration-300 transform hover:scale-110" />
          </div>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Terms & Conditions
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Return, Refund & Cancellation Policy
            </li>
          </ul>
        </div>

        {/* Our Offerings Section */}
        <div>
          <h3 className="font-bold mb-4">Our Offerings</h3>
          <ul className="space-y-2">
            {[
              "Beverage Vending Machine",
              "Healthy Food Vending Machine",
              "Automatic Vending Machine",
              "Smart Vending Machine",
              "Buy Vending Machine In India",
              "Vending Machine Operators",
              "Vending Machine On Rent",
              "Snack Vending Machine On Rent",
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <p className="hover:text-orange-500 transition-colors duration-300">
            SUNCITY WING B/ 2 Apartment building in Solapur, Maharashtra
          </p>
          <p className="mt-2 cursor-pointer hover:text-orange-500 transition-colors duration-300">
            Get Directions
          </p>
          <p className="mt-4 text-orange-500 font-bold cursor-pointer hover:text-orange-600 transition-colors duration-300">
            Download our App to get Instant Nourishment
          </p>
          <div className="flex space-x-4 mt-4">
            <img
              src="/path/to/google-play.png"
              alt="Google Play"
              className="h-8 cursor-pointer transition-transform duration-300 transform hover:scale-110"
            />
            <img
              src="/path/to/app-store.png"
              alt="App Store"
              className="h-8 cursor-pointer transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600">
        © 2025 Vender. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
