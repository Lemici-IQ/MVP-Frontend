import React, { useState } from "react";
import { FcardGrid } from "./Fcard";

export const FoodFranchisePage = () => {
  const categories = [
    { name: "Sweets & Bakery", img: "/abhinay/franchise/food/sweets.jpg" },
    { name: "Cafe", img: "/abhinay/franchise/food/cfae.jpg "},
    { name: "Catering", img: "/abhinay/franchise/food/catering.jpg" },
    { name: "Restaurant", img: "/abhinay/franchise/food/restarunt.png" },
    { name: "Night Clubs", img: "/abhinay/franchise/food/nigth.jpg" },
    { name: "Quick Bites", img: "/abhinay/franchise/food/quick.jpg" },
    { name: "Biryani", img: "/abhinay/franchise/food/biryani.jpg" },
    { name: "Yogurt", img: "/abhinay/franchise/food/yogurt.jpg" },
  ];

  const franchises = [
    {
      name: "Vikram Thali",
      category: "Food & Beverage",
      img: "/abhinay/franchise/food/thali.jpg",
    },
    {
      name: "Chocolaty Chai",
      category: "Food & Beverage",
      img: "/abhinay/franchise/food/chai.jpg",
    },
    {
      name: "Richie Rich Rolls",
      category: "Food & Beverage",
      img: "/abhinay/franchise/food/o.jpg",
    },
    {
      name: "Richie Rich Rolls",
      category: "Food & Beverage",
      img: "/abhinay/franchise/food/o.jpg",
    },
  ];

  return (
  <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Content */}
      <div className="lg:col-span-2">
        {/* Featured Categories */}
        <h2 className="text-xl font-semibold mb-4">
          Featured food franchise categories
        </h2>
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mb-6">
          {categories.concat(categories).map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-4 border-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm mt-2">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Recommended Franchise */}
        <div className="bg-gray-200 flex flex-wrap gap-2 justify-between items-center mb-3 rounded-xl px-2 py-1">
          <span className="px-4 py-2 rounded-full text-gray-800 text-sm sm:text-base">
            Recommended Franchise
          </span>
          <a href="#" className="text-blue-600 text-sm whitespace-nowrap">
            See all →
          </a>
        </div>

        {/* Franchise Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {franchises.map((f, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden relative shadow-md"
            >
              <img
                src={f.img}
                alt={f.name}
                className="w-full h-44 sm:h-48 md:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <h3 className="font-semibold text-lg">{f.name}</h3>
                <p className="text-sm">{f.category}</p>
                <button className="mt-2 bg-white text-black px-4 py-1 rounded-full self-start">
                  Explore
                </button>
              </div>
            </div>
          ))}
          {/* Placeholder Empty Card */}
          {/* <div className="rounded-2xl border border-gray-200 bg-gray-50 h-48 flex items-center justify-center text-gray-300">
            Empty Slot
          </div> */}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        {/* Understanding Food Franchise */}
        <div className="p-4 border rounded shadow bg-white">
          <h3 className="font-medium mb-3">Understanding Food franchise</h3>
          <ul className="space-y-2 text-blue-600 text-sm">
            <li>
              1. What is customer relationship management software ?
            </li>
            <li>
              2. The benefits of customer relationship management software.
            </li>
            <li>
              3. Typical features of customer relationship management software
            </li>
            <li>
              4. Consideration when purchasing customer relationship management
              software
            </li>
            <li>
              5. Relevant customer relationship management software
            </li>
          </ul>
        </div>

        {/* Market Insights */}
        <div className="p-4 border rounded shadow bg-white">
          <h3 className="font-medium mb-3 flex items-center gap-2">
            Key Market insights
          </h3>
          <p className="text-sm mb-2 text-gray-600">
            Revenue of the market research industry worldwide
          </p>
          <p className="text-blue-600 font-semibold">53.9B USD</p>
          <p className="text-sm mt-2 text-gray-600">
            Annual growth of global market research revenue
          </p>
          <p className="text-blue-600 font-semibold">4.6%</p>
          <button className="mt-3 text-sm text-blue-600 underline">
            Get more insights
          </button>
        </div>
      </div>
    </div>
  );
}

