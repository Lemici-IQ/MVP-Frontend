import React, { useState } from 'react';

import Chatbot from "../../components/Chatbot";

import comp1 from "../../assets/IndBiSol/comp1.png";
import comp2 from "../../assets/IndBiSol/comp2.png";
import comp3 from "../../assets/IndBiSol/comp3.png";
import comp4 from "../../assets/IndBiSol/comp4.png";
import comp5 from "../../assets/IndBiSol/comp5.png";
import comp6 from "../../assets/IndBiSol/comp6.png";
import comp7 from "../../assets/IndBiSol/comp7.png";
import comp8 from "../../assets/IndBiSol/comp8.png";
import comp9 from "../../assets/IndBiSol/comp9.png";
import a from "../../assets/BusSol/1.jpg";
import b from "../../assets/BusSol/2.jpg";
import c from "../../assets/BusSol/3.jpg";
import d from "../../assets/BusSol/4.jpg";
import e from "../../assets/BusSol/5.png";
import f from "../../assets/BusSol/6.jpg";
import g from "../../assets/BusSol/7.jpg";
import h from "../../assets/BusSol/8.jpg";
import i from "../../assets/BusSol/9.jpg";
import j from "../../assets/BusSol/10.jpg";

import { 
  Search, 
  Mic, 
  MapPin, 
  Filter, 
  MoreHorizontal, 
  ArrowRight, 
  CheckCircle,
  Star,
  Briefcase,
  Utensils,
  Home,
  Calendar,
  Dumbbell,
  Bed,
  GraduationCap,
  Car,
  Key,
  Menu,
  X
} from 'lucide-react';

// --- Components ---



