import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const associations = [
    {
        title: "Tech Business Alliance",
        description:
            "Leading association for technology companies, startups, and innovators fostering collaboration and growth.",
        img: "/hari/AssociationImages/association1.jpg",
        members: "2,450",
        events: "48",
        rating: "4.9",
    },
    {
        title: "Finance Council",
        description:
            "Premier network for financial professionals, banks, and investment firms driving standards.",
        img: "/hari/AssociationImages/association2.jpg",
        members: "1,820",
        events: "36",
        rating: "4.8",
    },
    {
        title: "Healthcare Innovators",
        description:
            "Connecting healthcare providers, researchers, and medical technology companies.",
        img: "/hari/AssociationImages/association3.jpg",
        members: "3,150",
        events: "52",
        rating: "4.9",
    },
];

const FeaturedAssociations = () => {
    return (
        <section className="py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-900">Featured Business Associations</h2>
                <div className="flex justify-between items-start mb-8">
                    <p className="text-gray-500 text-sm mt-2">
                        Join thousands of professionals in these leading associations
                    </p>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        View more →
                    </button>
                </div>

                <div className="relative">
                    {/* Left Arrow */}
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-[#C2C1C3] shadow-lg p-2.5 rounded-full z-10 hover:bg-[#B7B6B8] transition">
                        <ChevronLeft size={20} className="text-white" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {associations.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-44 w-full object-cover"
                                />

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="flex gap-8 mb-5">
                                        <div className="text-center">
                                            <p className="text-xl font-bold text-[#01719E]">{item.members}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">Members</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl font-bold text-[#01719E]">{item.events}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">Events</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl font-bold text-[#01719E]">{item.rating}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">Rating</p>
                                        </div>
                                    </div>

                                    <button className="mt-auto w-full bg-[#01719E] text-white text-sm py-3 rounded-lg font-semibold hover:bg-[#016389] transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-[#C2C1C3] shadow-lg p-2.5 rounded-full z-10 hover:bg-[#B7B6B8] transition">
                        <ChevronRight size={20} className="text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedAssociations;
