import React from "react";
import {
    FaStar,
    FaInfoCircle,
    FaRegEnvelope,
    FaStarHalfAlt,
    FaRegEye,
    FaBriefcase,
    FaUsers,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsFiletypePdf } from "react-icons/bs";

const Cards = () => {
    const cards = [
        {
            id: 1,
            country: "United Kingdom",
            status: "Actively raising",
            name: "Factori",
            followers: "123 Followers",
            rating: 4.9,
            price: "$5,000",
            description:
                "Our web data graph contains fresh web browsing data of users across that indicates search intent, purchase intent and online.",
            accuracy: "Accuracy 75% to 85%",
            update: "Update 2024",
            tags: ["B2B", "Bundled", "Productivity", "Manufacturer"],
            buttons: ["Company Type", "Source", "Usage", "Download"],
        },
        {
            id: 2,
            country: "United Kingdom",
            status: "Actively raising",
            name: "Factori",
            followers: "123 Followers",
            rating: 4.9,
            price: "$5,000",
            description:
                "Our web data graph contains fresh web browsing data of users across that indicates search intent, purchase intent and online.",
            accuracy: "Accuracy 75% to 85%",
            update: "Update 2024",
            tags: ["B2B", "Bundled", "Productivity", "Manufacturer"],
            buttons: ["Company Type", "Source", "Usage", "Download"],
        },
        {
            id: 3,
            country: "United Kingdom",
            status: "Actively raising",
            name: "Factori",
            followers: "123 Followers",
            rating: 4.9,
            price: "$5,000",
            description:
                "Our web data graph contains fresh web browsing data of users across that indicates search intent, purchase intent and online.",
            accuracy: "Accuracy 75% to 85%",
            update: "Update 2024",
            tags: ["B2B", "Bundled", "Productivity", "Manufacturer"],
            buttons: ["Company Type", "Source", "Usage", "Download"],
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            {/* 🔸 Top Tabs + Line */}
            <div className="flex items-center gap-8 mb-6 border-b border-gray-300 justify-between mx-5">
                <button className="pb-2 text-gray-900 font-semibold border-b-2 border-orange-500">
                    Company Data
                </button>
                <button className="pb-2 text-gray-500 hover:text-gray-900 transition">
                    Datasets
                </button>
                <button className="pb-2 text-gray-500 hover:text-gray-900 transition">
                    Providers
                </button>
                <button className="pb-2 text-gray-500 hover:text-gray-900 transition">
                    APIs
                </button>
            </div>

            {/* 🔸 Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-b from-[#FF610580] from-20% to-white to-40% rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all"
                    >
                        {/* Header Row */}
                        <div className="flex items-center justify-between px-4 pt-3 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-gray-200 rounded-full overflow-hidden">
                                    <img
                                        src="/hari/DataProviderImages/ukflag.png"
                                        alt="flag"
                                        className="w-full h-full"
                                    />
                                </div>
                                <span className="text-gray-800 font-medium">{card.country}</span>
                            </div>
                            <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {card.status}
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="p-5">
                            {/* Logo and Title */}
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-gray-200 rounded-md overflow-hidden">
                                    <img
                                        src="/hari/DataProviderImages/cardlogo.jpg"
                                        alt="logo"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-1">
                                        {card.name}
                                        <span className="text-blue-500 text-base">✔️</span>
                                    </h3>
                                    <p className="text-gray-500 text-xs flex items-center gap-2">
                                        <FaBriefcase /> B2B <span>·</span> <FaUsers /> {card.followers}
                                    </p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="text-xs text-gray-500 mb-3">
                                Web Data | Global web browsing & activity data feed (4.2 Billion records)
                                <span className="ml-1 text-yellow-500 flex items-center inline-block">
                                    <FaStar className="inline-block w-3 h-3 mr-1" /> {card.rating}
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {card.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-2 mb-3">
                                {card.buttons.map((btn, i) => (
                                    <button
                                        key={i}
                                        className="text-gray-700 border border-gray-300 rounded-full text-xs px-3 py-1 hover:bg-gray-100"
                                    >
                                        {btn}
                                    </button>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-snug mb-2">
                                {card.description}
                            </p>
                            <p className="text-xs text-orange-600">
                                {card.accuracy} <br /> {card.update}
                            </p>

                            {/* Price and Button */}
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <p className="text-xs text-gray-400">Starts at</p>
                                    <p className="text-lg font-bold text-gray-900">
                                        {card.price}
                                        <span className="text-xs font-medium text-gray-500"> /month</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="bg-gray-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                                        <BsFiletypePdf className="w-4 h-4" /> PDF
                                    </div>
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-1">
                                        <HiOutlineDocumentText className="w-4 h-4" /> View product
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-gray-200 flex justify-around py-3 text-xs text-gray-600">
                            <button className="flex flex-col items-center hover:text-orange-500 transition-all">
                                <FaInfoCircle className="w-4 h-4 mb-1" />
                                Info
                            </button>
                            <button className="flex flex-col items-center hover:text-orange-500 transition-all">
                                <FaRegEnvelope className="w-4 h-4 mb-1" />
                                Message
                            </button>
                            <button className="flex flex-col items-center hover:text-orange-500 transition-all">
                                <FaStarHalfAlt className="w-4 h-4 mb-1" />
                                Rate
                            </button>
                            <button className="flex flex-col items-center hover:text-orange-500 transition-all">
                                <FaRegEye className="w-4 h-4 mb-1" />
                                Watch
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-b from-[#FF610580] from-20% to-white to-40% rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all"
                    >
                        {/* Header Row */}
                        <div className="flex items-center justify-between px-4 pt-3 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-gray-200 rounded-full overflow-hidden">
                                    <img
                                        src="/hari/DataProviderImages/ukflag.png"
                                        alt="flag"
                                        className="w-full h-full"
                                    />
                                </div>
                                <span className="text-gray-800 font-medium">{card.country}</span>
                            </div>
                            <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {card.status}
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="p-5">
                            {/* Logo and Title */}
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-gray-200 rounded-md overflow-hidden">
                                    <img
                                        src="/hari/DataProviderImages/cardlogo.jpg"
                                        alt="logo"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-1">
                                        {card.name}
                                        <span className="text-blue-500 text-base">✔️</span>
                                    </h3>
                                    <p className="text-gray-500 text-xs flex items-center gap-2">
                                        <FaBriefcase /> B2B <span>·</span> <FaUsers /> {card.followers}
                                    </p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="text-xs text-gray-500 mb-3">
                                Web Data | Global web browsing & activity data feed (4.2 Billion records)
                                <span className="ml-1 text-yellow-500 flex items-center inline-block">
                                    <FaStar className="inline-block w-3 h-3 mr-1" /> {card.rating}
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {card.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-2 mb-3">
                                {card.buttons.map((btn, i) => (
                                    <button
                                        key={i}
                                        className="text-gray-700 border border-gray-300 rounded-full text-xs px-3 py-1 hover:bg-gray-100"
                                    >
                                        {btn}
                                    </button>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-snug mb-2">
                                {card.description}
                            </p>
                            <p className="text-xs text-orange-600">
                                {card.accuracy} <br /> {card.update}
                            </p>

                            {/* Price and Button */}
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <p className="text-xs text-gray-400">Starts at</p>
                                    <p className="text-lg font-bold text-gray-900">
                                        {card.price}
                                        <span className="text-xs font-medium text-gray-500"> /month</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="bg-gray-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
                                        <BsFiletypePdf className="w-4 h-4" /> PDF
                                    </div>
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-1">
                                        <HiOutlineDocumentText className="w-4 h-4" /> View product
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-gray-200 flex justify-around py-3 text-xs text-gray-600">
                            <button className="flex flex-col items-center hover:text-orange-500 transition-all">
                                <FaInfoCircle className="w-4 h-4 mb-1" />
                                Info
                            </button>
                            <button className="flex flex-col items-center hover:text-orange-500 transition-all">
                                <FaRegEnvelope className="w-4 h-4 mb-1" />
                                Message
                            </button>
                            <button className="flex flex-col items-center hover:text-orange-500 transition-all">
                                <FaStarHalfAlt className="w-4 h-4 mb-1" />
                                Rate
                            </button>
                            <button className="flex flex-col items-center hover:text-orange-500 transition-all">
                                <FaRegEye className="w-4 h-4 mb-1" />
                                Watch
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cards;
