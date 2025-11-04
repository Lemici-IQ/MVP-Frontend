import React from "react";
import {
    MdSignalCellularAlt,
} from 'react-icons/md';

const relatedCategories = [
    { name: 'AI & ML', image: '/hari/ExpertConnectImages/icons/rocket.png' },
    { name: 'E-commerce', image: '/hari/ExpertConnectImages/icons/cart.png' },
    { name: 'Mental Wellness', image: '/hari/ExpertConnectImages/icons/brain.png' },
    { name: 'Health Tech', image: '/hari/ExpertConnectImages/icons/doctor.png' },
    { name: 'Prop. Tech & Real Es.', image: '/hari/ExpertConnectImages/icons/buildings.png' },
    { name: 'B2B SaaS', image: '/hari/ExpertConnectImages/icons/saas.png' },
    { name: 'Logistics & Mobility', image: '/hari/ExpertConnectImages/icons/truck.png' },
    { name: 'Clean Tech', image: '/hari/ExpertConnectImages/icons/plant.png' },
    { name: 'EdTech', image: '/hari/ExpertConnectImages/icons/school.png' },
    { name: 'FoodTech', image: '/hari/ExpertConnectImages/icons/food.png' },
    { name: 'FinTech', image: '/hari/ExpertConnectImages/icons/creditCard.png' },
];

const startups = [
    {
        name: "Flipkart",
        category: "E-commerce & Online retail",
        image: "/hari/ExpertConnectImages/backgrounds/expert1.jpg",
    },
    {
        name: "Meesho",
        category: "E-commerce & Online retail",
        image: "/hari/ExpertConnectImages/backgrounds/expert2.jpg",
    },
    {
        name: "CureSkin",
        category: "Healthtech & Fintech",
        image: "/hari/ExpertConnectImages/backgrounds/expert3.jpg",
    },
    {
        name: "RecyKal",
        category: "Recycle tech Platform",
        image: "/hari/ExpertConnectImages/backgrounds/expert4.jpg",
    },
];

const StartupSection = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 px-6 py-4">
            {/* LEFT SECTION */}
            <div className="w-full lg:w-[70%]">
                {/* Featured Startup Categories */}
                <div>
                    <div>
                        <div className="flex bg-[#EDEDED] items-center justify-between mb-4 px-4 py-2 rounded-full">
                            <div className="w-full text-sm font-medium text-gray-700">
                                Featured Startup Categories
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 px-4">
                            {relatedCategories.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-10 h-10 object-contain"
                                    />
                                    <div className="text-sm text-gray-800">{item.name}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mb-4">
                            <button className="text-blue-600 text-sm cursor-pointer hover:underline hover:font-medium">
                                See All →
                            </button>
                        </div>
                    </div>
                </div>
                {/* Recommended Expert */}
                <section>
                    <div className="flex bg-[#EDEDED] items-center justify-between mb-4 px-4 py-2 rounded-full">
                        <div className="w-full text-sm font-medium text-gray-700">
                            Recommended Expert
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                        {startups.map((startup, index) => (
                            <div
                                key={index}
                                className="relative w-40 h-60  lg:w-50 lg:h-70 rounded-2xl overflow-hidden shadow-md group"
                            >
                                <img
                                    src={startup.image}
                                    alt={startup.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                {/* Content */}
                                <div className="absolute bottom-6 left-4 right-4 text-white">
                                    <h3 className="text-xl font-semibold">{startup.name}</h3>
                                    <p className="text-sm mb-4">{startup.category}</p>
                                    <button className="w-full bg-white text-black py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* RIGHT SECTION */}
            <div className="lg:w-[30%] w-full flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                    <h3 className="text-md font-semibold mb-3">Understanding Startups</h3>
                    <ol className="list-decimal list-inside space-y-2 text-blue-600 text-sm">
                        <li><a href="#">What problem does the startup aim to solve?</a></li>
                        <li><a href="#">Who are the target users or customers?</a></li>
                        <li><a href="#">What is the startup's core product or service?</a></li>
                        <li><a href="#">When was the startup founded and by whom?</a></li>
                        <li><a href="#">What stage is the startup in (idea, MVP, growth, scaling)?</a></li>
                        <li><a href="#">What problem does the startup aim to solve?</a></li>
                        <li><a href="#">Who are the target users or customers?</a></li>
                        <li><a href="#">What is the startup's core product or service?</a></li>
                        <li><a href="#">When was the startup founded and by whom?</a></li>
                        <li><a href="#">What stage is the startup in (idea, MVP, growth, scaling)?</a></li>
                    </ol>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 mb-5 lg:mb-0">
                    <h3 className="text-md font-semibold mb-2 flex items-center gap-1">
                        Key Market insights <MdSignalCellularAlt />
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">Revenue of the market research industry worldwide</p>
                    <a href="#" className="text-[#4A53FA] text-sm font-medium mb-2 inline-block">53.9B USD</a>
                    <p className="text-xs text-gray-600 mb-1">Annual growth of global market research revenue</p>
                    <p className="text-[#4A53FA] text-sm font-medium mb-4">4.6%</p>
                    <button className="text-sm bg-[#EDEDED] hover:bg-gray-200 px-3 py-1 rounded-md cursor-pointer text-[#4A53FA]">Get more insights</button>
                </div>
            </div>
        </div>
    );
};

export default StartupSection;
