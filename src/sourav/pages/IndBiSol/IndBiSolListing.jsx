import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

// --- ASSET IMPORTS ---
import header from "../../assets/IndBiSol/header.jpg";
import mushroom from "../../assets/IndBiSol/mushroom.png";
import robot from "../../assets/IndBiSol/robot.jpg";
import cat1 from "../../assets/IndBiSol/cat1.png";
import cat2 from "../../assets/IndBiSol/cat2.png";
import cat3 from "../../assets/IndBiSol/cat3.png";
import cat4 from "../../assets/IndBiSol/cat4.png";
import cat5 from "../../assets/IndBiSol/cat5.png";
import cat6 from "../../assets/IndBiSol/cat6.png";
import cat7 from "../../assets/IndBiSol/cat7.png";
import cat8 from "../../assets/IndBiSol/cat8.png";
import cat9 from "../../assets/IndBiSol/cat9.png";
import cat10 from "../../assets/IndBiSol/cat10.png";
import cat11 from "../../assets/IndBiSol/cat11.png";
import ap from "../../assets/IndBiSol/ap.png";
import flipkart from "../../assets/IndBiSol/flipkart.jpg";
import meesho from "../../assets/IndBiSol/lady.jpg";
import cureskin from "../../assets/IndBiSol/cureskin.jpg";
import recykal from "../../assets/IndBiSol/recykal.jpg";

// --- ICONS ---
const ShareIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 110 2.684H9m6.632-6a3 3 0 110-2.684H9"></path></svg>
);
const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
);
const FacebookIcon = () => (  <div className="w-6 h-6 bg-blue-600 rounded-full" /> );
const TwitterIcon = () => (  <div className="w-6 h-6 bg-blue-400 rounded-full" /> );
const LinkedInIcon = () => (  <div className="w-6 h-6 bg-blue-800 rounded-full" /> );
const BackArrowIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
);
const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);
const CloseIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);
const FilterIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-4h.01M6 16h.01M4 12h.01M10 12h.01M16 12h.01M18 8h.01M20 12h.01M12 20v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m6-12v-2m0 2a2 2 0 100 4m0-4a2 2 0 110 4"></path></svg>
);
const VerifiedIcon = () => (
  <svg className="w-5 h-5 text-[#EE008D]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
const BookmarkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
  </svg>
);
const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);
const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6m6 3v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
);
const BriefcaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);
const CloseSmallIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
);
const InfoIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const MessageIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
);
const RateIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
);
const WatchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

// --- HARDCODED COMPONENTS ---

