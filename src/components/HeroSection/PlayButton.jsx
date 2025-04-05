import React from "react";

const PlayButton = ({ size = 64, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className="cursor-pointer hover:scale-110 transition-transform duration-300"
    >
      <circle cx="32" cy="32" r="32" fill="rgba(0, 0, 0, 0.4)" />
      <polygon points="26,20 26,44 46,32" fill="#fff" />
    </svg>
  );
};

export default PlayButton;
