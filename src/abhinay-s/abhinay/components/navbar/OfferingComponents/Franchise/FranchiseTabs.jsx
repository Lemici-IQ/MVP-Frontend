import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function FranchiseTabs() {
  const [activeTab, setActiveTab] = useState("Business Overview");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    if (activeTab !== "Business Overview") return;
    if (!chartRef.current) return;
    
    const ctx = chartRef.current.getContext("2d");
 
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [5000, 7000, 12000, 18000, 23000, 26000],
            borderWidth: 3,
            borderColor: "#2563eb",
            tension: 0.4,
          },
          {
            label: "Expenses",
            data: [3000, 4000, 6000, 9000, 14000, 17000],
            borderWidth: 3,
            borderColor: "#10b981",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: "#444" },
          },
        },
        scales: {
          x: { ticks: { color: "#444" } },
          y: { ticks: { color: "#444" } },
        },
      },
    });
 
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [activeTab]);

  return (
    <div className="w-full rounded-3xl p-8 flex flex-col bg-white">

      {/* ================= TABS HEADER ================= */}
      <div className="flex text-xl font-semibold text-gray-700">
        {["Business Overview", "Investment requirement", "Operation"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 w-1/3 rounded-t-2xl transition-all
                ${
                  activeTab === tab
                    ? "bg-blue-50 text-[#268BFF]"
                    : "bg-white text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="bg-blue-50 p-8 rounded-b-2xl">

        {/* ================================================= */}
        {/* =============== BUSINESS OVERVIEW =============== */}
        {/* ================================================= */}
        {activeTab === "Operation" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Left */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Franchise Category</h3>
                <p className="text-gray-700 mt-2">
                  Kids’ Food & Beverage Franchise
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Sector</h3>
                <p className="text-gray-700 mt-2">
                  Quick Service Restaurant / Fast Food
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Service</h3>
                <p className="text-gray-700 mt-2">
                  Kathi Rolls, Fast Casual Indian & Mughlai Cuisine
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Qualifications Required</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  Basic business management skills, passion for food &
                  beverage industry, willingness to invest ₹8–15 Lakhs,
                  good retail location, dedication.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">
                  Is absentee ownership allowed?
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  NO – Requires active involvement in daily operations,
                  quality control, and customer service.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Can this franchise be run from home/mobile?
                </h3>
                <p className="text-gray-700 mt-2">
                  NO – Requires dedicated physical retail space.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Can this franchise be run part-time?
                </h3>
                <p className="text-gray-700 mt-2">
                  NO – Full-time management required.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================================================= */}
        {/* ============ INVESTMENT REQUIREMENT ============= */}
        {/* ================================================= */}
        {activeTab === "Investment requirement" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Left */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Initial Investment</h3>
                <p className="text-gray-700 mt-2">
                  ₹6 Lakhs – ₹18 Lakhs depending on franchise model and location
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Investment Breakdown</h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                  <li>Franchise fee: ₹1–4 Lakhs</li>
                  <li>Infrastructure & kitchen setup: ₹3–6 Lakhs</li>
                  <li>Interiors & Branding: ₹1.5–2 Lakhs</li>
                  <li>Miscellaneous: ₹50,000</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg">Franchise Fee</h3>
                <p className="text-gray-700 mt-2">
                  ₹1 Lakhs to ₹4 Lakhs
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">Single Unit Investment</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  Food Court / Express: ₹6–7 Lakhs <br />
                  Dining Restaurant: ₹8–10 Lakhs <br />
                  Large / Full Dine-in: ₹15–18 Lakhs
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Required Property</h3>
                <p className="text-gray-700 mt-2">
                  Commercial location: malls, food courts, high footfall
                  areas, near colleges/universities.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Floor Area (Single Unit)
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  Food Court Express: 200 sq. ft. (Kitchen + Counter + Store)
                  <br />
                  Dining Restaurant: 300–600 sq. ft.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================================================= */}
        {/* =================== OPERATION =================== */}
        {/* ================================================= */}
        {activeTab === "Business Overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Left */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Products</h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                  <li>Fast Food Items</li>
                  <li>Beverages</li>
                  <li>Desserts</li>
                  <li>Packaged Food</li>
                  <li>Healthy Options</li>
                  <li>Regional & Traditional Cuisine</li>
                  <li>Meal Combos & Family Packs</li>
                  <li>Kids’ Special Menu</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg">Services</h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                  <li>Dine-in Facility</li>
                  <li>Takeaway & Delivery</li>
                  <li>Online Ordering</li>
                  <li>Catering Services</li>
                  <li>Loyalty Programs</li>
                  <li>Customized Meals</li>
                  <li>Franchise Training</li>
                  <li>Marketing Support</li>
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg">Training & Support</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide complete training and ongoing support including
                operations, marketing, technology setup, and staff training
                to ensure franchise success.
              </p>

              <div className="bg-white rounded-2xl shadow p-6 w-full h-[20rem]">
                <canvas ref={chartRef}></canvas>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
