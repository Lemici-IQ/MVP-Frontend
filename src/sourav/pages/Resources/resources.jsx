import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowRight, Send } from 'lucide-react';
import a from "../../assets/Resources/1.jpg";
import b from "../../assets/Resources/2.jpg";
import c from "../../assets/Resources/3.jpg";
import d from "../../assets/Resources/4.jpg";
import e from "../../assets/Resources/5.jpg";
import f from "../../assets/Resources/6.jpg";
import g from "../../assets/Resources/7.jpg";
import h from "../../assets/Resources/8.jpg";


const DiscoverButton = ({ text }) => (
    <button className="bg-[#652C90] text-white font-medium py-2.5 px-6 rounded-lg flex items-center justify-center space-x-2 group transition-all duration-300 hover:bg-[#581c87] shadow-md hover:shadow-lg">
        <span>{text}</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
);

const Hero = () => (
    <section className="relative bg-white pt-28 pb-32 lg:pt-40 lg:pb-44 text-center ">
        {/* Background Gradient Blurs for the aurora effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-[calc(50%-15rem)] -translate-y-1/2 w-[30rem] h-[30rem] bg-teal-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-[calc(50%+15rem)] -translate-y-1/2 w-[30rem] h-[30rem] bg-yellow-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4" >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4a044e] leading-tight"
            style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 800,
                color: "#652C90",
              }}>
                Explore Insights, Events <br /> & Data
            </h1>
            <p className="mt-6 text-md lg:text-lg text-gray-700 mx-auto">
                Discover curated research, reports, blogs, and resources designed to keep you informed and inspired.
            </p>
        </div>
    </section>
);


const InfoCard = ({ imageSrc, title, description, buttonText }) => (
    <div className="bg-white p-4 border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
        <div className="p-6 lg:p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold text-[#652C90] mb-3">{title}</h3>
            <p className="text-gray-600 text-base text-md mb-6 flex-grow">{description}</p>
            <div className="mt-auto">
                <DiscoverButton text={buttonText} />
            </div>
        </div>
    </div>
);

const EventsAndIndia = () => (
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <InfoCard
                imageSrc={a}
                title="Events"
                description="Stay updated with our exclusive lineup of events, from industry conferences and thought-leadership sessions to interactive workshops. Explore opportunities to network, learn, and shape the future."
                buttonText="Discover more"
            />
            <InfoCard
                imageSrc={b}
                title="India@2407"
                description="A dedicated space to highlight India's growth story, milestones, and future opportunities. Gain unique perspectives on innovation, progress, and vision that define the journey of India@2407."
                buttonText="Discover more"
            />
        </div>
    </section>
);


const InsightCard = ({ imageSrc, title, description, buttonText }) => (
    <div className="relative rounded-2xl shadow-lg overflow-hidden h-96 group">
        <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/50 "></div>
        <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-200 text-sm font-thin  mb-6">{description}</p>
            <div className='w-[80%] text-sm font-medium align-left'>
                <DiscoverButton  text={buttonText} />
            </div>
        </div>
    </div>
);

const Insights = () => (
    <section className="py-16 lg:py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#652C90] mb-5">Insights</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
                Dive deep into curated knowledge sources that provide data-driven perspectives and expert opinions. Explore insights that matter for decision-making and future growth.
            </p>
            <div className="flex justify-center mb-12 lg:mb-16">
                <DiscoverButton text="Discover more" />
            </div>
            
            <div className="grid grid-cols-1 text-left md:grid-cols-3 gap-8">
                <InsightCard
                    imageSrc= {c}
                    title="Research"
                    description="Explore in-depth studies, data analysis, and findings that bring clarity to complex trends."
                    buttonText="Read Research"
                />
                <InsightCard
                    imageSrc={d}
                    title="Reports"
                    description="Download comprehensive reports packed with actionable insights, industry patterns, and benchmarks."
                    buttonText="View Reports"
                />
                <InsightCard
                    imageSrc={e}
                    title="Blog"
                    description="Stay informed with expert articles, thought leadership pieces, and the latest updates on emerging topics."
                    buttonText="Visit Blog"
                />
            </div>
        </div>
    </section>
);

const DataAndLicensing = () => (
    <section className="relative bg-white  overflow-hidden">
        {/* Faint Gradient Background for the right side */}
        <div className="absolute top-0 right-0 w-full  lg:w-3/5 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-pink-50"></div>
            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-200 rounded-full blur-3xl opacity-30" style={{animationDelay: '3s'}}></div>
            <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-pink-200 rounded-full blur-3xl opacity-20" style={{animationDelay: '5s'}}></div>
        </div>
        
        <div className="relative max-w-full mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] items-center ">
            {/* Image Column */}
            <div className="px-4 w-full h-full lg:px-0">
                <img 
                    src={f} 
                    alt="Data on laptop" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Content Column */}
            <div className="p-8 lg:p-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#652C90] mb-5">Data & Licensing</h2>
                <p className="text-lg text-gray-700 mb-10">
                    Learn about our data collection methodology and discover licensing opportunities that bring trusted insights to your business and research needs.
                </p>
                
                <div className="flex flex-col space-y-8">
                    {/* Item 1: How We Got Our Data */}
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <img src={g} alt="How We Got Our Data" className="w-full sm:w-40 h-auto rounded-lg shadow-md flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-[#652C90] mb-2">How We Got Our Data</h4>
                                <p className="text-gray-600 mb-5">Understand the transparency, credibility, and processes behind how we collect and validate data.</p>
                                <DiscoverButton text="Discover more" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-b border-purple-200"></div>
                    
                    {/* Item 2: Data Licensing */}
                    <div>
                        <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <img src={h} alt="Data Licensing" className="w-full sm:w-40 h-auto rounded-lg shadow-md flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-[#652C90] mb-2">Data Licensing</h4>
                                <p className="text-gray-600 mb-5">Access high-quality licensed data tailored to empower research, innovation, & business strategies.</p>
                                <DiscoverButton text="Discover more" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default function Explore() {
    // 1. STATE: Initialize flags to TRUE so page isn't empty on first load if fetch fails
    const [flags, setFlags] = useState({
        showHero: true,
        showEvents: true,
        showInsights: true,
        showDataLicensing: true
    });

    // 2. FETCH: Get the flags from backend
    useEffect(() => {
        axios.get("http://localhost:5000/api/explore/flags")
            .then((res) => {
                // Update state with backend flags
                if (res.data) {
                    setFlags(res.data);
                }
            })
            .catch((err) => {
                console.error("Error fetching flags, using defaults:", err);
            });
    }, []);

    // 3. RENDER: Conditional Logic
    // If a flag is false, that component will not render (null)
    return (
        <div className="bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            {flags.showHero && <Hero />}
            {flags.showEvents && <EventsAndIndia />}
            {flags.showInsights && <Insights />}
            {flags.showDataLicensing && <DataAndLicensing />}
        </div>
    );
}