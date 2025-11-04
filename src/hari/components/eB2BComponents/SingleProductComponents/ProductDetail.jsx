import React from "react";
import { MdLocationOn, MdOutlineVerified } from "react-icons/md";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaPinterestP, FaCalendarAlt } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiCalendarEdit, BiCheckShield } from 'react-icons/bi';
import { FiShare2, FiMail } from "react-icons/fi";

const CompanyProfile = () => {
    return (
        <div className="w-full bg-white px-4 flex flex-col md:flex-row justify-between gap-8 pb-6">
            {/* LEFT SIDE: Company Info */}
            <div className="flex-1">
                {/* Company Name */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <h1 className="text-4xl font-bold">MRF</h1>
                        <MdOutlineVerified className="text-blue-600 text-2xl" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-100 cursor-pointer">
                            <FiShare2 className="text-lg" />
                        </button>

                        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-red-400 hover:bg-red-50 cursor-pointer">
                            <AiOutlineHeart className="text-lg" />
                        </button>
                    </div>
                </div>


                {/* Company Description */}
                <p className="text-gray-700 mt-3 text-sm leading-relaxed text-justify">
                    MRF (Madras Rubber Factory) is one of India's leading tyre manufacturing companies,
                    known for producing high-quality tyres for cars, bikes, trucks, and more. Founded in 1946,
                    it has grown into a global brand with a strong presence in motorsports. MRF is also involved
                    in paints, toys (Funskool), and sports gear. It is widely trusted for performance, durability,
                    and innovation.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
                    <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                        <MdLocationOn className="text-red-500" /> Chennai, T.N, India
                    </span>
                    <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                        <FaCalendarAlt className="text-orange-500" /> 1989
                    </span>
                    <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                        <AiFillStar className="text-yellow-500" /> 4.9
                    </span>

                    {/* force new line */}
                    <div className="basis-full w-full"></div>

                    <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                        <BiCalendarEdit className="text-blue-600 text-lg" /> 1946
                    </span>
                    <span className="text-sm text-gray-700 border border-gray-300 px-3 py-[6px] rounded-md inline-flex items-center gap-2">
                        <BiCheckShield className="text-[#0BA84A] text-lg" /> Trusted Seller
                    </span>
                </div>

                {/* Button */}
                <button className="mt-5 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition cursor-pointer">
                    Company profile ▶
                </button>

                {/* Social Media Icons */}
                <div className="flex items-center gap-5 mt-6 text-3xl text-gray-600">
                    <FaYoutube className="text-[#ff0302] cursor-pointer" />
                    <FaFacebook className="text-[#1877f2] cursor-pointer" />
                    <FaInstagram className="text-[#c13c71] cursor-pointer" />
                    <FaTwitter className="text-[#1da1f2] cursor-pointer" />
                    <FaPinterestP className="text-[#e60019] cursor-pointer" />
                </div>
            </div>

            {/* RIGHT SIDE: Person Card */}
            <div className="w-full md:w-72 bg-white rounded-4xl shadow-lg p-4 relative border-2 border-[#EDEDED]">
                <img
                    src="/hari/eB2BImages/images/cardPerson.jpg"
                    alt="Profile"
                    className="w-full h-60 object-cover rounded-xl"
                />
                <button className="absolute top-6 right-6 bg-white p-2 rounded-full shadow cursor-pointer hover:opacity-80">
                    <BsFillBookmarkFill className="text-gray-700" />
                </button>

                <div className="mt-3">
                    <h2 className="font-bold text-lg flex items-center gap-2">
                        Natasha Romanoff <MdOutlineVerified className="text-blue-600 text-lg" />
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Hi I'm Consultant helping you make smarter, strategic decisions for lasting success.
                    </p>

                    <div className="flex justify-around items-center text-base text-gray-700 mt-3">
                        <div className="flex flex-col items-center px-3">
                            <span className="flex items-center gap-1 font-semibold">
                                <AiFillStar className="text-yellow-500 text-lg" /> 4.7
                            </span>
                            <span className="text-gray-500 text-sm font-normal">Rating</span>
                        </div>

                        <div className="h-10 w-px bg-gray-300"></div>

                        <div className="flex flex-col items-center px-3">
                            <span className="font-semibold">Expert</span>
                            <span className="text-gray-500 text-sm font-normal">Experience</span>
                        </div>

                        <div className="h-10 w-px bg-gray-300"></div>

                        <div className="flex flex-col items-center px-3">
                            <span className="font-semibold">Free</span>
                            <span className="text-gray-500 text-sm font-normal">Rate</span>
                        </div>
                    </div>
                    <button className="mt-4 w-full bg-black text-white py-2 rounded-3xl hover:bg-[#FC0C10F2] transition flex items-center justify-center gap-2 cursor-pointer">
                        <FiMail className="text-lg" />
                        Get in touch
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
