import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IKImage } from "imagekitio-react";
import { NavLink, useNavigate } from "react-router-dom";
import { FcardGrid } from "./Fcard";
import {
  FaCar,
  FaUserTie,
  FaTruck,
  FaUtensils,
  FaHeartbeat,
  FaBook,
  FaStore,
} from "react-icons/fa";
import { GiScissors } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import Svg from "./Svg";
import LogoRow from "./LogoRow.jsx";
import {
  Bus,
  Search,
  User,
  Eye,
  Filter,
  Settings,
  Menu,
  X,
  Bot,
  UserCircle,
  Minimize2,
  TrendingUp,
  MapPin,
  Users,
  Building,
  Clock,
  Star,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Opp from "./Opp";
import Single from "./Single";
import { Toaster, toast } from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ChartRenderer,
  parseChartData,
  removeChartDataBlocks,
} from "../../../../../components/ChartRenderer";
// import { generateFranchiseAdvice } from '@/lib/ai.js';
import { streamFranchiseAdvice } from "../../../../../lib/ai.js";
import ChatbotSub from "../../../../../utils/ChatbotSub.jsx";
import { getFranchiseData, getFranchiseFlags } from "@/abhinay-s/lib/api";
import PopularListing from "./PopularListing.jsx";
import IndustryPills from "./IndustryPills.jsx";
import ShowStats from "./ShowStats.jsx";
import { fetchFranchiseHome } from "../../../../../lib/api.js";
import TopFranchiseOpportunities from "./TopFranchiseOpportunities.jsx";
import DistributionCategories from "./DistributionCategories.jsx";
import Cities from "./Cities.jsx";
// Insights import was unused; removed to avoid lint warnings
export default function Franchise() {
  //order is so important here

  const categories = [
    { name: "Automobiles", icon: <FaCar /> },
    { name: "Beauty & salon", icon: <GiScissors /> },
    { name: "Business", icon: <FaUserTie /> },
    { name: "Dealers & Distribution", icon: <FaTruck /> },
    { name: "Food", icon: <FaUtensils /> },
    { name: "Health and Wellness", icon: <FaHeartbeat /> },
    { name: "Education", icon: <FaBook /> },
    { name: "Retail", icon: <FaStore /> },
    { name: "Courier Logistics", icon: <MdLocalShipping /> },
  ];

  // Data & flags loaded via centralized API client

  const [data, setData] = useState({
    industries: [],
    cities: [],
    stats: [],
    items: [],
  });
  const [showIndustryPills, setShowIndustryPills] = useState(true);
  const [showcities, setShowCities] = useState(true);
  const [showStats, setShowStats] = useState(true);
  const [popularListing, setPopularListing] = useState(true);




  useEffect(() => {
    const load = async () => {
      try {
        const [dataResp, flags] = await Promise.all([
          getFranchiseData(),
          getFranchiseFlags(),
        ]);

        setData({
          industries: dataResp.industries || [],
          cities: dataResp.cities || [],
          stats: dataResp.stats || [],
          items: dataResp.items || [],
        });

        if (typeof flags.popularListing === "boolean") {
          setPopularListing(flags.popularListing);
        }
        if (typeof flags.showIndustryPills === "boolean") {
          setShowIndustryPills(flags.showIndustryPills);
        }
        if (typeof flags.showStats === "boolean") {
          setShowStats(flags.showStats);
        }
      } catch (err) {
        console.error("Franchise API failed", err);
      }
    };

    load();
  }, []);
  const tabs1 = ["Franchise", "Brand Leasing", "Dealer", "Super Stockist"];
  const [activeTab1, setActiveTab1] = useState("Franchise");
  const [logoRowData, setLogoRowData] = useState(null);
  const [topFranchiseData, setTopFranchiseData] = useState(null);
const [popularListingsnew, setPopularListingsnew] = useState([]);
const [distributionData, setDistributionData] = React.useState(null);
const [citiesData, setCitiesData] = useState(null);
  const [showAll, setShowAll] = useState(false);

useEffect(() => {
  fetchFranchiseHome()
    .then((res) => {
      if (!res.success) return;

      const sections = res.data?.sections || [];

      // HERO
      const heroSection = sections.find((s) => s.type === "hero" && s.enabled);
      if (heroSection) {
        setLogoRowData(heroSection.data);
      }

      // TOP FRANCHISE OPPORTUNITIES
      const topFranchiseSection = sections.find(
        (s) => s.type === "top_franchise_opportunities" && s.enabled
      );
      if (topFranchiseSection) {
        setTopFranchiseData(topFranchiseSection.data);
      }

      // POPULAR LISTINGS
      const popularListingSection = sections.find(
        (s) => s.type === "popular_listings" && s.enabled
      );
      if (popularListingSection) {
        setPopularListingsnew(popularListingSection.data);
      }

      // DISTRIBUTION CATEGORIES
      const distributionSection = sections.find(
        (s) => s.type === "distribution_categories" && s.enabled
      );
      if (distributionSection) {
        setDistributionData(distributionSection.data);
      }

      // CITIES ✅
      const citiesSection = sections.find((s) => s.type === "cities" && s.enabled);
      if (citiesSection) {
        setCitiesData(citiesSection.data);
      }
    })
    .catch((err) => {
      console.error("Error fetching franchise home data:", err);
    });
}, []);



  

  const categoriesp = [
    { label: "Automobiles", icon: "🚗" },
    { label: "Beauty & Salon", icon: "🌸" },
    { label: "Business", icon: "👤" },
    { label: "Food", icon: "🍴" },
    { label: "Health & Wellness", icon: "❤️" },
    { label: "Dealers & Distribution", icon: "🚚" },
    { label: "Education", icon: "🎓" },
    { label: "Retail", icon: "🏬" },
    { label: "Courier Logistics", icon: "📦" },
    { label: "View All", icon: "⋯" },
  ];

  const indust = [
    {
      name: "Restaurant Franchise",
      path: "/FranchiseHomePage/icons/1.svg",
    },
    {
      name: "Business professional",
      path: "/FranchiseHomePage/icons/2.svg",
    },
    {
      name: "Business opportunities",
      path: "/FranchiseHomePage/icons/3.svg",
    },
    {
      name: "Cleaning Franchise",
      path: "/FranchiseHomePage/icons/19.svg",
    },
    {
      name: "Property & Real estate",
      path: "/FranchiseHomePage/icons/17.svg",
    },
    {
      name: "Education franchise",
      path: "/FranchiseHomePage/icons/14.svg",
    },
    {
      name: "Health care franchise",
      path: "/FranchiseHomePage/icons/7.svg",
    },
    {
      name: "Home based franchise",
      path: "/FranchiseHomePage/icons/8.svg",
    },
    {
      name: "Home services franchise",
      path: "/FranchiseHomePage/icons/9.svg",
    },
    {
      name: "Fitness franchise",
      path: "/FranchiseHomePage/icons/10.svg",
    },
    {
      name: "Retail franchise",
      path: "/FranchiseHomePage/icons/11.svg",
    },
    {
      name: "Franchise services provider",
      path: "/FranchiseHomePage/icons/12.svg",
    },
    {
      name: "Pet franchise",
      path: "/FranchiseHomePage/icons/13.svg",
    },
    {
      name: "Health & beauty",
      path: "/FranchiseHomePage/icons/14.svg",
    },
    {
      name: "Fast food franchise",
      path: "/FranchiseHomePage/icons/15.svg",
    },
    {
      name: "Golf franchise",
      path: "/FranchiseHomePage/icons/16.svg",
    },
    {
      name: "Computer & internet",
      path: "/FranchiseHomePage/icons/17.svg",
    },
    {
      name: "Food franchise",
      path: "/FranchiseHomePage/icons/18.svg",
    },
  ];
 
  return (
    <div>
      <div className="w-full px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10">
        <div className="mx-auto text-center">
          <div className="flex flex-col items-center justify-center">
            <h1
              className="mb-3 sm:mb-2 font-bold leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Discover <span className="text-[#4A53FA]">Franchise</span> And{" "}
              <span className="hidden sm:inline">
                <br />
              </span>
              <span className="text-[#4A53FA]">Dealership</span> Opportunities
            </h1>
          </div>

          {/* Tabs1 */}
          <div className="flex gap-3 bg-white p-2 rounded-full w-fit mx-auto text-center mb-3">
            {tabs1.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab1(tab)}
                className={`px-5 py-2 text-sm font-semibold rounded-[16px] transition-all duration-200
            ${
              activeTab1 === tab
                ? "bg-[#4A53FA] text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          {/* <h1>hi</h1> */}
          <ChatbotSub
            placeholder="Ask about franchises (e.g., 'suggest biryani franchise in Ghaziabad with 20% ROI')"
            context="franchise"
          />

          {/* Subtext */}
          <p className="text-sm sm:text-md text-gray-500 mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            Find, Compare, and connect with the best franchise opportunities
            across Industries.
          </p>

          {/* Logo Row */}
          {/* <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3 lg:gap-4 flex-wrap px-2">
            {(() => {
              const logos = ["1", "2", "3", "4", "5", "6", "7", "8", "n"];
              const totalLogos = logos.length;
              const middleIndex = Math.floor(totalLogos / 2);
              return logos.map((logo, i) => {
                const distanceFromMiddle = Math.abs(i - middleIndex);
                // Define sizes based on distance from middle - responsive
                const sizes = {
                  0: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20", // Middle (largest)
                  1: "w-11 h-11 sm:w-14 sm:h-14 lg:w-18 lg:h-18", // Next to middle
                  2: "w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16", // Second from middle
                  3: "w-9 h-9 sm:w-10 sm:h-10 lg:w-14 lg:h-14", // Edges (smallest)
                };
                const sizeClass =
                  sizes[distanceFromMiddle] ||
                  "w-9 h-9 sm:w-10 sm:h-10 lg:w-14 lg:h-14";
                return (
                  <div
                    key={i}
                    className={`${sizeClass} rounded-full bg-white shadow-md flex items-center justify-center p-2 sm:p-3 hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95`}
                  >
                    <IKImage
                      path={`/FranchiseHomePage/${logo}.png`}
                      alt={logo}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                );
              });
            })()}
          </div> */}

          {logoRowData && <LogoRow data={logoRowData} />}
        </div>
      </div>
      
          
        {topFranchiseData && <TopFranchiseOpportunities data={topFranchiseData} />}
      

      {popularListingsnew && (
            <PopularListing data={popularListingsnew} />
            )}


      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">
          Top Categories of Distribution
        </h2>
        <p className="text-gray-500 mt-2">
          From retail to services-explore categories driving India’s next wave
          of business growth.
        </p>

        {/* Content */}
       {distributionData && (
  <DistributionCategories data={distributionData} />
)}

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900">
            Explore by Industry
          </h2>
          <p className="text-gray-500 mt-2">
            Tailored insights across 25+ industries—from food & beverage to
            education and beyond.
          </p>

          {/* Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
            {indust.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2 py-5 px-7 bg-[#EEF0FF] text-sm text-gray-700 rounded-2xl cursor-pointer hover:bg-[#E2E6FF] w-full"
              >
                <IKImage
                  path={item.path}
                  alt={item.name}
                  className="w-6 h-6 object-cover flex-shrink-0"
                  loading="lazy"
                />
                <span className="text-xs leading-tight break-words flex-1">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <p className="text-blue-600 text-sm mt-6 cursor-pointer">
            View All →
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#4A53FA] rounded-2xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12 mb-8">
          {/* Left Content */}
          <div className="max-w-md text-white">
            <h2 className="text-2xl md:text-3xl font-bold">
              Be Your Own Boss Today!
            </h2>
            <p className="text-sm text-white/80 mt-3">
              Step into success with a franchise or dealership. The future of
              business is in your hands.
            </p>

            <button className="mt-5 bg-white text-black px-6 py-2.5 rounded-2xl text-sm font-semibold hover:bg-gray-100 transition">
              Start Exploring
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-6 md:mt-0">
            <IKImage
              path="/FranchiseHomePage/beboss.jpg"
              alt="CTA"
              className="w-[320px] h-[180px] object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
        <IKImage
          path="FranchiseHomePage/4cards.png"
          alt="CTA"
          className="w-full h-auto object-contain rounded-xl mt-16"
          loading="lazy"
        />

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Big Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#5B5FFF] to-[#4A53FA] rounded-2xl p-8 md:p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                How LeMiCi Can Help Your <br /> Business Thrive
              </h2>

              <p className="text-sm md:text-base text-white/90 mt-4 max-w-xl">
                LeMiCi is your one-stop platform for discovering, evaluating,
                and expanding with franchise and dealership opportunities.
                Whether you're a first-time entrepreneur or an established
                business, we make scaling smarter and easier.
              </p>

              <button className="mt-6 bg-white text-black px-6 py-2.5 rounded-2xl text-sm font-semibold hover:bg-gray-100 transition">
                Register for free
              </button>
            </div>

            {/* Right Small Card */}
            <div className=" border border-gray-200 rounded-2xl p-6 flex flex-col justify-between text-center">
              <div>
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <IKImage
                    path="/FranchiseHomePage/eccr.png"
                    alt="CTA"
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  List Your <br />
                  Franchise/Distributorship to <br />
                  Expand Your Reach
                </h3>

                <p className="text-sm text-gray-500 mt-3">
                  Connect with potential buyers and grow your network.
                </p>
              </div>

              <button className="mt-6 bg-[#4F5BFF] text-white py-2.5 rounded-2xl text-sm font-semibold hover:bg-[#3E43E0] transition">
                Register for free
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 mb-20">
        <p className="text-center text-black text-3xl font-bold">
          Why you should choose LeMiCi
        </p>
        <h1 className="text-lg mt-2 text-center text-[#615E63]">
          Explore franchise opportunities across thriving cities !
        </h1>
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 lg:gap-20 mt-6">
          {data.cities.map((city) => (
            <div key={city.id} className="text-center">
              <div className="w-full aspect-square h-32 rounded-[20px] overflow-hidden">
                <IKImage
                  path={`/${city.icon}`}
                  alt={city.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-[#4A53FA] text-sm sm:text-base font-medium mt-2 capitalize">
                {city.label}
              </p>
            </div>
          ))}
        </div> */}
        {citiesData && <Cities data={citiesData} />}

        <div className="w-full flex justify-end">
          <button
            className="border p-2 rounded-xl text-sm border-2 border-gray-300 font-semibold mt-2 hover:underline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            Back to top
          </button>
        </div>
      </div>
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-20 mb-20">
        {/* Show Stats*/}
        {showStats && <ShowStats stats={data.stats} />}
      </div>
      <div className="w-full flex items-center justify-center gap-3 my-8">
        <NavLink
          to="/franchise/oppurtunties"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `px-4 py-2 rounded-full border shadow-sm ${
              isActive
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-700"
            }`
          }
          aria-label="Go to Franchise Opportunities"
        >
          1
        </NavLink>
        <NavLink
          to="/newFranchise1"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `px-4 py-2 rounded-full border shadow-sm ${
              isActive
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-700"
            }`
          }
          aria-label="Go to Franchise Details"
        >
          2
        </NavLink>
        <NavLink
          to="/franchise/category"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `px-4 py-2 rounded-full border shadow-sm ${
              isActive
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-700"
            }`
          }
          aria-label="Go to Business Categories"
        >
          3
        </NavLink>
      </div>
    </div>
  );
}
