import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Search, Filter, Download, Share2, Bookmark, Maximize2, 
  MapPin, CheckCircle, BarChart2, DollarSign, 
  Users, TrendingUp, Globe, Building, Star,
  Lightbulb, Rocket, Package, Container, Briefcase, Factory 
} from 'lucide-react';

import header from "../../assets/MRListing/header.png";
import grid1 from "../../assets/MRListing/grid1.jpg";
import grid2 from "../../assets/MRListing/grid2.png";
import grid3 from "../../assets/MRListing/grid3.png";
import grid4 from "../../assets/MRListing/grid4.png";
import grid5 from "../../assets/MRListing/grid5.jpg";
import grid6 from "../../assets/MRListing/grid6.jpg";
import AI from "../../assets/MRListing/AI.jpg";
import cat1 from "../../assets/MRListing/cat1.jpg";
import cat2 from "../../assets/MRListing/cat2.jpg";
import cat3 from "../../assets/MRListing/cat3.jpg";
import cat4 from "../../assets/MRListing/cat4.jpg";
import cat5 from "../../assets/MRListing/cat5.jpg";
import cat6 from "../../assets/MRListing/cat6.jpg";
import cat7 from "../../assets/MRListing/cat7.jpg";
import cat8 from "../../assets/MRListing/cat8.jpg";
import ap from "../../assets/MRListing/ap.png";
import res1 from "../../assets/MRListing/res1.jpg";
import res2 from "../../assets/MRListing/res2.jpg";
import res3 from "../../assets/MRListing/res3.jpg";
import res4 from "../../assets/MRListing/res4.jpg";

// --- Mock Data based on your screenshots ---

const reportsData = [
  // --- ROW 1: Standard Reports (Date/Pages + Provider Rating) ---
  {
    id: 1,
    title: "Golf Club Market",
    subtitle: "India",
    provider: "ResearchAndMarkets",
    date: "2019-2029 | 2025 | ~269 pages",
    delivery: "Delivery Time : 3-5 business days",
    tags: ["Shafts", "Grips", "Clubheads"],
    rating: 5.0,
    logoUrl: grid1, 
    logoWidth: "w-24",
    type: "standard" // Type 1
  },
  {
    id: 2,
    title: "Golf Equipment Market",
    subtitle: "India",
    provider: "imarc.ai",
    date: "2024-2033 | 2025 | ~80 pages",
    delivery: "Delivery Time : 3-5 business days",
    tags: ["Golf equipment & gear"],
    rating: 5.0,
    logoUrl: grid2,
    logoWidth: "w-16",
    type: "standard"
  },
  {
    id: 3,
    title: "Golf Tourism Market",
    subtitle: "India",
    provider: "Grand View Research",
    date: "2025-2030 | 2025 | NA",
    delivery: "Delivery Time : 3-5 business days",
    tags: ["Domestic & International"],
    rating: 5.0,
    logoUrl: grid3,
    logoWidth: "w-20",
    type: "standard"
  },

  // --- ROW 2: Industry/Category Reports (Description + 5 Star Reviews) ---
  {
    id: 4,
    title: "Golf Industry",
    subtitle: "India",
    desc: "Niche but expanding—driven by luxury tourism, real estate, and rising MSME interest.",
    tags: ["MSME", "Export", "Domestic"],
    reviewCount: "200k review",
    logoUrl: grid4,
    logoWidth: "w-12 rounded-full",
    type: "category" // Type 2
  },
  {
    id: 5,
    title: "India's Green Energy Boom",
    subtitle: "India",
    desc: "Driven by 2030 goals and clean-energy investments.",
    tags: ["MSME", "Export", "Domestic"],
    reviewCount: "200k review",
    logoUrl: grid5,
    logoWidth: "w-10",
    type: "category"
  },
  {
    id: 6,
    title: "India's Healthcare Evolution",
    subtitle: "India",
    desc: "$370B sector growing with government and startup support.",
    tags: ["MSME", "Export", "Domestic"],
    reviewCount: "200k review",
    logoUrl: grid6,
    logoWidth: "w-10",
    type: "category"
  }
];

