import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const menuItems = [
        { label: "Home", id: "home" },
        { label: "Offering", id: "offering" },
        { label: "Pricing", id: "pricing" },
        { label: "What we do ?", id: "services" },
        { label: "Connect", id: "connect" },
        { label: "Resources", id: "resources" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            const offsets = menuItems.map(item => {
                const el = document.getElementById(item.id);
                if (!el) return { id: item.id, top: Infinity };
                const rect = el.getBoundingClientRect();
                return { id: item.id, top: Math.abs(rect.top) };
            });

            const visible = offsets.reduce((prev, curr) => (
                curr.top < prev.top ? curr : prev
            ));
            setActiveSection(visible.id);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuClick = (id) => {
        setIsOpen(false);
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-10 ${isScrolled
                ? "bg-white shadow-md"
                : "bg-white"
                }`}
        >
            <div className="flex justify-between items-center py-4 max-w-screen-xl mx-auto">
                <img src="/hari/logo-main.png" alt="Logo" className="h-14 cursor-pointer" />

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => handleMenuClick(item.id)}
                            className={`cursor-pointer hover:text-[#6D3E93] transition ${activeSection === item.id ? "text-[#6D3E93] font-bold" : ""
                                }`}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <button className="hidden md:inline bg-[#6D3E93] text-white px-5 py-2 rounded-md font-medium cursor-pointer">
                    Get started
                </button>
                {/* Hamburger */}
                <div className="md:hidden">
                    {isOpen ? (
                        <FiX
                            className="text-3xl text-[#6D3E93] cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    ) : (
                        <FiMenu
                            className="text-3xl text-[#6D3E93] cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl shadow-lg z-40 md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-5 text-gray-800 font-medium">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleMenuClick(item.id)}
                                className={`cursor-pointer hover:text-[#6D3E93] ${activeSection === item.id ? "text-[#6D3E93] font-bold" : ""
                                    }`}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
