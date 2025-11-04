import React, { useState } from "react";
import SchemeCard from "../../components/SchemeCard";
import {
  ArrowRight,
  Search,
  FileText,
  FolderOpen,
  Filter,
  MapPin,
  Mic,
  Star,
  Check,
  PieChart,
} from "lucide-react";
import Chatbot from "../../components/Chatbot";
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
import india from "../../assets/GovNavigator/india.jpg";
import Vector from "../../assets/GovNavigator/Vector.png";
import hand from "../../assets/GovNavigator/hand.png";
import ai1 from "../../assets/GovNavigator/ai1.jpg";
import ai2 from "../../assets/GovNavigator/ai2.jpg";
import ai3 from "../../assets/GovNavigator/ai3.jpg";
import ai4 from "../../assets/GovNavigator/ai4.jpg";
import family from "../../assets/GovNavigator/family.png";

import SchemeListings from "./SchemeListings";

const GovtNavigator = () => {
  const [showSchemes, setShowSchemes] = useState(false);

  
  const [activeTab, setActiveTab] = useState("Govt. Schemes");
  const [activeDataTab, setActiveDataTab] = useState("Trending Data");
  const [activeSector, setActiveSector] = useState("Sector");

  if (showSchemes) {
    return <SchemeListings onBack={() => setShowSchemes(false)} />; 
    // Pass a back button handler too
  }
  
  const items = [
    { label: "Govt. Schemes" },
    { label: "Tenders" },
    { label: "Policies" },
    { label: "Registration/Licence" },
  ];

  const schemes = [
    {
          country: "India",
          status: "Actively raising",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
          title: "Agri Loan-kisan",
          type: "(Credit card)",
          isVerified: true,
          location: "Delhi",
          ministry: "Ministry of Agriculture",
          description: "Aims to provide farmers with timely and adequate credit to meet their credit needs for cultivation.",
          tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
          stats: [
              { label: "Interest sub", value: "-2%" },
              { label: "Prompt repayment", value: "-3%" },
              { label: "Credit rate", value: "-4%" },
          ],
          info: {
              statesCovered: "24 states covered",
              acceptanceRate: "90% Acceptance",
              grantAmount: "Grant Amount",
              applicationMode: "Application mode online"
          },
          actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
      },
    {
          country: "India",
          status: "Actively raising",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
          title: "Agri Loan-kisan",
          type: "(Credit card)",
          isVerified: true,
          location: "Delhi",
          ministry: "Ministry of Agriculture",
          description: "Aims to provide farmers with timely and adequate credit to meet their credit needs for cultivation.",
          tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
          stats: [
              { label: "Interest sub", value: "-2%" },
              { label: "Prompt repayment", value: "-3%" },
              { label: "Credit rate", value: "-4%" },
          ],
          info: {
              statesCovered: "24 states covered",
              acceptanceRate: "90% Acceptance",
              grantAmount: "Grant Amount",
              applicationMode: "Application mode online"
          },
          actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
      },
    {
          country: "India",
          status: "Actively raising",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
          title: "Agri Loan-kisan",
          type: "(Credit card)",
          isVerified: true,
          location: "Delhi",
          ministry: "Ministry of Agriculture",
          description: "Aims to provide farmers with timely and adequate credit to meet their credit needs for cultivation.",
          tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
          stats: [
              { label: "Interest sub", value: "-2%" },
              { label: "Prompt repayment", value: "-3%" },
              { label: "Credit rate", value: "-4%" },
          ],
          info: {
              statesCovered: "24 states covered",
              acceptanceRate: "90% Acceptance",
              grantAmount: "Grant Amount",
              applicationMode: "Application mode online"
          },
          actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
      }
  ];

  const dataTabs = [
    "Trending Data",
    "Crime",
    "Rainfall",
    "Pincode",
    "Population",
    "Market",
  ];

  const sectorItems = [
    "Sector",
    "Groups",
    "Central",
    "State",
    "APIs",
    "All Datasets",
  ];

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

    Groups: Array(6).fill({ name: "Lorem Group", schemes: "Lorem description", icon: "📦" }),
    Central: Array(6).fill({ name: "Lorem Central Scheme", schemes: "Lorem content", icon: "🏛️" }),
    State: Array(6).fill({ name: "Lorem State Data", schemes: "Lorem ipsum", icon: "🗺️" }),
    APIs: Array(6).fill({ name: "Lorem API", schemes: "API info text", icon: "💻" }),
    "All Datasets": Array(6).fill({ name: "Lorem Dataset", schemes: "Sample data text", icon: "📚" }),
  }; 

  const ecosystemStakeholders = [
    { name: "Beneficiaries", icon: "💼" },
    { name: "Lenders & Financial Institutions", icon: "📈" },
    { name: "Central/state", icon: "🏢" },
    { name: "Nodal Agencies", icon: "📊" },
    { name: "Facilitators", icon: "📦" },
  ];

  const blogPosts = [
    {
    title: "What is AI and Why Is It Everywhere Now.",
    desc: "Artificial Intelligence is powering everything from smartphones to smart cities. In this blog, we explore what AI really means, how...",
    author: "Abhishek Bhatt",
    date: "11 Jan 2025",
    img: ai1, // sample
    },
    {
      title: "How AI Can Help Your Business Grow",
      desc: "Artificial Intelligence is powering everything from smartphones to smart cities. In this blog, we explore what AI really means, how...",
      author: "Meghna Singh",
      date: "17 April 2025",
      img: ai2,
    },
    {
      title: "Top 5 Free AI Tools You should try in 2025",
      desc: "Artificial Intelligence is powering everything from smartphones to smart cities. In this blog, we explore what AI really means, how...",
      author: "Abhishek Bhatt",
      date: "11 Jan 2025",
      img: ai3,
    },
    {
      title: "What is AI and Why Is It Everywhere Now.",
      desc: "Artificial Intelligence is powering everything from smartphones to smart cities. In this blog, we explore what AI really means, how...",
      author: "Abhishek Bhatt",
      date: "11 Jan 2025",
      img: ai4,
    },
  ];

  return (
    <div>
      <div className="min-h-screen">
        <div className="bg-white py-8">
          <div className="w-full mx-auto px-6 text-center">
            {/* Top Section */}
            <div>
              {/* Main Heading */}
              <h1
              className="font-space w-full mt-2 max-w-4xl mx-auto text-[64px] md:text-7xl mb-6 leading-[0.9] text-center"
              style={{
                fontWeight: 900,
                color: "black",
              }}
              >
                Beyond 
                <span className="text-[#093FB4] font-space"> Sentiment</span>
                <br />
                <span className="block text-black font-space">And History</span>
              </h1>

              {/* Tab Navigation Buttons */}
              <div className="flex items-center justify-center gap-3 py-4">
                {items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(item.label)}
                    className={`flex shadow-[0_4px_10px_rgba(0,0,0,0.3)] mb-8 items-center gap-2 rounded-xl px-4 py-1  font-medium transition-all ${
                      activeTab === item.label
                        ? "bg-[#093FB4] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-300 "
                    }` }
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Search Interface */}
              <Chatbot />

              

              <div className="flex items-center justify-center gap-4 mt-10">
                <div className="flex items-center justify-center h-[40px] rounded-full w-[40px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img className="h-[20px] w-auto " src={IndianOil} alt="" />
                </div>
                <div className="flex items-center justify-center h-[50px] rounded-full w-[50px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img className="h-[30px] w-auto " src={Ugc} alt="" />
                </div>
                <div className="flex items-center justify-center h-[60px] rounded-full w-[60px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img className="h-[35px] w-auto " src={Bhel} alt="" />
                </div>
                <div className="flex items-center justify-center h-[70px] rounded-full w-[70px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img className="h-[40px] w-auto " src={Cbi} alt="" />
                </div>
                <div className="flex items-center justify-center h-[80px] rounded-full w-[80px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img className="h-[50px] w-auto " src={Rbi} alt="" />
                </div>
                <div className="flex items-center justify-center h-[70px] rounded-full w-[70px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img className="h-[40px] w-auto " src={Isro} alt="" />
                </div>
                <div className="flex items-center justify-center h-[60px] rounded-full w-[60px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img className="h-[35px] w-auto " src={Drdo} alt="" />
                </div>
                <div className="flex items-center justify-center h-[50px] rounded-full w-[50px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img className="h-[30px] w-auto " src={Cbse} alt="" />
                </div>
                <div className="flex items-center justify-center h-[40px] rounded-full w-[40px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                  <img className="h-[20px] w-auto " src={Sbi} alt="" />
                </div>
              </div>
            </div>

            {/* How We Do It Section */}
            <div>
              <div>
                <h1 className="text-[#093FB4] text-[54px] font-extrabold  mt-[91px]">
                  How We Do It
                </h1>
              </div>

              <div className="text-[24px] font-semibold font-600 -mt-[16px] text-[#615E63]">
                <h1>
                  Bring Together Government Ecosystem to Make it Easier to Navigate
                </h1>
              </div>

              <div className="flex items-center justify-center gap-[20px] mt-8 ">
                <div className="max-w-[420px]  max-h-[567px]  ">
                  <img
                    className="rounded-[10px]"
                    src={Call}
                    alt=""
                  />
                  <h1 className="text-black text-[24px] font-[Inter] font-medium mt-[15px] text-left indent-[2px] ">
                    Government Schemes
                  </h1>
                  <h1 className="text-[16 px]/[20px] tracking-[-3 px]  font-[Inter] font-normal text-[rgba(0,0,0,0.6)] text-left">
                    <span className="indent-[2px] block">
                      We design and conduct quantitative studies
                    </span>
                    <span className="indent-[2px] block">
                      that provide insights at scale.
                    </span>
                  </h1>
                  <div className=" mt-[16px]">
                    <h1 className="absolute  mt-[8px] text-[#268BFF] font-[Inter] text-base font-normal ">
                      Explore
                    </h1>
                    <ArrowRight
                        size={20}
                        strokeWidth={1.5}
                        style={{
                          transform:
                            "translateY(10px) translateX(60px) ",
                          color: "#268BFF",
                        }}
                      />
                    
                  </div>
                </div>
                <div className="max-w-[420px] max-h-[567px]  ">
                  <img
                    className="rounded-[10px]"
                    src={Paper}
                    alt=""
                  />
                  <h1 className="text-black text-[24px] font-[Inter] font-medium mt-[15px] text-left indent-[2px] ">
                    Government Policies
                  </h1>
                  <h1 className="text-[16 px]/[20px] tracking-[-3 px]  font-[Inter] font-normal text-[rgba(0,0,0,0.6)] text-left">
                    <span className="indent-[2px] block">
                      We dive into the minds of consumers to get
                    </span>
                    <span className="indent-[2px] block">
                      at the "way" behind their behaviors.
                    </span>
                  </h1>
                  <div className=" mt-[16px]">
                    <h1 className="absolute  mt-[8px] text-[#268BFF] font-[Inter] text-base font-normal ">
                      Explore
                    </h1>
                    <ArrowRight
                        size={20}
                        strokeWidth={1.5}
                        style={{
                          transform:
                            "translateY(10px) translateX(60px) ",
                          color: "#268BFF",
                        }}
                      />
                    
                  </div>
                </div>
                <div className="max-w-[420px] max-h-[567px] ">
                  <img
                    className=" rounded-[10px]"
                    src={Table}
                    alt=""
                  />
                  <h1 className="text-black text-[24px] font-[Inter] font-medium mt-[15px] text-left indent-[2px] ">
                    Government Department
                  </h1>
                  <h1 className="text-[16 px]/[20px] tracking-[-3 px]  font-[Inter] font-normal text-[rgba(0,0,0,0.6)] text-left">
                    <span className="indent-[2px] block">
                      We leverage research insights to help you
                    </span>
                    <span className="indent-[2px] block">
                      find a clear path forward.{" "}
                    </span>
                  </h1>
                  <div className=" mt-[16px]">
                    <h1 className="absolute  mt-[8px] text-[#268BFF] font-[Inter] text-base font-normal ">
                      Explore
                    </h1>
                    <ArrowRight
                        size={20}
                        strokeWidth={1.5}
                        style={{
                          transform:
                            "translateY(10px) translateX(60px) ",
                          color: "#268BFF",
                        }}
                      />
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Listing Section */}
            <div className="mx-[10%]">
              <div className="text-center mt-30 mb-12">
                <div className="inline-block bg-gray-400 px-6 py-2 rounded-full mb-4">
                  <span className="text-gray-700 font-medium">
                    Popular Listing
                  </span>
                </div>
                <p className="text-black max-w-2xl text-[24px] font-600 font-semibold mx-auto">
                  Explore the top Schemes/Benefits and discover
                  the 
                  <span className="text-[#093FB4]" > ones with the strongest Advantages on
                  Investment potential.</span> 
                </p>
              </div>

              {/* Top Trending Section */}
              <h3 className="text-lg font-semibold text-center mb-8 text-gray-500">
                Top Trending
              </h3>

              {/* Trending Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {schemes.map((s, i) => (
                  <SchemeCard key={i} scheme={s} />
                ))}
              </div>
            </div>
            

            {/* Mid Navigation */}
            <div className="flex justify-center p-4 mb-8 ">
              <div className="flex flex-row items-center rounded-xl bg-[#093FB4] w-[80%]  justify-between gap-20">
                <div className="flex flex-col items-start justify-between px-[10%] ">
                  <h1 className="text-[48px] text-white leading-15 font-bold font-700 mb-[30px]  ">Want to know more <br /> about the Scheme ?</h1>
                  <p className="text-[24px] text-white font-semibold font-600 mb-3 ">All States schemes</p>
                  <p className="text-[16px] text-white text-left ">Total central Government subsidy schemes are <br /> avalable on portal.</p>
                  <button onClick={() => setShowSchemes(true)} className="text-black text-[16px] mt-10 px-4 py-2 font-semibold hover:transform-1.2 items-center bg-white rounded-xl ">
                    View All Schemes
                  </button>
                </div>
              <div className="max-w-[455px] max-h-[467px]">
                <img src={family} alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Categories Section */}
        <div className="bg-white">
          <div className="w-[1300px] mx-auto px-6">
            {/* Data Tabs */}
            <div className="flex items-center justify-between mb-8 py-2 bg-[#093FB4] rounded-full">
              <div className="flex gap-2">
                {dataTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveDataTab(tab)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeDataTab === tab
                        ? "text-white relative after:content-[''] after:absolute after:left-[40%] after:bottom-0 after:w-[20%] after:h-[2px] after:bg-gradient-to-r after:from-white after:to-white "
                        : "text-white hover:text-[#003366]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="relative  right-3 ">
                <input
                  type="text"
                  placeholder="Search Datasets"
                  className="pl-2 pr-4 bg-white text-sm py-1 min-w-[350px] text-gray-600   rounded-full focus:outline-none focus:ring-2 focus:ring-[#003366]"
                />
                <Search className="absolute right-1 top-1/2 bg-[#093FB4] rounded-full transform -translate-y-1/2 w-5 h-5 text-white p-1" />
              </div>
            </div>

            <div className="flex gap-8">
              {/* Sidebar */}
              <div className="w-64 space-y-2">
                {sectorItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSector(item)}
                    className={`w-full  text-sm font-normal px-4 py-2.5  rounded-xl flex items-center justify-center transition-all ${
                      activeSector === item
                        ? "bg-[#C0D4FF] border-2 border-[#C0D4FF] text-[#093FB4]"
                        : "bg-[#FFFDFD] text-[#444444] hover:bg-[#C0D4FF] border-2 border-[#EDEDED] hover:border-2 hover:border-[#C0D4FF] "
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Right Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {sectorData[activeSector].map((category, index) => (
                    <div
                      key={index}
                      className="bg-white  p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
                    >
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

        {/* Ecosystem Section */}
        <div className="py-16">
          <div className=" mx-[20%]">
            <div className="flex flex-row items-left mb-12">
              <div className="text-left max-w-[70%] mb-12 ">
                <h2 className="text-[48px] font-semibold font-[900] text-[#093FB4] mb-4" 
                  style= {{fontFamily: "Poppins, sans-serif"}}
                >
                  Access Granular & Relevant Information for Business
                </h2>
                <p className="text-gray-800 text-[18px] font-[400] ">
                  Connects various stakeholders of the ecosystem on a single
                  platform to promote inclusive development and ease of doing
                  business.
                </p>
              </div>

              {/* Ecosystem Diagram */}
              <div className="flex items-center justify-center gap-8 mx-4 mb-12 ">
                <img className="w-auto h-[260px]" src={hand} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Stakeholders Flow */}
        <div className="flex items-center justify-center gap-4">
              {ecosystemStakeholders.map((stakeholder, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-white border-2 border-[#003366] rounded-lg p-4 text-center min-w-[120px]">
                    <div className="text-2xl mb-2">{stakeholder.icon}</div>
                    <p className="text-sm font-medium text-[#003366]">
                      {stakeholder.name}
                    </p>
                  </div>
                  {index < ecosystemStakeholders.length - 1 && (
                    <div className="w-8 h-0.5 bg-[#003366] border-dashed border-[#003366]"></div>
                  )}
                </div>
              ))}
        </div>

        {/* Blog Section */}
        <div className="bg-white py-16">
          <div className="mx-[10%] px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[56px] font-bold text-black flex items-center gap-2">
                Blog
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts.map((blog, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-[0_4px_4px_-2px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_8px_-2px_rgba(0,0,0,0.3)] transition-all overflow-hidden"
                >
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="h-[178px] rounded-2xl py-2 px-2 w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-[#093FB4] w-[90%] font-bold text-[18px] font-700 leading-snug hover:underline cursor-pointer">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-xs mt-2 mb-3">{blog.desc}</p>

                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More */}
            <div className="text-center mt-8">
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
              >
                View more →
              </a>
            </div>

            {/* Statistics Section */}
            <div className="text-center">
              <h2 className="text-[56px] font-[800] font-extrabold   text-black mt-10 mb-8">
                Why you should choose LeMiCi
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "4000+", label: "Businesses" },
                  { number: "2 Lakhs", label: "Investors" },
                  { number: "100+", label: "Industries" },
                  { number: "20K to 4 Cr", label: "Investment size" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`aspect-square flex flex-col items-center justify-center ${
                      index === 1 ? "bg-[#093FB4] text-white" : "bg-[#FFFDFD] border-2 border-[#EDEDED] "
                    }`}
                  >
                    <div className="text-3xl font-semibold mb-2">{stat.number}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovtNavigator;
