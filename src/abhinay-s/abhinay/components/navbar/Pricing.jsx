import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import { Check, Rocket, Store, Handshake, ChevronRight } from 'lucide-react';

// import { useState } from "react";

// const plans = [
//   {
//     name: "Starter",
//     price: "₹ 7,888",
//     freq: "/mo",
//     features: [
//       "1 User access",
//       "5 GB cloud space",
//       "1 project/month",
//       "Basic analytics dashboard",
//       "Free onboarding guide",
//     ],
//     isPopular: false,
//   },
//   {
//     name: "Standard",
//     price: "₹ 22,888",
//     freq: "/mo",
//     features: [
//       "Up to 5 user access",
//       "50 GB cloud space",
//       "5 project/month",
//       "Analytics dashboard",
//       "Monthly strategy call",
//     ],
//     isPopular: false,
//   },
//   {
//     name: "Plus",
//     price: "₹ 78,888",
//     freq: "/mo",
//     features: [
//       "10 user includes",
//       "200 GB cloud space",
//       "Unlimited project",
//       "Team collaboration tool",
//       "API access",
//     ],
//     isPopular: false,
//   },
//   {
//     name: "Premium",
//     price: "₹ 18,888",
//     freq: "/mo",
//     features: [
//       "Unlimited user",
//       "1 TB+ cloud space",
//       "24/7 premium support",
//       "Enterprise-level security",
//       "Full platform access",
//     ],
//     isPopular: false,
//   },
//   {
//     name: "Enterprise",
//     price: "FREE",
//     freq: "",
//     features: [
//       "1 User access",
//       "1 GB cloud space",
//       "1 project/month",
//       "Basic analytics dashboard",
//     ],
//     isPopular: false,
//   },
// ];

// export default function Pricing() {
//   const [billing, setBilling] = useState("Monthly");
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   // keep plans in state so we can toggle "isPopular" on click
//   const [plansState, setPlansState] = useState(plans);

//   const handleCardClick = (idx) => {
//     setPlansState((prev) =>
//       prev.map((p, i) => (i === idx ? { ...p, isPopular: !p.isPopular } : p))
//     );
//     // keep selectedPlan in sync so styles that depend on it still work
//     setSelectedPlan((prev) => (prev === idx ? null : idx));
//   };

//   return (
//     <div className="bg-white w-full min-h-screen flex flex-col items-center py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
//       {/* Heading */}
//       <div className="text-center mb-8 sm:mb-10 lg:mb-12 space-y-4 max-w-4xl">
//         <h1 className="font-spacegrotesk font-bold text-3xl sm:text-4xl lg:text-[56px] leading-[110%]">
//           Plans & Pricing
//         </h1>
//         <p className="font-spacegrotesk font-normal text-sm sm:text-base lg:text-[17px] leading-[145%] text-gray-600 px-4 sm:px-0">
//           Choose the plan that fits your needs. All plans include essential
//           features to get you started, with options to scale as you grow. No
//           hidden fees and the flexibility to change anytime.
//         </p>

//         {/* Billing Toggle */}
//         <div className="flex flex-col items-center">
//           <div className="flex items-center bg-gray-200 gap-2 sm:gap-4 rounded-full p-1 shadow-sm">
//             {["Monthly", "Annual"].map((mode) => (
//               <button
//                 key={mode}
//                 onClick={() => setBilling(mode)}
//                 className={`flex items-center justify-center text-xs sm:text-sm font-medium py-2 px-3 sm:px-5 ${
//                   billing === mode
//                     ? "bg-white shadow text-gray-900"
//                     : "text-gray-600"
//                 } rounded-full transition`}
//               >
//                 {mode}
//               </button>
//             ))}
//           </div>
//           <p className="mt-2 text-xs sm:text-sm font-semibold text-blue-600 text-center px-4">
//             {billing === "Annual"
//               ? "-15% off on annual payments. Try LeMiVerse for 14 days."
//               : "\u00A0"}
//           </p>
//         </div>
//       </div>

