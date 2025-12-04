import React, { useState } from "react";

const tabs = [
  { id: "ai", label: "Artificial Intelligence" },
  { id: "business", label: "Business Building" },
  { id: "geo", label: "Geopolitics" },
  { id: "tech", label: "Technology" },
  { id: "finance", label: "Corporate Finance" },
];

const content = {
  ai: `
constantly changing world.

Transform faster. Innovate smarter. Anticipate the future. At QuantumBlack, we unlock the power of artificial intelligence (AI) to help organizations reinvent themselves from the ground up—and accelerate sustainable and inclusive growth.

We do this by harnessing the foresight and precision of data and technology with the creativity and understanding of people. The result? Hybrid intelligence, a source of competitive advantage that transforms how companies think, operate, and disrupt.

Our approach is relentlessly focused on real-world impact. QuantumBlack was born and proven in Formula 1, where teams live and breathe data. As the AI consulting arm of McKinsey, we blend powerful AI and cutting-edge solutions with deep strategic thinking and domain expertise to help our clients innovate and develop new opportunities.
`,

  business: `Business Building content coming soon...`,
  geo: `Geopolitics content coming soon...`,
  tech: `Technology content coming soon...`,
  finance: `Corporate Finance content coming soon...`,
};

const CapabilitiesTabs = () => {
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <section className="w-full px-4 md:px-12 max-w-7xl mx-auto mt-12">

      {/* Tabs */}
      <div className="flex overflow-x-auto md:overflow-visible gap-6 md:gap-10 font-semibold text-base md:text-lg whitespace-nowrap pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              pb-2 transition flex-shrink-0
              ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-black"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="mt-6 bg-blue-50 p-4 md:p-8 rounded-3xl text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
        {content[activeTab]}
      </div>
    </section>
  );
};

export default CapabilitiesTabs;
