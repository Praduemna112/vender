import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-10 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center px-2 py-4 max-w-7xl mx-auto">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-13 h-12 mr-4 rounded-full" />
          <h1 className="text-2xl font-bold text-white">Vender</h1>
        </div>

        {/* Links, Button, and Menu Icon on the right */}
        <div className="flex items-center space-x-8 ml-auto"> {/* Added ml-auto for more gap */}
          {/* Nav Links (Desktop) */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium mr-2 text-white">
            <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:text-orange-500 transition duration-300 cursor-pointer flex items-center space-x-2">
              <a
                href="https://wa.me/918308557539"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaWhatsapp className="mr-1 text-green-500" />
                <span>+91 8308557539</span>
              </a>
            </li>
            <li className="hover:text-orange-500 transition duration-300 cursor-pointer flex items-center space-x-2">
              <a
                href="mailto:deosthalepraduemna@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
               <IoMail className="mr-1 text-blue-600" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12l-4-4m0 0l-4 4m4-4v12M20 12v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8"
                  />
                <span>deosthalepraduemna@gmail.com</span>
              </a>
            </li>
          </ul>

          {/* CTA Button (Desktop) */}
          <button className="hidden md:block bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden text-white text-3xl cursor-pointer"
          >
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`md:hidden absolute bg-white w-full transition-all duration-500 ease-in-out ${
          navOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-8 text-lg font-medium text-gray-700">
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
