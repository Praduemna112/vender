import React from "react";

const PlayButton = ({ size = 64, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      width={size}
      height={size}
      className="cursor-pointer hover:scale-110 transition-transform duration-300"
    >
      {/* Gradient for inner circle */}
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff30" />
          <stop offset="100%" stopColor="#00000070" />
        </radialGradient>
      </defs>

      {/* Outer ring */}
      <circle
        cx="36"
        cy="36"
        r="34"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* Inner circle with gradient */}
      <circle cx="36" cy="36" r="32" fill="url(#grad)" />

      {/* Play triangle */}
      <path
        d="M30 24 L30 48 L52 36 Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlayButton;