const Opp = () => {
  const items = [
        {
            location: "Gurgaon, India",
            title: "Natural Salon",
            since: "1997",
            logoUrl: "/abhinay/franchise/rrom.jpg",
            description:
                "Own a Natural Salon Franchise – where beauty meets wellness with eco-friendly products, sustainable care, and a luxurious experience for every client...",
            rating: 4.5,
            tags: ["Unit", "Verified", "2022", "Beauty & Health", "High brand recall"],
            stats: { space: "150-250 Sq Ft.", outlets: "350", investment: "₹20-30 Lakhs" },
            highlights: "High brand recall, training support",
            verified: true,
            ctaText: "Send Inquiry",
            c: "#DD75AB"
        },
        {
            location: "Gurgaon, India",
            title: "Haldiram’s",
            since: "1937",
            logoUrl: "/abhinay/franchise/8.png",
            description:
                "Own a Haldiram’s Franchise – bringing India’s favorite snacks, sweets, and authentic flavors to your community with a trusted brand legacy.",
            rating: 4.5,
            tags: ["Unit", "Verified", "2022", "Food & Beverage", "Pan-India presence"],
            stats: { space: "150-250 Sq Ft.", outlets: "350", investment: "₹25-35 Lakhs" },
            highlights: "Pan-India presence, trusted brand",
            verified: true,
            ctaText: "Send Inquiry",
            c: "#FF6265"
        },
        {
            location: "",
            title: "GolfEdge Academy",
            since: "1997",
            logoUrl: "/abhinay/franchise/golf.jpg",
            description:
                "Own a Natural Salon Franchise – where beauty meets wellness with eco-friendly products, sustainable care, and a luxurious experience for every client...",
            rating: 4.2,
            tags: ["Unit", "Verified", "2022", "Beauty & Health", "Niche sports academy"],
            stats: { space: "150-250 Sq Ft.", outlets: "350", investment: "₹15-25 Lakhs" },
            highlights: "Niche sports academy, rising demand",
            verified: true,
            ctaText: "Send Inquiry",
            c: "#7DB3EF"
        },
        {
            location: "Gurgaon, India",
            title: "Natural Salon",
            since: "1997",
            logoUrl: "/abhinay/franchise/rrom.jpg",
            description:
                "Own a Natural Salon Franchise – where beauty meets wellness with eco-friendly products, sustainable care, and a luxurious experience for every client...",
            rating: 4.5,
            tags: ["Unit", "Verified", "2022", "Beauty & Health", "High brand recall"],
            stats: { space: "150-250 Sq Ft.", outlets: "350", investment: "₹20-30 Lakhs" },
            highlights: "High brand recall, training support",
            verified: true,
            ctaText: "Send Inquiry",
            c: "#DD75AB"
        },
        {
            location: "Gurgaon, India",
            title: "Haldiram’s",
            since: "1937",
            logoUrl: "/abhinay/franchise/8.png",
            description:
                "Own a Haldiram’s Franchise – bringing India’s favorite snacks, sweets, and authentic flavors to your community with a trusted brand legacy.",
            rating: 4.5,
            tags: ["Unit", "Verified", "2022", "Food & Beverage", "Pan-India presence"],
            stats: { space: "150-250 Sq Ft.", outlets: "350", investment: "₹25-35 Lakhs" },
            highlights: "Pan-India presence, trusted brand",
            verified: true,
            ctaText: "Send Inquiry",
            c: "#FF6265"
        },
        {
            location: "",
            title: "GolfEdge Academy",
            since: "1997",
            logoUrl: "/abhinay/franchise/golf.jpg",
            description:
                "Own a Natural Salon Franchise – where beauty meets wellness with eco-friendly products, sustainable care, and a luxurious experience for every client...",
            rating: 4.2,
            tags: ["Unit", "Verified", "2022", "Beauty & Health", "Niche sports academy"],
            stats: { space: "150-250 Sq Ft.", outlets: "350", investment: "₹15-25 Lakhs" },
            highlights: "Niche sports academy, rising demand",
            verified: true,
            ctaText: "Send Inquiry",
            c: "#7DB3EF"
        }
    ];
  const [showLocal, setShowLocal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <section
        className="relative w-full h-72 sm:h-80 lg:h-[350px] flex items-center text-white"
        style={{
          backgroundImage: "url('/abhinay/franchise/noodles.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-4">
          {/* Heading + description */}
          <h2 className="text-2xl sm:text-3xl font-bold">Franchise Opportunities</h2>
          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed">
            Discover verified franchise brands across food, retail, wellness, education and more. Filter by sector, investment size,
            or brand name to find your best match. Build faster with brand training and playbooks.
          </p>

          {/* Search & Filters */}
          <div className="flex items-center gap-3 mt-1 sm:mt-2 flex-wrap">
            {/* Search bar */}
            <div className="flex items-center bg-white rounded-full px-2 sm:px-3 py-1.5 sm:py-2 w-full sm:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Industry, Sector, Brand name"
                aria-label="Search franchises by industry, sector or brand name"
                className="flex-1 outline-none text-black text-sm px-2 bg-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-gray-500 hover:text-red-500 px-2"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Add Filter button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
              + Add Filter
            </button>
          </div>

          {/* Category tags */}
          <div className="flex gap-2 mt-2 text-[11px] sm:text-xs flex-wrap">
            <span className="px-3 py-1 bg-white/20 rounded-full">All</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">Industry</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">Sector</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">Investment</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">City</span>
          </div>
        </div>

        {/* Toggle Switch - Right Corner */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 text-xs sm:text-sm">
          <span className="hidden sm:inline">Show Local Franchises</span>
          <label className="relative inline-flex items-center cursor-pointer" aria-label="Toggle local franchises">
            <input
              type="checkbox"
              checked={showLocal}
              onChange={() => setShowLocal((v) => !v)}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-gray-400 peer-checked:bg-blue-500 rounded-full after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:top-0.5 after:left-0.5 after:transition-all peer-checked:after:translate-x-5"></div>
          </label>
        </div>
      </section>

      {/* Listings grid */}
      <FcardGrid
        items={items}
        className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 py-6 sm:py-8 lg:py-10"
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      />
      <FoodFranchisePage />
    </>
  );
};

export default Opp;