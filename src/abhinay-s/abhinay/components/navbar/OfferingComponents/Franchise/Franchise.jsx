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
import axios from "axios";

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
  const dataUrl = "http://localhost:5000";
  const [data, setData] = useState({
    industries: [],
    cities: [],
    stats: [],
    items: [],
  });

  useEffect(() => {
    axios
      .get(`${dataUrl}/api/franchise/data`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

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

          {/* Tabs */}
          <div className="flex justify-start sm:justify-center mt-6 sm:mt-8 gap-2 sm:gap-3 text-xs sm:text-sm mb-4 sm:mb-6 overflow-x-auto scrollbar-hide px-1">
            <button className="flex-shrink-0 px-3 sm:px-4 py-2.5 sm:py-2 rounded-[5px] bg-white text-gray-700 border-2 border-gray-300 font-semibold hover:bg-[#4A53FA] hover:text-white hover:border-[#4A53FA] transition-all duration-200 min-w-fit whitespace-nowrap">
              Franchise
            </button>
            <button className="flex-shrink-0 px-3 sm:px-4 py-2.5 sm:py-2 rounded-[5px] bg-white text-gray-700 border-2 border-gray-300 font-semibold hover:bg-[#4A53FA] hover:text-white hover:border-[#4A53FA] transition-all duration-200 min-w-fit whitespace-nowrap">
              Brand Leasing
            </button>
            <button className="flex-shrink-0 px-3 sm:px-4 py-2.5 sm:py-2 rounded-[5px] bg-white text-gray-700 border-2 border-gray-300 font-semibold hover:bg-[#4A53FA] hover:text-white hover:border-[#4A53FA] transition-all duration-200 min-w-fit whitespace-nowrap">
              Dealer/Distributer
            </button>
          </div>

          {/* Search Bar */}
          {/* <h1>hi</h1> */}
          <ChatbotSub
            placeholder="Ask about franchises (e.g., 'suggest biryani franchise in Ghaziabad with 20% ROI')"
            context="franchise"
          />

          {/* Subtext */}
          <p className="text-sm sm:text-md text-gray-500 mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
            Join a dynamic platform where bold startups meet visionary
            investors. Fuel growth, form partnerships, and shape the
            future—together.
          </p>

          {/* Logo Row */}
          <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3 lg:gap-4 flex-wrap px-2">
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
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto w-fit bg-[#13A3B533] text-center px-6 sm:px-10 lg:px-16 text-sm sm:text-base font-semibold py-2 rounded-[30px]">
          popular listing
        </div>
      </div>
      <div className="w-full px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10 space-y-6 sm:space-y-8">
        <p className="text-center text-xl sm:text-2xl leading-relaxed">
          Explore the top{" "}
          <span className="font-bold"> franchise opportunities </span> and
          discover the ones with
          <span className="hidden sm:inline">
            <br />
          </span>
          the strongest return on investment potential
        </p>
      </div>
      <div className="w-full flex justify-center px-3 sm:px-4">
        <div className="mx-auto w-full sm:w-fit flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          {/* Categories Scrollable Bar */}
          <div className="flex items-center gap-6 sm:gap-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow border overflow-x-auto scrollbar-hide">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-blue-600 cursor-pointer hover:text-blue-800 transition"
              >
                <div className="text-xl sm:text-2xl">{cat.icon}</div>
                <span className="text-[10px] sm:text-xs mt-1 whitespace-nowrap">
                  {cat.name}
                </span>
              </div>
            ))}

            {/* Arrow */}
            <div
              className="ml-2 sm:ml-4 text-blue-600 text-lg sm:text-xl cursor-pointer hover:text-blue-800"
              aria-hidden
            >
              <IoIosArrowForward />
            </div>
          </div>

          {/* Add Filter Button */}
          <button className="flex items-center gap-1 px-4 py-2 border rounded-full text-blue-600 hover:bg-blue-50 transition self-start sm:self-auto">
            <FiFilter />
            <span className="text-sm">Add Filter</span>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto w-fit bg-[#FF6105] text-white text-center px-6 sm:px-10 lg:px-16 text-sm sm:text-base font-semibold py-2 rounded-[30px] mt-10">
          popular listing
        </div>
      </div>
      <FcardGrid
        items={data.items}
        className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 pt-6 sm:pt-8 lg:pt-10 pb-0"
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      />
      <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 mt-16">
        <p className="font-light italic text-2xl sm:text-3xl leading-tight">
          Top Categories of Distribution
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col items-center gap-2">
            <IKImage
              path="/FranchiseHomePage/distribution/1.jpg"
              alt="Food and Beverage"
              className="w-full rounded-[10px] object-cover"
              style={{ aspectRatio: "1 / 1" }}
              loading="lazy"
            />
            <p>Food &amp; Beverage</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IKImage
              path="/FranchiseHomePage/distribution/3.png"
              alt="Pharmaceutical"
              className="w-full rounded-[10px] object-cover"
              style={{ aspectRatio: "1 / 1" }}
              loading="lazy"
            />
            <p>Pharmaceutical</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IKImage
              path="/FranchiseHomePage/distribution/2.jpg"
              alt="Electronic"
              className="w-full rounded-[10px] object-cover"
              style={{ aspectRatio: "1 / 1" }}
              loading="lazy"
            />
            <p>Electronic</p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-semibold mt-16 mb-8">
          Explore by Industry
        </h2>

        {/* Industry Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {data.industries.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 p-2">
                {/* SVG Icon */}
                <IKImage
                  path={`/${String(item.icon).replace(
                    "/abhinay/franchise",
                    ""
                  )}`}
                  alt={item.label}
                  className="w-7 h-7"
                  loading="lazy"
                />
                <span className="text-sm">{item.label}</span>
              </div>
              <X size={16} className="text-gray-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {/* Blue Card */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-700 text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              List Your Franchise/Distributorship
            </h3>
            <p className="mb-4 text-sm">
              Expand Your Reach to Potential Buyers
            </p>
            <button className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100">
              Register for free →
            </button>
          </div>

          {/* Pink/Purple Card */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-700 text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">Start Your Business</h3>
            <p className="mb-4 text-sm">
              Invest with Franchise or Take Distributorship
            </p>
            <button className="bg-white text-pink-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100">
              Get Started →
            </button>
          </div>
        </div>
        <div className="text-white bg-[url('/abhinay/franchise/hlc.svg')] bg-cover bg-center bg-no-repeat h-64 sm:h-60 lg:h-72 mt-7 rounded-2xl flex flex-col justify-between p-6 sm:p-8">
          <p className="w-full sm:w-3/4 lg:w-1/2 text-base sm:text-lg leading-tight">
            looking to expand your franchise or find the perfect franchise{" "}
            <br />
            opportunity ? Franchise is your one-step stop for success We <br />{" "}
            connect franchise with qualified franchise cross various industries.
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
            How LeMiCi Can <br />
            Help Your Business Thrive
          </p>
        </div>
      </div>

      <div className="w-full mt-20 mb-10 flex items-center justify-center px-3 sm:px-4">
        <Svg />
      </div>
      <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-20 mb-20">
        <p className="text-[#4A53FA]">Why you should choose LeMiCi</p>
        <h1 className="text-xl sm:text-2xl mt-2 leading-tight">
          Explore franchise opportunities <br />
          across thriving cities !
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 lg:gap-24 mt-6">
          {data.cities.map((city) => (
            <div key={city.id} className="text-center">
              <div className="w-full aspect-square rounded-[20px] overflow-hidden">
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
        </div>
        <div className="w-full flex justify-end">
          <button
            className="border p-2 rounded-xl text-sm border-2 border-gray-300 font-semibold mt-2 hover:underline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            Back to top
          </button>
        </div>
        <div className="mt-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`shadow p-8 sm:p-10 rounded-xl text-center font-semibold ${
                  idx === 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-600"
                }`}
              >
                <p className="text-xl sm:text-2xl">{stat.value}</p>
                <p className="text-xs sm:text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
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
