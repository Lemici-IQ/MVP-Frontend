import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import Chatbot from "../../components/Chatbot";

// --- ASSET IMPORTS ---
import eventsbg from '../../assets/IndBiSol/eventsbg.png';
import communitybg from '../../assets/IndBiSol/communitybg.png';
import report1 from '../../assets/IndBiSol/report1.jpg';
import report2 from '../../assets/IndBiSol/report2.jpg';
import report3 from '../../assets/IndBiSol/report3.jpg';
import comp1 from "../../assets/IndBiSol/comp1.png";
import comp2 from "../../assets/IndBiSol/comp2.png";
import comp3 from "../../assets/IndBiSol/comp3.png";
import comp4 from "../../assets/IndBiSol/comp4.png";
import comp5 from "../../assets/IndBiSol/comp5.png";
import comp6 from "../../assets/IndBiSol/comp6.png";
import comp7 from "../../assets/IndBiSol/comp7.png";
import comp8 from "../../assets/IndBiSol/comp8.png";
import comp9 from "../../assets/IndBiSol/comp9.png";
import mobile from "../../assets/IndBiSol/mobile.jpg";
import dpr1 from "../../assets/IndBiSol/dpr1.png";
import dpr2 from "../../assets/IndBiSol/dpr2.png";
import dpr3 from "../../assets/IndBiSol/dpr3.png";
import dpr4 from "../../assets/IndBiSol/dpr4.png";
import dpr5 from "../../assets/IndBiSol/dpr5.png";
import dpr6 from "../../assets/IndBiSol/dpr6.png";
import dpr7 from "../../assets/IndBiSol/dpr7.png";
import dpr8 from "../../assets/IndBiSol/dpr8.png";
import dpr9 from "../../assets/IndBiSol/dpr9.png";
import dpr10 from "../../assets/IndBiSol/dpr10.png";
import dpr11 from "../../assets/IndBiSol/dpr11.png";
import dpr12 from "../../assets/IndBiSol/dpr12.png";
import mushroomfarm from "../../assets/IndBiSol/mushroomfarm.png";
import golf from "../../assets/IndBiSol/golf.jpg";
import cosco from "../../assets/IndBiSol/cosco.jpg";
import grow1 from "../../assets/IndBiSol/grow1.jpg";
import grow2 from "../../assets/IndBiSol/grow2.jpg";
import grow3 from "../../assets/IndBiSol/grow3.jpg";
import grow4 from "../../assets/IndBiSol/grow4.jpg";
import grow5 from "../../assets/IndBiSol/grow5.jpg";
import grow6 from "../../assets/IndBiSol/grow6.jpg";
import grow7 from "../../assets/IndBiSol/grow7.jpg";
import grow8 from "../../assets/IndBiSol/grow8.jpg";


// --- HARDCODED SUB-COMPONENTS ---

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Project Report");
  const items = [
    { label: "Project Report" },
    { label: "Govt. Schemes" },
    { label: "Industrial Research" },
    { label: "Industrial Documentary" },
  ];

  return (
    <div>
      <h1
        className="w-full mt-30 max-w-4xl mx-auto text-[64px] md:text-7xl mb-6 leading-[0.9] text-center"
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 600,
          color: "black",
        }}
      >
        Build Your Business <br />
        On Strong Fundamentals
      </h1>

      <div className="flex items-center justify-center gap-3 py-4">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(item.label)}
            className={`flex shadow-[0_4px_10px_rgba(0,0,0,0.3)] mb-8 items-center gap-2 rounded-xl px-4 py-1  font-medium transition-all ${
              activeTab === item.label
                ? "bg-[#F5008F] text-white"
                : "bg-white text-gray-700 hover:bg-gray-300 "
            }`}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <Chatbot />

      <div className=" flex justify-center items-center text-center text-gray-600 m-10">
        <p>
          Comprehensive Business Plan And Project Reports <br /> Tailored For Your Industry Needs
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-10 mb-10">
        <div className="flex items-center justify-center h-[40px] rounded-full w-[40px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          <img className="h-[40px] w-auto " src={comp1} alt="" />
        </div>
        <div className="flex items-center justify-center h-[50px] rounded-full w-[50px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          <img className="h-[30px] w-auto " src={comp2} alt="" />
        </div>
        <div className="flex items-center justify-center h-[60px] rounded-full w-[60px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          <img className="h-[35px] w-auto " src={comp3} alt="" />
        </div>
        <div className="flex items-center justify-center h-[70px] rounded-full w-[70px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          <img className="h-[30px] w-auto " src={comp4} alt="" />
        </div>
        <div className="flex items-center justify-center h-[80px] rounded-full w-[80px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          <img className="h-[40px] w-auto " src={comp5} alt="" />
        </div>
        <div className="flex items-center justify-center h-[70px] rounded-full w-[70px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          <img className="h-[20px] w-auto " src={comp6} alt="" />
        </div>
        <div className="flex items-center justify-center h-[60px] rounded-full w-[60px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          <img className="h-[35px] w-auto " src={comp7} alt="" />
        </div>
        <div className="flex items-center justify-center h-[50px] rounded-full w-[50px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          <img className="h-[20px] w-auto " src={comp8} alt="" />
        </div>
        <div className="flex items-center justify-center h-[40px] rounded-full w-[40px]  px-[10px] py-[10px] shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          <img className="h-[20px] w-auto " src={comp9} alt="" />
        </div>
      </div>
    </div>
  );
};

