import React from "react";
import { BiSolidDownArrow } from 'react-icons/bi';

const Banner = () => {
    return (
        <div
            className="relative flex items-center justify-center rounded-4xl overflow-hidden mx-6 my-4 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border-2 border-gray-300"
            style={{
                backgroundImage: "url('/hari/ExpertConnectImages/backgrounds/homebanner.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/70"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl px-6">
                <p className="text-sm text-gray-600 mb-2">Unlocking Growth Together</p>
                <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
                    Join the only authentic growth hacking ecosystem, built by the pioneers
                    who defined the methodology.
                </h1>
                <p className="text-gray-600 mb-6">
                    Ideal for founders, head of growth, marketers, product managers, and
                    innovators who want to share experiences and collaborate for business
                    growth and career development.
                </p>
                <button className="bg-black text-white rounded-full px-6 py-2 text-lg font-sm font-semibold hover:bg-gray-800 transition cursor-pointer flex items-center gap-2 mx-auto">
                    <span className="flex items-center gap-2">
                        Hire Growth Experts
                        <BiSolidDownArrow className="text-sm" />
                    </span>

                </button>
            </div>
        </div>
    );
}

export default Banner;
