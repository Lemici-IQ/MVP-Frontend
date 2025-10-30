import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Top3() {
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy chart data
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="p-6 font-sans">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 border rounded-full p-1 mb-6 w-fit mx-auto">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "overview"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
        >
          Business Overview
        </button>
        <button
          onClick={() => setActiveTab("investment")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "investment"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
        >
          Investment requirement
        </button>
        <button
          onClick={() => setActiveTab("operations")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "operations"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
        >
          Operations
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 text-center shadow">
              <h3 className="font-semibold text-lg mb-4">
                Product & Services
              </h3>
              <button className="px-6 py-2 rounded-md bg-blue-600 text-white">
                View
              </button>
            </div>
            <div className="border rounded-lg p-6 text-center shadow">
              <h3 className="font-semibold text-lg mb-4">
                Training & support offered
              </h3>
              <button className="px-6 py-2 rounded-md bg-blue-600 text-white">
                View
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="border rounded-lg p-4 sm:p-6 shadow">
            <div className="w-full" style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right side (Form) */}
        <div className="border rounded-lg p-4 sm:p-6 shadow">
          <h3 className="text-right font-semibold mb-4">Instant Apply</h3>
          <form className="space-y-3">
            <input type="text" placeholder="Full Name" className="w-full border rounded px-3 py-2" />
            <input type="email" placeholder="E-mail" className="w-full border rounded px-3 py-2" />
            <input type="tel" placeholder="Mobile No." className="w-full border rounded px-3 py-2" />
            <select className="w-full border rounded px-3 py-2">
              <option>Select state for franchise</option>
            </select>
            <select className="w-full border rounded px-3 py-2">
              <option>Select city for franchise</option>
            </select>
            <input type="text" placeholder="Pincode" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="Address" className="w-full border rounded px-3 py-2" />
            <select className="w-full border rounded px-3 py-2">
              <option>Select investment range</option>
            </select>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">I agree to the Terms & Conditions</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded">
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
