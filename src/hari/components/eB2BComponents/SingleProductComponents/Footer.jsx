import React from "react";
import { FaFileInvoice, FaHandshake } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { LuRefreshCcw } from 'react-icons/lu';
import { MdSignalCellularAlt } from 'react-icons/md';
import { FaMinus, FaPlus } from "react-icons/fa";

const Footer = () => {
    const products = [
        {
            id: 1,
            name: "Leather Ball",
            price: "₹1,199",
            desc: "Durable and high-quality leather ball designed for professional cricket play",
            img: "/hari/eB2BImages/products/leatherBall.png",
            qty: 2,
        },
        {
            id: 2,
            name: "Sony WH-720N",
            price: "₹3,499",
            desc: "High-quality headphones with noise cancellation",
            img: "/hari/eB2BImages/products/headPhones.png",
            qty: 2,
        },
        {
            id: 3,
            name: "E-sport Jersey",
            price: "₹1,199",
            desc: "Stylish gaming jersey for comfort & performance",
            img: "/hari/eB2BImages/products/esportsjersey.jpg",
            qty: 2,
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-4">
            {/* Left Section - 70% */}
            <div className="w-full lg:w-[70%] space-y-6">

                {/* Business Growth Cards */}
                <div className="space-y-2">
                    <p className="italic text-gray-600">
                        This plan supports your business growth.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="border border-[#EDEDED] bg-[#FFFDFD] borde-2 rounded-xl shadow-sm p-4 flex items-center gap-3">
                            <div className="bg-purple-100 border border-purple-600 p-2 rounded-lg">
                                <FaFileInvoice className="text-purple-600 text-lg" />
                            </div>
                            <span className="text-sm">GST Invoice Available</span>
                        </div>

                        <div className="border border-[#EDEDED] bg-[#FFFDFD] borde-2 rounded-xl shadow-sm p-4 flex items-center gap-3">
                            <div className="bg-purple-100 border border-purple-600 p-2 rounded-lg">
                                <RiSecurePaymentLine className="text-purple-600 text-lg" />
                            </div>
                            <span className="text-sm">Secure Payments</span>
                        </div>

                        <div className="border border-[#EDEDED] bg-[#FFFDFD] borde-2 rounded-xl shadow-sm p-4 flex items-center gap-3">
                            <div className="bg-purple-100 border border-purple-600 p-2 rounded-lg">
                                <FaHandshake className="text-purple-600 text-lg" />
                            </div>
                            <span className="text-sm">365 Days Help Desk</span>
                        </div>
                    </div>
                </div>

                {/* Exchange Policy Section */}
                <div className="space-y-2">
                    <p className="italic text-gray-600">Exchange & Warranty Policy</p>
                    <div className="border border-[#EDEDED] bg-[#FFFDFD] borde-2 rounded-xl shadow-sm p-4 flex items-center gap-3 w-full sm:w-fit">
                        <div className="bg-purple-100 border border-purple-600 p-2 rounded-lg">
                            <LuRefreshCcw className="text-purple-600 text-lg" />
                        </div>
                        <span className="text-sm">Only Exchange Available</span>
                    </div>
                </div>

                {/* Latest Products Section */}
                <div className="space-y-2">
                    <p className="italic text-gray-600">Latest Products from this Supplier</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="border-2 border-[#EDEDED] rounded-4xl overflow-hidden shadow-sm flex flex-col"
                            >
                                {/* Image with padding */}
                                <div className="p-3">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-60 object-cover rounded-2xl bg-gray-50"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="p-3 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-medium text-lg">{product.name}</h3>
                                        <p className="font-bold text-lg">{product.price}</p>
                                    </div>

                                    <p className="text-sm text-gray-500 flex-grow">{product.desc}</p>

                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center gap-2">
                                            <button className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
                                                <FaMinus size={12} />
                                            </button>
                                            <span className="text-sm">{product.qty}</span>
                                            <button className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
                                                <FaPlus size={12} />
                                            </button>
                                        </div>
                                        <button className="bg-[#0BA84A] hover:bg-[#098A3D] text-white px-6 py-1 rounded-lg font-medium w-[60%] cursor-pointer">
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Section - 30% */}
            <div className="w-full lg:w-[30%] flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 mb-2">
                    <h3 className="text-md font-semibold mb-2 flex items-center gap-1">
                        Key Market insights <MdSignalCellularAlt />
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">Revenue of the market research industry worldwide</p>
                    <a href="#" className="text-[#4A53FA] text-sm font-medium mb-2 inline-block">53.9B USD</a>
                    <p className="text-xs text-gray-600 mb-1">Annual growth of global market research revenue</p>
                    <p className="text-[#4A53FA] text-sm font-medium mb-4">4.6%</p>
                    <button className="text-sm bg-[#EDEDED] hover:bg-gray-200 px-3 py-1 rounded-md cursor-pointer text-[#4A53FA]">Get more insights</button>
                </div>

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
            </div>
        </div>
    );
};

export default Footer;