const Header = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('All');
  const filters = ['All', 'Industry', 'Sector', 'Name'];

  return (
    <section 
      className="relative w-full  text-white pt-8 pb-12"
      style={{
        backgroundImage: `url(${header})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#EE008D',
      }}
    >
      <button className="absolute top-6 left-16 z-10 text-white hover:scale-150  transition-transform">
        <BackArrowIcon />
      </button>
      
      <div className="relative z-10 max-w-4xl  px-16 py-10">
        <h1 className="text-4xl font-semibold mb-8" >
          Project Reports
        </h1>
        <p className="text-md text-white text-opacity-90 mb-10 ">
          Food and Cafe Franchise Get into the fastest Growing Market <br />
          Low Cost Food and Cafe Business.
        </p>

        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-12 pr-10 py-2 rounded-lg text-gray-900 bg-white shadow-lg border-none focus:outline-none focus:ring-2 focus:ring-white"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </div>
            {searchValue && (
              <button 
                onClick={() => setSearchValue('')} 
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <CloseIcon />
              </button>
            )}
          </div>
          
          <button 
            className="flex-shrink-0 flex items-center px-6 py-2.5 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            <FilterIcon />
            <span className="ml-2">Add Filter</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                ${activeFilter === filter 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white hover:text-black'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectReportCard = ({ cardData }) => {
  const pinkColor = '#EE008D';
  const lightPinkBorder = '#F5B0CD';

  return (
    <div className="relative bg-white rounded-xl shadow-lg" style={{ border: `2px solid ${lightPinkBorder}` }}>
      <button className="absolute top-4 right-4 text-3xl" style={{ color: pinkColor, transform: 'translateY(-2px)' }}>
        <BookmarkIcon />
      </button>
      
      <div className="p-5">
        <div className="flex items-center space-x-4">
          <img src={cardData.logoUrl} alt={cardData.title} className="w-16 h-16 rounded-lg" />
          <div>
            <div className="flex items-center space-x-1.5">
              <h2 className="text-2xl font-medium text-gray-900">{cardData.title}</h2>
              <VerifiedIcon />
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs font-medium text-gray-700 rounded-full border-1 border-[#EE008D] px-2 py-0.5">
                {cardData.subTags[0]}
              </span>
              <span className="text-xs font-medium text-gray-700 rounded-full border-1 border-[#EE008D] px-2 py-0.5">
                {cardData.subTags[1]}
              </span>
              <div className="flex items-center space-x-0.5">
                <StarIcon />
                <span className="text-sm font-semibold">{cardData.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mt-4 text-sm">{cardData.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {cardData.categories.map((cat, i) => (
            <span key={i} className="text-sm font-medium text-white rounded-full px-4 py-1.5" style={{ backgroundColor: pinkColor }}>
              {cat}
            </span>
          ))}
          <span className="text-sm font-medium text-gray-700 bg-gray-200 rounded-full px-4 py-1.5">
            +2
          </span>
        </div>
        
        <div className="space-y-2 mt-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <div className='text-[#EE008D]'>
              <LocationIcon />
            </div>
            <span>{cardData.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <div className='text-[#EE008D]'>
              <UsersIcon />
            </div>
            <span>{cardData.followers} Followers</span>
          </div >
          <div className="flex items-center space-x-2 text-gray-700">
            <div className='text-[#EE008D]'>
              <BriefcaseIcon />
            </div>
            <span>{cardData.model}</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 text-center mt-6 ">
          {cardData.stats.map((stat, i) => (
            <div key={i}>
              <p className="text-lg font-medium text-gray-900">{stat.value}</p>
              <p className="text-sm font-medium" style={{ color: pinkColor }}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mt-6">
          {cardData.infoBubbles.map((bubble, i) => (
            <div key={i} className="rounded-full px-3 text-center border-gray-200 border-2 flex flex-col justify-center ">
              <p className="text-xs font-medium text-black">{bubble.label}</p>
              <p className="text-xs text-gray-500 break-words">{bubble.value}</p>
            </div>
          ))}
        </div>
        
        <p className="text-gray-600 text-left mt-6 text-sm">{cardData.salesNote}</p>
        
        <div className="flex flex-wrap gap-2 items-left justify-left mt-4">
          {cardData.keywords.map((kw, i) => (
            <div key={i} className="border-gray-200 border-2 rounded-full px-3 py-1 text-sm text-gray-700 flex items-center space-x-1.5">
              <span>{kw}</span>
              <button><CloseSmallIcon /></button>
            </div>
          ))}
        </div>
        
        <div className="flex justify-around items-center mt-6 pt-4">
          <button className="flex flex-col items-center text-[#EE008D]">
            <InfoIcon />
            <span className="text-xs text-gray-700">info</span>
          </button>
          <button className="flex flex-col items-center text-[#EE008D]">
            <MessageIcon />
            <span className="text-xs text-gray-700">Message</span>
          </button>
          <button className="flex flex-col items-center text-[#EE008D]">
            <RateIcon />
            <span className="text-xs text-gray-700">Rate</span>
          </button>
          <button className="flex flex-col items-center text-[#EE008D]">
            <WatchIcon />
            <span className="text-xs text-gray-700">watch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const reportDataList = [
  {
    logoUrl: `${mushroom}`,
    title: 'Mushroom Farm',
    subTags: ['Highly Growth', '2020 founded'],
    rating: 4.9,
    description: 'Offering farms management solutions consulting of an app, an analytics......',
    categories: ['EdTech', 'AI/ML', 'Productivity', 'HR'],
    location: 'Pan India',
    followers: 123,
    model: 'B2B & B2C',
    stats: [
      { label: 'Market Size', value: '$842k' },
      { label: 'CAGR', value: '£3.6M' },
      { label: 'ROI', value: '9' },
      { label: 'Exports', value: '28' },
    ],
    infoBubbles: [
      { label: 'Latest: raise', value: '$650 Million' },
      { label: 'Portfolios compnies', value: '—' },
      { label: 'Geo-Faces', value: 'Globally except USA & China' },
    ],
    salesNote: '$1.2 Million in product sold in first two years.',
    keywords: ['Salient features', 'Risk', 'Loans', 'Growth', 'Govt. Schemes'],
  },
];

const ReportCardGrid = () => {
  const sectionPinkBg = '#FEF6FA';
  const displayData = [
    reportDataList[0], reportDataList[0], reportDataList[0],
    reportDataList[0], reportDataList[0], reportDataList[0],
  ]; 

  return (
    <section className="py-12" style={{ backgroundColor: sectionPinkBg }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayData.map((data, index) => (
            <ProjectReportCard key={index} cardData={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AIBanner = () => {
  const bannerPink = '#EE008D'; 
  const generateDots = () => {
    const dots = [];
    for (let i = 0; i < 50; i++) { 
      const size = Math.random() * (40 - 15) + 15; 
      const top = Math.random() * 100; 
      const left = Math.random() * 100; 
      const opacity = Math.random() * (0.6 - 0.2) + 0.2; 
      const color = Math.random() > 0.5 ? '#880044' : '#000000'; 
      
      dots.push(
        <div 
          key={i} 
          className="absolute rounded-full"
          style={{
            width: `${size}px`, height: `${size}px`, top: `${top}%`, left: `${left}%`,
            opacity: opacity, backgroundColor: color, zIndex: 0, 
          }}
        />
      );
    }
    return dots;
  };

  return (
    <section 
      className="relative py-12 px-6 rounded-lg overflow-hidden" 
      style={{ 
        backgroundColor: bannerPink, borderRadius: '16px', 
        margin: '40px auto', maxWidth: '1280px', 
      }}
    >
      {generateDots()}

      <div className="relative z-10 max-w-7xl mx-20 flex items-center justify-between">
        <div className=" pr-8">
          <h2 className="text-4xl font-extrabold text-white leading-tight" style={{ fontSize: '42px' }}>
            Transform Your Business <br /> Planning with AI Precision
          </h2>
        </div>
        
        <button className="py-3 px-8 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors flex-shrink-0">
          Click Here
        </button>
      </div>
    </section>
  );
};

const AIHero = () => {
  return (
    <section 
      className="relative text-white py-20 px-16"
      style={{
        backgroundImage: `url(${robot})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}
    >
      <div className="max-w-3xl">
        <h1 className="text-6xl font-semibold mb-14 leading-tight tracking-wide" style={{font:"Space Gorek"}}>
          Effortless Project <br /> Report With AI Power
        </h1>
        <p className="text-sm font-Inter text-gray-300 mb-16 leading-loose">
          Experience the future of business planning with LeMiCi's Al-powered <br /> detailed project report software. Designed to streaming banking and government <br /> guidelines by utilizes advanced Al technology to ensure precision and efficiency. <br /> Visit www.projrctreport.online to explore how our innovative solution can transform <br /> your business strategy and elevate your project planning process.
        </p>
        <p className="text-md text-gray-200 -mb-1 font-medium">
          AI Project Report Starts from <span className="font-bold">₹999</span>
        </p>
        <p className="text-xs text-gray-200 mb-6 ">
          Professional Grade DPR
        </p>
        <button className="py-3 px-8 bg-white text-gray-900 font-medium rounded-lg shadow-lg hover:bg-gray-200 transition-colors">
          Create Report
        </button>
      </div>
    </section>
  );
};

