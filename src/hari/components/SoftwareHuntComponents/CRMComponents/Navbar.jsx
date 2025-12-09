import React from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#F1ECF4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/hari/logo-main.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Middle Section - Menu Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-[#8B6AB3]">
            Home
          </a>
          <a href="#" className="hover:text-[#8B6AB3]">
            Offering
          </a>
          <a href="#" className="hover:text-[#8B6AB3]">
            Pricing
          </a>
          <a href="#" className="hover:text-[#8B6AB3]">
            What we do ?
          </a>
          <a href="#" className="hover:text-[#8B6AB3]">
            Connect
          </a>
          <a href="#" className="hover:text-[#8B6AB3]">
            Resources
          </a>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-4">
          <FaUserCircle className="text-2xl text-black cursor-pointer hover:text-[#8B6AB3]" />
          <FaBars className="text-2xl text-black cursor-pointer hover:text-[#8B6AB3]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
