import React, { useEffect, useState } from "react";
import Card from "./Card";

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
const startupsData1 = [
  {
    name: "xFarm Technologies",
    isVerified: true,
    zer: "#992BFF80",
    subtags: ["Actively raising", "France based"],
    description:
      "Farm technologies offer smart tools and innovations to boost crop yield, reduce labor, and enhance farming efficiency",
    categories: [
      { name: "EdTech", isMuted: false },
      { name: "AI/ML", isMuted: false },
      { name: "Productivity", isMuted: false },
      { name: "HR", isMuted: true },
    ],
    additionalCategoriesCount: 2,
    location: "United Kingdom",
    followers: 123,
    businessModel: "B2B & B2C",
    metrics: {
      raise: "$842K",
      investors: 9,
      valuation: "£3.6M",
      employees: 28,
    },
    targetRaise: "£350,000",
    monthlyRevenue: "–",
    growthRate: "103%",
    note: "$1.2 Million in product sold in first two years.",
    chips: [
      "VC-Backed",
      "Last Chance",
      "$1M Revenue",
      "Veteran Founder",
      "Get Early Access",
    ],
  },
  {
    name: "xFarm Technologies",
    isVerified: true,
    zer: "#992BFF80",
    color: "#17a35a", // Green
    subtags: ["Actively raising", "France based"],
    description:
      "Farm technologies offer smart tools and innovations to boost crop yield, reduce labor, and enhance farming efficiency",
    categories: [
      { name: "EdTech", isMuted: false },
      { name: "AI/ML", isMuted: false },
      { name: "Productivity", isMuted: false },
      { name: "HR", isMuted: true },
    ],
    additionalCategoriesCount: 2,
    location: "United Kingdom",
    followers: 123,
    businessModel: "B2B & B2C",
    metrics: {
      raise: "$842K",
      investors: 9,
      valuation: "£3.6M",
      employees: 28,
    },
    targetRaise: "£350,000",
    monthlyRevenue: "–",
    growthRate: "103%",
    note: "$1.2 Million in product sold in first two years.",
    chips: [
      "VC-Backed",
      "Last Chance",
      "$1M Revenue",
      "Veteran Founder",
      "Get Early Access",
    ],
  },
  {
    name: "TechFlow Solutions",
    isVerified: false,
    zer: "#992BFF80",
    subtags: ["Seed stage", "US based"],
    description:
      "Revolutionary workflow automation platform that helps businesses streamline their operations and increase productivity by 40%",
    categories: [
      { name: "SaaS", isMuted: false },
      { name: "Automation", isMuted: false },
      { name: "Enterprise", isMuted: true },
    ],
    additionalCategoriesCount: 1,
    location: "San Francisco, CA",
    followers: 87,
    businessModel: "B2B",
    metrics: {
      raise: "$1.2M",
      investors: 5,
      valuation: "$8M",
      employees: 15,
    },
    targetRaise: "$500,000",
    monthlyRevenue: "$45K",
    growthRate: "180%",
    note: "Currently serving 150+ enterprise clients globally.",
    chips: ["Early Stage", "High Growth", "B2B SaaS", "AI-Powered"],
  },
  {
    name: "GreenEnergy Innovations",
    isVerified: true,
    zer: "#992BFF80",
    subtags: ["Series A", "Germany based"],
    description:
      "Clean energy solutions provider focusing on solar panel efficiency and smart grid technology for sustainable future",
    categories: [
      { name: "CleanTech", isMuted: false },
      { name: "Hardware", isMuted: false },
      { name: "Energy", isMuted: false },
    ],
    additionalCategoriesCount: 0,
    location: "Berlin, Germany",
    followers: 245,
    businessModel: "B2B & B2G",
    metrics: {
      raise: "$5.2M",
      investors: 12,
      valuation: "$25M",
      employees: 42,
    },
    targetRaise: "€2M",
    monthlyRevenue: "€180K",
    growthRate: "95%",
    note: "Deployed solutions in 8 countries across Europe.",
    chips: [
      "Clean Energy",
      "Hardware",
      "EU Market",
      "Patent Pending",
      "Government Contracts",
    ],
  },
  {
    name: "HealthTech Analytics",
    isVerified: true,
    zer: "#992BFF80",
    subtags: ["Pre-Series A", "India based"],
    description:
      "AI-powered healthcare analytics platform providing predictive insights for better patient outcomes and hospital management",
    categories: [
      { name: "HealthTech", isMuted: false },
      { name: "AI/ML", isMuted: false },
      { name: "Analytics", isMuted: false },
      { name: "SaaS", isMuted: true },
    ],
    additionalCategoriesCount: 3,
    location: "Bangalore, India",
    followers: 156,
    businessModel: "B2B",
    metrics: {
      raise: "$2.8M",
      investors: 7,
      valuation: "$12M",
      employees: 32,
    },
    targetRaise: "$1.5M",
    monthlyRevenue: "$28K",
    growthRate: "220%",
    note: "Partnered with 50+ hospitals across India and Southeast Asia.",
    chips: [
      "Healthcare",
      "AI-Driven",
      "Rapid Growth",
      "Strategic Partnerships",
      "MVP Ready",
    ],
  },
  {
    name: "FinNext Solutions",
    isVerified: false,
    zer: "#992BFF80",
    subtags: ["Angel round", "Singapore based"],
    description:
      "Next-generation fintech platform offering seamless cross-border payments and digital banking solutions for SMEs",
    categories: [
      { name: "FinTech", isMuted: false },
      { name: "Payments", isMuted: false },
      { name: "Banking", isMuted: false },
    ],
    additionalCategoriesCount: 1,
    location: "Singapore",
    followers: 78,
    businessModel: "B2B & B2C",
    metrics: {
      raise: "$450K",
      investors: 3,
      valuation: "$3.2M",
      employees: 6,
    },
    targetRaise: "$800K",
    monthlyRevenue: "$12K",
    growthRate: "150%",
    note: "Processing $2M+ in monthly transactions across 15 countries.",
    chips: [
      "FinTech",
      "Cross-border",
      "SME Focus",
      "Regulatory Compliant",
      "Angel Backed",
    ],
  },
  {
    name: "xFarm Technologies",
    isVerified: true,
    zer: "#992BFF80",
    subtags: ["Actively raising", "France based"],
    description:
      "Farm technologies offer smart tools and innovations to boost crop yield, reduce labor, and enhance farming efficiency",
    categories: [
      { name: "EdTech", isMuted: false },
      { name: "AI/ML", isMuted: false },
      { name: "Productivity", isMuted: false },
      { name: "HR", isMuted: true },
    ],
    additionalCategoriesCount: 2,
    location: "United Kingdom",
    followers: 123,
    businessModel: "B2B & B2C",
    metrics: {
      raise: "$842K",
      investors: 9,
      valuation: "£3.6M",
      employees: 28,
    },
    targetRaise: "£350,000",
    monthlyRevenue: "–",
    growthRate: "103%",
    note: "$1.2 Million in product sold in first two years.",
    chips: [
      "VC-Backed",
      "Last Chance",
      "$1M Revenue",
      "Veteran Founder",
      "Get Early Access",
    ],
  },
  {
    name: "xFarm Technologies",
    isVerified: true,
    zer: "#992BFF80",
    color: "#17a35a", // Green
    subtags: ["Actively raising", "France based"],
    description:
      "Farm technologies offer smart tools and innovations to boost crop yield, reduce labor, and enhance farming efficiency",
    categories: [
      { name: "EdTech", isMuted: false },
      { name: "AI/ML", isMuted: false },
      { name: "Productivity", isMuted: false },
      { name: "HR", isMuted: true },
    ],
    additionalCategoriesCount: 2,
    location: "United Kingdom",
    followers: 123,
    businessModel: "B2B & B2C",
    metrics: {
      raise: "$842K",
      investors: 9,
      valuation: "£3.6M",
      employees: 28,
    },
    targetRaise: "£350,000",
    monthlyRevenue: "–",
    growthRate: "103%",
    note: "$1.2 Million in product sold in first two years.",
    chips: [
      "VC-Backed",
      "Last Chance",
      "$1M Revenue",
      "Veteran Founder",
      "Get Early Access",
    ],
  },
  {
    name: "TechFlow Solutions",
    isVerified: false,
    zer: "#992BFF80",
    subtags: ["Seed stage", "US based"],
    description:
      "Revolutionary workflow automation platform that helps businesses streamline their operations and increase productivity by 40%",
    categories: [
      { name: "SaaS", isMuted: false },
      { name: "Automation", isMuted: false },
      { name: "Enterprise", isMuted: true },
    ],
    additionalCategoriesCount: 1,
    location: "San Francisco, CA",
    followers: 87,
    businessModel: "B2B",
    metrics: {
      raise: "$1.2M",
      investors: 5,
      valuation: "$8M",
      employees: 15,
    },
    targetRaise: "$500,000",
    monthlyRevenue: "$45K",
    growthRate: "180%",
    note: "Currently serving 150+ enterprise clients globally.",
    chips: ["Early Stage", "High Growth", "B2B SaaS", "AI-Powered"],
  },
];

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
          <Cardd
            key={i}
            className="flex flex-col items-center p-4 cursor-pointer"
          >
            <span className="text-2xl">{cat.icon}</span>
            <p className="mt-2 text-sm">{cat.name}</p>
          </Cardd>
        ))}
      </div>
    </section>
  );
};

