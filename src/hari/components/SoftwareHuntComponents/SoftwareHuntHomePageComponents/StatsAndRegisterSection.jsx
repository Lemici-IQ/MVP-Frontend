import React from "react";
import { FaArrowRight } from "react-icons/fa";

const StatsAndRegisterSection = () => {
    return (
        <>
            <section className="max-w-6xl mx-auto px-4 py-4 flex flex-col lg:flex-row items-stretch gap-6">
                {/* Left Stats Box */}
                <div
                    className="flex-1 rounded-2xl p-8 sm:p-10 text-white flex justify-around items-center flex-wrap bg-[#009E8F] relative overflow-hidden"
                    style={{
                        backgroundImage: `url('/hari/SoftwareHuntImages/ballBanner.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Stat 1 */}
                    <div className="text-center m-2">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">2.5M+</h2>
                        <p className="text-sm sm:text-base opacity-90">User reviews</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="text-center m-2">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">45,000+</h2>
                        <p className="text-sm sm:text-base opacity-90">Software solutions</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="text-center m-2">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">1000+</h2>
                        <p className="text-sm sm:text-base opacity-90">Software type</p>
                    </div>
                </div>

                {/* Right Register Box */}
                <div
                    className="w-full lg:w-[40%] rounded-2xl p-8 sm:p-10 text-white bg-[#009E8F] relative overflow-hidden flex flex-col justify-between"
                    style={{
                        backgroundImage: `url('/hari/SoftwareHuntImages/lineBanner.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <p className="text-lg sm:text-xl font-medium leading-snug mb-6">
                        List Your Software/Service to Expand Your Reach to Potential Buyers
                    </p>

                    {/* Register Button */}
                    <button className="flex items-center justify-between gap-3 bg-white text-black font-semibold rounded-full px-6 py-2 w-fit hover:bg-gray-100 transition-all duration-200 shadow-sm">
                        <span>Register for free</span>
                        <span className="bg-[#009E8F] border-2 border-[#009E8F] rounded-full p-2 flex items-center justify-center">
                            <FaArrowRight size={12} className="text-white" />
                        </span>
                    </button>
                </div>
            </section>
            {/* Back to Top Button */}
            <div className="flex justify-end mb-4 px-6">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-[#FFFDFD] border-2 border-[#EDEDED] px-4 py-2 rounded-lg text-black text-sm hover:bg-[#EDEDED] transition cursor-pointer"
                >
                    Back to Top ↑
                </button>
            </div>
        </>
    );
};

export default StatsAndRegisterSection;
