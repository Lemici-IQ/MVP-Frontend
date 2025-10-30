import React from "react";
import { Mail, MapPin, Clock, FileText, TrendingUp, Percent } from "lucide-react";

export default function Top2() {
  return (
    <div className="p-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Logo + Follow */}
          <div className="flex flex-col gap-3">
            <img
              src="/abhinay/franchise/single/ktt.jpg" // replace with actual logo path
              alt="Kathi Junction"
              className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg"
            />
            <button className="w-fit px-4 py-2 bg-blue-600 text-white rounded-full">
              Follow
            </button>
          </div>

          {/* Info Cards */}
          <div className="space-y-3">
            <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
              <span className="text-gray-700">Leadership</span>
              <span className="font-medium">Tarun Lal. President</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
              <span className="text-gray-700 flex items-center gap-2">
                <MapPin size={16} /> Corporate Address
              </span>
              <span className="font-medium text-right">
                1900 Colonel Sanders In. <br /> Louisville. KY 40213
              </span>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
              <span className="text-gray-700 flex items-center gap-2">
                <Mail size={16} /> E-mail
              </span>
              <span className="font-medium">
                anuragsingh1990@gmail.com
              </span>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
              <span className="text-gray-700 flex items-center gap-2">
                <Clock size={16} /> Term duration year
              </span>
              <span className="font-medium">5</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
              <span className="text-gray-700 flex items-center gap-2">
                <FileText size={16} /> Franchise fees
              </span>
              <span className="font-medium">From 13,990 EUR/USD</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
              <span className="text-gray-700 flex items-center gap-2">
                <TrendingUp size={16} /> Average turnover per/month
              </span>
              <span className="font-medium">35,000 EUR/USD</span>
            </div>
            <div className="border border-gray-300 rounded-lg p-3 flex items-center justify-between">
              <span className="text-gray-700 flex items-center gap-2">
                <Percent size={16} /> Royalties
              </span>
              <span className="font-medium">6%</span>
            </div>
          </div>

          <a
            href="#"
            className="text-blue-600 text-sm underline block text-right"
          >
            View more →
          </a>
        </div>

        {/* Right Section */}
  <div className="space-y-6">
          {/* Top Info Row */}
          <div className="grid grid-cols-3 text-center border-b pb-4">
            <div>
              <h4 className="font-semibold">Food</h4>
              <p className="text-gray-500 text-sm">Industry</p>
            </div>
            <div>
              <h4 className="font-semibold">Yum! Brands inc.</h4>
              <p className="text-gray-500 text-sm">Parent company</p>
            </div>
            <div>
              <h4 className="font-semibold">Franchise</h4>
              <p className="text-gray-500 text-sm">Business type</p>
            </div>
          </div>

          {/* Food Image: aligned to right, showing only left 60% */}
          <div className="flex md:justify-end">
            <div className="w-[180px] sm:w-[192px] h-56 sm:h-72 md:h-80 overflow-hidden rounded-lg shadow">{/* Responsive cropped image */}
              <img
                src="/abhinay/franchise/single/biryani.png" // replace with actual food image path
                alt="Food"
                className="w-80 h-full object-cover object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
