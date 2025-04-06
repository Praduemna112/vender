import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full font-medium">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="h-[20vh] md:h-[25vh]">
          <div className="absolute inset-0 bg-orange-700 opacity-80"></div>
        </div>

        <div
          className="relative z-10 flex flex-col items-center justify-center h-[25vh] md:h-[30vh] text-white text-center"
          data-aos="fade-down"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 break-words max-w-screen-sm mx-auto">

            We’d love to hear from you…
          </h1>
          <div className="w-full h-16 sm:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full mt-4"></div>
        </div>
      </div>

      {/* Google Form (no animation) */}
      <div className="px-10 sm:px-10 mt-12">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe80A5HFnin0RaoGiUM5qtMK17H3gMDtYknxanBQlVj_D_MNg/viewform?embedded=true"
          className="w-full min-h-[1800px] border-none rounded-md shadow"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>

      {/* Contact & Map Section */}
      <div
        className="mt-16 px-4 sm:px-10 flex flex-col sm:flex-row items-start gap-10"
        data-aos="fade-up"
      >
        {/* Contact Info */}
        <div
          className="w-full sm:w-1/2 pl-4 sm:pl-6 md:pl-10"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-orange-500 mb-6">
            Give us a shout!
          </h2>
          <ul className="space-y-5 text-base sm:text-lg">
            <li>Drop by the office;</li>
            <li>
              <a
                href="https://maps.app.goo.gl/JjZmPE93rFyCaDnj6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline hover:text-orange-600"
              >
                Get Directions
              </a>
            </li>
            <li>Or reach us at:</li>
          </ul>

          <ul className="mt-6 space-y-4 text-base sm:text-lg">
            <li className="flex items-center gap-2">
              <span>Customer Care Number:</span>
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/918308557539"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-orange-600 underline"
              >
                +91 8308557539
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>Email:</span>
              <IoMail className="text-red-500" />
              <a
                href="mailto:deosthalepraduemna@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-orange-600 underline"
              >
                deosthalepraduemna@gmail.com
              </a>
            </li>
          </ul>

          <p className="mt-6 text-base sm:text-lg">
            Connect with us and inquire about Smart Micro Retail Solutions for
            your facility.
          </p>
        </div>

        {/* Map Section */}
        <div
          className="w-full sm:max-w-screen-sm mb-16"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3697.610427975973!2d75.887334!3d17.671018999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQwJzE1LjciTiA3NcKwNTMnMTQuNCJF!5e1!3m2!1sen!2sin!4v1743860324236!5m2!1sen!2sin"
            width="100%"
            height="350"
            className="rounded-lg shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
