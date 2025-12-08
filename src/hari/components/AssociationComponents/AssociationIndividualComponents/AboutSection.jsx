import React from "react";
import { FaUsers, FaStar } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { MdOutlinePublic, MdLightbulbOutline } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

const AboutSection = () => {
    return (
        <div className="bg-white text-gray-800 py-16 px-6 md:px-16 max-w-7xl mx-auto">

            {/* Top Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <StatCard label="Founded" value="2010" icon={<BsCalendarDate size={25} />} />
                <StatCard label="Headquarters" value="San Francisco, CA" icon={<GiModernCity size={25} />} />
                <StatCard label="Members" value="2,450+ Companies" icon={<FaUsers size={25} />} />
                <StatCard label="Industry Focus" value="Technology & Innovation" icon={<MdLightbulbOutline size={25} />} />
                <StatCard label="Geographic Reach" value="Global" icon={<MdOutlinePublic size={25} />} />
                <StatCard label="Member Satisfaction" value="96%" icon={<FaStar size={25} />} />
            </div>

            {/* About + Image Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-4">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">About Tech Business Alliance</h2>
                    <p className="text-[#615E63] leading-relaxed mb-4">
                        Empowering technology businesses to thrive in a rapidly evolving digital landscape.
                    </p>
                    <p className="text-[#615E63] leading-relaxed">
                        The Tech Business Alliance (TBA) is the premier association for technology companies, startups, and digital innovators. Founded in 2010, we have grown to become one of the most influential voices in the technology sector, representing over 2,450 member companies across the globe.
                    </p>
                </div>

                <img
                    src="/hari/AssociationImages/indAssoc1.jpg"
                    alt="Office Building"
                    className="rounded-xl shadow-lg h-[200px] md:h-[300px] w-full"
                />
            </div>

            {/* Vision Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-[#615E63] leading-relaxed mb-4">
                        We envision a world where technology businesses of all sizes can thrive, innovate, and create positive impact. Through our programs, advocacy efforts, and community initiatives, we're building a sustainable and inclusive technology ecosystem that benefits everyone.
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
                    <p className="text-[#615E63] leading-relaxed">
                        We offer a comprehensive suite of services designed to support technology businesses at every stage of their journey. From early-stage startups to established enterprises, our members benefit from networking events, educational programs, policy advocacy, market intelligence, and strategic partnerships that drive growth and innovation.
                    </p>
                </div>

                <img
                    src="/hari/AssociationImages/indAssoc2.jpg"
                    alt="Workspace"
                    className="rounded-xl shadow-lg h-[200px] md:h-[300px] w-full"
                />
            </div>
        </div>
    );
};

const StatCard = ({ label, value, icon }) => (
    <div className="p-5 bg-white rounded-xl border border-[#C2C1C3] hover:shadow-lg transition flex justify-between items-start">
        <div>
            <p className="text-sm text-gray-500 mb-1">{label}</p>
            <h3 className="text-medium font-semibold text-[#01719E]">{value}</h3>
        </div>
        <div className="text-gray-700">{icon}</div>
    </div>
);

export default AboutSection;
