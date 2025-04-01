import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.jpeg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false); // Hide navbar when scrolling down
    } else {
      setVisible(true); // Show navbar when scrolling up
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full fixed top-0 left-0 z-10 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="flex justify-between items-center px-10 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-2 rounded-full" />
          <h1 className="text-2xl font-bold text-white">Vender</h1>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-white">
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">About</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Services</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Contact</li>
        </ul>

        {/* CTA Button (Desktop) */}
        <button className="hidden md:block bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <div onClick={() => setNavOpen(!navOpen)} className="md:hidden text-gray-700 text-3xl cursor-pointer">
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </nav>

      {/* Mobile Menu (Slide Down) */}
      <div className={`md:hidden absolute bg-white w-full transition-all duration-500 ease-in-out ${navOpen ? 'top-16 opacity-100' : 'top-[-400px] opacity-0'}`}>
        <ul className="flex flex-col items-center space-y-4 py-8 text-lg font-medium text-gray-700">
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">About</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Services</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
