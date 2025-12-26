import React, { useState, useEffect } from "react";
import axios from 'axios';
import SchemeCard from "../../components/SchemeCard";
import Chatbot from "../../components/Chatbot";
import SchemeListings from "./SchemeListings";

import { ArrowRight, Search } from "lucide-react";

// --- ASSET IMPORTS ---
import IndianOil from "../../assets/GovNavigator/1.png";
import Ugc from "../../assets/GovNavigator/2.png";
import Bhel from "../../assets/GovNavigator/3.png";
import Cbi from "../../assets/GovNavigator/4.png";
import Rbi from "../../assets/GovNavigator/5.png";
import Isro from "../../assets/GovNavigator/6.png";
import Drdo from "../../assets/GovNavigator/7.png";
import Cbse from "../../assets/GovNavigator/8.png";
import Sbi from "../../assets/GovNavigator/9.png";
import Call from "../../assets/GovNavigator/call.png";
import Paper from "../../assets/GovNavigator/paper.png";
import Table from "../../assets/GovNavigator/table.png";
import hand from "../../assets/GovNavigator/hand.png";
import ai1 from "../../assets/GovNavigator/ai1.jpg";
import ai2 from "../../assets/GovNavigator/ai2.jpg";
import ai3 from "../../assets/GovNavigator/ai3.jpg";
import ai4 from "../../assets/GovNavigator/ai4.jpg";
import family from "../../assets/GovNavigator/family.png";