const CategoryItem = ({ imageUrl, title }) => (
  <a href="#" className="flex flex-col items-center text-center group">
    <img src={imageUrl} alt={title} className="w-12 h-12 object-contain mb-2 transition-transform duration-300 group-hover:scale-110" />
    <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600" style={{ fontSize: '13px' }}>
      {title}
    </span>
  </a>
);

const BrowseByIndustry = () => {
  const categories = [
    { title: 'AI & ML', img: cat1 },
    { title: 'E-commerce', img: cat2 },
    { title: 'Mental Wellness', img: cat3 },
    { title: 'Health Tech', img: cat4 },
    { title: 'Prop. Tech & Real Es.', img: cat5 },
    { title: 'B2B SaaS', img: cat6 },
    { title: 'Logistics & Mobility', img: cat7 },
    { title: 'Clean Tech', img: cat8 },
    { title: 'EdTech', img: cat9 },
    { title: 'FoodTech', img: cat10 },
    { title: 'FinTech', img: cat11 },
  ];

  const questions = [
    "What problem does the startup aim to solve?",
    "Who are the target users or customers?",
    "What is the startup's core product or service?",
    "When was the startup founded and by whom?",
    "What stage is the startup in (idea, MVP, growth, scaling)?",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-gray-100 rounded-full px-6 py-2 mb-10" style={{ backgroundColor: '#EEEEEE' }}>
            <h2 className="text-xl text-gray-800">
              Featured Project Report Categories
            </h2>
          </div>
          
          <div className="grid grid-cols-6 gap-x-4 gap-y-8">
            {categories.map(item => (
              <CategoryItem key={item.title} imageUrl={item.img} title={item.title} />
            ))}
            <a href="#" className="flex flex-col items-center justify-center text-center group">
              <span className="text-sm font-medium text-blue-600 group-hover:text-pink-600" style={{ color: '#2563EB' }}>
                See More →
              </span>
            </a>
          </div>
        </div>
        
        <div className="border border-gray-200 pl-8 pt-6">
          <h3 className="text-xl  text-gray-900 mb-10">
            Understanding <br /> Project Reports
          </h3>
          <div className="space-y-6 mb-10">
            {questions.map((question, index) => (
              <p key={index} className="text-sm hover:underline cursor-pointer" style={{ color: '#2563EB' }}>
                {question}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StateStatBox = ({ value, label }) => (
  <div className="text-center p-4 rounded-lg" style={{ border: '2px solid #EE008D' }} >
    <p className="text-2xl font-bold" style={{ color: '#EE008D' }}>{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const BrowseByState = () => {
  const [activeState, setActiveState] = React.useState('Andhra Pradesh');
  const states = [ 'Andhra Pradesh', 'Gujarat', 'Karnataka', 'Maharastra', 'Telangana', 'Uttar Pradesh', 'Tamil Nadu' ];
  const stateData = {
    'Andhra Pradesh': {
      name: 'Andhra Pradesh', mapUrl: ap,
      description: "Andhra Pradesh is the second largest producer of cotton and raw silk in India...",
      stats: [ { value: '15+', label: 'Projects Completed' }, { value: '20+', label: 'Textile Consultants' } ]
    },
  };
  const currentData = stateData[activeState];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-100 rounded-full px-6 py-2 mb-10" style={{ backgroundColor: '#EEEEEE' }}>
          <h2 className="text-xl  text-gray-800">
            Business Opportunities in States
          </h2>
        </div>

        <div className="flex space-x-8 border-b border-gray-200 mb-10">
          {states.map(state => (
            <button
              key={state} onClick={() => setActiveState(state)}
              className={`pb-3  text-md transition-colors ${activeState === state ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-800' }`}
            >
              {state}
            </button>
          ))}
        </div>

        {currentData ? (
          <div className="flex  gap-12 items-center">
            <div className="flex  justify-center">
              <img src={currentData.mapUrl} alt={`${currentData.name} map`} className="max-h-[8000px] object-contain" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">{currentData.name}</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{currentData.description}</p>
              <div className="flex space-x-6">
                {currentData.stats.map(stat => (
                  <StateStatBox key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">Select a state to see the details.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const RecommendedCard = ({ imageUrl, title, subtitle }) => (
  <div className="relative w-full h-80 rounded-2xl bg-black overflow-hidden shadow-lg group">
    <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="relative z-10 flex flex-col justify-end h-full p-2 text-white">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm text-white text-opacity-90 mb-4">{subtitle}</p>
      <button className="w-full py-1 bg-white bg-opacity-30 text-black font-medium rounded-xl backdrop-blur-sm hover:bg-opacity-40 transition-all">
        Explore
      </button>
    </div>
  </div>
);

const MarketInsightsBox = () => (
  <div className="flex flex-col justify-between h-full p-6 bg-white rounded-2xl shadow-lg">
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Key Market Insights</h3>
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6m6 0v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z"></path></svg>
      </div>
      <div className="mb-5">
        <p className="text-xs text-gray-500 mb-1">Revenue of the market research industry worldwide</p>
        <a href="#" className="text-lg font-semibold text-blue-600 hover:underline">53.9B USD</a>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">Annual growth of global market research revenue</p>
        <p className="text-lg font-semibold text-blue-600">4.8%</p>
      </div>
    </div>
    <button className="w-full mt-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
      Get more insights
    </button>
  </div>
);

const RelatedBlogs = () => {
  const projects = [
    { title: 'Flipkart', subtitle: 'E-commerce & Online retail', imageUrl: flipkart },
    { title: 'Meesho', subtitle: 'E-commerce & Online retail', imageUrl: meesho },
    { title: 'CureSkin', subtitle: 'Healthtech & Fintech', imageUrl: cureskin },
    { title: 'ReecyKal', subtitle: 'Recycle tech Platform', imageUrl: recykal }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-100 rounded-full px-6 py-2 mb-10" style={{ backgroundColor: '#EEEEEE' }}>
          <h2 className="text-xl text-gray-800">Recommended Project Reports</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <RecommendedCard key={index} imageUrl={project.imageUrl} title={project.title} subtitle={project.subtitle} />
          ))}
          <MarketInsightsBox />
        </div>
      </div>
    </section>
  );
};

// --- MAIN LISTING COMPONENT ---
function IndBiSolListing() {
  // 1. STATE: Control Flags
  const [flags, setFlags] = useState({
    showHeader: true,
    showReportGrid: true,
    showAIBanner: true,
    showAIHero: true,
    showIndustryBrowse: true,
    showStateBrowse: true,
    showRelatedBlogs: true
  });

  // 2. FETCH: Get visibility settings from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/indbisol-listing/flags")
      .then((res) => {
        if (res.data) {
          setFlags(res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching flags:", err);
      });
  }, []);

  // 3. RENDER: Conditional Logic
  return (
    <div className="min-h-screen font-sans antialiased bg-white" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      {flags.showHeader && <Header />}
      {flags.showReportGrid && <ReportCardGrid />}
      {flags.showAIBanner && <AIBanner />}
      {flags.showAIHero && <AIHero />}
      {flags.showIndustryBrowse && <BrowseByIndustry />}
      {flags.showStateBrowse && <BrowseByState />}
      {flags.showRelatedBlogs && <RelatedBlogs />}
    </div>
  );
}

export default IndBiSolListing;