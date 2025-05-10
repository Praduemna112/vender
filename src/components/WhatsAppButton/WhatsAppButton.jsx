import React from "react";
import whatsappIcon from "../../assets/whatsappIcon.png";

const WhatsAppButton = () => {

  return (
    <a
       href="https://wa.me/918329987533?text=Let%20me%20know%20more%20details%20about%20PTM%20Machine"
      target="_blank"
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-14 h-14 sm:w-20 sm:h-20 hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
};

export default WhatsAppButton;