//       {/* Plan Cards */}
//       {/* Plan Cards */}
//       <div className="w-full">
//         <style>{`
//         /* Hide scrollbar but keep scroll functionality */
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//         {/* Desktop/Tablet View */}
//         <div className="hidden sm:flex sm:justify-center sm:space-x-4 lg:space-x-6 sm:overflow-x-auto sm:px-4 lg:px-8 pb-12 pt-8 items-stretch scrollbar-hide">
//           {plansState.map((p, idx) => (
//             <div key={idx} className="relative flex-shrink-0 h-full">
//               {(p.isPopular || selectedPlan === idx) && (
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-500 px-4 lg:px-6 py-1 lg:py-2 rounded-full text-[10px] lg:text-[12px] font-semibold text-white z-10">
//                   MOST POPULAR
//                 </div>
//               )}
//               <div
//                 onClick={() => handleCardClick(idx)}
//                 className={`w-[200px] sm:w-[220px] lg:w-[250px] bg-white cursor-pointer transition-all duration-200 mt-6 rounded-[20px] lg:rounded-[24px] ${
//                   selectedPlan === idx
//                     ? "border-4 lg:border-[6px] border-orange-500 shadow-orange-200 shadow-lg"
//                     : p.isPopular
//                     ? "border-2 lg:border-4 border-orange-500"
//                     : "border border-gray-200"
//                 } shadow-md hover:shadow-lg flex flex-col h-[480px] sm:h-[420px] lg:h-[460px]`}
//               >
//                 <div className="p-4 sm:p-6 lg:p-8 flex flex-col space-y-3 lg:space-y-4 h-full">
//                   <h3 className="text-lg lg:text-xl font-bold font-spacegrotesk">
//                     {p.name}
//                   </h3>
//                   <div className="flex items-baseline space-x-1">
//                     <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-spacegrotesk">
//                       {p.price}
//                     </span>
//                     {p.freq && (
//                       <span className="text-sm sm:text-base lg:text-lg font-bold font-spacegrotesk">
//                         {p.freq}
//                       </span>
//                     )}
//                   </div>
//                   <ul className="space-y-2 flex-1">
//                     {p.features.map((feat, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start space-x-2 text-gray-700 text-xs lg:text-sm"
//                       >
//                         <span className="mt-1 text-green-600">✓</span>
//                         <span>{feat}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     className={`mt-3 lg:mt-4 w-full py-2.5 lg:py-3 rounded-full text-xs lg:text-sm font-medium transition-colors ${
//                       selectedPlan === idx
//                         ? "bg-orange-500 text-white hover:bg-orange-600"
//                         : "bg-black text-white hover:bg-gray-800"
//                     }`}
//                   >
//                     Start plan
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Mobile View - Stack cards vertically */}
//         <div className="sm:hidden space-y-6 px-4 pb-8 pt-4">
//           {plansState.map((p, idx) => (
//             <div key={idx} className="relative">
//               {(p.isPopular || selectedPlan === idx) && (
//                 <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-orange-500 px-4 py-1 rounded-full text-[10px] font-semibold text-white z-10">
//                   MOST POPULAR
//                 </div>
//               )}
//               <div
//                 onClick={() => handleCardClick(idx)}
//                 className={`w-full bg-white cursor-pointer transition-all duration-200 mt-2 rounded-[20px] ${
//                   selectedPlan === idx
//                     ? "border-4 border-orange-500 shadow-orange-200 shadow-lg"
//                     : p.isPopular
//                     ? "border-2 border-orange-500"
//                     : "border border-gray-200"
//                 } shadow-md hover:shadow-lg flex flex-col h-[480px]`}
//               >
//                 <div className="p-6 flex flex-col space-y-4 h-full">
//                   <div className="flex justify-between items-start">
//                     <h3 className="text-lg font-bold font-spacegrotesk">
//                       {p.name}
//                     </h3>
//                     <div className="text-right">
//                       <span className="text-2xl font-bold font-spacegrotesk">
//                         {p.price}
//                       </span>
//                       {p.freq && (
//                         <span className="text-sm font-bold font-spacegrotesk">
//                           {p.freq}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <ul className="space-y-2 flex-1">
//                     {p.features.map((feat, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start space-x-2 text-gray-700 text-sm"
//                       >
//                         <span className="mt-1 text-green-600">✓</span>
//                         <span>{feat}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     className={`w-full py-3 rounded-full text-sm font-medium transition-colors ${
//                       selectedPlan === idx
//                         ? "bg-orange-500 text-white hover:bg-orange-600"
//                         : "bg-black text-white hover:bg-gray-800"
//                     }`}
//                   >
//                     Start plan
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Links */}
//       <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
//         <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
//           <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded" />
//           <div>
//             <p className="font-inter font-medium text-lg sm:text-xl">
//               Education &gt;
//             </p>
//             <p className="text-sm text-gray-600">
//               A powerful, free tool for classrooms, district and students.
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
//           <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded" />
//           <div>
//             <p className="font-inter font-medium text-lg sm:text-xl">
//               Not for‑profit &gt;
//             </p>
//             <p className="text-sm text-gray-600">
//               Canva Pro is free for all registered nonprofits. Apply today.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="w-full max-w-screen-lg mt-12 sm:mt-16 border-t pt-3 px-4 sm:px-6 lg:px-8">
//         <p className="text-sm text-gray-600">Comparing pricing &gt;</p>
//       </div>
//     </div>
//   );
// }


