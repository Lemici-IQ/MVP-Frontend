import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import {
  FaEnvelope,
  FaIndustry,
  FaUserTie,
  FaBuilding,
  FaMoneyBill,
  FaRupeeSign,
  FaClock,
  FaChartLine,
  FaRulerCombined,
  FaUtensils,
  FaTools,
} from "react-icons/fa";
import Chart from "chart.js/auto";
import { IKImage } from "imagekitio-react";
import { fetchFranchiseDetails } from "../../../../../lib/api";
const IndFranchiseFood = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  // Franchise Details
//   https://ik.imagekit.io/lemiciiq/LeMiCi/menu.png
  const franchiseData = {
    logo: "/FranchiseHomePage/DetailsPageImages/single/ktt.jpg",
    name: "Kathi Junction",
    verified: true,
    year: "2009",
    badges: ["Trusted Seller", "150+ Outlets"],
    description: "Kathi Junction is a prominent Indian quick-service restaurant (QSR) chain specializing in Kathi Rolls, Shawarma, and other Mughlai/Punjabi-inspired fast food. Founded in 2009 by Navneet Sajwan, the brand has rapidly expanded to over 150 outlets across more than 25 states in India.",
    rating: 5,
    likes: 107,
    socialMedia: {
      youtube: "FranchiseHomePage/DetailsPageImages/youtube-logo.png",
      pinterest: "FranchiseHomePage/DetailsPageImages/pintrest-logo.png",
      instagram: "FranchiseHomePage/DetailsPageImages/insta-logo.png",
      twitter: "FranchiseHomePage/DetailsPageImages/x-logo.png",
      facebook: "FranchiseHomePage/DetailsPageImages/facebook-logo.png"
    },
    profileImage: "/FranchiseHomePage/DetailsPageImages/single/nat.jpg",
    industry: "Food & Beverage - Quick Service Restaurant (QSR)",
    headquarters: "Dehradun, Uttarakhand, India",
    parentCompany: "Kathi Junction Foods Private Limited",
    website: "kathijunction.com",
    email: "info@kathijunction.com",
    leadership: "Navneet Sajwan (Founder)",
    gstin: "07AAGCN0838A2ZU"
  };

  useEffect(() => {
    if (chartInstance) chartInstance.destroy();

    const ctx = chartRef.current.getContext("2d");

    chartInstance = new Chart(ctx, {
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

    return () => chartInstance.destroy();
  }, []);
  const [position, setPosition] = React.useState({
    x: window.innerWidth - 100,
    y: 224,
  });
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragOffset, setDragOffset] = React.useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = React.useState('Business Overview');

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);
  
  const franchises1 = [
    {
      name: "Wow! Momos",
      category: "Education & Training",
      image: "/FranchiseHomePage/DetailsPageImages/1f1.png",
    },
    {
      name: "Tea Time",
      category: "Fitness & Wellness",
      image: "/FranchiseHomePage/DetailsPageImages/2f2.png",
    },
    {
      name: "Amul Ice Cream",
      category: "Salon & Beauty",
      image: "/FranchiseHomePage/DetailsPageImages/3f3.png",
    },
    {
      name: "Subway",
      category: "Category 4",
      image: "/FranchiseHomePage/DetailsPageImages/4f4.png",
    },
    {
      name: "Domino’s Pizza",
      category: "Category 5",
      image: "/FranchiseHomePage/DetailsPageImages/5f5.png",
    },
    {
      name: "Rolfi",
      category: "Category 6",
      image: "/FranchiseHomePage/DetailsPageImages/6f6.png",
    },
    {
      name: "Zoca Cafe",
      category: "Category 7",
      image: "/FranchiseHomePage/DetailsPageImages/7f7.png",
    },
    {
      name: "Lassi Corner",
      category: "Category 8",
      image: "/FranchiseHomePage/DetailsPageImages/8ff8.png",
    },
  ];
  const franchises2 = [
    {
      name: "KidZee",
      category: "Education & Training",
      image: "/FranchiseHomePage/DetailsPageImages/unif.png",
    },
    {
      name: "Jetts India",
      category: "Fitness & Wellness",
      image: "/FranchiseHomePage/DetailsPageImages/second.png",
    },
    {
      name: "Lakme Salon",
      category: "Salon & Beauty",
      image: "/FranchiseHomePage/DetailsPageImages/third.png",
    },
    {
      name: "Carzspa",
      category: "Automotive",
      image: "/FranchiseHomePage/DetailsPageImages/car.png",
    },
  ];

  const insights = [
    "What is a category franchise in the context of the Food industry?",
    "Who is the target customer for a Food franchise in India?",
    "What is the typical business model used by Food franchises?",
    "What are the main services offered in a food franchise?",
    "What kind of infrastructure or space is required?",
    "What is the expected investment and ROI for a food franchise?",
    "What kind of training and support does the franchisor provide?",
    "In which locations does a food franchise work best in India?",
  ];
  

  const [franchiseDataBackend, setFranchiseDataBackend] = useState(null);

  useEffect(() => {
    fetchFranchiseDetails()
      .then((res) => {
        setFranchiseDataBackend(res);   // store data in variable (state)
      console.log('a', res);

      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
const rating = franchiseDataBackend?.data?.basicInfo?.rating?.average || 0;

const fullStars = Math.floor(rating);      // 4
const hasHalfStar = rating % 1 !== 0;      // true
const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
const investment =
  franchiseDataBackend?.data?.franchiseOverview?.initialInvestment;

const investmentValue = investment
  ? `₹${investment.min / 100000}–${investment.max / 100000} Lakhs`
  : "-";
const turnover =
  franchiseDataBackend?.data?.franchiseOverview?.avgTurnoverPerMonth;
const turnoverValue = turnover
  ? `₹${turnover.min / 100000}–${turnover.max / 100000} Lakhs`
  : "-";
  const franchiseFees =
  franchiseDataBackend?.data?.franchiseOverview?.franchiseFees;
const franchiseFeesValue = franchiseFees
  ? `₹${franchiseFees.min / 100000}–${franchiseFees.max / 100000} Lakhs`
  : "-";

const info = [
    {
      label: "Initial Investment",
      value: investmentValue,
      icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/1a1.png" />,
    },
    {
      label: "Unit as of 2025",
      value: `${franchiseDataBackend?.data?.franchiseOverview?.numberOfUnits?.total}+ Outlets`,
      icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/2a2.png" />,
    },
    {
      label: "Space requirement",
      value: `${franchiseDataBackend?.data?.franchiseOverview?.spaceRequirement?.min}-${franchiseDataBackend?.data?.franchiseOverview?.spaceRequirement?.max} sq. ft.`,
      icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/3b3.png" />,
    },
    {
      label: "Industry",
      value: franchiseDataBackend?.data?.basicInfo?.category,
      icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/4c4.png" />,
    },
    {
      label: "Parent company",
      value: franchiseDataBackend?.data?.companyInfo?.parentCompany,
      icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/5d5.png" />,
    },
    {
      label: "Business type",
      value: franchiseDataBackend?.data?.companyInfo?.businessType,
      icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/6d6.png" />,
    },
    {
      label: "Leadership",
      value: franchiseDataBackend?.data?.companyInfo?.leadership,
      icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/7e7.png" />,
    },
    {
      label: "E-mail",
      value: franchiseDataBackend?.data?.companyInfo?.email,
      icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/8f8.png" />,
    },
    {
  label: "Avg. turnover per/month",
  value: turnoverValue,
  icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/9g9.png" />,
},
    {
  label: "Franchise Fees",
  value: franchiseFeesValue,
  icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/10h.png" />,
},
    {
      label: "Payback Period",
      value: `${franchiseDataBackend?.data?.franchiseOverview?.paybackPeriod?.min}–${franchiseDataBackend?.data?.franchiseOverview?.paybackPeriod?.max} months`,
      icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/11i.png" />,
    },
    { label: "Royalties", value: franchiseDataBackend?.data?.franchiseOverview?.royalties?.percentage, icon: <IKImage path="/FranchiseHomePage/DetailsPageImages/12j.png" /> },
  ];
  return (
    <div className="max-w-7xl mx-auto p-4">
       {/* Top Card */}
      <div className="ml-2">
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer"
          >
            <IKImage path="/FranchiseHomePage/DetailsPageImages/backer.png" alt="" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </button>
        </div>
      {/* Top Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 relative mt-2">
        {/* Action Icons - Top Right */}
        <div className="absolute top-6 right-6 flex items-center space-x-3">
          <IKImage
            path="FranchiseHomePage/DetailsPageImages/share.png"
            alt="Share"
            className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
          />
          <IKImage
            path="FranchiseHomePage/DetailsPageImages/book.png"
            alt="Book"
            className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
          />
          <IKImage
            path="FranchiseHomePage/DetailsPageImages/menu.png"
            alt="Menu"
            className="w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-6 w-full">
          {/* Left Section */}
          <div className="flex flex-col items-start space-x-4">
            <div className="flex">
              <IKImage
                path={franchiseDataBackend?.data?.basicInfo?.logo.url}
                alt={`${franchiseData.name} Logo`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="">
                <div className="flex items-center space-x-1 flex-wrap">
                  <h2 className="text-2xl font-bold">{franchiseDataBackend?.data?.basicInfo?.brand}</h2>
                  {franchiseData.verified && (
                    <img src="/FranchiseHomePage/DetailsPageImages/blue-tick.svg" alt="" className="w-4" />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">
                    {franchiseDataBackend?.data?.basicInfo?.since}
                  </span>
                  {franchiseData.badges.map((badge, index) => (
                    <span key={index} className="bg-gray-100 px-2 py-0.5 rounded">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-700 mt-3 text-sm md:text-base max-w-2xl">
                {franchiseDataBackend?.data?.basicInfo?.description}
              </p>
              <div className="flex flex-wrap space-x-3 mt-4">
                <button className="bg-[#4A53FA] text-white px-12 py-3 rounded-[25px] hover:bg-indigo-700 w-full sm:w-auto">
                  Follow
                </button>
                <button className="bg-gray-100 text-gray-800 px-12 py-3 rounded-[25px] font-medium hover:bg-gray-200 w-full sm:w-auto">
                  Enquiry
                </button>
              </div>
              <div className="flex items-center mt-3 space-x-1 text-yellow-500">
  {/* Full stars */}
  {[...Array(fullStars)].map((_, i) => (
    <span key={`full-${i}`}>★</span>
  ))}

  {/* Half star */}
  {hasHalfStar && (
    <span className="relative inline-block">
      <span className="text-gray-300">★</span>
      <span className="absolute top-0 left-0 overflow-hidden" style={{width: '50%'}}>
        <span>★</span>
      </span>
    </span>
  )}

  {/* Empty stars */}
  {[...Array(emptyStars)].map((_, i) => (
    <span key={`empty-${i}`} className="text-gray-300">★</span>
  ))}
                <span className="text-gray-600 text-sm ml-2">{franchiseDataBackend?.data?.basicInfo?.rating?.count || franchiseData.likes} likes</span>

</div>

              
            </div>
          </div>
        </div>

        {/* Social Media Icons - Bottom Right */}
        <div className="absolute bottom-6 right-6">
          <div className="flex items-center space-x-3 text-xl text-gray-600">
            <IKImage path={franchiseData.socialMedia.youtube } alt="" className="w-5 h-5" />
            <IKImage path={franchiseData.socialMedia.pinterest} alt="" className="w-5 h-5" />
            <IKImage path={franchiseData.socialMedia.instagram } alt="" className="w-5 h-5" />
            <IKImage path={franchiseData.socialMedia.twitter } alt="" className="w-5 h-5" />
            <IKImage path={franchiseData.socialMedia.facebook } alt="" className="w-5 h-5" />
          </div>
        </div>

        {/* Floating Profile Image */}
        <div
          className="fixed z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="relative">
            <IKImage
              path={franchiseData.profileImage}
              alt="Profile"
              className="w-14 h-14 rounded-full border-2 border-gray-300 shadow-lg hover:scale-110 transition-transform select-none"
              draggable="false"
            />
            <IKImage 
              className="w-6 h-6 rounded-full absolute -bottom-0.5 -right-0.5 bg-white border border-gray-200" 
              path="/FranchiseHomePage/DetailsPageImages/caller.png" 
              alt="" 
            />
          </div>
        </div>
      </div>

      {/* Image Scroll Section */}
      <div className="relative overflow-hidden py-3">
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll {
              display: flex;
              animation: scroll 20s linear infinite;
            }
            
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        <div className="flex space-x-4 animate-scroll mt-8">
  {(
    franchiseDataBackend?.data?.gallery
      ? [...franchiseDataBackend.data.gallery, ...franchiseDataBackend.data.gallery]
      : []
  ).map((img, idx) => (
    <div
      key={idx}
      className="shrink-0 w-80 sm:w-[410px] h-52 sm:h-60 rounded-xl overflow-hidden shadow-md"
    >
      <IKImage
        path={typeof img === "string" ? img : img.url}
        alt={typeof img === "string" ? `kathi ${idx + 1}` : img.alt || `kathi ${idx + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Franchising overview
        </h2>
        <p className="text-gray-500 text-center mt-1 mb-6 text-sm sm:text-base">
          An Overview of Franchise Systems and Operations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {info.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-7 py-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition duration-300"
            >
              <div className="">
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-indigo-600 font-medium text-base sm:text-lg">
                  {item.value}
                </p>
              </div>
              <div className="text-gray-400 text-lg">{item.icon}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="text-indigo-500 font-medium hover:underline">
            View more →
          </button>
        </div>
      </div>

      <div className="w-full rounded-3xl p-8 flex flex-col">
        {/* Header Tabs */}
        <div className="flex text-xl font-semibold text-gray-700">
          {['Business Overview','Investment requirement','Operation'].map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={
                `relative px-6 py-3 rounded-t-lg transition-all w-1/3 ` +
                (activeTab === tab 
                  ? 'bg-blue-50 text-[#268BFF]' 
                  : 'text-gray-600 hover:text-blue-500 bg-white hover:bg-gray-50')
              }
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-blue-50 p-6 rounded-lg">
          {/* Left Section */}
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-lg font-bold">Products</h2>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
                {franchiseDataBackend?.data?.productsAndServices?.productRange?.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold">Services</h2>
              <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700">
                {franchiseDataBackend?.data?.productsAndServices?.services?.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-8">
            <h2 className="text-lg font-bold">Training & Support</h2>
            <p className="text-gray-700 leading-relaxed">
              We provide complete training and ongoing support to help our
              franchise partners succeed. From operational guidance and
              marketing assistance to technology setup and staff training, our
              team ensures you have the knowledge and tools to run your
              franchise efficiently and confidently.
            </p>

            {/* Chart.js Canvas */}
            <div className="bg-white rounded-2xl shadow p-6 w-full h-[20rem]">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
      {/*
       */}
      <div className="w-full px-6 py-10 bg-white">
        <div className="flex gap-6">
          {/* Left side - Franchise grid */}
          <div className="w-[80%]">
            <h2 className="text-2xl font-semibold mb-6">
              Featured food franchise categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {franchises1.map((item, index) => (
                <div>
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
                  >
                    <IKImage
                      path={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="text-center p-2">
                    <p className="font-medium text-gray-800">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* View more link */}
            <div className="mt-4 text-right">
              <a href="#" className="text-blue-600 hover:underline">
                View more →
              </a>
            </div>
          </div>

          {/* Right side - Insights */}
          <div className="border rounded-xl px-4 py-2 bg-gray-50">
            <h3 className="text-2xl font-bold mb-4">
              Understanding Category franchise
            </h3>
            <ul className="space-y-3">
              {insights.map((q, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-[#268BFF] hover:underline text-base leading-relaxed block"
                  >
                    {q}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full px-6 py-10 bg-white">
        <h2 className="text-2xl font-semibold mb-6">Recommended Franchise</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Left side: Franchise cards */}
          <div className="md:col-span-3 overflow-x-auto flex gap-4 pb-2">
            {franchises2.map((item, index) => (
              <div
                key={index}
                className="min-w-[220px] h-full rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition relative group"
              >
                <IKImage
                  path={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-1 pb-2">
                  <h3 className="font-semibold text-white text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1">{item.category}</p>
                  <button className="mt-3 bg-white w-full border-2 border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Market insights */}
          <div className="border border-[#EDEDED] rounded-xl p-6   ">
            <h3 className="text-lg font-bold mb-3">Key Market insights</h3>
            <div className="space-y-3">
              <div>
                <p className="text-[#268BFF] font-medium">Market Trend</p>
                <p className="text-gray-600 text-sm mt-1">
                  Golf is evolving from an elite outdoor sport to an accessible
                  indoor entertainment and training experience through
                  simulators and golf lounges.
                </p>
              </div>
              <div>
                <p className="text-[#268BFF] font-medium">Growth Rate</p>
                <p className="text-gray-600 text-sm mt-1">
                  The indoor golf simulator market in India is growing at a CAGR
                  of 17–20%, driven by rising disposable income in premium
                  experiences, and tech adoption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> LeMiCi IQ is an integrated franchise
          solution company since 2025 and an absolute authority on franchising
          and licensing. FIHL (www.lemici.com) and the site sponsors accept no
          liability for the accuracy of any information contained on this site
          or other linked sites. We recommend you take advice from a lawyer,
          accountant, and franchise consultant experienced in franchising before
          you commit yourself. It is the user's responsibility to verify
          accuracy and reliability. Please read the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            terms & condition
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default IndFranchiseFood;