// ==========================================
// 1. HERO SECTION COMPONENT
// ==========================================
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Govt. Schemes");
  const items = [
    { label: "Govt. Schemes" }, { label: "Tenders" },
    { label: "Policies" }, { label: "Registration/Licence" },
  ];
  const logos = [IndianOil, Ugc, Bhel, Cbi, Rbi, Isro, Drdo, Cbse, Sbi];

  return (
    <div className="bg-white py-8 w-full mx-auto px-6 text-center">
      <h1 className="font-space w-full mt-2 max-w-4xl mx-auto text-[64px] md:text-7xl mb-6 leading-[0.9] text-center"
        style={{ fontWeight: 900, color: "black" }}>
        Beyond <span className="text-[#093FB4] font-space"> Sentiment</span>
        <br />
        <span className="block text-black font-space">And History</span>
      </h1>

      <div className="flex items-center justify-center gap-3 py-4">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(item.label)}
            className={`flex shadow-[0_4px_10px_rgba(0,0,0,0.3)] mb-8 items-center gap-2 rounded-xl px-4 py-1 font-medium transition-all ${
              activeTab === item.label ? "bg-[#093FB4] text-white" : "bg-white text-gray-700 hover:bg-gray-300 "
            }`}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <Chatbot />

      <div className="flex items-center justify-center gap-4 mt-10">
        {logos.map((logo, index) => (
           <div key={index} className="flex items-center justify-center h-[60px] rounded-full w-[60px] px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
             <img className="h-[30px] w-auto" src={logo} alt="" />
           </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 2. HOW WE DO IT COMPONENT
// ==========================================
const HowWeDoIt = () => {
  return (
    <div className="text-center">
      <h1 className="text-[#093FB4] text-[54px] font-extrabold mt-[91px]">How We Do It</h1>
      <div className="text-[24px] font-semibold font-600 -mt-[16px] text-[#615E63]">
        <h1>Bring Together Government Ecosystem to Make it Easier to Navigate</h1>
      </div>

      <div className="flex items-center justify-center gap-[20px] mt-8 ">
        {[
            { img: Call, title: "Government Schemes", desc: "We design and conduct quantitative studies that provide insights at scale." },
            { img: Paper, title: "Government Policies", desc: "We dive into the minds of consumers to get at the way behind their behaviors." },
            { img: Table, title: "Government Department", desc: "We leverage research insights to help you find a clear path forward." }
        ].map((card, i) => (
            <div key={i} className="max-w-[420px] max-h-[567px]">
                <img className="rounded-[10px]" src={card.img} alt="" />
                <h1 className="text-black text-[24px] font-[Inter] font-medium mt-[15px] text-left indent-[2px] ">{card.title}</h1>
                <p className="text-[16px] font-[Inter] font-normal text-[rgba(0,0,0,0.6)] text-left mt-2">{card.desc}</p>
                <div className="mt-[16px] relative h-8">
                    <h1 className="absolute mt-[8px] text-[#268BFF] font-[Inter] text-base font-normal">Explore</h1>
                    <ArrowRight size={20} strokeWidth={1.5} style={{ transform: "translateY(10px) translateX(60px)", color: "#268BFF" }} />
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 3. POPULAR LISTING COMPONENT
// ==========================================
const PopularListing = () => {
  // Hardcoded Schemes Data
  const schemes = [
    {
        country: "India", status: "Actively raising", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
        title: "Agri Loan-kisan", type: "(Credit card)", isVerified: true, location: "Delhi", ministry: "Ministry of Agriculture",
        description: "Aims to provide farmers with timely and adequate credit...",
        tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
        stats: [{ label: "Interest sub", value: "-2%" }, { label: "Prompt repayment", value: "-3%" }, { label: "Credit rate", value: "-4%" }],
        info: { statesCovered: "24 states covered", acceptanceRate: "90% Acceptance", grantAmount: "Grant Amount", applicationMode: "Application mode online" },
        actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
    },
    // ... duplicate for demo
    {
        country: "India", status: "Actively raising", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
        title: "Agri Loan-kisan", type: "(Credit card)", isVerified: true, location: "Delhi", ministry: "Ministry of Agriculture",
        description: "Aims to provide farmers with timely and adequate credit...",
        tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
        stats: [{ label: "Interest sub", value: "-2%" }, { label: "Prompt repayment", value: "-3%" }, { label: "Credit rate", value: "-4%" }],
        info: { statesCovered: "24 states covered", acceptanceRate: "90% Acceptance", grantAmount: "Grant Amount", applicationMode: "Application mode online" },
        actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
    },
    {
        country: "India", status: "Actively raising", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
        title: "Agri Loan-kisan", type: "(Credit card)", isVerified: true, location: "Delhi", ministry: "Ministry of Agriculture",
        description: "Aims to provide farmers with timely and adequate credit...",
        tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
        stats: [{ label: "Interest sub", value: "-2%" }, { label: "Prompt repayment", value: "-3%" }, { label: "Credit rate", value: "-4%" }],
        info: { statesCovered: "24 states covered", acceptanceRate: "90% Acceptance", grantAmount: "Grant Amount", applicationMode: "Application mode online" },
        actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
    }
  ];

  return (
    <div className="mx-[10%]">
      <div className="text-center mt-30 mb-12">
        <div className="inline-block bg-gray-400 px-6 py-2 rounded-full mb-4">
          <span className="text-gray-700 font-medium">Popular Listing</span>
        </div>
        <p className="text-black max-w-2xl text-[24px] font-600 font-semibold mx-auto">
          Explore the top Schemes/Benefits and discover the <span className="text-[#093FB4]" > ones with the strongest Advantages on Investment potential.</span>
        </p>
      </div>
      <h3 className="text-lg font-semibold text-center mb-8 text-gray-500">Top Trending</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemes.map((s, i) => <SchemeCard key={i} scheme={s} />)}
      </div>
    </div>
  );
};

// ==========================================
// 4. MID NAVIGATION COMPONENT
// ==========================================
const MidNavigation = ({ onViewAll }) => {
  return (
    <div className="flex justify-center p-4 mb-8 ">
      <div className="flex flex-row items-center rounded-xl bg-[#093FB4] w-[80%] justify-between gap-20">
        <div className="flex flex-col items-start justify-between px-[10%] ">
          <h1 className="text-[48px] text-white leading-15 font-bold font-700 mb-[30px]">Want to know more <br /> about the Scheme ?</h1>
          <p className="text-[24px] text-white font-semibold font-600 mb-3 ">All States schemes</p>
          <p className="text-[16px] text-white text-left ">Total central Government subsidy schemes are <br /> avalable on portal.</p>
          <button onClick={onViewAll} className="text-black text-[16px] mt-10 px-4 py-2 font-semibold hover:transform-1.2 items-center bg-white rounded-xl ">
            View All Schemes
          </button>
        </div>
        <div className="max-w-[455px] max-h-[467px]">
          <img src={family} alt="" />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. DATA CATEGORIES COMPONENT
// ==========================================
const DataCategories = () => {
  const [activeDataTab, setActiveDataTab] = useState("Trending Data");
  const [activeSector, setActiveSector] = useState("Sector");

  const dataTabs = ["Trending Data", "Crime", "Rainfall", "Pincode", "Population", "Market"];
  const sectorItems = ["Sector", "Groups", "Central", "State", "APIs", "All Datasets"];
  const sectorData = {
    Sector: [
      { name: "Agriculture, Rural & Environment", schemes: "500+ Schemes", icon: "🌱" },
      { name: "Banking & Insurance", schemes: "224 Schemes", icon: "🏦" },
      { name: "Business & Entrepreneurship", schemes: "500+ Schemes", icon: "🤝" },
      { name: "Education & Learning", schemes: "500+ Schemes", icon: "🎓" },
      { name: "Health & Wellness", schemes: "218 Schemes", icon: "🏥" },
      { name: "Housing & Shelter", schemes: "92 Schemes", icon: "🏠" },
      { name: "Public Safety Law & Justice", schemes: "10 Schemes", icon: "⚖️" },
      { name: "Science IT & Communication", schemes: "70 Schemes", icon: "⚛️" },
      { name: "Skill & Employment", schemes: "271 Schemes", icon: "📊" },
      { name: "Social welfare & Empowerment", schemes: "1000+ Schemes", icon: "🙌" },
    ],
    Groups: Array(10).fill({ name: "Lorem Group", schemes: "Lorem description", icon: "📦" }),
    Central: Array(10).fill({ name: "Lorem Central Scheme", schemes: "Lorem content", icon: "🏛️" }),
    State: Array(10).fill({ name: "Lorem State Data", schemes: "Lorem ipsum", icon: "🗺️" }),
    APIs: Array(10).fill({ name: "Lorem API", schemes: "API info text", icon: "💻" }),
    "All Datasets": Array(10).fill({ name: "Lorem Dataset", schemes: "Sample data text", icon: "📚" }),
  };

  return (
    <div className="bg-white">
      <div className="w-[1300px] mx-auto px-6">
        <div className="flex items-center justify-between mb-8 py-2 bg-[#093FB4] rounded-full">
          <div className="flex gap-2">
            {dataTabs.map((tab) => (
              <button key={tab} onClick={() => setActiveDataTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${activeDataTab === tab ? "text-white relative after:content-[''] after:absolute after:left-[40%] after:bottom-0 after:w-[20%] after:h-[2px] after:bg-gradient-to-r after:from-white after:to-white " : "text-white hover:text-[#003366]"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="relative right-3">
            <input type="text" placeholder="Search Datasets" className="pl-2 pr-4 bg-white text-sm py-1 min-w-[350px] text-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-[#003366]" />
            <Search className="absolute right-1 top-1/2 bg-[#093FB4] rounded-full transform -translate-y-1/2 w-5 h-5 text-white p-1" />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-64 space-y-2">
            {sectorItems.map((item) => (
              <button key={item} onClick={() => setActiveSector(item)}
                className={`w-full text-sm font-normal px-4 py-2.5 rounded-xl flex items-center justify-center transition-all ${activeSector === item ? "bg-[#C0D4FF] border-2 border-[#C0D4FF] text-[#093FB4]" : "bg-[#FFFDFD] text-[#444444] hover:bg-[#C0D4FF] border-2 border-[#EDEDED] hover:border-2 hover:border-[#C0D4FF] "}`}>
                {item}
              </button>
            ))}
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {sectorData[activeSector].map((category, index) => (
                <div key={index} className="bg-white p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h4 className="font-medium text-sm mb-1">{category.name}</h4>
                  <p className="text-xs text-gray-500">{category.schemes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. ECOSYSTEM COMPONENT
// ==========================================
const Ecosystem = () => {
  const ecosystemStakeholders = [
    { name: "Beneficiaries", icon: "💼" },
    { name: "Lenders & Financial Institutions", icon: "📈" },
    { name: "Central/state", icon: "🏢" },
    { name: "Nodal Agencies", icon: "📊" },
    { name: "Facilitators", icon: "📦" },
  ];

  return (
    <div className="py-16">
      <div className=" mx-[20%]">
        <div className="flex flex-row items-left mb-12">
          <div className="text-left max-w-[70%] mb-12 ">
            <h2 className="text-[48px] font-semibold font-[900] text-[#093FB4] mb-4" style= {{fontFamily: "Poppins, sans-serif"}}>
              Access Granular & Relevant Information for Business
            </h2>
            <p className="text-gray-800 text-[18px] font-[400] ">
              Connects various stakeholders of the ecosystem on a single platform to promote inclusive development and ease of doing business.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 mx-4 mb-12 ">
            <img className="w-auto h-[260px]" src={hand} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          {ecosystemStakeholders.map((stakeholder, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-white border-2 border-[#003366] rounded-lg p-4 text-center min-w-[120px]">
                <div className="text-2xl mb-2">{stakeholder.icon}</div>
                <p className="text-sm font-medium text-[#003366]">{stakeholder.name}</p>
              </div>
              {index < ecosystemStakeholders.length - 1 && (<div className="w-8 h-0.5 bg-[#003366] border-dashed border-[#003366]"></div>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 7. BLOG COMPONENT
// ==========================================
const BlogSection = () => {
  const blogPosts = [
    { title: "What is AI and Why Is It Everywhere Now.", desc: "Artificial Intelligence is powering everything...", author: "Abhishek Bhatt", date: "11 Jan 2025", img: ai1 },
    { title: "How AI Can Help Your Business Grow", desc: "Artificial Intelligence is powering everything...", author: "Meghna Singh", date: "17 April 2025", img: ai2 },
    { title: "Top 5 Free AI Tools You should try in 2025", desc: "Artificial Intelligence is powering everything...", author: "Abhishek Bhatt", date: "11 Jan 2025", img: ai3 },
    { title: "What is AI and Why Is It Everywhere Now.", desc: "Artificial Intelligence is powering everything...", author: "Abhishek Bhatt", date: "11 Jan 2025", img: ai4 },
  ];

  return (
    <div className="bg-white py-16">
      <div className="mx-[10%] px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[56px] font-bold text-black flex items-center gap-2">Blog</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl shadow-[0_4px_4px_-2px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_8px_-2px_rgba(0,0,0,0.3)] transition-all overflow-hidden">
              <img src={blog.img} alt={blog.title} className="h-[178px] rounded-2xl py-2 px-2 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-[#093FB4] w-[90%] font-bold text-[18px] font-700 leading-snug hover:underline cursor-pointer">{blog.title}</h3>
                <p className="text-gray-600 text-xs mt-2 mb-3">{blog.desc}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{blog.author}</span><span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1">View more →</a>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 8. STATISTICS COMPONENT
// ==========================================
const Statistics = () => {
  return (
    <div className="text-center mx-[10%] my-16 px-6">
      <h2 className="text-[56px] font-[800] font-extrabold text-black mt-10 mb-8">Why you should choose LeMiCi</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "4000+", label: "Businesses" },
          { number: "2 Lakhs", label: "Investors" },
          { number: "100+", label: "Industries" },
          { number: "20K to 4 Cr", label: "Investment size" },
        ].map((stat, index) => (
          <div key={index} className={`aspect-square flex flex-col items-center justify-center ${index === 1 ? "bg-[#093FB4] text-white" : "bg-[#FFFDFD] border-2 border-[#EDEDED] "}`}>
            <div className="text-3xl font-semibold mb-2">{stat.number}</div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// MAIN PARENT COMPONENT
// ==========================================
const GovtNavigator = () => {
  // 1. STATE: View Toggle
  const [showSchemes, setShowSchemes] = useState(false);

  // 2. STATE: Feature Flags
  const [flags, setFlags] = useState({
    showHero: true,
    showHowWeDoIt: true,
    showPopularListing: true,
    showMidNav: true,
    showDataCategories: true,
    showEcosystem: true,
    showBlog: true,
    showStats: true
  });

  // 3. FETCH: Get flags from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/govt-navigator/flags")
      .then((res) => {
        if (res.data) {
          setFlags(res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching flags:", err);
      });
  }, []);

  // 4. RENDER: Conditional View Switching
  if (showSchemes) {
    return <SchemeListings onBack={() => setShowSchemes(false)} />;
  }

  // 5. RENDER: Landing Page with Flags
  return (
    <div>
      <div className="min-h-screen">
        {flags.showHero && <HeroSection />}
        {flags.showHowWeDoIt && <HowWeDoIt />}
        {flags.showPopularListing && <PopularListing />}
        {flags.showMidNav && <MidNavigation onViewAll={() => setShowSchemes(true)} />}
        {flags.showDataCategories && <DataCategories />}
        {flags.showEcosystem && <Ecosystem />}
        {flags.showBlog && <BlogSection />}
        {flags.showStats && <Statistics />}
      </div>
    </div>
  );
};

export default GovtNavigator;