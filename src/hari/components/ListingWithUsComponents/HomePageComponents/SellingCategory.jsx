import React from "react";
import { FaCheck, FaStore, FaHandshake, FaBullhorn, FaLaptopCode, FaRocket } from "react-icons/fa";

const SellingCategory = () => {
  const categories = [
    {
      icon: <FaStore className="text-orange-500 text-2xl" />,
      title: "Sell Your Franchise",
      description:
        "List your proven business model and connect with aspiring entrepreneurs looking for franchise opportunities.",
      features: [
        "Detailed franchise listing page",
        "Lead management dashboard",
        "Investment range visibility",
        "Territory mapping tools",
        "Franchise inquiry tracking",
      ],
      price: "₹9,999/month",
      button: "List My Franchise",
    },
    {
      icon: <FaHandshake className="text-orange-500 text-2xl" />,
      title: "B2B Marketplace",
      description:
        "Showcase your products or services to business buyers and establish valuable B2B partnerships.",
      features: [
        "Product catalog management",
        "Bulk inquiry handling",
        "Verified buyer network",
        "Quote management system",
        "Payment gateway integration",
      ],
      price: "₹4,999/month",
      button: "Join B2B Network",
    },
    {
      icon: <FaBullhorn className="text-orange-500 text-2xl" />,
      title: "Promote Your Event",
      description:
        "Reach business professionals & increase attendance for your conferences, workshops, & networking events.",
      features: [
        "Event page creation",
        "Registration management",
        "Attendee analytics",
        "Email marketing tools",
        "Payment processing",
      ],
      price: "₹2,999/event",
      button: "Promote Event",
    },
    {
      icon: <FaLaptopCode className="text-orange-500 text-2xl" />,
      title: "List Your Software/Service",
      description:
        "Get your SaaS or software solution discovered by businesses actively seeking technology solutions.",
      features: [
        "Software showcase page",
        "Free trial management",
        "User review system",
        "Demo scheduling",
        "Integration partnerships",
      ],
      price: "₹7,999/month",
      button: "List Software",
    },
    {
      icon: <FaRocket className="text-orange-500 text-2xl" />,
      title: "List Your Startup",
      description:
        "Connect with investors, partners, and customers. Get your startup the visibility it deserves.",
      features: [
        "Startup profile creation",
        "Investor matchmaking",
        "Funding opportunity alerts",
        "Pitch deck hosting",
        "Mentor network access",
      ],
      price: "₹5,999/month",
      button: "List Startup",
    },
  ];

  return (
    <section className="py-10 px-6 md:px-16 bg-white">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Choose Your Selling Category
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Select the type of business opportunity you want to list and start
          reaching thousands of potential buyers today.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition bg-white p-6"
          >
            {/* Icon */}
            <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-md mb-4">
              {item.icon}
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              {/* Features */}
              <ul className="space-y-2 text-sm">
                {item.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <FaCheck className="text-orange-500 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price & Button */}
            <div className="mt-6">
              <p className="text-orange-600 font-semibold text-lg mb-4">
                {item.price}
              </p>
              <button className="w-full bg-orange-500 text-white font-medium py-2.5 rounded-lg hover:bg-orange-600 transition">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellingCategory;
