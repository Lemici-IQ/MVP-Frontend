import React, { useState } from "react";
import { Search } from "lucide-react";
const BusinessCategories = () => {
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const categories = [
    {
      title: "Automotive",
      items: ["Automobile related", "Four wheeler", "Heavy moving vehicles"],
    },
    {
      title: "Beauty & Health",
      items: ["Beauty aesthetics & supplies", "Health care wellness"],
    },
    {
      title: "Business Services",
      items: [
        "Advertisement & media services",
        "Consultancy",
        "IT services",
      ],
    },
    {
      title: "Dealer & Distributors",
      items: ["Automobile", "Education", "Agriculture"],
    },
    {
      title: "Education",
      items: [
        "Coaching & tutoring",
        "Higher education",
        "Online education",
      ],
    },
    {
      title: "Fashion",
      items: ["Accessories", "Clothing", "Footwear"],
    },
    {
      title: "Home based busin.",
      items: ["Beauty & Fitness", "Home care services", "Home based tutoring"],
    },
    {
      title: "Hotels, Travel & Tour.",
      items: [
        "Hostels and Resorts",
        "Taxi & Rental",
        "Tourism services",
      ],
    },
    {
      title: "Retail",
      items: ["Books & Toy & Gifts", "Fashion", "E-retail"],
    },
    {
      title: "Food & Beverage",
      items: ["Cafe & Parlors", "Quick bites", "Restaurant & night clubs"],
    },
    {
      title: "Sports & Entertainment",
      items: [
        "Entertainment & Leisure",
        "Sports goods & fitness stores",
      ],
    },
  ];

  const tableData = [
    { name: "All in one PC (V2)", created: "26-03-2025" },
    { name: "Formula Prinner", created: "26-03-2025" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-center mb-6">
        Browse All Business Categories
      </h1>

      {/* Search + Expand */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <span className="text-lg font-medium text-blue-600">
          All Business Categories
        </span>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search software"
              className="border rounded-lg px-4 py-2 pr-10 w-full sm:w-64"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg whitespace-nowrap">
            Expand all →
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {["Franchise", "Distributor", "Dealer", "Super Stokist"].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="font-medium">{cat.title}</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {cat.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              <li>
                <a href="#" className="text-blue-500 text-sm">
                  View all →
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-end mb-6">
        <a href="#" className="text-blue-500">
          All software categories →
        </a>
      </div>

      {/* Browse All */}
      <h2 className="text-lg font-medium mb-4">Browse All Categories</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Category name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full sm:w-auto"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full sm:w-auto"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full sm:w-auto"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
          Search
        </button>
        <button className="border px-4 py-2 rounded-lg w-full sm:w-auto">Reset</button>
      </div>

      {/* Table */}
      <p className="text-sm mb-2">
        Showing 1-10 of 10387 categories
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Category name</th>
              <th className="p-3 border">Created On</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b">
                <td className="p-3 border text-blue-600">{row.name}</td>
                <td className="p-3 border">{row.created}</td>
                <td className="p-3 border">
                  <a href="#" className="text-blue-600 mr-4">
                    Specifications
                  </a>
                  <a href="#" className="text-blue-600">
                    View all Brands →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default BusinessCategories;