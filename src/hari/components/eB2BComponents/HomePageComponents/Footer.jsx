import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    { value: 200, display: ' M+', label: 'Products' },
    { value: 200, display: ' K+', label: 'Supplies', highlighted: true },
    { value: 5900, display: '+', label: 'Products categories' },
    { value: 200, display: '+', label: 'Countries & Regions' },
];

const FooterSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });
    return (
        <div className="px-6 py-10 bg-white">
            {/* Stats Section */}
            <div
                ref={ref}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-10"
            >
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className={`p-6 rounded ${stat.highlighted
                            ? 'bg-[#6D3E93] text-white font-semibold'
                            : 'text-[#6D3E93] border-2 border-[#EDEDED] bg-[#FFFDFD]'
                            }`}
                    >
                        <p className="text-2xl">
                            {inView ? (
                                <CountUp
                                    end={stat.value}
                                    duration={3}
                                    separator=","
                                    key={`${idx}-${inView}`}
                                />
                            ) : (
                                0
                            )}
                            {stat.display}
                        </p>
                        <p
                            className={`text-sm mt-1 ${stat.highlighted ? '' : 'text-black opacity-60'
                                }`}
                        >
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Back to Top Button */}
            <div className="flex justify-end mb-2">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-[#FFFDFD] border-2 border-[#EDEDED] px-4 py-2 rounded-lg text-black text-sm hover:bg-[#EDEDED] transition cursor-pointer"
                >
                    Back to Top ↑
                </button>
            </div>

            {/* Requirement Form */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Tell Us Your Requirement</h3>
                <form className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end">
                    {/* Product Select */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Product</label>
                        <select className="border border-gray-400 px-3 py-2 rounded text-sm focus:ring-1 focus:ring-[#6D3E93] focus:outline-none" defaultValue="">
                            <option disabled value="" className="text-gray-400">Select Product</option>
                            <option>Oxygen Gas Cylinder</option>
                            <option>Air Pollution Mask</option>
                            <option>Surgical Gloves</option>
                        </select>
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Quantity</label>
                        <input
                            type="text"
                            placeholder="Enter Quantity"
                            className="border border-gray-400 px-3 py-2 rounded text-sm focus:ring-1 focus:ring-[#6D3E93] focus:outline-none"
                        />
                    </div>

                    {/* Pincode */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Pincode</label>
                        <input
                            type="text"
                            placeholder="Enter Pincode"
                            className="border border-gray-400 px-3 py-2 rounded text-sm focus:ring-1 focus:ring-[#6D3E93] focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">E-mail</label>
                        <input
                            type="email"
                            placeholder="Enter E-mail"
                            className="border border-gray-400 px-3 py-2 rounded text-sm focus:ring-1 focus:ring-[#6D3E93] focus:outline-none"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium">Phone</label>
                        <div className="flex">
                            <span className="px-2 py-2 bg-gray-100 border border-r-0 border-gray-400 rounded-l text-sm">+91</span>
                            <input
                                type="tel"
                                placeholder="Enter Number"
                                className="border border-gray-400 px-3 py-2 rounded-r text-sm w-full focus:ring-1 focus:ring-[#6D3E93] focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-medium invisible">Submit</label>
                        <button
                            type="submit"
                            className="bg-[#6D3E93] text-white font-semibold px-4 py-2 rounded text-sm w-full border border-[#6D3E93] cursor-pointer transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FooterSection;
