import React from "react";
import { FaRegUserCircle } from 'react-icons/fa';
import { TbUserUp } from 'react-icons/tb';
import { RiBillLine } from 'react-icons/ri';
import { FiArrowUpRight } from "react-icons/fi";

const Banners = () => {
    return (
        <div className="flex flex-col sm:flex-row w-full gap-4 p-4">
            {/* Banner 1 */}
            <div className="w-full sm:w-[70%]">
                <div className="relative overflow-visible rounded-3xl bg-gradient-to-b from-[#FF4552] to-[#C1121F] shadow-2xl p-4 min-h-[240px]">
                    {/* Blobs */}
                    <div className="absolute top-0 left-10 w-15 h-10 bg-[#C1121F] rounded-full"></div>
                    <div className="absolute top-53 left-170 w-13 h-7 bg-[#860912] rounded-b-full hidden sm:flex"></div>

                    {/* Text + Image + Cards */}
                    <div className="relative flex items-center justify-between z-10 min-h-[180px] bg-[#EB5862] mt-4 p-6 rounded-2xl shadow-lg">
                        {/* Left Text */}
                        <div className="text-white z-10">
                            <h1 className="text-base sm:text-lg lg:text-xl font-bold leading-tight -mt-5 -ml-3 mb-4 sm:mt-0 sm:ml-0">
                                Compare <br />
                                and <br />
                                Review
                            </h1>
                            {/* Button visible only on mobile */}
                            <button className="block sm:hidden ml-[-15px] px-3 py-1 text-sm bg-white text-[#C1121F] font-semibold rounded shadow">
                                Explore
                            </button>
                        </div>

                        {/* Business Team Image */}
                        <div className="absolute block sm:hidden left-[65%] -translate-x-1/2 -top-6 z-20">
                            <img
                                src="/hari/eB2BImages/images/business-team.png"
                                alt="Business team"
                                className="!w-[250px] max-w-none h-auto object-contain"
                            />
                        </div>

                        <div className="absolute hidden sm:block sm:left-[35%] sm:-translate-x-1/2 -top-14 z-20">
                            <img
                                src="/hari/eB2BImages/images/business-team.png"
                                alt="Business team"
                                className="w-[323px] h-auto object-contain"
                            />
                        </div>

                        {/* Stats Cards */}
                        <div className="flex gap-3 z-10 ml-auto items-end flex-wrap sm:flex-nowrap hidden sm:flex">
                            {/* Card 1 */}
                            <div className="bg-white rounded-xl p-2 shadow-lg w-[105px]">
                                <div className="flex items-center gap-1 mb-1">
                                    <span className="text-[14px] text-[#000] opacity-70">Happy</span>
                                    <span className="text-[14px] text-[#FF339C]"><FaRegUserCircle /></span>
                                </div>
                                <div className="text-[18px] font-semibold text-black">8,500+</div>
                                <div className="text-green-500 text-[10px] font-semibold">+25%</div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-xl p-2 shadow-lg w-[105px]">
                                <div className="flex items-center gap-1 mb-1">
                                    <span className="text-[14px] text-[#000] opacity-70">Users</span>
                                    <span className="text-[14px] text-[#FF339C]"><TbUserUp /></span>
                                </div>
                                <div className="text-[18px] font-semibold text-black">25K+</div>
                                <div className="text-green-500 text-[10px] font-semibold">+32%</div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-xl p-2 shadow-lg w-[105px]">
                                <div className="flex items-center gap-1 mb-1">
                                    <span className="text-[14px] text-[#000] opacity-70">Payslips</span>
                                    <span className="text-[14px] text-[#FF339C]"><RiBillLine /></span>
                                </div>
                                <div className="text-[18px] font-semibold text-black">2.5M+</div>
                                <div className="text-green-500 text-[10px] font-semibold">+51%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner 2 */}
            <div className="w-full sm:w-[30%]">
                <div className="relative rounded-3xl overflow-hidden min-h-[240px] shadow-2xl">
                    {/* Background layer with filter */}
                    <div
                        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url('/images/banner-lines.png'), linear-gradient(to bottom right, #7209B7, #2C3194)`,
                            filter: 'contrast(1.7) brightness(0.9)',
                        }}
                    />

                    {/* Foreground content */}
                    <div className="relative z-10 p-6">
                        <h2 className="text-[#FFFFFF] text-2xl font-bold leading-tight mb-14">
                            List Your <span className="font-extrabold">Products</span> to<br />
                            Expand Your Reach to<br />
                            Potential Buyers
                        </h2>

                        <button className="bg-white text-black font-semibold rounded-full px-4 py-2 flex items-center text-sm w-[200px]">
                            <span className="flex-1 text-center">Register for free</span>
                            <span className="w-7 h-7 rounded-full bg-[#6D3E93] flex items-center justify-center ml-auto">
                                <FiArrowUpRight className="text-white w-5 h-5" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banners;
