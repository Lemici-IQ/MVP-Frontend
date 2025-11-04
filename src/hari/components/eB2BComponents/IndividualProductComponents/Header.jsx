import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaCircleXmark } from 'react-icons/fa6';
import { FaSliders } from 'react-icons/fa6';

const Header = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const buttons = ["All Type", "Brand", "Product", "Material", "Model no.", "Blade Type"];
  const [active, setActive] = useState("All Type");

  return (
    <>
      <section
        className="p-4 min-h-[55vh] sm:min-h-[60vh] flex flex-col justify-between bg-cover bg-center rounded-b-xl"
        style={{
          backgroundImage: 'url(/hari/eB2BImages/images/backgroundImg-IndividualProduct.jpg)',
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
            Cricket Bat
          </h1>

          {/* Paragraph */}
          <p className="mt-2 text-sm lg:text-base leading-relaxed text-white">
            In the B2B (business-to-business) market, cricket bats are a high-demand product driven by sports <br />
            retailers, academies, schools, and clubs. Businesses typically source cricket bats in bulk from manufacturers or wholesalers  <br />
            to meet seasonal demand and local sporting events.
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
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
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
          <button className='bg-[#F2F2F2] w-full mt-4 rounded-4xl text-left px-4 py-2 font-medium'>Product Rating</button>
        </div>
      </section>
      <div
        className="grid grid-cols-3 gap-3 lg:flex lg:justify-between items-center py-10 px-5 lg:px-40"
      >
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`py-2 px-4 rounded-lg text-xs lg:text-base transition cursor-pointer ${active === btn ? "border-2 border-purple-500 text-purple-500" : "border border-gray-300 text-gray-600"}`}
          >
            {btn}
          </button>
        ))}
      </div>

    </>
  );
};

export default Header;
