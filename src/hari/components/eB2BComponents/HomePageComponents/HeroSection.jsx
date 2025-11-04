import React from "react";
import { useState } from "react";

const HeroSection = () => {

    const [activeButton, setActiveButton] = useState("Machinery");

    return (
        <div className="pt-6 max-w-screen-xl mx-auto px-6">
            <section
                id="home"
                className="min-h-fit flex flex-col items-center space-y-4 pt-16 md:pt-24"
            >

                {/* See Plans Button */}
                <button className="px-3 py-1 border-2 border-[#e5e5ea] text-[#6D3E93] rounded-full text-sm font-medium transition duration-300 hover:bg-[#6D3E93] hover:text-white flex items-center space-x-1 hover:border-transparent cursor-pointer">
                    <span>See Plans</span>
                    <span>→</span>
                </button>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#6D3E93] text-center">
                    B2B Commerce
                </h1>
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#6D3E93] text-center">
                    Simplified
                </h1>

                <div className="flex space-x-4 pt-4 pb-4">
                    {["Machinery", "Products", "Raw Material"].map((label) => (
                        <button
                            key={label}
                            onClick={() => setActiveButton(label)}
                            className={`px-2 py-1 rounded-md text-xs cursor-pointer transition-all duration-200 ${activeButton === label
                                ? "bg-[#6D3E93] text-white border border-[#6D3E93]"
                                : "border border-gray-300 text-gray-700 hover:bg-purple-50 hover:border-purple-300"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="w-full max-w-2xl h-40 bg-[#FFFDFD] px-5 py-6 rounded-3xl shadow-md border-3 border-gray-300 flex justify-between items-start flex-col">
                    <input
                        type="text"
                        placeholder="Search product, category, brand….."
                        className="w-full text-gray-700 placeholder:text-gray-400 text-base focus:outline-none bg-transparent"
                    />
                    <div className="flex items-end justify-between w-full">

                        <div className="flex gap-3 mt-5 cursor-pointer">
                            <div className="w-15 h-8 rounded-xl bg-[#FF61054D] flex items-center justify-center gap-3" >
                                <img src="/hari/eB2BImages/icons/search.svg" alt="Search" className="w-5 h-5 ml-1" />
                                <img src="/hari/eB2BImages/icons/document.svg" alt="Document" className="w-5 h-5" />
                            </div>
                            <div className="w-15 h-8 rounded-xl bg-[#13A3B54D] flex items-center justify-cente gap-3" >
                                <img src="/hari/eB2BImages/icons/circles.svg" alt="Search" className="w-5 h-5 ml-1" />
                                <img src="/hari/eB2BImages/icons/flask.svg" alt="Document" className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-8 rounded-xl bg-[#6D3E934D] flex items-center justify-center" >
                                <img src="/hari/eB2BImages/icons/location.svg" alt="Document" className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="flex gap-3 ml-2 cursor-pointer">
                            <img src="/hari/eB2BImages/icons/mic.png" alt="icon" className="w-7 h-7" />
                            <img src="/hari/eB2BImages/icons/cube.png" alt="mic" className="w-7 h-7" />
                        </div>
                    </div>
                </div>

                {/* Partner Logos */}
                <div className="mt-6 pb-6 flex justify-center items-center gap-2 flex-nowrap w-full overflow-hidden px-1 sm:flex-wrap sm:gap-4">
                    {[
                        "Adobe",
                        "TradeIndia",
                        "IBM",
                        "IndiaMart",
                        "Amazon",
                        "Alibaba",
                        "Intel",
                        "FedEx",
                        "Oracle",
                    ].map((logo, idx) => {
                        // Default: mobile sizes
                        let wrapperSize = "w-7.5 h-7.5";
                        let imageSize = "w-6 h-6";

                        // Desktop sizes 
                        if (idx === 1 || idx === 7) {
                            wrapperSize += " sm:w-16 sm:h-16";
                            imageSize += " sm:w-12 sm:h-12";
                        } else if (idx === 2 || idx === 6) {
                            wrapperSize += " sm:w-18 sm:h-18";
                            imageSize += " sm:w-14 sm:h-14";
                        } else if (idx === 3 || idx === 5) {
                            wrapperSize += " sm:w-20 sm:h-20";
                            imageSize += " sm:w-16 sm:h-16";
                        } else if (idx === 4) {
                            wrapperSize += " sm:w-24 sm:h-24";
                            imageSize += " sm:w-20 sm:h-20";
                        } else {
                            wrapperSize += " sm:w-16 sm:h-16";
                            imageSize += " sm:w-12 sm:h-12";
                        }

                        return (
                            <div
                                key={idx}
                                className={`${wrapperSize} shrink-0 rounded-full bg-white flex items-center justify-center shadow-md`}
                            >
                                <img
                                    src={`/hari/eB2BImages/sponsors/${logo}.png`}
                                    alt={logo}
                                    className={`${imageSize} object-contain`}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Horizontal gray line */}
                <div className="border-t border-2 border-[#D9D9D9] w-full"></div>
            </section>
        </div>
    );
};

export default HeroSection;
