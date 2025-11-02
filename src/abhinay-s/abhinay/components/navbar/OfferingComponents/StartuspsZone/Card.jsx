import React from 'react';

export default function Card({ startup }) {
  if (!startup) return null;

  return (
    <div className="relative max-w-sm rounded-3xl border-3 border-[#D9D9D9] overflow-hidden font-sans bg-white">
      {/* Gradient strip only on top 25% */}
      <div 
        className="absolute top-0 left-0 w-full h-1/4 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${startup.zer}, white)`
        }}
      />
      
      {/* Card content */}
      <div className="relative px-6 pt-6 space-y-4 bg-transparent">
        {/* Header */}
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="fi fi-gb"></span>
          <span className="text-sm text-gray-500">{startup.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500 mr-1"></span>
          <span className="text-xs text-blue-600">{startup.subtags?.[0] || 'Actively raising'}</span>
        </div>
      </div>

      {/* Logo and Name */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 flex items-center justify-center bg-[#e6f2e4] rounded-lg">
          {/* Replace with actual icon */}
          <span role="img" aria-label="logo" className="text-3xl">{'🌲'}</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold leading-tight">{startup.name}</span>
            {startup.isVerified && (
              <span className="text-blue-500">
                {/* Use an actual check icon here */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500 mt-1">{startup.businessModel} · {startup.followers} Followers</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm">
        {startup.description}
      </p>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {startup.categories?.map((category, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            {category.name}
          </span>
        ))}
        {startup.additionalCategoriesCount > 0 && (
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            +{startup.additionalCategoriesCount}
          </span>
        )}
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-4 gap-2">
        <div className="rounded-xl bg-white shadow p-2 flex flex-col items-center">
          <span className="text-lg font-bold">{startup.metrics?.raise}</span>
          <span className="text-xs text-gray-500">Raise</span>
        </div>
        <div className="rounded-xl bg-white shadow p-2 flex flex-col items-center">
          <span className="text-lg font-bold">{startup.metrics?.investors}</span>
          <span className="text-xs text-gray-500">Investors</span>
        </div>
        <div className="rounded-xl bg-white shadow p-2 flex flex-col items-center">
          <span className="text-lg font-bold">{startup.metrics?.valuation}</span>
          <span className="text-xs text-gray-500">Valuation</span>
        </div>
        <div className="rounded-xl bg-white shadow p-2 flex flex-col items-center">
          <span className="text-lg font-bold">{startup.metrics?.employees}</span>
          <span className="text-xs text-gray-500">Employees</span>
        </div>
      </div>

      {/* Info tags */}
      <div className="flex justify-between mt-2">
        <div className="flex flex-col text-center">
          <span className="text-xs text-gray-400">Target raise</span>
          <span className="font-semibold">{startup.targetRaise}</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-xs text-gray-400">Monthly revenue</span>
          <span className="font-semibold">{startup.monthlyRevenue}</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-xs text-gray-400">Growth rate</span>
          <span className="font-semibold">{startup.growthRate}</span>
        </div>
      </div>

      {/* Highlighted info */}
      <div className="text-center text-gray-700 text-md font-semibold my-2">
        {startup.note}
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {startup.chips?.map((chip, index) => (
          <span key={index} className="border bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">
            {chip}
          </span>
        ))}
      </div>

      {/* Bottom Nav */}
        <div className="flex justify-around text-gray-500 text-xs bg-[#D9D9D9] p-1">
        <button className="flex flex-col items-center focus:outline-none">
          {/* Substitute SVG icon */}
          <span>ⓘ</span>
          <span className="mt-0.5">info</span>
        </button>
        <button className="flex flex-col items-center focus:outline-none">
          <span>💬</span>
          <span className="mt-0.5">Message</span>
        </button>
        <button className="flex flex-col items-center focus:outline-none">
          <span>⭐</span>
          <span className="mt-0.5">Rate</span>
        </button>
        <button className="flex flex-col items-center focus:outline-none">
          <span>➡️</span>
          <span className="mt-0.5">Watch</span>
        </button>
      </div>
      </div>
    </div>
  );
}
