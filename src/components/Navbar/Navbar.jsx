import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpeg";
import { NavLink, Link } from "react-router-dom";
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
        setIsFixed(false);
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
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-4 rounded-full" />
          <h1 className="text-2xl font-bold text-white">Vender</h1>
        </Link>

        <div className="flex items-center space-x-8 ml-auto">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium text-black">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to} className="relative group">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition duration-300 pb-1 ${
                      isActive ? "text-white" : "hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}

            {/* WhatsApp */}
            <li className="flex items-center">
              <a
                href="https://wa.me/918308557539"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition duration-300"
              >
                <FaWhatsapp className="mr-1 text-green-500" />
                +91 8308557539
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center">
              <a
                href="mailto:deosthalepraduemna@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition duration-300"
              >
                <IoMail className="mr-1 text-blue-600" />
                deosthalepraduemna@gmail.com
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            onClick={() => setNavOpen(true)}
            className="md:hidden text-white text-3xl cursor-pointer"
          >
            <AiOutlineMenu />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navOpen && (
        <div
          onClick={() => setNavOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Mobile Menu Drawer */}
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
