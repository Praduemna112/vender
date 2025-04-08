import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import vendingMachine from "../../assets/machine1.jpeg";
import settingVender from "../../assets/settingVender.png";

const Feature = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <>
      {/* Feature Icons Section */}
      <div className="bg-gray-100 py-12 px-6 md:px-20 rounded-lg relative">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-12"
          data-aos="fade-up"
        >
          {[
            ["⚙️", "Fully Automated and Contactless Solutions"],
            ["↔️", "Bespoke, Flexible and Scalable"],
            ["⏳", "24×7 Availability: Relevance with Convenience"],
            [
              "🏷️",
              "Branded, curated, and nutritious range of meals, snacks and beverages",
            ],
          ].map(([icon, title], index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105 duration-300"
            >
              <span className="text-white text-5xl drop-shadow">{icon}</span>
              <h4 className="font-semibold mt-2 text-lg">{title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-white text-gray-900 px-6 md:px-20 py-12">
        {/* Hero Text */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent inline-block p-4 rounded-lg shadow-md">
            India's Leading Vending Machine Supplier Making Everyday Convenience
            Available - Easier, Smarter, Safer, With Micro Retail Solutions!
          </h1>
        </div>

        {/* Section 1 - Meals and Snacks */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
          data-aos="fade-up"
        >
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
          />
          <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
            <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
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

        <div className="mt-28"></div>

        {/* Section 2 - Beverages */}
        <div
          className="flex flex-col sm:flex-row items-center gap-2"
          data-aos="fade-up"
        >
          <div className="w-full sm:w-1/2 sm:ml-28 pr-4 sm:pr-8">
            <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
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
          <div className="w-full sm:w-1/2 flex justify-end">
            <img
              src={settingVender}
              alt="Vending Machine"
              className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-28"></div>

        {/* Section 3 - Health and Personal Care */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
          data-aos="fade-up"
        >
          <img
            src={vendingMachine}
            alt="Vending Machine"
            className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
          />
          <div className="w-full sm:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
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

        <div className="mt-28"></div>

        {/* Section 4 - Pantry Supply Services */}
        <div
          className="flex flex-col sm:flex-row items-center gap-2"
          data-aos="fade-up"
        >
          <div className="w-full sm:w-1/2 sm:ml-28 pr-4 sm:pr-8">
            <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Pantry Supply Services
            </h2>
            <h3 className="text-lg font-semibold mb-3">
              Allow Vendiman to manage your pantry supplies through Smart Micro
              Retail Solutions.
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
          <div className="w-full sm:w-1/2 flex justify-end">
            <img
              src={settingVender}
              alt="Vending Machine"
              className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-28"></div>

        {/* Why Choose Us Section */}
        <div className="bg-white text-gray-900 py-16 px-6 sm:px-20" data-aos="fade-up">
          <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Why choose Vender?
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-14">
            <div className="w-full min-h-80 sm:w-1/3 flex justify-end">
              <img
                src={vendingMachine}
                alt="Vending Machine"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full sm:w-2/3 bg-white bg-opacity-90 shadow-md p-14 rounded-lg text-gray-900">
              {[
                ["🍽️", "Nutritious Branded F&B merchandise"],
                ["⚙️", "Fully Automated"],
                ["👍", "Hassle Free"],
                ["↔️", "Convenient & Quick"],
                ["⏳", "24/7 Availability"],
                ["🏅", "Premium Quality"],
                ["📦", "Inventory Tracking"],
                ["🔒", "Secure Payment"],
              ].map(([icon, text], i) => (
                <div
                  className="text-center"
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <span className="text-5xl text-pink-500">{icon}</span>
                  <p className="font-semibold mt-4">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Heading */}
        <div className="bg-white px-6 md:px-20 py-12" data-aos="fade-up">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold leading-snug bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Multi - Sector Approach
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
