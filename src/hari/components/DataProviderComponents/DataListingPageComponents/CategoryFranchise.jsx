import React from "react";
import { FaStar } from "react-icons/fa";

const products = [
    {
        logo: "/hari/DataProviderImages/successAI.jpg",
        name: "Success.ai",
        description:
            "Success.ai | B2B Company & Company Data - 28M Verified | Company Profiles Global | Best Price Guarantee & 99% Data Accuracy",
        location: "UK, USA, Germany",
    },
    {
        logo: "/hari/DataProviderImages/salutary.jpg",
        name: "Salutary Data",
        description:
            "Company Data | 6.7M+ Total Companies | Company Name, Industry, Employees, Revenue, Website, Address +More",
        location: "Lexington, USA",
    },
    {
        logo: "/hari/DataProviderImages/coreSignal.jpg",
        name: "CoreSignal",
        description:
            "Coresignal | Company Data | Firmographic Data | Global 120M+ Records | Largest Professional Network | +Owler +9 Other Sources",
        location: "UK, USA, Germany",
    },
];

const faqs = [
    "What is a category franchise in the context of the Golf industry?",
    "Who is the target customer for a Golf franchise in India?",
    "What is the typical business model used by golf franchises?",
    "What are the main services offered in a golf franchise?",
    "What kind of infrastructure or space is required?",
    "What is the expected investment and ROI for a golf franchise?",
    "What kind of training and support does the franchisor provide?",
    "In which locations does a golf franchise work best in India?",
];

const CategoryFranchise = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 pb-10 grid grid-cols-1 lg:grid-cols-10 gap-8 items-end">
            {/* Left Side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-end">
                {products.map((item, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-5 flex flex-col items-center text-center justify-between h-full min-h-[300px]"
                    >

                        {/* Logo */}
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="w-10 h-10 object-contain mb-2"
                        />

                        {/* Name */}
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                            {item.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-500 w-3.5 h-3.5" />
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-xs mb-2 leading-snug line-clamp-4">
                            {item.description}
                        </p>

                        {/* Location */}
                        <p className="text-gray-400 text-xs mb-3">{item.location}</p>

                        {/* Button */}
                        <button className="bg-[#FF6105] text-white font-semibold text-sm px-8 py-2 rounded-full hover:bg-orange-600 transition">
                            View Product
                        </button>
                    </div>
                ))}
            </div>

            {/* Right Side */}
            <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-5 border border-gray-200 self-end h-[400px] overflow-y-auto">
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Understanding Category Franchise
                </h3>
                <ul className="space-y-1.5 text-xs leading-snug">
                    {faqs.map((q, idx) => (
                        <li
                            key={idx}
                            className="text-[#007BFF] hover:underline cursor-pointer"
                        >
                            {q}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CategoryFranchise;
