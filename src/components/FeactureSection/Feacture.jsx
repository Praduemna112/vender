import React from "react";
import { Download } from "lucide-react";
import vendingMachine from "../../assets/machine1.jpeg";
import settingVender from "../../assets/settingVender.png";

const Feature = () => {
  return (
    <>
      <div className="bg-gray-100 py-12 px-6 md:px-20 rounded-lg relative">
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-12 text-gray-700">
          <div className="transition-transform transform hover:scale-105 duration-300">
            <span className="text-orange-500 text-5xl">⚙️</span>
            <h4 className="font-semibold mt-2 text-lg">Fully Automated and Contactless Solutions</h4>
          </div>
          <div className="transition-transform transform hover:scale-105 duration-300">
            <span className="text-orange-500 text-5xl">↔️</span>
            <h4 className="font-semibold mt-2 text-lg">Bespoke, Flexible and Scalable</h4>
          </div>
          <div className="transition-transform transform hover:scale-105 duration-300">
            <span className="text-orange-500 text-5xl">⏳</span>
            <h4 className="font-semibold mt-2 text-lg">24×7 Availability: Relevance with Convenience</h4>
          </div>
          <div className="transition-transform transform hover:scale-105 duration-300">
            <span className="text-orange-500 text-5xl">🏷️</span>
            <h4 className="font-semibold mt-2 text-lg">Branded, curated, and nutritious range of meals, snacks and beverages</h4>
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-900 px-6 md:px-20 py-12">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 leading-snug">
            India's Leading Vending Machine Supplier Making Everyday Convenience Available - Easier, Smarter, Safer, With Micro Retail Solutions!
          </h1>
        </div>
        {/* First Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Image 1 (Left Side) */}
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
          />

          {/* Text Section */}
          <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">Curated Range of Meals and Snacks</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Ready to Eat (RTE) Meals: Rajma Chawal, Khichdi, Biryani, Pasta, Soups</li>
              <li>Breakfast/All-day dining: Sandwiches, Wraps, Upma, Poha, Noodles, Oats</li>
              <li>Healthy Snacks: Makhana, Popcorn, Baked Snacks, Nuts/Trail mix</li>
              <li>Desserts & Confectionaries: Chocolates, Energy bars, Chikki, Granola bars</li>
            </ul>
          </div>
        </div>
        {/* Add Margin Between Image 1 and Image 2 */}
        <div className="mt-28"></div> {/* Adds spacing */}
        {/* Second Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          {/* Text Section (Left Side) */}
          <div className="w-full sm:w-1/2 sm:ml-28 pr-4 sm:pr-8">
            <h2 className="text-3xl font-semibold text-orange-500 mb-3">Refreshing Range of Beverages</h2>
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
          <div className="w-full sm:w-1/2 flex justify-end">
            <img
              src={settingVender}
              alt="Vending Machine"
              className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Add Margin Between Image 2 and Image 3 */}
        <div className="mt-28"></div> {/* First Section */}
        {/* Third Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Image 3 (Left Side) */}
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
          />
          {/* Text Section */}
          <div className="w-full sm:w-1/2">
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">Health and Personal Care</h2>
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
        <div className="mt-28"></div> {/* Fourth Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          {/* Text Section (Left Side) */}
          <div className="w-full sm:w-1/2  sm:ml-28 pr-4 sm:pr-8">
            <h2 className="text-3xl font-semibold text-orange-500 mb-3">Pantry Supply Services</h2>
            <h3 className="text-lg font-semibold mb-3">
              Allow Vendiman to manage your pantry supplies through Smart Micro Retail Solutions. Use our expertise to save time/resources.
            </h3>
            <ul className="space-y-2 text-lg mt-5">
              <li>Product Categories:</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-lg mt-7">
              <li>Healthy Snacks & Biscuits (Retail & Bulk Packs)</li>
              <li>Ready To Eat Meals – Breakfast/All Day Dining</li>
              <li>Tea & Coffee Essentials</li>
              <li>Beverages</li>
              <li>Bottled Water</li>
            </ul>
          </div>

          {/* Image 2 (Right Side) */}
          <div className="w-full sm:w-1/2 flex justify-end">
            <img
              src={settingVender}
              alt="Vending Machine"
              className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-white text-gray-900 py-16 px-6 sm:px-20">
          {/* Heading */}
          <h2 className="text-center text-4xl font-bold text-orange-500 mb-10">Why choose Vendiman?</h2>

          <div className="flex flex-col sm:flex-row items-center gap-14">
            {/* Vending Machine Image */}
            <div className="w-full h-72 sm:w-1/3 flex justify-end">
              <img
                src={vendingMachine}
                alt="Vending Machine"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full sm:w-2/3 bg-white shadow-md p-14 rounded-lg">
              <div className="text-center">
                <span className="text-orange-500 text-4xl">🍽️</span>
                <p className="font-semibold mt-4">Nutritious Branded F&B merchandise</p>
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
                <p className="font-semibold mt-4">24/7 Availability</p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">🏅</span>
                <p className="font-semibold mt-4">Premium Quality</p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">📦</span>
                <p className="font-semibold mt-4">Inventory Tracking</p>
              </div>
              <div className="text-center">
                <span className="text-orange-500 text-5xl">🔒</span>
                <p className="font-semibold mt-4">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-gray-900 px-6 md:px-20 py-12">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 leading-snug">
          Multi - Sector Approach
          </h1>
          </div>
          </div>



      </div>
    </>
  );
};

export default Feature;
