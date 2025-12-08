import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-white py-12 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* LOGO + SOCIAL ICONS ROW */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6 sm:gap-0">

                    {/* Logo + Cities */}
                    <div>
                        <img
                            src="/hari/logo-main.png"
                            alt="logo"
                            className="h-20 w-auto"
                        />

                        <p className="text-xs text-blue-600 mt-2">
                            Bengaluru | Mumbai | Hyderabad | Gurgaon
                        </p>

                        <h2 className="text-3xl font-bold mt-4">
                            Don't be a Stranger
                        </h2>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <div className="bg-[#E8D7F1] p-3 rounded-xl cursor-pointer hover:bg-[#d5c0e6] transition-colors">
                            <FaFacebookF className="text-[#652C90]" />
                        </div>
                        <div className="bg-[#E8D7F1] p-3 rounded-xl cursor-pointer hover:bg-[#d5c0e6] transition-colors">
                            <FaTwitter className="text-[#652C90]" />
                        </div>
                        <div className="bg-[#E8D7F1] p-3 rounded-xl cursor-pointer hover:bg-[#d5c0e6] transition-colors">
                            <FaYoutube className="text-[#652C90]" />
                        </div>
                        <div className="bg-[#E8D7F1] p-3 rounded-xl cursor-pointer hover:bg-[#d5c0e6] transition-colors">
                            <FaLinkedinIn className="text-[#652C90]" />
                        </div>
                    </div>
                </div>

                {/* MAIN FOOTER GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* LEFT BLOCK */}
                    <div>
                        <p className="text-sm text-[#622B90] font-semibold">Newsletter</p>

                        <h3 className="text-xl font-semibold">Stay in the loop</h3>

                        <p className="text-sm font-semibold text-gray-700 mt-1">Subscribe</p>

                        <p className="text-xs text-gray-600 mb-4">
                            Select topics and stay current with our latest insights
                        </p>

                        {/* Email + Button */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="px-4 py-3 border-2 border-[#EDEDED] rounded-xl w-full sm:w-64 bg-[#FFFDFD] focus:outline-none"
                            />
                            <button className="bg-[#6D3E93] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7a3aa8] transition-colors w-full sm:w-auto">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* OFFERINGS */}
                    <div>
                        <h4 className="font-semibold mb-4">Offerings</h4>

                        <div className="grid grid-cols-2 gap-x-10 text-sm">
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Startup Zone</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Franchise Zone</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Software Hunt</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Business Directory</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Government Navigator</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Market & Industry Research</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">eB2B Marketplace</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Industry Solution</p>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT + RESOURCES */}
                    <div className="grid grid-cols-2 gap-10 text-sm">
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Contact Us</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Expert</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Office Location</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Technical Support</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
                            <div className="flex flex-col gap-2">
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Featured Insights</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Webinars</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Events</p>
                                <p className="text-gray-700 hover:text-[#652C90] cursor-pointer">Client Stories</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT + LAST ROW (RESPONSIVE) */}
                <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-start text-sm text-gray-800 gap-6 md:gap-0">

                    {/* COPYRIGHT */}
                    <p className="text-gray-600 md:w-[45%] leading-relaxed">
                        Copyright © 2025 LeMiCi. All rights reserved.
                        Empowering Local Businesses with Digital Growth.
                    </p>

                    {/* LINKS (WRAPPED 2 LINES ON RIGHT) */}
                    <div className="flex flex-col items-start md:items-end w-full md:w-auto">

                        {/* FIRST LINE */}
                        <div className="flex flex-wrap gap-6 md:gap-8">
                            <p className="cursor-pointer hover:text-[#652C90]">FAQ</p>
                            <p className="cursor-pointer hover:text-[#652C90]">Privacy Policy</p>
                            <p className="cursor-pointer hover:text-[#652C90]">Cookie preferences</p>
                            <p className="cursor-pointer hover:text-[#652C90]">Local Language information</p>
                        </div>

                        {/* SECOND LINE */}
                        <div className="flex flex-wrap gap-6 md:gap-8 mt-2">
                            <p className="cursor-pointer hover:text-[#652C90]">Term of Use</p>
                            <p className="cursor-pointer hover:text-[#652C90]">Accessibility Statement</p>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
