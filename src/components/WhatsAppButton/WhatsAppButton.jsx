import React from "react";
import whatsappIcon from "../../assets/whatsappIcon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918329987533?text=Let%20me%20know%20more%20details%20about%20PTM%20Machine"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-6 h-6"
      />
      <span className="font-medium text-sm">Let me join</span>
    </a>
  );
};

export default WhatsAppButton;
