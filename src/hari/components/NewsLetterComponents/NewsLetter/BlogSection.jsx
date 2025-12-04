import React, { useState } from "react";

const categories = ["Design", "Development", "Research"];

const blogData = {
    Design: [
        {
            img: "/hari/NewsLetterImages/design1.png",
            date: "Oct 13, 2025",
            title: "10 Quick Tips About UX UI Design",
            text: "These simple insights will help you create user-friendly, visually appeali...",
        },
        {
            img: "/hari/NewsLetterImages/design2.png",
            date: "Oct 15, 2025",
            title: "5 Graphic Design Tricks You should Be Reading",
            text: "From color harmony to typography balance, these tips will help you create...",
        },
        {
            img: "/hari/NewsLetterImages/design3.png",
            date: "Oct 16, 2025",
            title: "7 Smart Secrets Every Designer Should Know",
            text: "Master the balance between front-end finesse and back-end efficiency...",
        },
    ],
};

const BlogSection = () => {
    const [activeCategory] = useState("Design");

    return (
        <section className="w-full py-12 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* CATEGORY BUTTONS */}
                <div className="flex gap-2 sm:gap-4 mb-10 justify-start">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-3 py-1 text-sm rounded-lg border font-medium sm:px-6 sm:py-2 sm:text-lg sm:rounded-xl transition
                            ${activeCategory === cat
                                    ? "bg-[#652C90] text-white border-[#652C90]"
                                    : "text-black border-[#652C90]"
                                }
                            `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* BLOG CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

                    {blogData[activeCategory].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border-2 border-[#EDEDED] p-5 hover:shadow-lg transition h-full flex flex-col"
                        >
                            {/* IMAGE + DATE PILL */}
                            <div className="relative w-full">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full rounded-lg mb-4"
                                />

                                <span className="absolute bottom-8 left-1 bg-[#d8c8e5] text-[#652C90] text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow-md">
                                    {item.date}
                                </span>
                            </div>

                            {/* TITLE */}
                            <h3 className="font-semibold text-base sm:text-lg text-[#1a1a1a] mb-2 h-16 overflow-hidden">
                                {item.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-gray-600 text-xs sm:text-sm h-14 overflow-hidden">
                                {item.text}
                                <span className="text-blue-600 cursor-pointer"> more</span>
                            </p>

                            {/* Push content to bottom */}
                            <div className="mt-auto"></div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default BlogSection;
