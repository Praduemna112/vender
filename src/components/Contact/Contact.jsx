import React from 'react';
import '../styles/Contact.css'; // Import CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>May I help You</h1>
          <div className="hero-gradient"></div>
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