const categories = [
  { name: "Technology", img: cat1 },
  { name: "Finance", img: cat2 },
  { name: "Healthcare", img: cat3 },
  { name: "Manufacturing", img: cat4 },
  { name: "Retail", img: cat5 },
  { name: "Consulting", img: cat6 },
  { name: "Construction", img: cat7 },
  { name: "Education", img: cat8 },
];

const researchServices = [
  { icon: <BarChart2 className="w-6 h-6" />, title: "Market Segmentation Research", desc: "Identify and analyze target market segments with precision AI analysis" },
  { icon: <DollarSign className="w-6 h-6" />, title: "Pricing Research", desc: "Optimize pricing strategies and competitive positioning" },
  { icon: <Users className="w-6 h-6" />, title: "Customer Satisfaction Research", desc: "Measure loyalty and improve customer experience" },
  { icon: <Share2 className="w-6 h-6" />, title: "Brand Awareness Research", desc: "Track brand recognition and market perception" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Market Landscape Reports", desc: "Comprehensive industry overview and trends" },
  { icon: <Globe className="w-6 h-6" />, title: "Competitive Analysis Reports", desc: "In-depth competitor intelligence and insights" },
];

const recommendedResearch = [
  { title: "Finance Insights", sub: "Investment • Banking", img: res1 },
  { title: "Retail Analytics", sub: "Retail • E-commerce", img: res2 },
  { title: "Technology Outlook", sub: "Innovation • Startups", img: res3 },
  { title: "Health Trends", sub: "Medical • Wellness", img: res4 },
];

// --- Components ---



const Hero = () => (
  <div className="relative h-[550px] w-full bg-gray-900 text-white overflow-hidden">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <img 
      src={header}
      alt="Background" 
      className="absolute inset-0 w-full h-full object-cover opacity-60"
    />

    <div className="relative z-10 flex flex-col justify-center h-full px-20 max-w-full mx-auto pt-16">
      <h1 className="text-5xl font-bold mb-4">Market Research</h1>
      <p className="text-gray-300 max-w-full mb-8 leading-relaxed text-lg">
        Market research is the process of collecting and analyzing data about a market to understand customer needs, industry trends, competitors, and growth opportunities. It helps businesses make informed decisions on product development, marketing, pricing, and expansion. The research covers market size, growth drivers, customer segments, competitive landscape, legal factors, and future trends. Insights are often presented through reports, case studies, and infographics, using reliable data sources like government reports, industry publications, and surveys. This research forms the foundation for strategy, content creation, and business planning
      </p>
      
      <div className="flex gap-2 w-full max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full py-3 pl-10 pr-4 rounded-lg bg-white text-gray-800 focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-3 rounded-lg font-medium hover:bg-gray-100">
          <Filter className="w-4 h-4" /> Add Filter
        </button>
      </div>

      <div className="flex items-center gap-4 mt-6 text-xs font-medium">
        <span className="bg-white text-gray-900 px-3 py-1 rounded-full">All</span>
        <span className="text-gray-300 hover:text-white cursor-pointer">Industry</span>
        <span className="text-gray-300 hover:text-white cursor-pointer">Sector</span>
        <span className="text-gray-300 hover:text-white cursor-pointer">Name</span>
        <div className="ml-auto flex items-center gap-2">
            <span className="text-gray-300">Show Local Startups</span>
            <div className="w-10 h-5 bg-gray-600 rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-0.5"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const ReportGrid = () => (
  <div className="bg-white py-12 px-8 lg:px-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reportsData.map((report) => (
        <div 
          key={report.id} 
          // Specific background color #EAF8FF used to match the light blue in the reference
          className="bg-[#EAF8FF] rounded-[32px] flex flex-col justify-between h-full relative shadow-sm"
        >
          <div className='px-6 pt-6'>
            {/* 1. Header: Logo & Title */}
            <div className="flex items-start gap-4 mb-5">
               <div className="h-10 flex items-center shrink-0">
                  <img src={report.logoUrl} alt={report.title} className={`${report.logoWidth} h-full object-contain object-left`} />
               </div>
               <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-0.5">{report.title}</h3>
                  <p className="text-sm text-gray-500">{report.subtitle}</p>
               </div>
            </div>

            {/* 2. Middle Content: Conditional based on Type */}
            <div className="mb-6 min-h-[60px]">
                {report.type === 'category' ? (
                   // Content for Row 2 (Cards 4-6)
                   <p className="text-[15px] text-gray-600 leading-snug font-medium">{report.desc}</p>
                ) : (
                   // Content for Row 1 (Cards 1-3)
                   <div className="text-[15px] text-gray-600 space-y-1 font-normal">
                      <p>{report.date}</p>
                      <p>{report.delivery}</p>
                   </div>
                )}
            </div>

            {/* 3. Tags Pills */}
            <div className="flex flex-wrap gap-3 mb-6">
               {report.tags.map((tag, idx) => (
                 <span key={idx} className="bg-white px-6 py-2 rounded-full text-xs text-gray-700 shadow-sm font-medium border border-transparent">
                   {tag}
                 </span>
               ))}
            </div>

            {/* 4. Rating Section: Conditional Layout */}
            <div className="mb-8">
               {report.type === 'category' ? (
                   // Style for Row 2: 5 Stars + Review Count
                   <div className="flex items-center gap-1">
                       {[1,2,3,4,5].map((s) => (
                           <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                       ))}
                       <span className="text-xs text-gray-500 ml-1">({report.reviewCount})</span>
                   </div>
               ) : (
                   // Style for Row 1: Single Star + 5.0 + By Provider
                   <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                       <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> 
                       <span>{report.rating.toFixed(1)}</span>
                       <span className="text-gray-400 font-normal">By</span>
                       <a href="#" className="text-[#0ea5e9] hover:underline">{report.provider}</a>
                   </div>
               )}
            </div>
          </div>

          {/* 5. Bottom Action Bar (Grey rounded container) */}
          <div className="bg-[#E5E7EB] rounded-2xl flex justify-between items-center px-12 py-5 mt-auto">
             <button className="text-gray-700 hover:text-black transition"><Download className="w-8 h-8" /></button>
             <button className="text-gray-700 hover:text-black transition"><Share2 className="w-8 h-8" /></button>
             <button className="text-gray-700 hover:text-black transition"><Bookmark className="w-8 h-8" /></button>
             <button className="text-gray-700 hover:text-black transition"><Maximize2 className="w-8 h-8" /></button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AiBanner = () => (
  <div className="w-full px-8 lg:px-20 py-8">
    <div className="relative rounded-3xl overflow-hidden bg-gray-900  flex items-center">
      <img src={AI} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="AI Banner"/>
      
      <div className="relative z-10 w-full px-12  flex flex-col items-center text-center">
        <h2 className="text-4xl lg:text-5xl my-14 py-6 font-semibold text-white mb-2">Transform Your Business Planning With</h2>
        <h2 className="text-4xl lg:text-5xl font-semibold text-cyan-200 mb-8">AI Precision</h2>
        
        <div className="flex gap-20 mb-8 py-4 text-white text-xl font-light">
          <div className="flex items-center gap-2"><CheckCircle className="text-green-400 w-6 h-6"/> Fill In The Blanks, As It Appears On Screen</div>
          <div className="flex items-center gap-2"><CheckCircle className="text-green-400 w-6 h-6"/> Get In-Depth Automated DPR In 5 Minutes</div>
        </div>

        <div className="flex items-center mb-14 justify-between p-2 w-full max-w-5xl mx-auto ">
             <div className="flex flex-col text-left px-4 text-white">
                <span className="text-2xl lg:text-3xl pb-2 font-medium">AI Project Report Starts From</span>
                <div className="flex gap-4 mt-2">
                    <button className="bg-white text-gray-900 px-5 py-2 rounded-2xl text-md font-bold">Professional Grade</button>
                    <button className="bg-white text-gray-900 px-5 py-2 rounded-2xl text-md font-bold">AI-Driven Market Research</button>
                </div>
             </div>
             
             <div className="flex flex-col items-center gap-2 px-4 ">
                 <div className="text-white text-right">
                     <span className="block text-4xl font-semibold">USD $120</span>
                 </div>
                 <div>
                  <button className="bg-teal-700 hover:bg-teal-600 text-white px-14 py-3 rounded-lg font-medium shadow-lg transition">
                      Create Report
                  </button>
                 </div>
                 
             </div>
        </div>
      </div>
    </div>
  </div>
);

const CustomResearch = () => (
  <div className="flex flex-col lg:flex-row gap-12 px-8 lg:px-20 py-16 bg-white">
    {/* Left Box */}
    <div className="lg:w-1/3 border rounded-2xl p-8 shadow-sm h-fit">
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">Want A Customised Research?</h2>
      <p className="text-gray-600 mb-8 text-medium font-medium leading-relaxed">
        Experience The Future Of Business Planning With Projectzo's AI-Powered Detailed Project Report Software. Designed To Streamline Banking And Government Guidelines By Utilizes Advanced AI Technology To Ensure Precision And Efficiency.
      </p>
      <div className="mb-4">
         <span className="text-gray-500 text-sm">Visit </span>
         <a href="#" className="text-blue-500 hover:underline">https://www.lemici.com/</a>
      </div>
    </div>

    {/* Right Grid */}
    <div className="lg:w-2/3">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">Research Services & Reports</h3>
        <a href="#" className="text-blue-500 text-sm font-medium hover:underline">View more →</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        {researchServices.map((service, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="w-12 h-12 flex-shrink-0 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              {service.icon}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-normal mb-1">{service.title}</h4>
              <p className="text-gray-500 text-normal pr-24 leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RegionalSection = () => (
  <div className="px-8 lg:px-20 py-16 bg-white font-sans">
    {/* Section Header */}
    <div className="text-center mb-10">
      <h2 className="text-5xl font-semibold text-gray-900">
        <span className="text-[#0e7490]">Market Research</span> Across India
      </h2>
      <p className="text-gray-500 text-[18px] mt-4">Discover insights, opportunities, and research reports for your region</p>
    </div>
    
    {/* Search Bar */}
    <div className="max-w-3xl mx-auto mb-16">
      <div className="relative ">
        <Search className="absolute left-6 top-3.5 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search state..." 
          className="w-full pl-16 pr-6 py-3.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm text-gray-700 placeholder-gray-400" 
        />
      </div>
      <p className="text-center  text-gray-500 mt-4 font-semibold tracking-wide">50+ States & Union Territories</p>
    </div>

    {/* Main Content Box with Shadow */}
    <div className="flex flex-col lg:flex-row p-10">
      
      {/* LEFT COLUMN: Map & Stats */}
      <div className="lg:w-[55%] flex flex-col gap-8 pr-8">
        <div className="flex gap-8 items-start">
           {/* Map Image Block - Updated to use Image */}
           <div className="relative w-70 h-70 rounded-2xl ">
              <img 
                 src={ap} 
                 alt="Andhra Pradesh Map" 
                 className="w-full h-full object-cover rounded-2xl"
              />
              
           </div>

           {/* Title & Stats */}
           <div className="flex-1">
              <h3 className="text-4xl font-semibold text-gray-900 mb-10">Andhra Pradesh</h3>
              <p className="text-lg font-medium text-gray-500 mb-10">Market Ecosystem Overview</p>
              
              <div className="flex gap-4">
                  <div className="border border-gray-200 rounded-xl px-6 py-6 min-w-[160px] shadow-sm">
                      <span className="block font-bold text-[#0284c7] text-2xl mb-1">15+</span>
                      <span className="text-lg text-gray-500 font-medium">Research Completed</span>
                  </div>
                  <div className="border border-gray-200 rounded-xl px-6 py-6 min-w-[160px] shadow-sm">
                      <span className="block font-bold text-[#0284c7] text-2xl mb-1">20+</span>
                      <span className="text-lg text-gray-500 font-medium">Industry Analysts</span>
                  </div>
              </div>
           </div>
        </div>

        <p className="text-lg text-gray-600 leading-7">
            Andhra Pradesh is emerging as a hub for manufacturing, textiles, and agriculture research. The state's focus on innovation, exports, and sustainability makes it an attractive region for market studies.
        </p>
        
        {/* Grey Bottom Stats Box */}
        <div className="grid grid-cols-3 gap-6 bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
             <div>
                 <Factory className="w-7 h-7 text-gray-800 mb-3"/>
                 <h5 className="font-semibold text-lg text-gray-900 mb-1.5">Key Industries</h5>
                 <p className="text-[16px] text-gray-500 leading-relaxed">Textiles, IT, Pharmaceuticals, Agriculture</p>
             </div>
             <div>
                 <Users className="w-7 h-7 text-gray-800 mb-3"/>
                 <h5 className="font-semibold text-lg text-gray-900 mb-1.5">Major Associations</h5>
                 <p className="text-[16px] text-gray-500 leading-relaxed">APIDC, APEDB, FAPCCI</p>
             </div>
             <div>
                 <TrendingUp className="w-7 h-7 text-gray-800 mb-3"/>
                 <h5 className="font-semibold text-lg text-gray-900 mb-1.5">Business Growth</h5>
                 <p className="text-[16px] text-gray-500 leading-relaxed">18% YoY in manufacturing & exports</p>
             </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden lg:block w-px bg-gray-200 mx-4"></div>

      {/* RIGHT COLUMN: Highlights */}
      <div className="lg:w-[45%] lg:pl-8 mt-8 lg:mt-0 flex flex-col justify-center">
          <h4 className="font-bold text-gray-900 text-2xl mb-2">Key State Highlights</h4>
          <p className="text-lg text-gray-500 mb-8">What makes Andhra Pradesh attractive for business</p>

          <div className="space-y-7">
              {/* Highlight 1: Innovation Hubs */}
              <div className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-gray-700" strokeWidth={2} />
                   </div>
                   <div>
                       <h5 className="font-semibold text-xl text-gray-800 mb-1">Innovation Hubs</h5>
                       <p className="text-sm text-gray-500 leading-relaxed max-w-sm">Multiple R&D centers and accelerators promoting sustainable industrial research and product development.</p>
                   </div>
              </div>

              {/* Highlight 2: Startup Ecosystem */}
              <div className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center shrink-0">
                      <Rocket className="w-5 h-5 text-gray-700" strokeWidth={2} />
                   </div>
                   <div>
                       <h5 className="font-semibold text-xl text-gray-800 mb-1">Startup Ecosystem</h5>
                       <p className="text-sm text-gray-500 leading-relaxed max-w-sm">Strong collaboration between government, incubators, and venture networks supporting data-driven startups.</p>
                   </div>
              </div>

              {/* Highlight 3: Skill Development */}
              <div className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center shrink-0">
                      <Package className="w-5 h-5 text-gray-700" strokeWidth={2} />
                   </div>
                   <div>
                       <h5 className="font-semibold text-xl text-gray-800 mb-1">Skill Development</h5>
                       <p className="text-sm text-gray-500 leading-relaxed max-w-sm">Vocational training programs focusing on market analysis, AI tools, and business forecasting.</p>
                   </div>
              </div>

              {/* Highlight 4: Infrastructure */}
              <div className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center shrink-0">
                      <Container className="w-5 h-5 text-gray-700" strokeWidth={2} />
                   </div>
                   <div>
                       <h5 className="font-semibold text-xl text-gray-800 mb-1">Infrastructure</h5>
                       <p className="text-sm text-gray-500 leading-relaxed max-w-sm">Robust logistics, SEZs, and connectivity via ports, rail, & air for easy trade and survey accessibility.</p>
                   </div>
              </div>
          </div>
      </div>
    </div>
  </div>
);

const BottomSection = () => (
  <div className="px-8 lg:px-20 py-16 bg-white grid grid-cols-1 lg:grid-cols-3 gap-12">
    {/* Left: Featured Categories */}
    <div className="lg:col-span-2">
       <div className="mb-12">
            <h3 className="text-5xl font-semibold text-gray-900 mb-1">Featured Market Research Categories</h3>
            <p className="text-gray-500 text-xl mb-6">The most in-demand categories among business professionals</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="overflow-hidden rounded-4xl aspect-[3/3] mb-2">
                            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
                        </div>
                        <p className="text-center text-lg font-medium text-gray-700">{cat.name}</p>
                    </div>
                ))}
            </div>
            <div className="text-right mt-4">
                <a href="#" className="text-blue-500 text-md hover:underline">View more →</a>
            </div>
       </div>

       {/* Recommended Research */}
       <div>
           <h3 className="text-5xl font-semibold text-gray-900 mb-6">Recommended Market Research</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {recommendedResearch.map((item, idx) => (
                   <div key={idx} className="relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer">
                       <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover"/>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                           <h4 className="text-white font-semibold text-xl">{item.title}</h4>
                           <p className="text-gray-300 text-md mb-2">{item.sub}</p>
                           <button className="bg-white text-gray-900 text-sm font-bold py-1.5 px-4 rounded-full w-full">Explore</button>
                       </div>
                   </div>
               ))}
           </div>
           <div className="text-right mt-6">
                <a href="#" className="text-blue-500 text-md hover:underline">View more →</a>
            </div>
       </div>
    </div>

    {/* Right Sidebar: FAQ & Insights */}
    <div className="lg:col-span-1 space-y-8">
        {/* FAQ */}
        <div className="border-2 border-gray-200 rounded-2xl p-6 py-10">
            <h3 className="text-3xl font-semibold text-gray-900 mb-10">Understanding the Market Research Industry</h3>
            <ul className="space-y-8 text-blue-500 text-lg">
                <li><a href="#" className="hover:underline">What is the current market size and CAGR of the industry (India & global)?</a></li>
                <li><a href="#" className="hover:underline">Who are the key players and their market shares?</a></li>
                <li><a href="#" className="hover:underline">What are the major trends, drivers, and challenges affecting market growth?</a></li>
                <li><a href="#" className="hover:underline">How is the industry segmented (by product, region, end-user, etc.)?</a></li>
                <li><a href="#" className="hover:underline">What is the future outlook (expected market size by 2030-2031)?</a></li>
                <li><a href="#" className="hover:underline">What kind of data sources and analytical tools are used in research studies?</a></li>
                <li><a href="#" className="hover:underline ">How can research insights improve decision-making and product strategy?</a></li>
            </ul>
        </div>

        {/* Key Insights */}
        <div className="border-2 border-gray-200 rounded-2xl p-6 mt-18">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Key Market insights</h3>
            <div className="space-y-5">
                {[
                    { title: "Industry Trend", desc: "Market research is evolving into digital-first ecosystems with AI analytics, real-time data dashboards, and predictive insights." },
                    { title: "Growth Rate", desc: "The industry is growing at 12-15% CAGR, driven by increased demand for strategic decision-making, customer intelligence, and data-driven innovation." },
                    { title: "Member Value", desc: "Businesses see a 300-400% ROI through actionable insights, cost savings, and market expansion strategies." },
                ].map((insight, i) => (
                    <div key={i}>
                        <h4 className="text-[#0e7490] font-bold text-lg mb-1">{insight.title}</h4>
                        <p className="text-md text-gray-600 leading-relaxed">{insight.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function MarketResearchPage() {
  // 1. STATE: Feature Flags
  const [flags, setFlags] = useState({
    showHero: true,
    showReportGrid: true,
    showAiBanner: true,
    showCustomResearch: true,
    showRegionalSection: true,
    showBottomSection: true
  });

  // 2. FETCH: Get visibility settings
  useEffect(() => {
    axios.get("http://localhost:5000/api/market-research/flags")
      .then((res) => {
        if (res.data) {
          setFlags(res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching flags:", err);
      });
  }, []);

  // 3. RENDER
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {flags.showHero && <Hero />}
      {flags.showReportGrid && <ReportGrid />}
      {flags.showAiBanner && <AiBanner />}
      {flags.showCustomResearch && <CustomResearch />}
      {flags.showRegionalSection && <RegionalSection />}
      {flags.showBottomSection && <BottomSection />}
    </div>
  );
}