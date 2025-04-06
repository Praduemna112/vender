import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: ['Snacks', 'Smart', 'Next-gen', 'Vending machines','Modern'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="mt-2">
      <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-wide">
        Modern solutions for{" "}
        <span
          className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent font-extrabold"
        >
          {text}
        </span>
        <Cursor cursorStyle="|" cursorColor="#fb923c" />
      </h2>
    </div>
  );
};

export default TypeWriter;
