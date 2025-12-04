import React from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const data = [
    {
        logo: "/hari/SoftwareHuntImages/zoho.jpg",
        name: "Zoho CRM",
        rating: "(4.4 on Capterra, 4.3 on G2, & 4.4 on Gartner)",
        desc: "Scalable CRM for Growing Businesses, Integrated Sales & Marketing Tools",
    },
    {
        logo: "/hari/SoftwareHuntImages/leadsquared.jpg",
        name: "Lead Squared",
        rating: "(4.4 on Capterra, 4.3 on G2, & 4.4 on Gartner)",
        desc: "Powerful CRM for Complex Sales, Extensive Customization & Integrations",
    },
    {
        logo: "/hari/SoftwareHuntImages/sugarcrm.jpg",
        name: "Sugar CRM",
        rating: "(4.1 on Gartner, 3.8 on G2, and 3.8 on Capterra)",
        desc: "Open & Flexible CRM Platform, Customizable for Specific Needs",
    },
    {
        logo: "/hari/SoftwareHuntImages/salesforce.jpg",
        name: "SaleForce",
        rating: "(4.4 on Capterra, 4.3 on G2, & 4.4 on Gartner)",
        desc: "Marketing Automation & Sales Execution, Strong Lead Scoring & Tracking",
    },
    {
        logo: "/hari/SoftwareHuntImages/pipedrive.jpg",
        name: "Pipedrive",
        rating: "(4.4 on Capterra, 4.3 on G2, & 4.4 on Gartner)",
        desc: "Sales-Focused Pipeline Management, Visual & Intuitive Sales Process",
    },
    {
        logo: "/hari/SoftwareHuntImages/hubspot.jpg",
        name: "HubSpot",
        rating: "(4.4 on Capterra, 4.3 on G2, & 4.4 on Gartner)",
        desc: "Free CRM with Marketing Focus, All-in-One Platform for Growth",
    },
];

const PopularCRM = () => {
    return (
        <section className="w-full py-14 px-4 md:px-12">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Most Popular CRM Software
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="flex justify-between items-center bg-[#FFFDFD] border-2 border-[#EDEDED] rounded-xl border p-6 shadow-sm hover:shadow-md transition"
                    >
                        {/* Left Content */}
                        <div className="flex gap-4">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="w-16 h-16 object-contain"
                            />

                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>

                                <div className="flex items-center gap-2 text-sm text-gray-500 my-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>{item.rating}</span>
                                </div>

                                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                            </div>
                        </div>

                        {/* Arrow Button */}
                        <button className="border-2 rounded-full p-2 text-[#D9D9D9] font-bold">
                            <HiArrowUpRight size={22} className="stroke-[2]" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Bottom View More */}
            <div className="flex justify-end mt-4">
                <Link
                    to="/viewmore"
                    className="text-blue-500 font-medium text-sm hover:underline"
                >
                    View More →
                </Link>
            </div>
        </section>
    );
};

export default PopularCRM;
