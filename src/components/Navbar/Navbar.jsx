import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    const heroHeight = heroSection ? heroSection.offsetHeight : 0;

    const handleScroll = () => {
      if (window.scrollY > heroHeight) {
        setIsFixed(false); // Navbar stops being fixed after hero section
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
        isFixed ? "fixed bg-orange-400" : "absolute bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-4 rounded-full" />
          <h1 className="text-2xl font-bold text-white">Vender</h1>
        </div>

        <div className="flex items-center space-x-8 ml-auto">
          <ul className="hidden md:flex space-x-8 text-lg font-medium text-black">
            <li className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
              <Link to="/">Home</Link>
            </li>
            <li className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
              <Link to="/about">About Us</Link>
            </li>
            <li className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
              <Link to="/services">Services</Link>
            </li>
            <li className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
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
            <li className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
              <a
                href="mailto:deosthalepraduemna@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <IoMail className="mr-1 text-blue-600" />
                <span>deosthalepraduemna@gmail.com</span>
              </a>
            </li>
          </ul>

          <div
            onClick={() => setNavOpen(true)}
            className="md:hidden text-white text-3xl cursor-pointer"
          >
            <AiOutlineMenu />
          </div>
        </div>
      </nav>

      {navOpen && (
        <div
          onClick={() => setNavOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-white z-50 transform transition-transform duration-500 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose
            className="text-3xl cursor-pointer"
            onClick={() => setNavOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-center space-y-4 py-8 text-lg font-medium text-gray-700">
          <li>
            <Link to="/" onClick={() => setNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setNavOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setNavOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setNavOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
