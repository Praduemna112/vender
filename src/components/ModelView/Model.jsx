import React, { useState } from "react";
import demoimage1 from "../../assets/demoImage_1.jpg";
import demoimage2 from "../../assets/demoImage_2.jpg";
import demoimage3 from "../../assets/demoImage_3.jpg";

const images = [
  {
    src: demoimage1,
    title: "Capacity",
    description:
      "This is the description for Model One. It features great quality and performance.",
    title2: "Specification",
    specs: [
      ["Weight", "1.5kg"],
      ["Battery", "4000mAh"],
      ["Display", '13.3" Retina'],
      ["Processor", "Intel i5"],
      ["RAM", "8GB"],
      ["Storage", "256GB SSD"],
      ["Camera", "12MP"],
      ["Color", "Silver"],
    ],
  },
  {
    src: demoimage2,
    title: "Model Two",
    description:
      "This is the description for Model Two. It has a sleek design and modern features.",
    specs: [
      ["Weight", "1.3kg"],
      ["Battery", "4500mAh"],
      ["Display", '14" FHD'],
      ["Processor", "Intel i7"],
      ["RAM", "16GB"],
      ["Storage", "512GB SSD"],
      ["Camera", "16MP"],
      ["Color", "Space Gray"],
    ],
  },
  {
    src: demoimage3,
    title: "Model Three",
    description:
      "This is the description for Model Three. It is known for reliability and value.",
    specs: [
      ["Weight", "1.8kg"],
      ["Battery", "5000mAh"],
      ["Display", '15.6" HD'],
      ["Processor", "AMD Ryzen 5"],
      ["RAM", "8GB"],
      ["Storage", "1TB HDD"],
      ["Camera", "8MP"],
      ["Color", "Black"],
    ],
  },
];

const Model = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-orange-700 opacity-80" />
        <div className="relative z-10 flex flex-col items-center text-white text-center mt-32 sm:mt-36 md:mt-48 gap-y-8 sm:gap-y-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Models</h1>
          <div className="w-screen h-12 sm:h-16 md:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full" />
        </div>
      </section>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 rounded-full font-medium transition text-sm sm:text-base ${
              activeIndex === idx
                ? "bg-orange-600 text-white"
                : "bg-gray-200 hover:bg-orange-400 hover:text-white"
            }`}
          >
            Model {idx + 1}
          </button>
        ))}
      </div>

      {/* Rectangle Display Section */}
      <div className="mt-10 flex justify-center px-4 sm:px-8">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-6 bg-white border border-gray-300 rounded-2xl shadow-md p-6 sm:p-8">
          {/* Image */}
          <div className="w-full md:w-2/3 flex justify-center">
            <img
              src={images[activeIndex].src}
              alt={`Model ${activeIndex + 1}`}
              className="max-w-sm w-full h-auto object-contain rounded-lg border border-gray-200 shadow-sm"
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 md:text-left space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {images[activeIndex].title}
            </h2>
            <p className="text-gray-600 text-base">
              {images[activeIndex].description}
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">
              {images[activeIndex].title2}
            </h2>

            {/* Table */}
            <div className="mt-4 w-full">
              <table className="w-full text-sm text-left text-gray-700 border border-gray-300 rounded-lg border-collapse table-fixed">
                <thead className="bg-orange-500 text-white">
                  <tr>
                    <th className="px-4 py-2 font-semibold border border-gray-300">
                      Specification
                    </th>
                    <th className="px-4 py-2 font-semibold border border-gray-300">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {images[activeIndex].specs.map(([label, value], idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-2 bg-orange-100 font-medium border border-gray-300 break-words">
                        {label}
                      </td>
                      <td className="px-4 py-2 border border-gray-300 break-words">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer before Footer */}
      <div className="h-20 sm:h-32" />
    </>
  );
};

export default Model;