const Hero = () => {
  return (
    <section className="text-center py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-12 leading-tight" 
      style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 800,
                color: 'black',
              }}>
        Get Business <br /> Insights Faster
      </h1>

      {/* Search Bar Container */}
      <Chatbot />

      <p className="mt-8 text-gray-600 max-w-lg mx-auto">
        Speed matters in business growth. <br/> Get insights that move as fast as you do.
      </p>

      {/* Logos */}
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
      
      <p className="mt-8 text-sm text-gray-400">Find the right information from more than 560+ Companies</p>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { name: 'Loans', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Restaurant', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Estate', icon: <Home className="w-5 h-5" /> },
    { name: 'Event Organisers', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Gym', icon: <Dumbbell className="w-5 h-5" /> },
    { name: 'Hotels', icon: <Bed className="w-5 h-5" /> },
    { name: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Driving Schools', icon: <Car className="w-5 h-5" /> },
    { name: 'Rent & Hire', icon: <Key className="w-5 h-5" /> },
    { name: 'View All', icon: <MoreHorizontal className="w-5 h-5" /> },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Identify the Most Suitable <span className="text-red-600">Category for Your Business</span>
        </h2>
        <p className="text-gray-600">Discover your next business venture from our curated list of categories.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-blue-50 hover:bg-blue-100 transition-colors rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group">
            <div className="text-gray-600 group-hover:text-blue-600 transition-colors">
              {cat.icon}
            </div>
            <span className="font-medium text-gray-700 text-sm md:text-base text-center">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  const cards = [
    { 
      color: 'bg-yellow-400', 
      title: 'People Search', 
      desc: 'People search lets you find and connect with individuals quickly and accurately. Ideal for...', 
      image: `${a}`
    },
    { 
      color: 'bg-green-500', 
      title: 'Local Check', 
      desc: 'Local check helps you find nearby businesses, services, or people based on your location...', 
      image: `${b}`
    },
    { 
      color: 'bg-blue-500', 
      title: 'Organization Search', 
      desc: 'Easily discover and explore companies or institutions by name, sector, or location...', 
      image: `${c}` 
    },
    { 
      color: 'bg-pink-500', 
      title: 'Contact & Networks', 
      desc: 'Find key contacts and build valuable networks for professional or business growth...', 
      image: `${d}`
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-red-600 font-bold mb-4">
          Discover the Power of LeMiCi
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Our platform offers a selection of specialized and features tools and features to help you find the information you are looking for, <span className="text-blue-500 font-semibold">Fast</span> and <span className="text-blue-500 font-semibold">Easy</span>. Here are just few of the things you can do with LeMiCi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className={`${card.color} rounded-2xl p-6 text-white relative pt-20 overflow-hidden hover:shadow-xl transition-shadow`}>
            {/* Circle Image */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md bg-white">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            </div>

            <div className="mt-15 text-center">
                <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                <p className="text-white/90 text-sm mb-12">{card.desc}</p>
            </div>

            {/* Learn More Button */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-1 flex justify-between items-center pl-4 shadow-lg">
                <span className="text-gray-800 text-sm font-semibold">Learn More</span>
                <div className="bg-blue-500 p-2 rounded-lg text-white">
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Community = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
            {/* Red Circle Background */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-red-700 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[206px] z-0"></div>
            {/* Person Image */}
            <img 
                src={e}
                alt="Professional" 
                className="relative z-10 w-3/4 max-w-sm drop-shadow-2xl rounded-b-full mask-image-gradient"
            />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-6">
                 {/* Logo mark roughly matching screenshot */}
                <div className="text-3xl font-bold flex items-center">
                    <span className="text-teal-600">lem</span>
                    <span className="text-yellow-500">iCi</span>
                    <span className="ml-2 text-purple-600 font-normal">Community</span>
                </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                For people who want an easier way to follow up to 5 Companies that Matter to them
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
                Join active community of 5 million+ business professionals and get exclusive insights about competitors prospects, and market updates that are only available to Owler users- so you can ensure you stay ahead of the competition.
            </p>

            <div className="space-y-4 mb-8">
                {[
                    "Find detailed company information",
                    "Discover your closest competitors",
                    "Get real-time alerts and daily emails about relevant company and market news"
                ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                    </div>
                ))}
            </div>

            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1">
                Learn about LeMiCi community <ArrowRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

const SafetySection = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-black overflow-hidden">
        {/* Abstract Background - Using a dark, red-tinged placeholder or gradient */}
        <div className="absolute inset-0 z-0">
             <img 
                src={f}
                alt="Abstract background" 
                className="w-full h-full object-cover opacity-60 mix-blend-color-dodge"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start justify-center h-full">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Making Life Safe <br/> And Transparent
            </h2>
            <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed text-lg">
                We're committed to promoting safety and transparency for everyone. With over 15 years of experience in the industry, we've become a trusted name in public data record search solutions.
            </p>
            <p className="text-gray-400 max-w-2xl mb-10 leading-relaxed">
                Our database is powered by over 1,000 data sources, with billions of records processed, and more than 300,000 searches conducted every day. This lets you useRadars to search people by name or any other available...
            </p>
            
            <button className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                Search Now
            </button>
        </div>
    </section>
  );
};

const FeaturedBusinesses = () => {
    const businesses = [
        {
            name: "Denim Jeans",
            location: "Himayat nagar • Hyderabad",
            rating: 5,
            image: `${g}`
        },
        {
            name: "Vandana Silk Centre",
            location: "Shampur • Rishikesh",
            rating: 5,
            image: `${h}`
        },
        {
            name: "Arcade Gaming",
            location: "Sector 29 • Chandigarh",
            rating: 5,
            image: `${i}`
        },
        {
            name: "Khadi Store",
            location: "Langat Singh • Patna",
            rating: 4,
            image: `${j}`
        }
    ];

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h3 className="text-gray-500 italic mb-6 text-lg">Featured Business</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {businesses.map((biz, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="rounded-xl overflow-hidden h-48 mb-4">
                            <img 
                                src={biz.image} 
                                alt={biz.name} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <h4 className="font-bold text-xl text-gray-800 mb-1">{biz.name}</h4>
                        <div className="flex text-yellow-400 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 fill-current ${i < biz.rating ? '' : 'text-gray-300'}`} />
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm">{biz.location}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Stats = () => {
    const statsData = [
        { value: "300K+", label: "Searches a Day", theme: "white" },
        { value: "150M+", label: "Verified Contacts", theme: "red" },
        { value: "500K+", label: "Monthly Contributions", theme: "white" },
        { value: "20M+", label: "Company Profiles", theme: "white" },
    ];

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, idx) => (
                    <div 
                        key={idx} 
                        className={`rounded-2xl p-8 text-center flex flex-col justify-center items-center h-64 shadow-sm ${
                            stat.theme === 'red' ? 'bg-red-700 text-white' : 'bg-white text-black'
                        }`}
                    >
                        <h3 className="text-4xl md:text-5xl font-extrabold mb-4">{stat.value}</h3>
                        <p className={`text-lg ${stat.theme === 'red' ? 'text-gray-100' : 'text-gray-600'}`}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};



const App = () => {
  return (
    <div className="font-sans bg-white min-h-screen text-gray-900">
      <Hero />
      <Categories />
      <Features />
      <Community />
      <SafetySection />
      <FeaturedBusinesses />
      <Stats />
    </div>
  );
};

export default App;