import React, { useState } from "react";
import { FaCcStripe, FaPaypal } from "react-icons/fa";

const TableSection = () => {
    const [activeTab, setActiveTab] = useState("details");

    return (
        <div className="px-4 md:px-6 mb-6">
            {/* Main responsive layout */}
            <div className="flex flex-col md:flex-row gap-6 mt-6">
                
                {/* Left Section */}
                <div className="w-full md:w-1/2 space-y-6">
                    {/* Tabs */}
                    <div className="flex justify-between border-b-2 border-[#D9D9D9] px-2 md:px-8 text-xs md:text-base">
                        <button
                            onClick={() => setActiveTab("details")}
                            className={`pb-2 cursor-pointer ${
                                activeTab === "details"
                                    ? "text-purple-600 font-medium"
                                    : "text-gray-700"
                            }`}
                        >
                            Product Details
                        </button>
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`pb-2 cursor-pointer ${
                                activeTab === "profile"
                                    ? "text-purple-600 font-medium"
                                    : "text-gray-700"
                            }`}
                        >
                            Company Profile
                        </button>
                        <button
                            onClick={() => setActiveTab("contact")}
                            className={`pb-2 cursor-pointer ${
                                activeTab === "contact"
                                    ? "text-purple-600 font-medium"
                                    : "text-gray-700"
                            }`}
                        >
                            Contact Supplier
                        </button>
                    </div>

                    {/* Product Information */}
                    <div>
                        <h2 className="font-sm mb-2">Product Information</h2>
                        <table className="w-full border border-[#D9D9D9] text-xs">
                            <tbody>
                                <tr className="border-b border-[#D9D9D9]">
                                    <td className="p-2 bg-gray-100 w-1/3">Model Number</td>
                                    <td className="p-2">Cricket bats-469P</td>
                                </tr>
                                <tr className="border-b border-[#D9D9D9]">
                                    <td className="p-2 bg-gray-100">Brand Name</td>
                                    <td className="p-2">MRF</td>
                                </tr>
                                <tr className="border-b border-[#D9D9D9]">
                                    <td className="p-2 bg-gray-100">Origin</td>
                                    <td className="p-2">Tamil Nadu, India</td>
                                </tr>
                                <tr>
                                    <td className="p-2 bg-gray-100">Small Orders</td>
                                    <td className="p-2">Accepted</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Shipping Information */}
                    <div>
                        <h2 className="font-sm mb-2">Shipping Information</h2>
                        <table className="w-full border border-[#D9D9D9] text-xs">
                            <tbody>
                                <tr className="border-b border-[#D9D9D9]">
                                    <td className="p-2 bg-gray-100 w-1/3">FOB Port</td>
                                    <td className="p-2">Xiamen</td>
                                </tr>
                                <tr className="border-b border-[#D9D9D9]">
                                    <td className="p-2 bg-gray-100">Weight per unit</td>
                                    <td className="p-2">200.0 g</td>
                                </tr>
                                <tr className="border-b border-[#D9D9D9]">
                                    <td className="p-2 bg-gray-100">HTS Code</td>
                                    <td className="p-2">1111.11.1111</td>
                                </tr>
                                <tr className="border-b border-[#D9D9D9]">
                                    <td className="p-2 bg-gray-100 whitespace-nowrap">
                                        Export Carton Dimensions L/W/H
                                    </td>
                                    <td className="p-2">0.6x0.9x0.7 cm</td>
                                </tr>
                                <tr>
                                    <td className="p-2 bg-gray-100">Lead Time</td>
                                    <td className="p-2">15-25 days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="font-medium mb-2 italic mt-1">Certification</h2>
                    <table className="w-full border border-[#D9D9D9] text-sm">
                        <tbody>
                            <tr className="border-b border-[#D9D9D9]">
                                <td className="p-2 bg-gray-100 w-2/3">
                                    Product generally confirming to 15 828 (1979), Latest
                                </td>
                                <td className="p-2">No</td>
                            </tr>
                            <tr className="border-b border-[#D9D9D9]">
                                <td className="p-2 bg-gray-100">
                                    Grade of Bat (As per the 15 828-1979, Latest)
                                </td>
                                <td className="p-2">Not Applicable</td>
                            </tr>
                            <tr className="border-b border-[#D9D9D9]">
                                <td className="p-2 bg-gray-100">
                                    Product confirming to international/National federation requirements to International Cricket Council (ICC)
                                </td>
                                <td className="p-2">No</td>
                            </tr>
                            <tr className="border-b border-[#D9D9D9]">
                                <td className="p-2 bg-gray-100">
                                    Certification details from International/National federations like ICC i.e certification agency certificate
                                </td>
                                <td className="p-2">N.A.</td>
                            </tr>
                            <tr>
                                <td className="p-2 bg-gray-100">
                                    Date upto which certification is Valid
                                </td>
                                <td className="p-2">N.A.</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Payment */}
                    <div className="mt-4">
                        <h2 className="font-sm mb-2">Payments Details</h2>
                        <div className="flex border border-[#D9D9D9]">
                            <div className="w-1/2 flex justify-center items-center border-r border-[#D9D9D9] cursor-pointer hover:bg-gray-100">
                                <FaCcStripe className="text-indigo-500 text-2xl my-2 hover:text-indigo-700 transition-colors duration-200" />
                            </div>
                            <div className="w-1/2 flex justify-center items-center cursor-pointer hover:bg-gray-100">
                                <FaPaypal className="text-blue-600 text-2xl my-2 hover:text-blue-800 transition-colors duration-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableSection;
