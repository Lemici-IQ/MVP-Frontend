import React from "react";
import { IKImage } from "imagekitio-react";

const categories = [
  "Food & Beverage",
  "Automobile",
  "Education",
  "Business Service",
  "Fashion",
  "Home Based Business",
  "Health",
  "Retail",
  "Sports, Fitness",
  "Hotel, Travel & Tourism",
  "3+",
];

const foodSections = [
  {
    title: "Quick Service Restaurants",
    items: [
      "Pizza chains",
      "Burger outlets",
      "Fried chicken outlets",
      "Fast food chains",
    ],
  },
  {
    title: "Cafes & Coffee Shops",
    items: [
      "Coffee chains",
      "Specialty cafes",
      "Juice bars",
      "Bubble tea",
    ],
  },
  {
    title: "Bakery & Desserts",
    items: [
      "Bakery chains",
      "Ice cream shops",
      "Popsicle brands",
      "Dessert lounges",
    ],
  },
  {
    title: "Street Food & Snacks",
    items: [
      "Chaat franchises",
      "Momo outlets",
      "Rolls & wraps",
    ],
  },
  {
    title: "Fine Dining & Restaurants",
    items: [
      "Continental cuisine",
      "Vegetarian restaurants",
      "Biryani outlets",
      "Multi-cuisine restaurants",
    ],
  },
  {
    title: "Cloud Kitchens",
    items: [
      "Chef-less kitchens",
      "Delivery-only brands",
    ],
  },
  {
    title: "Beverages",
    items: [
      "Juice bars",
      "Health drinks",
      "Tea chains",
    ],
  },
  {
    title: "Others Food Service",
    items: [
      "Catering services",
      "Food vending",
      "Specialty food items",
    ],
  },
];

const CategoryListingPage = () => {
  return (
    <section className="w-full bg-white px-6 py-14">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl font-bold text-black leading-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Browse All <br /> Franchise Industries
        </h1>
      </div>

      {/* Sub Heading + Search */}
      <div className="max-w-6xl mx-auto mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h2 className="text-2xl font-semibold text-black">
          All Franchise Industries
        </h2>

        <div className="relative w-full md:w-72">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4">
            <IKImage path="/FranchiseHomePage/random1a.png" />
          </span>
          <input
            type="text"
            placeholder="Search Industry"
            className="w-full rounded-[12px] border border-gray-200 pl-10 pr-5 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
          
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-wrap gap-3">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-[12px] border text-sm transition ${
              cat === "Food & Beverage"
                ? "bg-[#EDEDED] text-black border-gray-200"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
        {foodSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-[#268BFF] mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-12">
        <button className="text-sm font-medium text-[#268BFF] hover:underline">
          View all →
        </button>
      </div>
    </section>
  );
};

export default CategoryListingPage;
