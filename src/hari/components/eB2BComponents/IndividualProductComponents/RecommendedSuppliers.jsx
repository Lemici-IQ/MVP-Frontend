import React from 'react';
import {
    MdOutlineVerified,
    MdLocationOn,
    MdOutlinePeopleAlt,
    MdSignalCellularAlt,
} from 'react-icons/md';
import {
    FaShoppingBag,
    FaCalendarAlt,
    FaUserTag,
    FaPlus,
} from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';

const RecommendedSupplier = () => {
    return (
        <section className="px-4 sm:px-6">
            {/* Heading */}
            <div className="flex bg-[#EDEDED] items-center justify-between px-4 py-2 rounded-full mt-4">
                <div className="w-full text-sm font-medium text-gray-700 text-center sm:text-left">
                    Recommended Suppliers
                </div>
            </div>

            {/* Main Flex Container */}
            <div className="flex flex-col lg:flex-row gap-6 lg:p-8">
                {/* LEFT */}
                <div className='flex flex-col lg:w-[70%]'>
                    <div className="w-full self-start bg-[#FFFDFD] rounded-2xl shadow-md border-2 border-[#EDEDED] p-4 sm:p-6 flex flex-col lg:flex-row gap-6 mt-4 lg:mt-0 mb-4">
                        {/* Info Section - 1 */}
                        <div className="flex-1">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Jet Tech Private Limited</h2>
                            <p className="text-sm text-gray-600 mb-4">
                                Jet Tech Pvt. Ltd. is a leading manufacturer and exporter of bulk packaging
                                materials and industrial textiles.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                                    <MdOutlineVerified className="text-blue-600" /> Verified
                                </span>
                                <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                                    <MdLocationOn className="text-red-500" /> Vadodara, Gujarat
                                </span>
                                <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                                    <FaShoppingBag className="text-red-600" /> B2B
                                </span>
                                <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                                    <FaCalendarAlt className="text-purple-500" /> 1989
                                </span>
                            </div>

                            <div className="flex flex-row sm:items-center justify-between gap-4 mt-8 text-sm text-gray-500">
                                <div className="flex gap-6 items-center">
                                    <span className="flex items-center gap-1">
                                        <MdOutlinePeopleAlt className="text-xl" /> 98.9K
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaUserTag className="text-sm" /> 100+
                                    </span>
                                </div>
                                <button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full font-medium flex items-center gap-2 w-fit cursor-pointer">
                                    Follow <FaPlus className="text-sm" />
                                </button>
                            </div>
                        </div>

                        {/* Images - 1 */}
                        <div className="w-full lg:w-[50%] flex flex-col sm:flex-row gap-2 h-auto sm:h-[320px] relative">
                            <div className="w-full sm:w-2/3 h-[200px] sm:h-full rounded-lg overflow-hidden relative">
                                <img src="/hari/eB2BImages/products/HandBag1.png" alt="Main" className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-[#D9D9D9]/60 backdrop-blur-sm shadow-md w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                                    <BsArrowUpRight className="text-white text-lg" />
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-row sm:flex-col gap-2">
                                <div className="h-[100px] sm:h-1/2 w-1/2 sm:w-full rounded-lg overflow-hidden relative">
                                    <img src="/hari/eB2BImages/products/HandBag2.png" alt="Small1" className="w-full h-full object-cover" />
                                    <div className="absolute top-2 right-2 bg-[#D9D9D9]/60 backdrop-blur-sm shadow-md w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                                        <BsArrowUpRight className="text-white text-lg" />
                                    </div>
                                </div>
                                <div className="h-[100px] sm:h-1/2 w-1/2 sm:w-full rounded-lg overflow-hidden relative">
                                    <img src="/hari/eB2BImages/products/HandBag3.png" alt="Small2" className="w-full h-full object-cover" />
                                    <div className="absolute top-2 right-2 bg-[#D9D9D9]/60 backdrop-blur-sm shadow-md w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                                        <BsArrowUpRight className="text-white text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full self-start bg-[#FFFDFD] rounded-2xl shadow-md border-2 border-[#EDEDED] p-4 sm:p-6 flex flex-col lg:flex-row gap-6 mt-4 lg:mt-0">
                        {/* Info Section - 2 */}
                        <div className="flex-1">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">Naike Group Co. Ltd.</h2>
                            <p className="text-sm text-gray-600 mb-4">
                                Naike Group Co., Ltd. is a Chinese company specializing in manufacturing and exporting corporate promotional gifts and sustainable
                                eco-friendly household products.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                                    <MdOutlineVerified className="text-blue-600" /> Verified
                                </span>
                                <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                                    <MdLocationOn className="text-red-500" /> Fujian, China
                                </span>
                                <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                                    <FaShoppingBag className="text-red-600" /> B2B
                                </span>
                                <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                                    <FaCalendarAlt className="text-purple-500" /> 2008
                                </span>
                            </div>

                            <div className="flex flex-row sm:items-center justify-between gap-4 mt-8 text-sm text-gray-500">
                                <div className="flex gap-6 items-center">
                                    <span className="flex items-center gap-1">
                                        <MdOutlinePeopleAlt className="text-xl" /> 109K
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaUserTag className="text-sm" /> 100+
                                    </span>
                                </div>
                                <button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full font-medium flex items-center gap-2 w-fit cursor-pointer">
                                    Follow <FaPlus className="text-sm" />
                                </button>
                            </div>
                        </div>

                        {/* Images - 2 */}
                        <div className="w-full lg:w-[50%] flex flex-col sm:flex-row gap-2 h-auto sm:h-[320px] relative">
                            <div className="w-full sm:w-2/3 h-[200px] sm:h-full rounded-lg overflow-hidden relative">
                                <img src="/hari/eB2BImages/products/Cream1.png" alt="Main" className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-[#D9D9D9]/60 backdrop-blur-sm shadow-md w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                                    <BsArrowUpRight className="text-white text-lg" />
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 flex flex-row sm:flex-col gap-2">
                                <div className="h-[100px] sm:h-1/2 w-1/2 sm:w-full rounded-lg overflow-hidden relative">
                                    <img src="/hari/eB2BImages/products/Cream2.png" alt="Small1" className="w-full h-full object-cover" />
                                    <div className="absolute top-2 right-2 bg-[#D9D9D9]/60 backdrop-blur-sm shadow-md w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                                        <BsArrowUpRight className="text-white text-lg" />
                                    </div>
                                </div>
                                <div className="h-[100px] sm:h-1/2 w-1/2 sm:w-full rounded-lg overflow-hidden relative">
                                    <img src="/hari/eB2BImages/products/Cream3.png" alt="Small2" className="w-full h-full object-cover" />
                                    <div className="absolute top-2 right-2 bg-[#D9D9D9]/60 backdrop-blur-sm shadow-md w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                                        <BsArrowUpRight className="text-white text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:w-[30%] w-full flex flex-col gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                        <h3 className="text-md font-semibold mb-3">Understanding Cricket Bats</h3>
                        <ol className="list-decimal list-inside space-y-2 text-blue-600 text-xs">
                            <li><a href="#">What is customer relationship management software?</a></li>
                            <li><a href="#">The benefits of customer relationship management software.</a></li>
                            <li><a href="#">Typical features of customer relationship management software</a></li>
                            <li><a href="#">Consideration when purchasing customer relationship management software</a></li>
                            <li><a href="#">Relevant customer relationship management software</a></li>
                            <li><a href="#">What is customer relationship management software?</a></li>
                            <li><a href="#">The benefits of customer relationship management software.</a></li>
                            <li><a href="#">Typical features of customer relationship management software</a></li>
                            <li><a href="#">Consideration when purchasing customer relationship management software</a></li>
                            <li><a href="#">Relevant customer relationship management software</a></li>
                        </ol>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 mb-5 lg:mb-0">
                        <h3 className="text-md font-semibold mb-2 flex items-center gap-1">
                            Key Market insights <MdSignalCellularAlt />
                        </h3>
                        <p className="text-xs text-gray-600 mb-1">Revenue of the market research industry worldwide</p>
                        <a href="#" className="text-[#4A53FA] text-sm font-medium mb-2 inline-block">53.9B USD</a>
                        <p className="text-xs text-gray-600 mb-1">Annual growth of global market research revenue</p>
                        <p className="text-[#4A53FA] text-sm font-medium mb-4">4.6%</p>
                        <button className="text-sm bg-[#EDEDED] hover:bg-gray-200 px-3 py-1 rounded-md cursor-pointer text-[#4A53FA]">Get more insights</button>
                    </div>
                    <button className="hidden sm:flex items-center bg-[#992BFF] hover:bg-[#7A22CC] text-white rounded-full overflow-hidden w-[40%] cursor-pointer">
                        {/* Left Text Section */}
                        <span className="px-4 py-2 text-lg font-medium">See All</span>

                        {/* Right Icon Section */}
                        <span className="bg-white text-[#992BFF] flex items-center justify-center w-10 h-10 rounded-full">
                            <BsArrowUpRight size={20} />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RecommendedSupplier;
