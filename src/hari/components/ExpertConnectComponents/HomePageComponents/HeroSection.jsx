import React from "react";
import { FaRobot, FaVideo, FaChartBar, FaCalendarAlt, FaBook, FaUserPlus, FaArrowRight } from 'react-icons/fa';

const features = [
  { icon: <FaRobot />, label: 'Consult with AI Expert' },
  { icon: <FaVideo />, label: 'Request Meeting' },
  { icon: <FaChartBar />, label: 'View Industry Insight' },
  { icon: <FaCalendarAlt />, label: 'Local Events' },
  { icon: <FaBook />, label: 'Read Guidelines' },
  { icon: <FaUserPlus />, label: 'Join as an Expert' },
];


const HeroSection = () => {

    return (
        <div>
            <div className="pt-12 max-w-screen-xl mx-auto px-6">
                <section
                    id="home"
                    className="min-h-fit flex flex-col items-center space-y-4 pt-16 md:pt-24"
                >

                    {/* Main Heading */}
                    <h1 className="mb-0 font-space text-[28px] font-bold text-center md:text-5xl md:mb-3">
                        Unlock the Bottleneck
                    </h1>
                    <h1 className="mb-0 font-space text-[28px] font-bold text-center md:text-5xl text-[#6D3E93] md:mb-3">
                        Find Expert, Upskill Team
                    </h1>
                    <h1 className="font-space text-[28px] font-bold text-center md:text-5xl text-[#6D3E93]">
                        & Transform Organization
                    </h1>

                    {/* Search Bar */}
                    <div className="mt-5 w-full max-w-2xl h-40 bg-[#FFFDFD] px-5 py-6 rounded-3xl shadow-md border-2 border-black flex justify-between items-start flex-col">
                        <input
                            type="text"
                            placeholder="Ask Anything..."
                            className="w-full text-gray-700 placeholder:text-gray-400 text-base focus:outline-none bg-transparent"
                        />
                        <div className="flex items-end justify-between w-full">

                            <div className="flex gap-3 mt-5 cursor-pointer">
                                <div className="w-15 h-8 rounded-xl bg-[#FF61054D] flex items-center justify-center gap-3" >
                                    <img src="/hari/ExpertConnectImages/icons/search.svg" alt="Search" className="w-5 h-5 ml-1" />
                                    <img src="/hari/ExpertConnectImages/icons/document.svg" alt="Document" className="w-5 h-5" />
                                </div>
                                <div className="w-15 h-8 rounded-xl bg-[#13A3B54D] flex items-center justify-cente gap-3" >
                                    <img src="/hari/ExpertConnectImages/icons/circles.svg" alt="Search" className="w-5 h-5 ml-1" />
                                    <img src="/hari/ExpertConnectImages/icons/flask.svg" alt="Document" className="w-5 h-5" />
                                </div>
                                <div className="w-10 h-8 rounded-xl bg-[#6D3E934D] flex items-center justify-center" >
                                    <img src="/hari/ExpertConnectImages/icons/location.svg" alt="Document" className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="flex gap-3 ml-2 cursor-pointer">
                                <img src="/hari/ExpertConnectImages/icons/mic.png" alt="icon" className="w-7 h-7" />
                                <img src="/hari/ExpertConnectImages/icons/cube.png" alt="mic" className="w-7 h-7" />
                            </div>
                        </div>
                    </div>

                    {/* Tagline */}
                    <div className="mt-4 text-center">
                        <p>Join the Business networking platform and shape India's Economy</p>
                        <a href="#" className="text-blue-500 inline-flex items-center gap-1 font-medium mt-2">
                            Preview Membership <FaArrowRight className="text-[0.7em]"/>
                        </a>
                    </div>
                </section>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8 px-4">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="bg-[#6D3E93] text-white rounded-lg w-40 lg:w-44 h-26 flex flex-col items-center justify-center"
                    >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <div className="text-center text-sm">{feature.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
