import React from 'react';
import { Link } from 'react-router-dom';

export default function Offerings() {
  // Mapping for button names to their routes
  const buttonRoutes = {
    "startups Zone": "/startups-zone",
    "B2B Marketplace": "/eB2B-home",
    "Softwarehunt": "/software-hunt-home",
    "Franchise finder": "/franchise",
    "Market and industry research": "/research",
    // "Business directory": "/coming-soon",
    "Industrial solution": "/industrial-solution",
    "Govt navigator": "/offerings/govtnavigator"
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white text-black">

     

      {/* Tag buttons */}
      {/* <h1 className='text-xl sm:text-2xl font-semibold mb-4'>Offering landscape</h1> */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 w-full justify-center items-center mx-auto" style={{maxWidth: '700px'}}>
        {[
          "startups Zone",
          "B2B Marketplace",
          "Softwarehunt",
          "Franchise finder",
          "Market and industry research",
          "Business directory",
          "Industrial solution",
          "Govt navigator"
        ].map((tag) => (
          <React.Fragment key={tag}>
            <Link to={buttonRoutes[tag]}>
              <button className="bg-[#268BFF] px-4 py-2 sm:px-5 sm:py-3 border border-gray-300 rounded-[10px] text-white text-xs sm:text-sm hover:bg-white hover:text-[#268BFF] hover:border-[#268BFF] shadow-md hover:scale-105 transition-all duration-200">
                {tag}
              </button>
            </Link>
            
          </React.Fragment>
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6">
        {/* Left section - Service Categories */}
        <div className="lg:col-span-3 bg-white p-4 space-y-5 border-r border-gray-200">
          {[
            {
              title: "Market and industry research",
              subtitle: "Your single source of truth",
              src: "/abhinay/offerings/1.svg",
              route: "/research"
            },
            {
              title: "B2B Marketplace",
              subtitle: "Security at its simplest",
              src: "/abhinay/offerings/2.svg",
              route: "/eb2b-home"
            },
            {
              title: "Softwarehunt",
              subtitle: "Marketplace for business-ready data",
              src: "/abhinay/offerings/3.svg",
              route: "/software-hunt-home"
            },
            {
              title: "Business directory",
              subtitle: "Map your entire data landscape",
              src: "/abhinay/offerings/4.svg",
              // route: "/abhinay/coming-soon"
            },
            {
              title: "Industrial solution",
              subtitle: "360° visibility for every asset",
              src: "/abhinay/offerings/5.svg",
              route: "/industrial-solution"
            },
            {
              title: "Franchise finder",
              subtitle: "Your business’s second brain",
              src: "/abhinay/offerings/6.svg",
              route: "/franchise"
            },
            {
              title: "Startups Zone",
              subtitle: "Active metadata use cases",
              src: "/abhinay/offerings/7.svg",
              route: "/startups-zone"
            },
            {
              title: "Govt navigator",
              subtitle: "Blazing fast, no-code setup",
              src: "/abhinay/offerings/8.svg",
              route: "/offerings/govtnavigator"
            },
          ].map((item, idx) => (
            <Link key={idx} to={item.route} className="block">
              <div className="flex items-start space-x-3 cursor-pointer hover:bg-blue-50 p-2 rounded transition-colors duration-200">
                <img src={item.src} alt="" />
                <div>
                  <div className="text-[#0062D1] text-[16px] font-medium leading-[20px]">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-gray-600 leading-[20px] font-normal">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Middle section - Capabilities */}
        <div className="lg:col-span-6">
          <div className="w-full flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-[#6D3E93]">
            {/* Capabilities Header Panel */}
            <div className="w-full lg:w-[314px] bg-white p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#6D3E93]">
              <div>
                <p className="text-sm text-black mb-2">Market & Industry Research</p>
                <h2 className="text-xl sm:text-2xl font-medium mb-2">Capabilities</h2>
                <p className="text-sm text-black/60">
                  End-to-end AI Insights solutions — freeing up more time to focus on what matters most
                </p>
              </div>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 flex-1">
              {[
                {
                  title: "Survey creation",
                  desc: "End-to-end AI Insights solutions — freeing up more time to focus on what matters most",
                },
                {
                  title: "Analysis",
                  desc: "Quantity + Quality Analysis, Automated",
                },
                {
                  title: "Sample & Fielding",
                  desc: "Access 10M+ Verified Respondents",
                },
                {
                  title: "Reporting",
                  desc: "AI-Generated Report within 24 Hrs",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative bg-[#FFFDFD] p-4 min-h-[200px] sm:min-h-[250px] lg:h-[272px] flex flex-col justify-between ${
                    index < 2 ? 'border-b' : ''
                  } ${index % 2 === 0 ? 'sm:border-r' : ''} border-[#6D3E93]/70`}
                >
                  <div className="absolute top-2 right-2 w-[30px] h-[30px] bg-[#6D3E93] rounded-full flex items-center justify-center text-white text-lg hover:bg-[#5a3377] transition-colors cursor-pointer">↗</div>
                  <div className="mt-8 lg:mt-14">
                    <h3 className="text-base sm:text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-xs text-black/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section - Industry Leaders + Spark */}
        <div className="lg:col-span-3 space-y-6 lg:border-l lg:border-gray-200 lg:pl-4 lg:pr-3">
          <div className="bg-[#F4F4F4] p-4 rounded-xl">
            <img src="/abhinay/p2.jpg" alt="Industry Leaders" className="w-full rounded-xl mb-2" />
            <h3 className="font-semibold">Industry Leaders</h3>
            <p className="text-sm text-gray-600">
              Find answers to your questions Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="mt-2 px-4 sm:px-5 py-2 text-sm text-white bg-[#6D3E93] rounded-full flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start hover:bg-[#5a3377] transition-colors">
              Join the Pilot
              <span className="bg-white rounded-full text-black px-2 py-1">↗</span>
            </button>
          </div>

          <div className="relative h-48 sm:h-56 lg:h-[14rem] rounded-xl overflow-hidden mx-auto bg-[#F4F4F4]">
            <img
              src="/abhinay/p1.png"
              alt="Find Your Spark"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-36 lg:w-40 h-auto object-contain"
            />
            <p className="absolute bottom-2 left-2 text-[#00000099] font-semibold text-left text-lg sm:text-xl leading-tight pl-4 mb-2">
              Find Your <br /> Spark
            </p>
          </div>

          <button className="mt-2 pl-4 sm:pl-5 py-2 text-sm text-white bg-[#6D3E93] rounded-full flex items-center gap-5 w-full sm:w-auto justify-center sm:justify-start hover:bg-[#5a3377] transition-colors">
            <span>LeMiC AI</span>
            <div className="bg-white rounded-full text-black p-2 flex items-center justify-center mr-1">
              <img src="/abhinay/play-button.png" alt="Play" className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mt-8 sm:mt-10">
        <h2 className="text-lg font-semibold mb-4">Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Self-service",
              desc: "Empower your customers with instant, intuitive self-service options—quick solution at their fingertips, whenever they need them",
            },
            {
              title: "Agent service",
              desc: "Equip agents with the right information, exactly when they need it, to deliver exceptional customer service every time",
            },
            {
              title: "Proactive service",
              desc: "Anticipate needs and resolve issues before they arise, ensuring seamless, personalized experiences.",
            },
          ].map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              style={{ boxShadow: '2px 4px 8px 2px rgba(0, 0, 0, 0.2)' }}
            >
              <h4 className="font-medium mb-1">{title}</h4>
              <p className="text-sm text-[#00000099]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
