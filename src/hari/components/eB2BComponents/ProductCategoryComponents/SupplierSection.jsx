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

const SupplierSection = () => {
    return (
        <section className="px-4 sm:px-6">
            {/* Heading */}
            <div className="flex lg:w-[70%] bg-[#EDEDED] items-center justify-between px-4 py-2 rounded-full mt-4">
                <div className="w-full text-sm font-medium text-gray-700 text-center sm:text-left">
                    Recommended Suppliers
                </div>
            </div>

            {/* Main Flex Container */}
            <div className="flex flex-col lg:flex-row gap-6 my-8">
                {/* LEFT */}
                <div className="lg:w-[70%] w-full self-start bg-[#FFFDFD] rounded-2xl shadow-md border-2 border-[#EDEDED] p-4 sm:p-6 flex flex-col lg:flex-row gap-6 mt-4">
                    {/* Info Section */}
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

                    {/* Images */}
                    <div className="w-full lg:w-[50%] flex flex-col sm:flex-row gap-2 h-auto sm:h-[350px] relative">
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

                {/* RIGHT */}
                <div className="lg:w-[30%] w-full flex flex-col gap-4 -mt-4">
                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                        <h3 className="text-md font-semibold mb-3">Understanding Sports franchise</h3>
                        <ol className="list-decimal list-inside space-y-2 text-blue-600 text-xs">
                            <li><a href="#">What is customer relationship management software?</a></li>
                            <li><a href="#">The benefits of customer relationship management software.</a></li>
                            <li><a href="#">Typical features of customer relationship management software</a></li>
                            <li><a href="#">Consideration when purchasing customer relationship management software</a></li>
                            <li><a href="#">Relevant customer relationship management software</a></li>
                        </ol>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                        <h3 className="text-md font-semibold mb-2 flex items-center gap-1">
                            Key Market insights <MdSignalCellularAlt />
                        </h3>
                        <p className="text-xs text-gray-600 mb-1">Revenue of the market research industry worldwide</p>
                        <a href="#" className="text-[#4A53FA] text-sm font-medium mb-2 inline-block">53.9B USD</a>
                        <p className="text-xs text-gray-600 mb-1">Annual growth of global market research revenue</p>
                        <p className="text-[#4A53FA] text-sm font-medium mb-4">4.6%</p>
                        <button className="text-sm bg-[#EDEDED] hover:bg-gray-200 px-3 py-1 rounded-md cursor-pointer text-[#4A53FA]">Get more insights</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupplierSection;