const StatusIcon = ({ active }) => {
    return (
      <div className="flex justify-center items-center w-full">
        {active ? (
          <Check className="w-5 h-5 text-green-500 font-bold" strokeWidth={3} />
        ) : (
          <div className="w-4 h-0.5 bg-gray-200" /> 
        )}
      </div>
    );
  };

  // Data Structure
  const sections = [
    {
      id: 'eb2b',
      title: 'eB2B',
      icon: "/abhinay/pricinge2b.png",
      headerStatus: [true, true, true, true],
      features: [
        {
          name: 'Custom email for your business',
          status: [true, true, true, true],
        },
        {
          name: 'Phishing and spam protection that blocks more than 99.9% of attacks',
          status: [true, true, true, true],
        },
        {
          name: 'Phishing and spam protection that blocks more than 99.9% of attacks',
          status: [true, true, true, true],
        },
      ],
    },
    {
      id: 'startup',
      title: 'Startup Zone',
      icon: "/abhinay/pricingstartup.png",
      headerStatus: [true, true, true, true],
      features: [
        {
          name: 'Custom email for your business',
          status: [true, true, true, true],
        },
        {
          name: 'Phishing and spam protection that blocks more than 99.9% of attacks',
          status: [true, true, true, true],
        },
        {
          name: 'Phishing and spam protection that blocks more than 99.9% of attacks',
          status: [true, true, true, true],
        },
      ],
    },
    {
      id: 'franchise',
      title: 'Franchise India',
      icon: "/abhinay/pricingfranchise.png",
      headerStatus: [true, false, true, true], // Notice the 2nd item is false (dash) based on image
      features: [
        {
          name: 'Custom email for your business',
          status: [true, false, true, true],
        },
        {
          name: 'Phishing and spam protection that blocks more than 99.9% of attacks',
          status: [true, true, false, false],
        },
        {
          name: 'Phishing and spam protection that blocks more than 99.9% of attacks',
          status: [true, true, false, false],
        },
      ],
    },
  ];
  // Data array holding labels and specific pastel background colors for each tag
  const offerings = [
    { label: 'eB2B Marketplace', bgColor: 'bg-[#EEDBFF]' },
    { label: 'Startup Zone', bgColor: 'bg-[#CEE5FF]' },
    { label: 'Business Directory', bgColor: 'bg-[#F0C5C3]' },
    { label: 'Govt. Navigator', bgColor: 'bg-[#AFBEDE]' },
    { label: 'Software Hunt', bgColor: 'bg-[#B6E4E2]' },
    { label: 'Market & Industry Research', bgColor: 'bg-[#FFF5D4]' },
    { label: 'Franchise India', bgColor: 'bg-[#C9CCFF]' },
    { label: 'Industrial Solution', bgColor: 'bg-[#FFC0E1]' },
  ];

    
