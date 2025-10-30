import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white mx-10 my-10">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 sm:px-10 py-10">
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-2xl font-bold text-gray-800">
              Create an Account
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Join us and start your journey today.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type name here"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <div className="relative">
                <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                  required
                />
                <div
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </div>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#6D3E93] text-white py-2 rounded-lg font-medium hover:bg-[#5B2E7E] transition duration-200"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Background image with bottom-left text */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center rounded-t-xl md:rounded-none md:rounded-l-xl h-64 md:h-auto"
        style={{
          backgroundImage:
            "url('/hari/ExpertConnectImages/backgrounds/signin.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-xl md:rounded-none md:rounded-l-xl" />

        <div className="absolute bottom-6 left-6 text-white max-w-sm">
          {/* 5 Yellow Stars */}
          <div className="flex space-x-1 mb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} className="text-yellow-400 text-lg" />
            ))}
          </div>

          <h2 className="text-2xl font-bold">LeMiCi AI</h2>
          <p className="mt-2 text-sm leading-relaxed">
            LeMiCi IQ is a marketing automation platform offering WhatsApp
            Business API, web push, and social media tools.
          </p>
          <p className="mt-3 text-sm font-semibold text-blue-400">
            Pritesh Prakash Rane & Soniya Uday Naik
          </p>
          <p className="text-xs">Directors</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
