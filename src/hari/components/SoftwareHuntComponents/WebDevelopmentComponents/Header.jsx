import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaCircleXmark, FaSliders } from 'react-icons/fa6';

const Header = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [showLocalStartups, setShowLocalStartups] = useState(false);

  return (
    <>
      <section
        className="relative p-4 min-h-[55vh] sm:min-h-[60vh] flex flex-col justify-between bg-cover bg-center"
        style={{
          backgroundImage: 'url(/hari/SoftwareHuntImages/WebDevBanner.jpg)',
        }}
      >
        <div className='m-4'>
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
            Web Development
          </h1>

          {/* Paragraph */}
          <p className="mt-2 text-sm lg:text-base leading-relaxed text-white">
            CRM (Customer Relationship Management) software helps businesses manage and analyze customer interactions and<br></br>
            data throughout the customer lifecycle. It streamlines communication, boosts customer satisfaction, and improves sales<br></br>
            and service efficiency. Ideal for tracking leads, automating tasks, and building strong customer relationships.
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
                  placeholder="Search..."
                />
                {searchValue && (
                  <FaCircleXmark
                    className="text-gray-400 cursor-pointer"
                    onClick={() => setSearchValue("")}
                  />
                )}
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
                    : "hover:text-white"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Local Startups Toggle */}
        <div className="absolute bottom-4 right-6 flex items-center gap-2 text-white">
          <span>Show Local Startups</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showLocalStartups}
              onChange={() => setShowLocalStartups(!showLocalStartups)}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
          </label>
        </div>
      </section>
    </>
  );
};

export default Header;