const Pricing = () => {

  const [activeTab, setActiveTab] = useState('Business');
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is LeMiCi ?" },
    { question: "What is the payment plan ?" },
    { question: "Why LeMiCi is different from others ?" }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  

  const plans = [
    {
      name: 'Enterprise',
      desc: 'Ideal for small projects',
      price: 'FREE',
      features: [
        '1 User access',
        '1 GB cloud space',
        '1 project/month',
        'Basic analytics dashboard',
      ],
      isPopular: false,
    },
    {
      name: 'Starter',
      desc: 'Ideal for small projects',
      price: '₹ 7,888',
      features: [
        '1 User access',
        '5 GB cloud space',
        '1 project/month',
        'Basic analytics dashboard',
        'Free onboarding guide',
      ],
      isPopular: false,
    },
    {
      name: 'Standard',
      desc: 'Ideal for growing projects',
      price: '₹ 22,888',
      features: [
        'Upto 5 user access',
        '50 GB cloud space',
        '5 project/month',
        'Analytics dashboard',
        'Monthly strategy call',
      ],
      isPopular: true, // Highlights this card
    },
    {
      name: 'Plus',
      desc: 'Ideal for scaling business',
      price: '₹ 78,888',
      features: [
        '10 user includes',
        '200 GB cloud space',
        'Unlimited project',
        'Team collaboration tool',
        'API access',
      ],
      isPopular: false,
    },
    {
      name: 'Premium',
      desc: 'Ideal for large enterprise',
      price: '₹ 1,28,888',
      features: [
        'Unlimited user',
        '1 TB+ cloud space',
        '24/7 premium support',
        'Enterprise-level security',
        'Full platform access',
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-[#6D3E93] mb-6 font-space">
            Plans & Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-md leading-relaxed">
            Choose the plan that fits your needs. All plans include essential features to get you started,
            with options to scale as you grow. No hidden fees and the flexibility to change anytime.
          </p>
        </div>

        {/* Category Switcher (Business/Education/Non-Profit) */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#D9D9D9] p-1 rounded-[16px] inline-flex items-center">
            {['Business', 'Education', 'Non-Profit'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-[16px] text-base font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white text-[#6B2C91] shadow-sm font-bold'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Billing Toggle (Monthly/Yearly) */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-3">
            <span className={`text-base font-bold ${isMonthly ? 'text-black' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsMonthly(!isMonthly)}
              className="relative w-12 h-6 bg-gray-300 rounded-full transition-colors focus:outline-none"
            >
              <span
                className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow transition-transform duration-200 ${
                  !isMonthly ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <p className="text-[#0BA84A] text-sm mt-2 font-medium">
            -15% off on annual payments Try LeMiVerse for 14 days.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`bg-[#14A79D] relative flex flex-col rounded-3xl h-full transition-all duration-300 cursor-pointer ${
                selectedPlan === index
                  ? 'border-6 border-[#14A79D] shadow-lg -mt-4' // Highlight styling when selected
                  : 'border border-gray-200 hover:shadow-md'
              }`}
            >
              {/* Most Popular Badge */}
              {selectedPlan === index && (
                <div className="bg-[#14A79D] text-white text-center py-2 rounded-t-[22px] text-xs font-bold uppercase tracking-wider -m-[2px] mb-0">
                  Most Popular Plan
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow bg-white rounded-t-[22px]">
                {/* Plan Name & Desc */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 
                        className="w-5 h-5 text-[#14B8A6] mr-2 flex-shrink-0" 
                        strokeWidth={2} 
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full bg-[#1a1a1a] hover:bg-gray-800 text-white font-medium py-3 rounded-full transition-colors mt-auto">
                  Start plan
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <section className="py-20 flex items-center justify-center min-h-screen px-4 bg-white flex-col">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#6D3E93] mb-12">
          Compare all Offerings
        </h2>

        {/* Pills Container */}
        {/* flex-wrap: allows items to drop to the next line.
            justify-center: keeps rows centered.
            gap: adds spacing between items.
            max-w-4xl: constrains width to force wrapping similar to image.
        */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-5 max-w-5xl mx-auto">
          {offerings.map((item, index) => (
            // Using buttons for interactivity, could also be divs or links
            <button
              key={index}
              className={`${item.bgColor} text-gray-800 px-6 py-3 rounded-2xl font-medium text-base sm:text-lg hover:opacity-90 transition-opacity duration-200 whitespace-nowrap`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
    <div className="w-full max-w-[82rem] mx-auto bg-white p-6 font-sans">
      {/* Main Header */}
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-black mb-5">
          Productivity and Collaboration
        </h2>
        {/* Top thick divider */}
        <div className="h-[5px] w-full bg-[#D9D9D9] mb-6"></div>
      </div>

      <div className="flex flex-col">
        {sections.map((section, sIndex) => (
          <div className='border-b-2 border-[#EDEDED]' key={section.id}>
            {/* Section Header Row (e.g., eB2B, Startup Zone) */}
            <div className="grid grid-cols-12 gap-4 items-center py-4 border-b-2 border-[#EDEDED]">
              <div className="col-span-4 flex items-center gap-3">
                {/* Icon Container */}
                <div className={`${
                    section.id === 'startup' ? 'text-yellow-500' : 'text-[#6B2C91]'
                  }`}>
                  {typeof section.icon === 'string' ? (
                    <img src={section.icon} alt={section.title} className="w-6 h-6" />
                  ) : (
                    <section.icon className="w-6 h-6" fill={section.id === 'startup' ? 'currentColor' : 'none'} />
                  )}
                </div>
                <h3 className="text-xl font-bold text-black">{section.title}</h3>
              </div>
              
              {/* Status Columns for Header */}
              {section.headerStatus.map((status, i) => (
                <div key={i} className="col-span-2">
                  <StatusIcon active={status} />
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {section.features.map((feature, fIndex) => (
              <div 
                key={`${section.id}-${fIndex}`} 
                className="grid grid-cols-12 gap-4 items-center py-2 border-b-2 border-[#EDEDED] last:border-none"
              >
                {/* Feature Name */}
                <div className="col-span-4 pr-4">
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {feature.name}
                  </p>
                </div>

                {/* Status Columns for Features */}
                {feature.status.map((status, i) => (
                  <div key={i} className="col-span-2">
                    <StatusIcon active={status} />
                  </div>
                ))}
              </div>
            ))}
            
            {/* Add extra separator after each full section except the last one if needed, 
                though the image shows a continuous flow. We rely on the row borders. */}
          </div>
        ))}
      </div>

      {/* See All Link */}
      <div className="mt-8 flex justify-center border-t border-gray-100 pt-8">
        <button className="text-blue-500 font-medium flex items-center gap-1 hover:text-blue-600 transition-colors">
          See All <span className="text-xs">→</span>
        </button>
      </div>
    </div>

     <section className="w-full flex justify-center py-10">
      <div
        className="w-full max-w-[82rem] rounded-3xl overflow-hidden relative h-[400px] md:h-[440px] flex items-center justify-center px-6"
        style={{
          backgroundImage: "url('abhinay/pricingcard.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Try LeMiCi Intelligence
          </h1>

          <p className="text-sm md:text-base opacity-90 leading-relaxed px-2">
            An introduction to AI that simplifies complexity and unlocks smarter decisions.  
            From insights to action—see how AI empowers businesses to do more.
          </p>

          <button className="mt-6 bg-white text-black px-6 py-2 rounded-xl shadow-lg font-medium hover:scale-105 transition">
            Start a trial
          </button>
        </div>
      </div>
    </section>
  <div className="min-h-screen bg-white py-16 px-4 md:px-8 font-sans text-gray-900">
      
      {/* ----------------- Newsletter Section ----------------- */}
      <div className="max-w-2xl mx-auto flex flex-col items-center mb-32">
        <h2 className="text-4xl font-bold text-center mb-8">
          Sign up for the LeMiCi’s newsletter
        </h2>

        {/* Form Container */}
        <div className="w-full space-y-4 px-32">
          
          {/* Email Input */}
          <div className="w-full">
            <input 
              type="email" 
              placeholder="Enter your email*" 
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-500"
            />
          </div>

          {/* Region Dropdown (Styled to match image) */}
          <div className="w-full border border-gray-200 rounded-lg px-4 py-2 bg-white flex justify-between items-center cursor-pointer hover:border-gray-300">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-medium">Region</span>
              <span className="text-sm text-gray-800">India</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>

          {/* Checkbox & Privacy */}
          <div className="flex items-start gap-3 mt-4">
            <input 
              type="checkbox" 
              className="mt-1 w-4 h-4 border-gray-300 rounded text-purple-600 focus:ring-purple-500"
            />
            <p className="text-[11px] text-gray-500 leading-tight">
              Also sign up for emails with news, products updates, events information, special offers and more.
              <br />
              I understand that my personal data will be processed in according with LeMiCi's <a href="#" className="text-blue-400 hover:underline">Privacy Policy.</a>
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-[#6B3FA0] text-white font-medium py-2.5 px-10 rounded-lg hover:bg-[#5a3485] transition-colors shadow-sm text-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* ----------------- FAQ Section ----------------- */}
      <div className="max-w-6xl mx-auto border-t border-transparent"> 
        {/* Using a grid to split the Title and the Accordion list */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Left Side: Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Top questions <br />
              about LeMiCi AI <br />
              Pricing
            </h2>
          </div>

          {/* Right Side: Accordion */}
          <div className="mt-4 md:mt-0">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b-2 border-[#D9D9D9] mb-5"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="text-lg text-gray-700 font-medium group-hover:text-black transition-colors mb-2">
                    {faq.question}
                  </span>
                  {/* <ChevronDown 
                    className={`w-5 h-5 text-black transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  /> */}
                  <img src="/abhinay/ythger.png" alt="" />
                </button>
                
                {/* Expandable Content (Placeholder) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 text-sm pr-8">
                    Here is the detailed answer for {faq.question}. It explains the specifics of the pricing plan or feature in question.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
    </div>
  );
};

export default Pricing;
 


