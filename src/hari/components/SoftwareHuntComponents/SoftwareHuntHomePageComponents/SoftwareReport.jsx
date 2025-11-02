import React from "react";
import { FaStar } from "react-icons/fa";

const products = [
    {
        id: 1,
        logo: "/hari/SoftwareHuntImages/successAI.jpg",
        name: "Success.ai",
        rating: 5,
        description:
            "Success.ai | B2B Company & Company Data -28M Verified | Company Profiles Global | Best Price Guarantee & 99% Data Accuracy",
        location: "UK,USA,Germany",
    },
    {
        id: 2,
        logo: "/hari/SoftwareHuntImages/salutary.jpg",
        name: "Salutary Data",
        rating: 5,
        description:
            "Company Data | 6.7M+ Total Companies | Company Name, Industry, Employees, Revenue, Website, Address +More",
        location: "Lexington, USA",
    },
    {
        id: 3,
        logo: "/hari/SoftwareHuntImages/coreSignal.jpg",
        name: "CoreSignal",
        rating: 5,
        description:
            "Coresignal | Company Data| Firmographic Data | Global 120M+ Records | Largest Professional Network | +9 Other Sources",
        location: "UK,USA,Germany",
    },
    {
        id: 4,
        logo: "/hari/SoftwareHuntImages/successAI.jpg",
        name: "Success.ai",
        rating: 5,
        description:
            "Success.ai | B2B Company & Company Data -28M Verified | Company Profiles Global | Best Price Guarantee & 99% Data Accuracy",
        location: "UK,USA,Germany",
    },
];

const SoftwareReport = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <button className='bg-[#D9D9D9] w-full my-4 rounded-4xl text-left px-4 py-2 mb-8 font-medium'>Featured Software Reports</button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="border-2 border-black rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all h-full min-h-[400px]"
                    >
                        {/* Logo */}
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="w-14 h-14 object-contain mb-4"
                        />

                        {/* Name */}
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

                        {/* Rating */}
                        <div className="flex justify-center mb-3">
                            {Array(item.rating)
                                .fill()
                                .map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                            {item.description}
                        </p>

                        {/* Location */}
                        <p className="text-gray-400 text-sm mb-6">{item.location}</p>

                        {/* Button */}
                        <button className="bg-black text-white font-medium py-3 px-6 rounded-b-3xl w-full hover:bg-gray-900 transition-all">
                            View Product
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SoftwareReport;
