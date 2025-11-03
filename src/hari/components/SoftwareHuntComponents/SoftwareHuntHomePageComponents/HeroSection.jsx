import React, { useState } from "react";

const HeroSection = () => {
    const [activeButton, setActiveButton] = useState("Software");

    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <section
                id="home"
                className="min-h-fit flex flex-col items-center space-y-4 pt-16"
            >
                {/* Main Heading */}
                <h1 className="mb-0 font-space text-[#14A79D] text-[28px] font-bold text-center md:text-5xl md:mb-3">
                    Make Informed Decisions
                </h1>
                <h1 className="mb-0 font-space text-[#14A79D] text-[28px] font-bold text-center md:text-5xl md:mb-3">
                    About Your{" "}
                    <span className="text-[#356E77] font-space">Software Needs</span>
                </h1>

                {/* Toggle Buttons */}
                <div className="flex space-x-4 pt-4 pb-4">
                    {["Software", "AI", "Services"].map((label) => (
                        <button
                            key={label}
                            onClick={() => setActiveButton(label)}
                            className={`px-3 py-1.5 rounded-md text-xs md:text-sm cursor-pointer transition-all duration-200 ${activeButton === label
                                    ? "bg-[#14A79D] text-white border border-[#14A79D]"
                                    : "border border-gray-300 text-gray-700 hover:bg-[rgba(20,167,157,0.2)] hover:border-[#14A79D]"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="w-full max-w-2xl bg-[#FFFDFD] px-8 py-8 rounded-[4rem] shadow-md border-2 border-gray-200 flex flex-col gap-4">
                    {/* Input + Mic/Cube */}
                    <div className="flex items-center justify-between">
                        <input
                            type="text"
                            placeholder="Ask anything (Industry/Company/Sector)"
                            className="w-full text-gray-700 placeholder:text-gray-400 text-base focus:outline-none bg-transparent"
                        />
                        <div className="flex gap-3 ml-4 cursor-pointer">
                            <img
                                src="/hari/DataProviderImages/icons/mic.png"
                                alt="mic"
                                className="w-6 h-6"
                            />
                            <img
                                src="/hari/DataProviderImages/icons/cube.png"
                                alt="icon"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>

                    {/* Icon Row */}
                    <div className="flex gap-3 mt-3 cursor-pointer justify-start">
                        <div className="w-8 h-8 rounded-xl bg-[#13A3B54D] flex items-center justify-center">
                            <img
                                src="/hari/DataProviderImages/icons/plus.png"
                                alt="plus"
                                className="w-5 h-5"
                            />
                        </div>

                        <div className="h-8 px-3 rounded-xl bg-[#FCEFE0] flex items-center gap-2">
                            <img
                                src="/hari/DataProviderImages/icons/location.png"
                                alt="location"
                                className="w-5 h-5"
                            />
                            <img
                                src="/hari/DataProviderImages/icons/ai.png"
                                alt="ai"
                                className="w-5 h-5"
                            />
                        </div>

                        <div className="h-8 px-3 rounded-xl bg-[#F0EAF4] flex items-center gap-2">
                            <img
                                src="/hari/DataProviderImages/icons/Group.png"
                                alt="group"
                                className="w-5 h-5"
                            />
                            <img
                                src="/hari/DataProviderImages/icons/filter.png"
                                alt="filter"
                                className="w-5 h-5"
                            />
                        </div>
                    </div>
                </div>

                {/* Tag Line */}
                <div>
                    <p className="text-gray-600 text-sm md:text-base mt-2 text-center">
                        Comprehensive Business Plan And Project Reports
                    </p>
                </div>

                {/* Partner Logos */}
                <div className="mt-6 pb-6 flex justify-center items-center gap-2 flex-nowrap w-full overflow-hidden px-1 sm:flex-wrap sm:gap-4">
                    {[
                        "teams",
                        "drive",
                        "aws",
                        "shopify",
                        "netflix",
                        "gmail",
                        "dropbox",
                        "youtube",
                        "zoom",
                    ].map((logo, idx) => {
                        // Default: mobile sizes
                        let wrapperSize = "w-7.5 h-7.5";
                        let imageSize = "w-5 h-5";

                        // Desktop sizes 
                        if (idx === 1 || idx === 7) {
                            wrapperSize += " sm:w-16 sm:h-16";
                            imageSize += " sm:w-10 sm:h-10";
                        } else if (idx === 2 || idx === 6) {
                            wrapperSize += " sm:w-18 sm:h-18";
                            imageSize += " sm:w-13 sm:h-13";
                        } else if (idx === 3 || idx === 5) {
                            wrapperSize += " sm:w-20 sm:h-20";
                            imageSize += " sm:w-14 sm:h-14";
                        } else if (idx === 4) {
                            wrapperSize += " sm:w-24 sm:h-24";
                            imageSize += " sm:w-17 sm:h-17";
                        } else {
                            wrapperSize += " sm:w-16 sm:h-16";
                            imageSize += " sm:w-11 sm:h-11";
                        }

                        return (
                            <div
                                key={idx}
                                className={`${wrapperSize} shrink-0 rounded-full bg-white flex items-center justify-center shadow-md`}
                            >
                                <img
                                    src={`/hari/SoftwareHuntImages/sponsors/${logo}.png`}
                                    alt={logo}
                                    className={`${imageSize} object-contain`}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