const startups = [
  {
    name: "Flipkart",
    sector: "E-commerce & Online retail",
    img: "/abhinay/flipkart.jpg",
  },
  { name: "Meesho", sector: "Social E-commerce", img: "/abhinay/red.jpg" },
  { name: "CureSkin", sector: "HealthTech & Fintech", img: "/abhinay/rr.jpg" },
  {
    name: "RecyKal",
    sector: "Recycling Tech Platform",
    img: "/abhinay/rrr.jpg",
  },
];

const RecommendedStartups = () => {
  return (
    <section className="p-6">
      <h2 className="text-lg font-bold mb-4">Recommended Startup</h2>
      <div className="grid grid-cols-4 gap-4">
        {startups.map((startup, i) => (
          <Cardd key={i} className="overflow-hidden rounded-2xl shadow">
            <CarddContent className="p-0">
              <img
                src={startup.img}
                alt={startup.name}
                className="w-full h-40 object-cover"
              />
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
    <div className="p-4 border rounded-xl shadow-sm">
      <h3 className="font-bold mb-3">Understanding Startup</h3>
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

const KeyMarketInsights = () => {
  return (
    <div className="p-4 border rounded-xl shadow-sm">
      <h3 className="font-bold mb-2">Key Market insights 📊</h3>
      <p className="text-sm">
        Revenue of the market research industry worldwide
      </p>
      <p className="font-bold mt-1">53.9B USD</p>
      <p className="text-sm text-gray-600 mt-2">
        Annual growth of global market research revenue
      </p>
      <p className="font-bold text-green-600">4.6%</p>
      <Button className="mt-3 w-full">Get more insights</Button>
    </div>
  );
};

const StartupOpportunities = () => {
  const [localStartups, setLocalStartups] = useState(false);
  return (
    <section
      className="relative w-full h-[350px] flex items-center text-white"
      style={{
        backgroundImage: "url('/still.jpg')", // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-16 flex flex-col gap-4">
        {/* Heading + description */}
        <h2 className="text-3xl font-bold">Investor Hub </h2>
        <p className="max-w-2xl text-sm leading-relaxed">
          An investor hub serves as a central platform connecting startups with
          potential investors and funding sources. It offers insights,
          resources, and tools to help investors identify promising ventures and
          manage their portfolios. For startups, it provides visibility,
          networking, and access to capital. A well-structured investor hub
          plays a crucial role in fostering innovation, collaboration, and
          business growth within the startup ecosystem.
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

function InvestorHub() {
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
        <div className="col-span-1 space-y-6">
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
  );
}

export default InvestorHub;
