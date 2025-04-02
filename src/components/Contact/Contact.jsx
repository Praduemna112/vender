import React from 'react';
import './Contact.css'; // Import CSS file

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
    </div>
  );
};

export default Contact;
