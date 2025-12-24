import React from "react";
import Card from "./Card";
import Stats from "./Stats";
import { useEffect } from "react";
import { useState } from "react";

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
      <p className="text-sm">Revenue of the market research industry worldwide</p>
      <p className="font-bold mt-1">53.9B USD</p>
      <p className="text-sm text-gray-600 mt-2">
        Annual growth of global market research revenue
      </p>
      <p className="font-bold text-green-600">4.6%</p>
      <Button className="mt-3 w-full">Get more insights</Button>
    </div>
  );
};
const blogs = [
    {
      id: 1,
      img: "./abhinay/ap3.jpg",
      author: "Abhishek Bhatt",
      date: "11 Jan 2025",
      title: "What is AI and Why Is It Everywhere Now.",
      desc: "Artificial Intelligence is powering everything from smartphones to smart cities. In this blog, we explore what AI really means, how it works, and why.",
    },
    {
      id: 2,
      img: "./abhinay/ap2.png",
      author: "Meghna Singh",
      date: "17 April 2025",
      title: "How AI Can Help Your Business Grow",
      desc: "AI tools are revolutionizing the way businesses operate. Discover how automation, chatbots, and data-driven decisions can take your business to the next level—faster and smarter.",
    },
    {
      id: 3,
      img: "./abhinay/ap1.jpg",
      author: "Benny Rand",
      date: "03 Feb 2025",
      title: "Top 5 Free AI Tools You Should Try in 2025",
      desc: "You don’t need a big budget to use AI. Check out these five free tools that boost productivity, design, writing, and content creation—perfect for startups, students, and creators.",
    },
  ];

  
const StartupOpportunities = () => {
  return (
    <section
      className="relative w-full h-[300px] flex flex-col justify-center items-center text-white text-center p-10"
      style={{ backgroundImage: "url('/laptop-bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Startup Opportunities</h2>
        <p className="text-sm mb-6">
          Startup opportunities refer to the chances for entrepreneurs to create and grow new businesses...
        </p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by Industry, Sector, Name"
            className="p-2 rounded-lg w-64 text-black"
          />
          <Button>Add Filter</Button>
        </div>
      </div>
    </section>
  );
};

function Insights() {

const dataUrl = "http://localhost:5000";

const [stats, setStats] = useState([]);
const [showStats, setShowStats] = useState(true); // default true
useEffect(() => {
  const fetchStatsData = async () => {
    try {
      const res = await fetch(`${dataUrl}/api/startups/stats`);
      if (!res.ok) return; // keep defaults

      const result = await res.json();
      setStats(result.stats || []);
    } catch (err) {
      console.error("Stats data API failed", err);
    }
  };

  const fetchStatsFlags = async () => {
    try {
      const res = await fetch(`${dataUrl}/startups/statscomponentFlags`);
      if (!res.ok) return; // keep default true

      const flags = await res.json();

      if (typeof flags.showStats === "boolean") {
        setShowStats(flags.showStats);
      }
    } catch (err) {
      console.error("Stats flags API failed", err);
    }
  };

  fetchStatsData();
  fetchStatsFlags();
}, []);


  return (
    <>
    
    <div className="relative min-h-screen w-full bg-[url('/startups.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text content */}
      <div className="relative text-white px-6 md:px-16 py-12 max-w-4xl">
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Your Vision, Our Intelligence:
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          Every decision counts when you’re building from scratch. Our platform
          provides the precise market foresight and proprietary data needed to
          de-risk your journey, pivot smartly, and capture India’s next big
          opportunity.
        </p>

        <h2 className="text-xl font-bold mb-4">Key Ecosystem Players</h2>

        <div className="space-y-6 text-base leading-relaxed">
          <div>
            <p className="font-bold">1. Founders</p>
            <p>
              (Beyond just “Startups” – focusing on the individual leader) <br />
              <strong>Navigate with clarity.</strong> Strategic data for every
              critical decision. <br />
              <strong>Build with confidence.</strong> Validate ideas, outpace
              the competition.
            </p>
          </div>

          <div>
            <p className="font-bold">2. Investors</p>
            <p>
              <strong>De-risk your investments.</strong> Uncover validated
              market insights and growth potential. <br />
              <strong>Identify high-potential ventures.</strong> Data-driven
              diligence for smarter portfolio choices.
            </p>
          </div>

          <div>
            <p className="font-bold">3. Accelerators</p>
            <p>
              <strong>Strengthen your cohort.</strong> Data-backed insights to
              guide program startups. <br />
              <strong>Enhance mentor effectiveness.</strong> Equip founders with
              real-time market intelligence.
            </p>
          </div>

          <div>
            <p className="font-bold">4. Incubators</p>
            <p>
              <strong>Nurture viable concepts.</strong> Provide early-stage
              ventures with foundational data. <br />
              <strong>Validate market fit faster.</strong> Empower startups from
              ideation to launch.
            </p>
          </div>

          <div>
            <p className="font-bold">5. Startup Programs</p>
            <p>
              (A broader category, including challenges, grants, etc.) <br />
              <strong>Amplify program impact.</strong> Offer participants
              unparalleled data and resources. <br />
              <strong>Drive measurable outcomes.</strong> Equip founders for
              accelerated success.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <div className="bg-gradient-to-b from-white to-blue-50 px-6 py-10">
      {/* VC & Startup Events */}
      <div className="bg-[#D9D9D9] rounded-full inline-block px-7 py-3 text-sm font-semibold text-gray-700 w-full">
        VC & Startup Events
      </div>

      <div className="mt-4 text-gray-700 space-y-3 max-w-3xl ml-5">
        <p>
          Stay informed and engaged with the most impactful venture capital and
          startup events, curated for the Indian ecosystem and beyond.
        </p>
        <p>• Connect with leading investors and innovative founders.</p>
        <p>• Discover emerging trends and investment opportunities.</p>
        <p>• Pitch your startup to a global audience.</p>
        <p>
          <strong>Call to Action:</strong> [Learn More / Register] (button){" "}
          <span className="text-xs text-gray-500">
            Powered by LEMICI Insights
          </span>
        </p>
        <p>• Leverage LEMICI's market data to prepare for any event.</p>
        <p>• Identify key attendees and speakers with our intelligence.</p>
      </div>

      {/* Ecosystem Hub Banner */}
      <div className="mt-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 relative overflow-hidden">
        <p className="max-w-2xl text-sm mb-4">
          Beyond data, we build bridges. Join a vibrant network of founders,
          investors, and ecosystem enablers dedicated to innovation and growth
          in India. "Connect, share, and scale with direct access to India's
          most dynamic"
        </p>
        <h2 className="text-2xl font-bold mb-6">
          Collaborate & Grow: <br /> Our Ecosystem Hub
        </h2>

        <div className="flex gap-4">
          <button className="bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-100">
            Join Our Community
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800">
            Explore Community
          </button>
        </div>
      </div>
    </div>
    <div>
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen px-6 py-10">
      {/* Blog Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Blogs</h2>
        <button className="text-blue-600 hover:underline">Swipe Right →</button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <img src={blog.img} alt={blog.title} className="w-full h-72 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm">
                {blog.author} • {blog.date}
              </p>
              <h3 className="text-lg font-semibold text-blue-600 mt-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>


        {showStats && <Stats data={stats} />}

      {/* Back to Top */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white shadow px-4 py-2 rounded-lg hover:bg-gray-100 text-sm"
        >
          Back to Top ↑
        </button>
      </div>
    </div>
    </div>
    </>
  );
}

export default Insights;

