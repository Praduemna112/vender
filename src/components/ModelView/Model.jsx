import React, { useState } from "react";
import demoimage2 from "../../assets/demoImage_2.jpg";
import demoimage3 from "../../assets/demoImage_3.jpg";
import Doorseel from "../../assets/Doorseel.jpg";
import GalaxyModel from "../ModelView/GalaxyModel/GalaxyModel";
import NovaModel from "./NovaModel/NovaModel";
import OrionModel from "./OrionModel/OrionModel";

const FeatureCard = ({ img, title, desc }) => (
  <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition duration-300">
    <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400" />
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  </div>
);

const models = [GalaxyModel, NovaModel, OrionModel];

const Model = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModel = models[activeIndex];

  return (
    <>
      {/* === HERO SECTION === */}
      <section
        id="hero"
        className="relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] bg-gradient-to-br from-pink-500 via-blue-400 to-yellow-400 flex flex-col items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col items-center text-center mt-32 sm:mt-36 md:mt-48 gap-y-8 sm:gap-y-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Models
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            At PCB Technology, we offer a wide range of vending machine models,
            allowing you to customize them to dispense a variety of products.
          </p>
          <div className="w-screen h-12 sm:h-16 md:h-20 bg-gradient-to-r from-orange-400 to-transparent rounded-tl-full rounded-tr-full" />
        </div>
      </section>

      {/* === MODEL SWITCH BUTTONS === */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
        {models.map((model, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`py-2 px-6 rounded-full text-sm sm:text-base md:text-lg font-medium shadow-lg transition duration-300 transform ${
              activeIndex === idx
                ? "bg-violet-900 text-white opacity-95"
                : "bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 text-white hover:brightness-90 hover:scale-105"
            }`}
          >
            {model.name}
          </button>
        ))}
      </div>

      {/* === MODEL CONTENT === */}
      <div className="mt-10 flex justify-center px-4 sm:px-8">
        <div className="w-full max-w-7xl flex flex-col gap-10 bg-white border border-gray-300 rounded-2xl shadow-md p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-2/3 flex justify-center">
              <img
                src={activeModel.image}
                alt={activeModel.name}
                className="max-w-sm w-full h-auto object-contain rounded-lg border border-gray-200 shadow-sm"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 drop-shadow-lg leading-tight pb-1">
                {activeModel.name}
              </h1>

              <p className="text-gray-600 text-base">{activeModel.description}</p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700 border border-gray-300 rounded-lg border-collapse min-w-[20rem] sm:min-w-full">
                  <thead className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 text-white">
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
                    {activeModel.specs.map(([label, value], idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-2 font-medium border border-gray-300">
                          {label}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* === FEATURES === */}
          <div className="w-full">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 mb-8">
  Explore More Features
</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeModel.features.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20 sm:h-32" />
    </>
  );
};

export default Model;
