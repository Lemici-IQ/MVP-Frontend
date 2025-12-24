import React, { useState } from "react";
import Card from "./Card";
import KeyMarketInsights from "./KeyMarketInsights";
import { useEffect } from "react";

// Internal Cardd component
const Cardd = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl shadow bg-white hover:shadow-lg transition ${className}`}
    >
      {children}
    </div>
  );
};

// Internal CarddContent component
const CarddContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

// Internal Button component
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};


const categories = [
  { name: "AI & ML", icon: "🚀" },
  { name: "E-commerce", icon: "🛒" },
  { name: "Mental Wellness", icon: "💆‍♀️" },
  { name: "Health Tech", icon: "🧑‍⚕️" },
  { name: "Prop. Tech & Real Es.", icon: "👷‍♂️" },
  { name: "B2B SaaS", icon: "💼" },
  { name: "Logistics & Mobility", icon: "🚐" },
  { name: "Clean Tech", icon: "🌱" },
  { name: "EdTech", icon: "🏫" },
  { name: "FoodTech", icon: "🍜" },
  { name: "FinTech", icon: "💳" },
];

const FeaturedCategories = () => {
  return (
    <section className="p-6">
      <h2 className="text-lg font-bold mb-4">Featured Startup Categories</h2>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <Cardd key={i} className="flex flex-col items-center p-4 cursor-pointer">
            <span className="text-2xl">{cat.icon}</span>
            <p className="mt-2 text-sm">{cat.name}</p>
          </Cardd>
        ))}
      </div>
    </section>
  );
};

const startups = [
  { name: "Flipkart", sector: "E-commerce & Online retail", img: "/abhinay/flipkart.jpg" },
  { name: "Meesho", sector: "Social E-commerce", img: "/abhinay/red.jpg" },
  { name: "CureSkin", sector: "HealthTech & Fintech", img: "/abhinay/rr.jpg" },
  { name: "RecyKal", sector: "Recycling Tech Platform", img: "/abhinay/rrr.jpg" },
];

const RecommendedStartups = () => {
  return (
    <section className="p-6">
      <h2 className="text-lg font-bold mb-4">Recommended Startup</h2>
      <div className="grid grid-cols-4 gap-4">
        {startups.map((startup, i) => (
          <Cardd key={i} className="overflow-hidden rounded-2xl shadow">
            <CarddContent className="p-0">
              <img src={startup.img} alt={startup.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{startup.name}</h3>
                <p className="text-sm text-gray-600">{startup.sector}</p>
                <Button className="mt-3 w-full">Explore</Button>
              </div>
            </CarddContent>
          </Cardd>
        ))}
      </div>
    </section>
  );
};

const UnderstandingStartup = () => {
  return (
    <div className="p-4 border rounded-xl shadow-sm py-12">
      <h3 className="font-bold mb-8">Understanding Startup</h3>
      <ul className="text-blue-600 space-y-2 text-sm">
        <li>What problem does the startup aim to solve?</li>
        <li>Who are the target users or customers?</li>
        <li>What is the startup's core product or service?</li>
        <li>When was the startup founded and by whom?</li>
        <li>What stage is the startup in?</li>
      </ul>
    </div>
  );
};



const StartupOpportunities = () => {
  const [localStartups, setLocalStartups] = useState(false);
  const dataUrl = "http://localhost:5000";

const [oppStartupsData1, setOppStartupsData1] = useState([]);
const [showOppStartupList1, setShowOppStartupList1] = useState(true);

  return (
     <section
      className="relative w-full h-[350px] flex items-center text-white"
      style={{
        backgroundImage: "url('/laptop.jpg')", // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-16 flex flex-col gap-4">
        {/* Heading + description */}
        <h2 className="text-3xl font-bold">Startup Opportunities</h2>
        <p className="max-w-2xl text-sm leading-relaxed">
          Startup opportunities refer to the chances for entrepreneurs to create and grow
          new businesses in emerging or evolving markets. These opportunities often arise
          from solving real-world problems with innovative solutions. With advancements in
          technology and changing consumer needs, startups can scale quickly and disrupt
          traditional industries. Investing in the right idea at the right time can lead to
          significant growth and impact.
        </p>

        {/* Search & Filters */}
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          {/* Search bar */}
          <div className="flex items-center bg-white rounded-full px-3 py-2 w-80">
            <input
              type="text"
              placeholder="Industry, Sector, Name"
              className="flex-1 outline-none text-black text-sm px-2"
            />
            <button className="text-gray-500 hover:text-red-500">✕</button>
          </div>

          {/* Add Filter button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
            + Add Filter
          </button>
        </div>

        {/* Category tags */}
        <div className="flex gap-2 mt-2 text-xs">
          <span className="px-3 py-1 bg-white/20 rounded-full">All</span>
          <span className="px-3 py-1 bg-white/20 rounded-full">Industry</span>
          <span className="px-3 py-1 bg-white/20 rounded-full">Sector</span>
          <span className="px-3 py-1 bg-white/20 rounded-full">Name</span>
        </div>
      </div>

      {/* Toggle Switch - Right Corner */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 text-sm">
        <span>Show Local Startups</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={localStartups}
            onChange={() => setLocalStartups(!localStartups)}
            className="sr-only peer"
          />
          <div className="w-10 h-5 bg-gray-400 peer-checked:bg-blue-500 rounded-full after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:top-0.5 after:left-0.5 after:transition-all peer-checked:after:translate-x-5"></div>
        </label>
      </div>
    </section>
  );
};

function StartupOppurtunities() {
    const dataUrl = "http://localhost:5000";
const [oppStartupsData1, setOppStartupsData1] = useState([]);
const [marketInsights, setMarketInsights] = useState({
  marketSize: "",
  growthRate: "",
});

const [showOppStartupList1, setShowOppStartupList1] = useState(true);
const [showKeyMarketInsights, setShowKeyMarketInsights] = useState(true);

useEffect(() => {
  const fetchOppData = async () => {
    try {
      const res = await fetch(`${dataUrl}/api/startups/oppurtnities`);
      if (!res.ok) return;

      const result = await res.json();

      setOppStartupsData1(result.oppstartupsData1 || []);
      setMarketInsights({
        marketSize: result.marketSize || "",
        growthRate: result.growthRate || "",
      });
    } catch (err) {
      console.error("Opp data API failed", err);
    }
  };

  const fetchOppFlags = async () => {
    try {
      const res = await fetch(
        `${dataUrl}/api/startups/oppurtnitiescomponentFlags`
      );
      if (!res.ok) return;

      const flags = await res.json();

      if (typeof flags.showOppStartupList1 === "boolean") {
        setShowOppStartupList1(flags.showOppStartupList1);
      }

      if (typeof flags.showKeyMarketInsights === "boolean") {
        setShowKeyMarketInsights(flags.showKeyMarketInsights);
      }
    } catch (err) {
      console.error("Opp flags API failed", err);
    }
  };

  fetchOppData();
  fetchOppFlags();
}, []);


  return (
    <div>
      <StartupOpportunities />
      {showOppStartupList1 && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-[84rem] mx-auto">
    {oppStartupsData1.map((startup, index) => (
      <Card key={index} startup={startup} />
    ))}
  </div>
)}



      <div className="grid grid-cols-4 gap-6 p-6">
        <div className="col-span-3">
          <FeaturedCategories />
          <RecommendedStartups />
        </div>
        <div className="grid col-span-1 space-y-6 items-center align-middle">
          <div className="flex flex-col gap-18">
            <UnderstandingStartup />
           {showKeyMarketInsights && (
  <KeyMarketInsights
    marketSize={marketInsights.marketSize}
    growthRate={marketInsights.growthRate}
  />
)}

          </div>
        </div>
      </div>
    </div>
  );
}

export default StartupOppurtunities;