const ProductsAndSolutions = () => {
  return (
    <section 
      className="relative w-full bg-black text-white overflow-hidden" 
      style={{
        backgroundImage: `url(${mobile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10 max-w-7xl font-space  px-20 py-30" style={{fontFamily: "Space Grotesk, sans-serif"}}>
        
        <div className="max-w-7xl"> 
          
          <h2 className="text-4xl  font-semibold mb-16 leading-tight" style={{fontFamily: "Space Grotesk, sans-serif", fontSize: '48px' }}>
            Products and Solution<br />
            Designed to Enable the Growth of MSMEs
          </h2>
          
          <p className="text-md text-gray-300 font-Inter text-opacity-90 mb-24" style={{ lineHeight: '1.7' }}>
            Explore a curated array of innovative products and solution crafted <br />
            to empower the growth of Micro, Small and Medium Enterprises <br />
            (MSMEs), providing them with the tools and resources essential for <br />
            success in today's dynamic business landscape.
          </p>
          
          <button 
            className="px-10 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg 
                       hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            Know More
          </button>
        </div>
        
      </div>
    </section>
  );
};

const IndustryDPRCard = ({ imageUrl, title }) => {
  return (
    <div 
      className="flex flex-col items-center p-6 text-center rounded-xl border-2 border-gray-200 transition-all duration-300
                 hover:border-pink-500 focus-within:border-pink-500 group"
      style={{ borderColor: '#E5E7EB', '--tw-border-opacity': '1' }} 
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-contain" 
        />
      </div>
      
      <p className="text-gray-700 font-medium text-lg" style={{ color: '#4A5568' }}>{title}</p>
    </div>
  );
};

const IndustrySolutionDPR = () => {
  const items = [
    { imageUrl: dpr1, title: 'Food' },        
    { imageUrl: dpr2, title: 'Textile' },    
    { imageUrl: dpr3, title: 'Aerospace & Defence' }, 
    { imageUrl: dpr4, title: 'Beverage' },     
    { imageUrl: dpr5, title: 'Automotive' }, 
    { imageUrl: dpr6, title: 'Chemical' },  
    
    { imageUrl: dpr7, title: 'FMCG' },       
    { imageUrl: dpr8, title: 'Mechanical' }, 
    { imageUrl: dpr9, title: 'Pharmaceutical' }, 
    { imageUrl: dpr10, title: 'Machine Tools' },
    { imageUrl: dpr11, title: 'Electronics' },
    { imageUrl: dpr12, title: 'Electrical' },
  ];

  return (
    <section className="py-20 bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-12" style={{ fontSize: '48px', color: '#1A202C' }}>
          Industry Solution & DPR
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8">
          {items.map((item, index) => (
            <IndustryDPRCard 
              key={index} 
              imageUrl={item.imageUrl} 
              title={item.title} 
            />
          ))}
        </div>

        <div className="text-right mt-8">
          <a 
            href="#" 
            className="text-pink-500 font-semibold hover:underline flex items-center justify-end"
            style={{ color: '#EE008D' }} 
          >
            View More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectReportCard = ({ imageUrl, title, description }) => (
  <div className="flex font-Inter justify-center items-center flex-col">
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-80 object-cover rounded-lg shadow-lg" 
    />
    
    <div className="mt-4">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-[#d2d3d4ff] text-opacity-50 mb-3" style={{ lineHeight: '1.6' }}>
        {description}
      </p>
      <a href="#" className="text-sm text-[#d2d3d4ff] hover:underline flex items-center">
        Learn More
        <svg 
          className="w-5 h-5 ml-1.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </a>
    </div>
  </div>
);

const TopCustomizedReports = () => {
  const reports = [
    {
      imageUrl: mushroomfarm,
      title: 'Mushroom Farm',
      description: 'A budget for mushroom farming includes costs for setup, substrate, labor, and utilities. It helps forecast investment needs and potential returns from cultivation.'
    },
    {
      imageUrl: golf,
      title: 'Golf Ball Manufacturing',
      description: 'The budget includes raw material, molding machinery labor, and quality control. It supports cost estimation and profitability planning for golf ball production.'
    },
    {
      imageUrl: cosco,
      title: 'Cosco Indian Pvt Ltd.',
      description: 'Covers costs for potatoes, oil, seasoning, equipment, and packaging materials. Helps track expenses and plan profit margins in chips manufacturing.'
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#EE008D' }}> 
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-6xl text-center font-Inter text-white mb-12" style={{ fontSize: '36px' }}>
          Top Customized Project Report
        </h2>
        
        <div className="grid grid-cols-1 font-Inter md:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <ProjectReportCard
              key={index}
              imageUrl={report.imageUrl}
              title={report.title}
              description={report.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="relative rounded-2xl  bg-black shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-72 object-cover" 
      />
      
      <div className="absolute bottom-0 left-0 right-0 ">
        
        <h3 className="text-lg font-bold px-2 text-white">{title}</h3>
        
        <p className="text-sm text-gray-100 px-2 mb-2">{subtitle}</p>
        
        <div className="bg-white rounded-full py-1 m-1 flex justify-center">
          <a 
            href="#" 
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

const OurExpertise = () => {
  const expertiseData = [
    {
      imageUrl: grow1,
      title: 'Business Setup',
      subtitle: 'E-commerce & Online retail'
    },
    {
      imageUrl: grow2,
      title: 'Business Growth',
      subtitle: 'E-commerce & Online retail'
    },
    {
      imageUrl: grow3,
      title: 'Project Report',
      subtitle: 'Healthtech & Fintech'
    },
    {
      imageUrl: grow4,
      title: 'Industrial Research',
      subtitle: 'Recycle tech Platform'
    },
    {
      imageUrl: grow5,
      title: 'Government Schemes',
      subtitle: 'E-commerce & Online retail'
    },
    {
      imageUrl: grow6,
      title: 'Industrial Expert',
      subtitle: 'E-commerce & Online retail'
    },
    {
      imageUrl: grow7,
      title: 'Network of Machinery',
      subtitle: 'Healthtech & Fintech'
    },
    {
      imageUrl: grow8,
      title: 'MSME Training',
      subtitle: 'Recycle tech Platform'
    }
  ];

  return (
    <section className="py-20 bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl  text-center text-gray-900 mb-16">
          Our Expertise helps your Startup <br /> Grow at every Stage
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestNewsEvents = () => {
  return (
    <div className="bg-white font-sans p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-16">
          
          <div className="flex  flex-col">
            <h2 className="text-2xl font-Inter text-gray-900 mb-4">
              Events
            </h2>
            <p className="text-gray-600 font-Inter text-base leading-relaxed mb-6">
              Access the dynamic world of innovation through our community events and programs to interact with top startups, investors and corporation.
            </p>
            
            <div 
              className="bg-[#FF339C] justify-center rounded-2xl p-8 md:p-10 flex flex-col flex-grow text-white shadow-lg relative overflow-hidden bg-auto bg-left-top"
              style={{ backgroundImage: `url(${eventsbg})`,width: `656px`,  }}
            >
              <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>

              <h3 className="text-3xl md:text-4xl font-Space Grotesk font-bold mb-4 relative">
                AWS and Anthropic GenAI Scale Program
              </h3>
              <p className="text-base font-Inter mb-6 relative">
                Beyond data, we build bridges. Join a vibrant network of founders, investors, and ecosystem enablers dedicated to innovation and growth in India. 
                <span className="block mt-2">
                  *Connect, share, and scale with direct access to India’s most dynamic
                </span>
              </p>
              <div className="mt-auto relative"> 
                <button className="bg-white text-black font-semibold py-3 px-8 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300">
                  More
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center flex-col">
            <h2 className="text-2xl font-Inter] text-gray-900 mb-4">
              Community
            </h2>
            <p className="text-gray-600 font-Inter text-base leading-relaxed mb-6">
              Join our rapidly growing Community of the leading VC funds, accelerators, Corporates, business angels and regional startup ecosystems and fuel startups
            </p>
            
            <div 
              className="bg-[#4A53FA] justify-center rounded-2xl p-8 md:p-10 flex flex-col flex-grow text-white shadow-lg relative overflow-hidden bg-auto bg-left-top"
              style={{ backgroundImage: `url(${communitybg})`, width: `568px`,   }}
            >
              <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>

              <h3 className="text-3xl md:text-4xl mt-12 font-bold  mb-4 relative">
                CEE VC Summit 2025
              </h3>
              <p className="font-Inter font-[16px] mb-6 relative">
                Join the biggest, invitation-only event for VC 
                <br /> fund managers in CEE
              </p>
              
              <div className="mt-auto relative">
                <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-gray-800 transition-colors duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

const Report_Card = ({ imageUrl, title }) => (
  <div>
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      
      <div className="absolute bottom-4 right-4 w-9 h-9 bg-transparent rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>

    </div>
    <h3 className="text-lg font-semibold text-gray-800 mt-4 px-1">{title}</h3>
  </div>
);


const MentorsInvestors = () => {
  const reports = [
    {
      imageUrl: report1, 
      title: 'Europe Tech Update-2025'
    },
    {
      imageUrl: report2, 
      title: 'European Food Tech 2025'
    },
    {
      imageUrl: report3, 
      title: 'Startup Ecosystem 2025'
    }
  ];

  return (
    <section className="py-20 bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[24px] font-italic font-Inter  text-gray-800 mb-12" style={{ fontSize: '30px' }}>
          Latest Reports
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <Report_Card
              key={index}
              imageUrl={report.imageUrl}
              title={report.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const NumberStatCard = ({ number, description, isPink = false }) => {
  const pinkColor = '#F5008F'; 
  
  return (
    <div 
      className="text-center p-8 py-16  border border-gray-200 shadow-sm"
      style={{ backgroundColor: isPink ? pinkColor : '#FFFFFF' }}
    >
      <p 
        className="text-3xl font-semibold mb-3" 
        style={{ 
          color: isPink ? '#FFFFFF' : pinkColor 
        }}
      >
        {number}
      </p>
      <p 
        className="text-md"
        style={{ color: isPink ? '#FFFFFF' : '#4A5568' }} 
      >
        {description}
      </p>
    </div>
  );
};

const NumbersSection = () => {
  return (
    <section className="bg-white py-20" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-gray-500 mb-12" >
          Why you should choose LeMiCi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <NumberStatCard 
            number="1000 +" 
            description="Businesses" 
            isPink={false} 
          />
          
          <NumberStatCard 
            number="0 Lakhs" 
            description="Investors" 
            isPink={true} 
          />
          
          <NumberStatCard 
            number="20 +" 
            description="Industries" 
            isPink={false} 
          />
          
          <NumberStatCard 
            number="20K to 4 Cr" 
            description="Investment size" 
            isPink={false} 
          />
        </div>
      </div>
    </section>
  );
};


// --- MAIN APP COMPONENT ---
// --- MAIN APP COMPONENT ---
function IndBiSol() {
  // 1. STATE: Initialize control flags
  const [flags, setFlags] = useState({
    showHero: true,
    showProducts: true,
    showIndustryDPR: true,
    showCustomReports: true,
    showExpertise: true,
    showNewsEvents: true,
    showLatestReports: true,
    showStats: true
  });

  // 2. FETCH: Get visibility control from Backend
  useEffect(() => {
    // Ensure there are no stray characters or text here
    axios.get("http://localhost:5000/api/indbisol/flags")
      .then((res) => {
        if (res.data) {
          setFlags(res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching flags:", err);
      });
  }, []);

  // 3. RENDER: Conditional logic
  return (
    <div className="min-h-screen font-sans antialiased bg-white" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      {flags.showHero && <HeroSection />}
      {flags.showProducts && <ProductsAndSolutions />}
      {flags.showIndustryDPR && <IndustrySolutionDPR />}
      {flags.showCustomReports && <TopCustomizedReports />}
      {flags.showExpertise && <OurExpertise />}
      {flags.showNewsEvents && <LatestNewsEvents />}
      {flags.showLatestReports && <MentorsInvestors />}
      {flags.showStats && <NumbersSection />}
    </div>
  );
}

export default IndBiSol;