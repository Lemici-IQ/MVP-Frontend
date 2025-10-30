import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaChalkboardTeacher, FaBrain, FaTh, FaRegStar } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { LuMessageCircleMore } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const ConnectSection = () => {
    const [activeTab, setActiveTab] = useState("Meet Ups");

    const tabs = ["Townhalls", "Meet Ups", "Convocations", "Mixers"];

    const skillsData = {
        technical: [
            "Strong programming skills",
            "System architecture",
            "DevOps & CI/CD",
            "Tools & Framework",
            "Code quality & reviews",
        ],
        leadership: ["Mentorship", "Delegation", "Decision making", "Project management"],
        communication: [
            "Cross team collaboration",
            "Clear technical writing",
            "Conflict resolution",
            "Stakeholder communication",
        ],
    };

    return (
        <section className="px-6 py-12">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                    Learn Online and Connect Offline
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Engage with other leaders, alumni, and mentors and attend community
                    sessions to learn from each other in our curated community.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 sm:px-6 py-2 rounded-full transition text-sm sm:text-base ${activeTab === tab
                            ? "bg-[#6D3E93] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                    <div
                        key={i}
                        className="border rounded-xl p-6 shadow-md hover:shadow-lg transition"
                    >
                        {/* Profile Header */}
                        <div className="flex items-start gap-4 mb-4">
                            <img
                                src="/hari/ExpertConnectImages/people/connectperson.jpg"
                                alt="profile"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-lg flex items-center gap-2">
                                    Maria Elliott{" "}
                                    <HiCheckBadge className="text-[#6D3E93] text-xl" />
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Tech lead, Ogilvy Infinity Learn
                                </p>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                                    <AiFillStar className="text-gray-300" />
                                    <span className="ml-2 text-sm text-gray-600">4</span>
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <p className="text-gray-700 mb-4">
                            Experienced tech lead specializing in small companies' growth and
                            software development.
                        </p>

                        {/* Info */}
                        <div className="space-y-2 mb-4 text-gray-700 text-sm">
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-[#6D3E93]" /> New York, NY
                            </p>
                            <p className="flex items-center gap-2">
                                <FaCalendarAlt className="text-[#6D3E93]" /> Available Mon-Fri
                            </p>
                            <p className="flex items-center gap-2">
                                <FaBriefcase className="text-[#6D3E93]" /> EdTech, AI/ML,
                                Productivity, HR
                            </p>
                        </div>

                        {/* Hours contributed */}
                        <div className="mb-3">
                            <p className="text-sm font-medium text-gray-600 mb-1">
                                Hours contributed
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-[#6D3E93B2] h-2 rounded-full w-2/3"></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">43,824 h</p>
                        </div>

                        {/* Horizontal line */}
                        <div className="border-t border-1 border-[#6D3E93B2] w-full mb-2"></div>

                        {/* Offering */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Offering</h2>
                            <div className="flex justify-between text-[#6D3E93B2] mx-auto max-w-sm">
                                <div className="flex flex-col items-center">
                                    <FaChalkboardTeacher size={30} />
                                    <span className="mt-2 text-gray-700 text-sm">Training</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaBrain size={30} />
                                    <span className="mt-2 text-gray-700 text-sm">Consulting</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaTh size={30} />
                                    <span className="mt-2 text-gray-700 text-sm">Research analysis</span>
                                </div>
                            </div>
                        </div>

                        {/* Horizontal line */}
                        <div className="border-t border-1 border-[#6D3E93B2] w-full mb-2"></div>

                        {/* Skills */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Skills</h2>

                            <div className="mb-4">
                                <h3 className="font-medium mb-2 opacity-70">Technical skills</h3>
                                <ul className="list-disc list-inside flex flex-wrap gap-x-6 text-gray-700">
                                    {skillsData.technical.map((skill) => (
                                        <li key={skill} className="text-sm opacity-70">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-medium mb-2 opacity-70">Leadership skills</h3>
                                <ul className="list-disc list-inside flex flex-wrap gap-x-6 text-gray-700">
                                    {skillsData.leadership.map((skill) => (
                                        <li key={skill} className="text-sm opacity-70">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-medium mb-2 opacity-70">Communication skills</h3>
                                <ul className="list-disc list-inside flex flex-wrap gap-x-6 text-gray-700">
                                    {skillsData.communication.map((skill) => (
                                        <li key={skill} className="text-sm opacity-70">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                            {/* Left side */}
                            <div className="flex gap-6">
                                <button className="flex items-center gap-1 text-gray-600 text-base sm:text-lg hover:text-gray-800 cursor-pointer">
                                    <FaRegStar /> Star
                                </button>

                                <button className="flex items-center gap-1 text-gray-600 text-base sm:text-lg hover:text-gray-800 cursor-pointer">
                                    <LuMessageCircleMore /> Message
                                </button>
                            </div>

                            {/* Right side */}
                            <div className="flex gap-3">
                                <Link
                                    to="/expert-listing"
                                    className="inline-block px-4 py-2 rounded-lg border border-[#6D3E93] text-[#6D3E93] text-sm hover:bg-purple-50 cursor-pointer"
                                >
                                    Hire an expert
                                </Link>
                                <button className="px-4 py-2 rounded-lg bg-[#6D3E93] text-white text-sm hover:bg-[#5a2e75] cursor-pointer">
                                    Add to contact
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ConnectSection;
