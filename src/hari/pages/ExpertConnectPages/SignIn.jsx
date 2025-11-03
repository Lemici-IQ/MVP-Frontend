import React, { useState } from "react";
import {
  FaGoogle,
  FaApple,
  FaFacebook,
  FaEnvelope,
  FaLock,
  FaStar,
  FaArrowLeft,
} from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white mx-10 my-10">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 sm:px-10 py-10 pt-16 md:pt-10 relative">
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 flex items-center text-gray-600 hover:text-[#6D3E93] transition cursor-pointer"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl sm:text-2xl font-bold text-gray-800">
              Welcome!
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Signing up is quick and easy. <br className="hidden sm:block" />
              Let's get started on something great.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
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

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
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
              <p className="text-right text-sm text-blue-500 mt-1 cursor-pointer hover:underline">
                Forgot password?
              </p>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#6D3E93] text-white py-2 rounded-lg font-medium hover:bg-[#5B2E7E] transition duration-200"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex justify-center space-x-4">
            <button className="border border-gray-300 rounded-lg p-2 hover:bg-gray-100 transition">
              <FaGoogle className="text-xl" style={{ color: "#DB4437" }} />
            </button>
            <button className="border border-gray-300 rounded-lg p-2 hover:bg-gray-100 transition">
              <FaApple className="text-xl text-black" />
            </button>
            <button className="border border-gray-300 rounded-lg p-2 hover:bg-gray-100 transition">
              <FaFacebook className="text-xl" style={{ color: "#1877F2" }} />
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 text-sm mt-6">
            or{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              create an account
            </Link>{" "}
            if you don’t have one yet
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center rounded-t-xl md:rounded-none md:rounded-l-xl h-64 md:h-auto"
        style={{
          backgroundImage:
            "url('/hari/ExpertConnectImages/backgrounds/signin.jpg')",
        }}
      >
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

export default SignIn;
