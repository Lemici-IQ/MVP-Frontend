import React, { useState } from 'react';
import { Search, User, Eye, Filter, Settings, Menu, X } from 'lucide-react';
import ComponentDiagram from './ComponentDiagram';
import TabNavigation from './TavNavigation';
import Chatbot from './Chatbot';
import ProjectDeliverySection from './ProjectDeliverySection';
import Analytics from './Analytics';
import Robotgirl from './Robotgirl';
import Offerings from './navbar/Offerings';
import Pricings from './navbar/Pricing';
import {Link} from 'react-router-dom';

// Trust Badge Component
const TrustBadge = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center gap-0 text-sm text-gray-600">
                <div className="relative w-20 h-8 flex items-center">
                    {/* First Image */}
                    <div className="absolute left-0  w-6 h-6 top-1/2 -translate-y-1/2 translate-x-10/9 bg-[#6D3E93] rounded-full border-2 border-white z-10 overflow-hidden">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="/abhinay/ap1.jpg"
                            alt="user1"
                        />
                    </div>
                    {/* Second Image */}
                    <div className="absolute left-4  w-6 h-6 top-1/2 -translate-y-1/2 translate-x-10/9 bg-[#6D3E93] rounded-full border-2 border-white z-30 overflow-hidden">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="/abhinay/ap2.png"
                            alt="user2"
                        />
                    </div>
                    {/* Third Image */}
                    <div className="absolute left-7  w-6 h-6 top-1/2 -translate-y-1/2 translate-x-10/9  bg-[#6D3E93] rounded-full border-2 border-white z-30 overflow-hidden">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="/abhinay/ap3.jpg"
                            alt="user3"
                        />
                    </div>
                </div>
                <span className="text-[0.72rem]">Loved by 500+ Business and Founders</span>
            </div>
        </div>
    );
};




// Main Hero Section
const HeroSection = () => {
    return (
        <div className="bg-white py-8">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <TrustBadge />

                {/* Main Heading */}
                <h1
                    className="w-full mt-2 max-w-4xl mx-auto text-6xl md:text-7xl mb-6 leading-[0.9] text-center"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, color: '#6D3E93' }}
                >
                    Seek Intelligence<br />
                    <span className="block">Not Information</span>
                </h1>


                {/* Tab Navigation Buttons */}
                <div className='text-center w-full'>
                <TabNavigation />
                </div>


                {/* Search Interface */}
                


                <Chatbot />
                
            </div>
        </div>
    );
};

const AbhiApp = () => {

    return (
        <div>
            <div className="min-h-screen">
                <HeroSection />
                <div><p className='text-gray-600 text-center mb-6'>Structure of Business</p></div>
                <div className="w-full flex justify-center px-2 sm:px-4 md:px-8 lg:px-2">
                <ComponentDiagram/>
                </div>
                <ProjectDeliverySection />
                <Analytics />  
                <div className="px-6 md:px-12 lg:px-20 xl:px-32">
                    <Robotgirl /> 
                </div>
            </div>
        </div>
    )
}

export default AbhiApp;

