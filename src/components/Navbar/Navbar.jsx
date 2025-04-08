import React, { useState, useEffect } from "react";
import CircuitLogo from "../CircuitLogo/CircuitLogo";
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
      className={`w-full top-0 left-0 z-[100] transition-all duration-300 ${
        isFixed
          ? "fixed bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400"
          : "absolute bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-4 py-2 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <CircuitLogo className="w-14 h-14" />
          <h1 className="text-xl font-bold text-white">PCB Technology</h1>
        </Link>

        <div className="flex items-center space-x-8 ml-auto">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium text-black">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/service", label: "Service" },
              { to: "/models", label: "Models" },
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
          </ul>

          {/* Mobile Menu Icon */}
          <div
            onClick={() => setNavOpen(true)}
            className="md:hidden bg-orange-400 text-white text-3xl cursor-pointer p-2 rounded"
          >
            <AiOutlineMenu className="text-2xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navOpen && (
        <div
          onClick={() => setNavOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-[90]"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/5 bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 text-white z-[100] transform transition-transform duration-500 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose
            className="text-3xl cursor-pointer"
            onClick={() => setNavOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-start px-6 space-y-6 py-8 text-lg font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/service", label: "Service" },
            { to: "/models", label: "Models" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setNavOpen(false)}
                className="hover:text-white transition duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <FaWhatsapp className="text-green-200" />
            <a
              href="https://wa.me/918308557539"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +91 8308557539
            </a>
          </li>
          <li className="flex items-start gap-2 w-full">
            <IoMail className="text-blue-500 text-xl mt-1" />
            <a
              href="mailto:deosthalepraduemna@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sm break-words"
            >
              deosthalepraduemna@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
