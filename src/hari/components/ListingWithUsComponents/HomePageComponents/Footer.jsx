import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPaperPlane,
  FaLightbulb,
  FaEnvelope,
  FaBriefcase,
  FaBook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pb-12 px-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
        {/* Left - Socials */}
        <div className="flex flex-col items-start w-full md:w-1/2">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <FaLightbulb className="text-orange-500" /> Follow on Socials
          </h3>

          <div className="flex justify-start space-x-3">
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
            >
              <FaFacebookF className="text-gray-700 text-lg" />
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
            >
              <FaTwitter className="text-gray-700 text-lg" />
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
            >
              <FaYoutube className="text-gray-700 text-lg" />
            </a>
            <a
              href="#"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"
            >
              <FaLinkedinIn className="text-gray-700 text-lg" />
            </a>
          </div>
        </div>

        {/* Right - Email Subscribe */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-1/2 max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent outline-none text-sm flex-1 px-2"
          />
          <button className="bg-orange-500 hover:bg-orange-700 text-white p-2 rounded-full transition">
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <FaEnvelope className="text-orange-500" /> Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Become a Client</li>
            <li>Office Locations</li>
            <li>Technical Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <FaBriefcase className="text-orange-500" /> Careers
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Why LeMiCi</li>
            <li>Search Careers</li>
            <li>Our Culture</li>
            <li>Careers Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <FaBook className="text-orange-500" /> Resources
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Featured Insights</li>
            <li>Webinars</li>
            <li>Glossary</li>
            <li>Client Stories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <FaLightbulb className="text-orange-500" /> What We Do
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Research & Advisory</li>
            <li>Conferences</li>
            <li>Consulting</li>
            <li>Digital Markets</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 border-t pt-6">
        <div className="flex justify-center mb-3">
          <img src="/hari/logo-main.png" alt="LeMiCi Logo" className="h-10" />
        </div>
        <p>Bengaluru | Mumbai | Hyderabad | Gurgaon</p>
        <p className="mt-2">
          © 2025 LeMiCi. All rights reserved. Empowering Local Businesses with
          Digital Growth.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
