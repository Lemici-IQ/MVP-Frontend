import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const SoftwareShowcase = () => {
    const categories = [
        "EMR Software",
        "Project Management",
        "LMS Software",
        "CRM Software",
        "Human Resources",
    ];
    const [activeCategory, setActiveCategory] = useState("EMR Software");

    const softwares = [
        {
            logo: "/hari/SoftwareHuntImages/advancedMD.png",
            name: "Advanced MD",
            desc: "AdvancedMD is a cloud-based EHR and practice management solution for independent medical practices, providing user-friendly dashboards & fast navigation.",
        },
        {
            logo: "/hari/SoftwareHuntImages/modMed.png",
            name: "ModMed EMR",
            desc: "ModMed (Modernizing Medicine) is a cloud-based, specialty-specific EMR platform designed to streamline workflows for practices.",
        },
        {
            logo: "/hari/SoftwareHuntImages/eClinicalWorks.png",
            name: "eClinicalWorks",
            desc: "eClinicalWorks provides comprehensive, AI-powered EHR and practice management solutions for ambulatory practices.",
        },
        {
            logo: "/hari/SoftwareHuntImages/nextGen.png",
            name: "NextGen Office",
            desc: "NextGen Office is an all-in-one, cloud-based solution built for independent medical practices & offering integrated EHR.",
        },
    ];

    return (
        <section className="px-10">
            {/* Header Bar */}
            <button className="bg-[#D9D9D9] w-full my-4 rounded-full text-left px-4 py-2 font-medium text-gray-800">
                Explore Tech Solution Users Trust
            </button>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-6 mb-16">
                {/* Dropdown on top */}
                <div className="flex justify-end mb-4">
                    <select className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400">
                        <option>CRM Software</option>
                        <option>ERP Software</option>
                        <option>HR Software</option>
                    </select>
                </div>

                {/* Tabs Below Dropdown */}
                <div className="flex justify-between items-center border-b border-gray-300 mb-8">
                    <div className="flex gap-8 text-sm sm:text-base font-medium text-gray-600">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`pb-3 transition-all duration-200 ${activeCategory === cat
                                        ? "text-blue-600 border-b-[3px] border-blue-600"
                                        : "text-gray-600 hover:text-blue-500"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Software Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {softwares.map((item, idx) => (
                        <div key={idx}>
                            {/* Image Box */}
                            <div className="bg-[#FFFDFD] rounded-xl border-2 border-[#EDEDED] p-6 flex items-center justify-center shadow-sm hover:shadow-md transition h-32">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="max-h-16 object-contain"
                                />
                            </div>

                            {/* Below Content */}
                            <div className="mt-3">
                                <div className="flex gap-1 mb-1 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <h3 className="font-semibold text-gray-900 text-base mb-1">
                                    {item.name}
                                </h3>
                                <p className="text-gray-500 text-sm leading-snug">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="text-right mt-4">
                    <a href="#" className="text-[#007BFF] text-sm hover:underline">
                        View More →
                    </a>
                </div>
            </section>
        </section>
    );
};

export default SoftwareShowcase;
