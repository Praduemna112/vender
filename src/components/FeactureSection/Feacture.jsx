import React from "react";
import { Download } from "lucide-react";
import vendingMachine from "../../assets/machine1.jpeg";
import settingVender from "../../assets/settingVender.png";

const Feature = () => {
  return (
    <>
      <div className="bg-gray-100 py-12 px-6 md:px-20 rounded-lg relative">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-12 text-gray-700">
          <div className="transition-transform transform hover:scale-105 duration-300">
            <span className="text-orange-500 text-5xl">⚙️</span>
            <h4 className="font-semibold mt-2 text-lg">
              Fully Automated and Contactless Solutions
            </h4>
          </div>
          <div className="transition-transform transform hover:scale-105 duration-300">
            <span className="text-orange-500 text-5xl">↔️</span>
            <h4 className="font-semibold mt-2 text-lg">
              Bespoke, Flexible and Scalable
            </h4>
          </div>
          <div className="transition-transform transform hover:scale-105 duration-300">
            <span className="text-orange-500 text-5xl">⏳</span>
            <h4 className="font-semibold mt-2 text-lg">
              24×7 Availability: Relevance with Convenience
            </h4>
          </div>
          <div className="transition-transform transform hover:scale-105 duration-300">
            <span className="text-orange-500 text-5xl">🏷️</span>
            <h4 className="font-semibold mt-2 text-lg">
              Branded, curated, and nutritious range of meals, snacks and
              beverages
            </h4>
          </div>
        </div>

        {/* Download App Button */}
        <button className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-3 font-semibold rounded-r-lg rotate-[-90deg] shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-2xl flex items-center gap-2">
          <Download size={18} /> {/* Download Icon */}
          <span>Download App</span>
        </button>
      </div>

      <div className="bg-white text-gray-900 px-6 md:px-20 py-12">
        {/* Hero Section */}
        <div className="text-center left-6  mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 leading-snug">
            India's Leading Vending Machine Supplier Making Everyday Convenience
            Available - Easier, Smarter, Safer, With Micro Retail Solutions!
          </h1>
        </div>
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image 1 (Left Side) */}
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
          />

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">
              Curated Range of Meals and Snacks
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>
                Ready to Eat (RTE) Meals: Rajma Chawal, Khichdi, Biryani, Pasta,
                Soups
              </li>
              <li>
                Breakfast/All-day dining: Sandwiches, Wraps, Upma, Poha,
                Noodles, Oats
              </li>
              <li>
                Healthy Snacks: Makhana, Popcorn, Baked Snacks, Nuts/Trail mix
              </li>
              <li>
                Desserts & Confectionaries: Chocolates, Energy bars, Chikki,
                Granola bars
              </li>
            </ul>
          </div>
        </div>
        {/* Add Margin Between Image 1 and Image 2 */}
        <div className="mt-28"></div>{" "}
        {/* This adds spacing between the sections */}
        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          {/* Text Section (Left Side) */}
          {/* Text Section (Left Side) - Shifted slightly to the right */}
          <div className="w-full md:w-1/2 ml-10 md:ml-28 pr-4 md:pr-8">
            <h2 className="text-3xl font-semibold text-orange-500 mb-3">
              Refreshing Range of Beverages
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Healthy & Nutritious Juices</li>
              <li>Energy Drinks</li>
              <li>Indian Beverages like Lassi & Chaas</li>
              <li>Packaged Drinking Water</li>
              <li>Aerated Cold Beverages</li>
              <li>Milk-based beverages (Cold Coffee, Milkshakes)</li>
            </ul>
          </div>

          {/* Image 2 (Right Side) */}
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src={settingVender}
              alt="Vending Machine"
              className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Add Margin Between Image 2 and Image 3 */}
        <div className="mt-28"></div> {/* First Section */}
        {/* thierd  section*/}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image 3 (Left Side) */}
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
          />
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">
              Health and Personal Care
            </h2>
            <ul className="space-y-2 text-lg">
              <li>Product Categories:</li>
            </ul>

            <ul className="list-disc pl-5 space-y-2 mt-10 text-lg">
              <li>Sanitary Healthcare</li>
              <li>Sanitizers</li>
              <li>Contraceptive Healthcare</li>
              <li>Face Masks, Gloves & PPE Kits</li>
              <li>Facial Wet Wipes</li>
            </ul>
          </div>
        </div>
        {/* Add Margin Between Image 3 and Image 4 */}
        <div className="mt-28"></div> {/* forth Section */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          {/* Text Section (Left Side) */}
          {/* Text Section (Left Side) - Shifted slightly to the right */}
          <div className="w-full md:w-1/2 ml-10 md:ml-28 pr-4 md:pr-8">
            <h2 className="text-3xl font-semibold text-orange-500 mb-3">
              Pantry Supply Services
            </h2>
            <h3 className="text-lg font-semibold mb-3">
              Allow Vendiman to manage your pantry supplies through a Smart
              Micro Retail Solutions . Use our expertise to save on
              time/resources. Our team advises tested, streamlined solutions
              specific to your daily usage.
            </h3>
            <ul className="space-y-2 text-lg mt-5">
              <li>Product Categories:</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-lg mt-7">
              <li>Healthy Snacks & Biscuits (Retail & Bulk Packs)</li>
              <li>EReady To Eat Meals – Breakfast/All Day Dining</li>
              <li>Tea & Coffee Essentials</li>
              <li>Beverages</li>
              <li>Bottled Water</li>
            </ul>
          </div>

          {/* Image 2 (Right Side) */}
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src={settingVender}
              alt="Vending Machine"
              className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="bg-white text-gray-900 py-16 px-6 md:px-20">
          {/* Heading */}
          <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">
            Why choose Vendiman?
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-14">
            {/* Vending Machine Image */}
            <div className="w-full h-72 md:w-1/3 flex justify-end">
              <img
                src={vendingMachine}
                alt="Vending Machine"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-2/3 bg-white shadow-md p-14 rounded-lg">
              <div className="text-center">
                <span className="text-orange-500 text-4xl">🍽️</span>
                <p className="font-semibold mt-4">
                  Nutritious Branded F&B merchandise
                </p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">⚙️</span>
                <p className="font-semibold mt-4">Fully Automated</p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">👍</span>
                <p className="font-semibold mt-4">Hassle Free</p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">↔️</span>
                <p className="font-semibold mt-4">Convenient & Quick</p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">⏳</span>
                <p className="font-semibold mt-4">24×7 Access</p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">💰</span>
                <p className="font-semibold mt-4">Affordable & Relevant</p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">🙅‍♂️</span>
                <p className="font-semibold mt-4">No human-to-human contact</p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">📊</span>
                <p className="font-semibold mt-4">
                  Bespoke, Flexible & Scalable
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-gray-900 py-16 px-6 md:px-20 shadow-md">
          {/* Heading */}
          <h2 className="text-center text-4xl font-bold text-orange-500  mb-10">
            Multi - Sector Approach
          </h2>

          {/* Paragraph Section */}
          <div className="flex justify-center">
            <p className="max-w-3xl text-center text-lg leading-relaxed">
              We cater to multiple sectors and work with the best vending
              machine manufacturers to be India’s leading vending machine
              supplier delivering Smart Micro Retail Solutions.
            </p>
            
          </div>
        </div>


      </div>
    </>
  );
};

export default Feature;
