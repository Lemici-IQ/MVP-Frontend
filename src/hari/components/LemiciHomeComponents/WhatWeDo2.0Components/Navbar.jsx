import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-3 bg-[#F5F0FA] rounded-3xl shadow-md w-[90%] mx-auto mt-4 relative z-50">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img src="/hari/logo-main.png" alt="Lemici Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-[#6D3E93]">Offering</li>
          <li className="cursor-pointer hover:text-[#6D3E93]">Pricing</li>
          <li className="cursor-pointer hover:text-[#6D3E93]">What we do ?</li>
          <li className="cursor-pointer hover:text-[#6D3E93]">Connect</li>
          <li className="cursor-pointer hover:text-[#6D3E93]">Resources</li>
        </ul>

        {/* Right - Button */}
        <button className="hidden md:inline bg-[#6D3E93] text-white px-5 py-2 rounded-xl font-medium cursor-pointer">
          Get started
        </button>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-[#6D3E93] text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F5F0FA] shadow-md flex flex-col items-center py-6 space-y-4 mt-2 w-[90%] mx-auto rounded-3xl z-40">
          <li className="list-none text-gray-700 font-medium cursor-pointer hover:text-[#6D3E93]">
            Offering
          </li>
          <li className="list-none text-gray-700 font-medium cursor-pointer hover:text-[#6D3E93]">
            Pricing
          </li>
          <li className="list-none text-gray-700 font-medium cursor-pointer hover:text-[#6D3E93]">
            What we do ?
          </li>
          <li className="list-none text-gray-700 font-medium cursor-pointer hover:text-[#6D3E93]">
            Connect
          </li>
          <li className="list-none text-gray-700 font-medium cursor-pointer hover:text-[#6D3E93]">
            Resources
          </li>
          <button className="bg-[#6D3E93] text-white px-6 py-2 rounded-xl font-medium">
            Get started
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
