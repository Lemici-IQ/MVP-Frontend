import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaCircleXmark } from 'react-icons/fa6';
import { FaSliders } from 'react-icons/fa6';

const Header = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [searchValue, setSearchValue] = useState("");

    return (
        <section
            className="p-4 min-h-[40vh] lg:min-h-[55vh] flex flex-col justify-between bg-cover bg-center pt-10"
            style={{
                backgroundImage: 'url(/hari/ExpertConnectImages/backgrounds/expertListing.jpg)',
            }}
        >
            <div>
                {/* Top Row */}
                <div className="flex items-center justify-between">
                    <FaArrowLeft
                        className="text-base sm:text-lg cursor-pointer text-white"
                        onClick={() => window.history.back()}
                        title="Go back"
                    />
                </div>

                {/* Title */}
                <h1 className="text-lg mt-4 font-semibold lg:text-2xl text-white">
                    Grow Your Network
                </h1>

                {/* Paragraph */}
                <p className="mt-2 text-sm lg:text-base text-white leading-relaxed opacity-60">
                    Alignable is the go-to network for over 9 million business<br />
                    owners. These are the people who become clients,<br />
                    customers, and partners- or who introduce you to them.
                </p>

                {/* Search + Filter Section */}
                <div className="mt-6 flex flex-col gap-2">
                    {/* Top Search Row */}
                    <div className="flex items-center gap-3">
                        {/* Search Bar */}
                        <div className="flex items-center w-[220px] lg:w-[500px] px-2 py-2 lg:px-3 lg:py-3 rounded-xl shadow-sm bg-[#F2F2F2] border-[#D9D9D9]">
                            <FiSearch className="text-gray-500" />
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="bg-transparent outline-none ml-2 flex-1 text-sm"
                            />
                            <FaCircleXmark
                                className="text-gray-400 cursor-pointer"
                                onClick={() => setSearchValue("")}
                            />
                        </div>

                        {/* Add Filter Button */}
                        <button className="flex items-center gap-2 px-2 py-2 lg:px-4 lg:py-2.5 rounded-xl bg-[#FFFDFD] border-2 border-[#EDEDED] text-blue-600 font-medium text-sm hover:bg-blue-50 cursor-pointer">
                            <FaSliders className="text-blue-600" />
                            Add Filter
                        </button>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-2 text-sm text-white mt-1">
                        {["All", "Industry", "Sector", "Name"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-2 py-1 rounded cursor-pointer ${activeTab === tab
                                    ? "bg-[#EDEDED] text-black font-medium"
                                    : "hover:text-black"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
