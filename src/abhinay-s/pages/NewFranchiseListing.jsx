import React, { useEffect, useState } from "react";

import { MdVerified } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { fetchFranchiseListing } from "../lib/api";
import Hero from "./Hero";
import FeaturedFranchiseCategories from "./FeaturedFranchiseCategories";
import CategoryQuestions from "./CategoryQuestions";
import RecommendedFranchises from "./RecommendedFranchises";

const Fcard = ({
  location = "",
  title = "",
  since = "",
  logoUrl = "https://via.placeholder.com/60",
  description = "",
  rating = 4.5,
  tags = [],
  stats = { space: "", outlets: "", investment: "" },
  verified = true,
  ctaText = "Send Inquiry",
  c = "",
  onClick,
}) => {
  const fullStars = Math.round(rating);

  return (
    <div
  onClick={onClick}
  className="w-full max-w-[26rem] rounded-3xl bg-gradient-to-b from-[#FF444D] to-[#F7BEBF] p-4 shadow-md cursor-pointer"
>

      {/* Header */}
      <div className="flex items-center gap-3 my-4 h-16">
        <img
          src={logoUrl}
          alt={title}
          className="w-12 h-12 rounded-lg object-contain"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h2 className="font-semibold text-lg">{title}</h2>
            {verified && <MdVerified className="text-blue-500 text-lg" />}
          </div>
          <p className="text-sm text-gray-700">
            Since {since} {location}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1 text-yellow-500 font-small">
          ⭐ <span className="text-black">{rating}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700 text-sm leading-5 px-3 mb-4 line-clamp-4 h-20">{description}</p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2 mt-4 h-24 overflow-hidden">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm h-fit"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center mt-8 h-24">
        <div className="flex flex-col items-center gap-1">
            <img className="h-[24px] w-[24px]" src="/abhinay/franchise/space.png" alt="" />

          <p className="text-xs text-gray-500">Space</p>
          <p className="text-sm font-semibold">{stats.space}</p>
        </div>

        <div className="flex flex-col items-center gap-1">
            <img className="h-[24px] w-[24px]" src="/abhinay/franchise/riil.png" alt="" />
          <p className="text-xs text-gray-500">No. of outlets</p>
          <p className="text-sm font-semibold">{stats.outlets}</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img className="h-[24px] w-[24px]" src="/abhinay/franchise/rupee.png" alt="" />
          <p className="text-xs text-gray-500">Investment</p>
          <p className="text-sm font-semibold">{stats.investment}</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 mb-3 bg-white/30 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between border border-white/50">
        <button className="p-2">
          <img src="/abhinay/franchise/d1.png" alt="Settings" className="w-5 h-5" />
        </button>
        <button className="p-2">
          <img src="/abhinay/franchise/d2.png" alt="Bookmark" className="w-5 h-5" />
        </button>
        <button className="p-2">
          <img src="/abhinay/franchise/d3.png" alt="Share" className="w-5 h-5" />
        </button>
        <button className="bg-blue-600 p-2 rounded-full">
          <img src="/abhinay/franchise/d4.png" alt="Next" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const FcardGrid = ({
  items = [],
  className = "px-3 sm:px-6 lg:px-12 xl:px-20 py-6 sm:py-8 lg:py-10",
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
}) => {
  const navigate = useNavigate();

  return (
    <div className={`w-full mx-auto ${className}`}>
      <div className={gridClassName}>
        {items.map((item, idx) => (
          <Fcard
            key={idx}
            {...item}
            onClick={() =>
              navigate(
                item.title === "GolfEdge Academy"
                  ? "/newFranchise2"
                  : "/newFranchise1"
              )
            }
          />
        ))}
      </div>
    </div>
  );
};
const mapFranchiseListingToCard = (items = []) => {
  if (!Array.isArray(items)) return [];

  return items.map((item) => ({
    title: item.brand,
    description: item.description,
    since: item.since,
    location: item.location,
    rating: item.rating,
    tags: item.tags || [],
    logoUrl: item.logo?.url,

    stats: {
      space: item.space,
      outlets: item.no_of_outlets,
      investment: `₹${(item.investmentRange.min / 100000).toFixed(
        1
      )}L - ₹${(item.investmentRange.max / 100000).toFixed(1)}L`,
    },

    slug: item.slug,
    color: item.color,
  }));
};
export default function NewFranchiseListing() {
    const [heroData, setHeroData] = useState(null);
const [franchiseItems, setFranchiseItems] = useState([]);
const [featuredCategories, setFeaturedCategories] = useState([]);
const [categoryQuestions, setCategoryQuestions] = useState([]);
const [recommendedFranchises, setRecommendedFranchises] = useState([]);
useEffect(() => {
  fetchFranchiseListing()
    .then((res) => {
      if (!res?.success) return;

      const sections = res.data?.sections || [];

      // HERO SECTION ✅
      const heroSection = sections.find(
        (section) =>
          section.type === "hero" && section.enabled === true
      );

      if (heroSection) {
        setHeroData(heroSection.data);
      }

      // FRANCHISE LISTING SECTION ✅
      const listingSection = sections.find(
        (section) =>
          section.type === "franchise_listing" &&
          section.enabled === true
      );

      if (listingSection) {
        const mappedData = mapFranchiseListingToCard(
          listingSection.data
        );
        setFranchiseItems(mappedData);
      }


       const featuredSection = sections.find(
        (s) => s.type === "featured_categories" && s.enabled === true
      );

      if (featuredSection) {
        setFeaturedCategories(featuredSection.data);
      }


       const questionSection = sections.find(
      (section) =>
        section.type === "category_questions" &&
        section.enabled === true
    );

    if (questionSection) {
      setCategoryQuestions(questionSection.data?.questions || []);
    }

      const recommendedSection = sections.find(
        (section) =>
          section.type === "recommended_franchises" &&
          section.enabled === true
      );

      if (recommendedSection) {
        setRecommendedFranchises(
          recommendedSection.data?.items || []
        );
      }


    })
    .catch((err) => {
      console.error("Error fetching franchise listing:", err);
    });
}, []);


  const images = [
    "abhinay/franchise/carousel-1.jpg",
    "abhinay/franchise/carousel-2.jpg",
    "abhinay/franchise/carousel-3.jpg",
  ];
  const franchises1 = [
    {
      name: "Wow! Momos",
      category: "Education & Training",
      image: "/abhinay/1f1.png",
    },
    {
      name: "Tea Time",
      category: "Fitness & Wellness",
      image: "/abhinay/2f2.png",
    },
    {
      name: "Amul Ice Cream",
      category: "Salon & Beauty",
      image: "/abhinay/3f3.png",
    },
    {
      name: "Subway",
      category: "Category 4",
      image: "/abhinay/4f4.png",
    },
    {
      name: "Domino’s Pizza",
      category: "Category 5",
      image: "/abhinay/5f5.png",
    },
    {
      name: "Rolfi",
      category: "Category 6",
      image: "/abhinay/6f6.png",
    },
    {
      name: "Zoca Cafe",
      category: "Category 7",
      image: "/abhinay/7f7.png",
    },
    {
      name: "Lassi Corner",
      category: "Category 8",
      image: "/abhinay/8ff8.png",
    },
  ];
  const franchises2 = [
    {
      name: "KidZee",
      category: "Education & Training",
      image: "/abhinay/unif.png",
    },
    {
      name: "Jetts India",
      category: "Fitness & Wellness",
      image: "/abhinay/second.png",
    },
    {
      name: "Lakme Salon",
      category: "Salon & Beauty",
      image: "/abhinay/third.png",
    },
    {
      name: "Carzspa",
      category: "Automotive",
      image: "/abhinay/car.png",
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

  
  const info =
   [
    {
      label: "Initial Investment",
      value: "₹6–18 Lakhs",
      icon: <img src="/abhinay/1a1.png" />,
    },
    {
      label: "Unit as of 2025",
      value: "100+",
      icon: <img src="/abhinay/2a2.png" />,
    },
    {
      label: "Space requirement",
      value: "600–1500 sq. ft.",
      icon: <img src="/abhinay/3b3.png" />,
    },
    {
      label: "Industry",
      value: "Food & Beverage",
      icon: <img src="/abhinay/4c4.png" />,
    },
    {
      label: "Parent company",
      value: "Yum Brand Inc.",
      icon: <img src="/abhinay/5d5.png" />,
    },
    {
      label: "Business type",
      value: "Franchise",
      icon: <img src="/abhinay/6d6.png" />,
    },
    {
      label: "Leadership",
      value: "Tarun Lal, President",
      icon: <img src="/abhinay/7e7.png" />,
    },
    {
      label: "E-mail",
      value: "anurag1990@gmail.com",
      icon: <img src="/abhinay/8f8.png" />,
    },
    {
      label: "Avg. turnover per/month",
      value: "₹2–6 Lakhs",
      icon: <img src="/abhinay/9g9.png" />,
    },
    {
      label: "Franchise Fees",
      value: "₹3 Lakhs",
      icon: <img src="/abhinay/10h.png" />,
    },
    {
      label: "Term duration year",
      value: "5 years",
      icon: <img src="/abhinay/11i.png" />,
    },
    { label: "Royalties", value: "4%", icon: <img src="/abhinay/12j.png" /> },
  ];

    
  
const [showLocal, setShowLocal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <section className="relative w-full h-72 sm:h-80 lg:h-[350px] flex items-center text-white bg-[#4A53FA]">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-4">
          {/* Heading + description */}
           {heroData && <Hero data={heroData} />}

          {/* Search & Filters */}
          <div className="flex items-center gap-3 mt-1 sm:mt-2 flex-wrap">
            {/* Search bar */}
            <div className="flex items-center bg-white rounded-sm px-2 sm:px-3 py-1.5 sm:py-2 w-full sm:w-96">
              <img
                src="/abhinay/franchise/random1a.png"
                className="w-4 h-4"
                alt=""
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Industry, Sector, Brand name"
                aria-label="Search franchises by industry, sector or brand name"
                className="flex-1 outline-none text-black text-sm px-2 bg-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-gray-500 hover:text-red-500 px-2"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Add Filter button */}
            <button className="bg-white flex gap-2 items-center text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition">
              <img
                src="/abhinay/franchise/random1b.png"
                className="w-3 h-3"
                alt=""
              />
              <span className="text-[#4A53FA]">Add Filter</span>
            </button>
          </div>

          {/* Category tags */}
          <div className="flex gap-2 mt-2 text-[11px] sm:text-xs flex-wrap">
            <span className="px-3 py-1 hover:bg-white hover:text-black rounded-lg">
              All
            </span>
            <span className="px-3 py-1 hover:bg-white hover:text-black rounded-lg">
              Industry
            </span>
            <span className="px-3 py-1 hover:bg-white hover:text-black rounded-lg">
              Sector
            </span>
            <span className="px-3 py-1 hover:bg-white hover:text-black rounded-lg">
              Investment
            </span>
            <span className="px-3 py-1 hover:bg-white hover:text-black rounded-lg">
              City
            </span>
          </div>
        </div>

        {/* Toggle Switch - Right Corner */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 text-xs sm:text-sm">
          <span className="hidden sm:inline">Show Local Franchises</span>
          <label
            className="relative inline-flex items-center cursor-pointer"
            aria-label="Toggle local franchises"
          >
            <input
              type="checkbox"
              checked={showLocal}
              onChange={() => setShowLocal((v) => !v)}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-gray-400 peer-checked:bg-blue-500 rounded-full after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:top-0.5 after:left-0.5 after:transition-all peer-checked:after:translate-x-5"></div>
          </label>
        </div>
      </section>

      {franchiseItems && (
  <FcardGrid items={franchiseItems} />
)}

      <div className="max-w-[87rem] mx-auto">
        <div className="w-full px-6 py-10 bg-white">
          <div className="flex gap-6">
            {/* Left side - Franchise grid */}
            {featuredCategories && <FeaturedFranchiseCategories
  title="Featured food franchise categories"
  data={featuredCategories}   // backend mapped data
  showViewMore={true}
/>}
            


            {/* Right side - Insights */}
            {categoryQuestions && (
  <CategoryQuestions data={categoryQuestions} />
)}

          </div>
        </div>

        <div className="w-full px-6 py-10 bg-white">
          <h2 className="text-2xl font-semibold mb-6">Recommended Franchise</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Left side: Franchise cards */}
            {recommendedFranchises && <RecommendedFranchises data={recommendedFranchises} />}
            


            {/* Right side: Market insights */}
            <div className="border border-[#EDEDED] rounded-xl p-6   ">
              <h3 className="text-lg font-bold mb-3">Key Market insights</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-[#268BFF] font-medium">Market Trend</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Golf is evolving from an elite outdoor sport to an
                    accessible indoor entertainment and training experience
                    through simulators and golf lounges.
                  </p>
                </div>
                <div>
                  <p className="text-[#268BFF] font-medium">Growth Rate</p>
                  <p className="text-gray-600 text-sm mt-1">
                    The indoor golf simulator market in India is growing at a
                    CAGR of 17–20%, driven by rising disposable income in
                    premium experiences, and tech adoption.
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
            accountant, and franchise consultant experienced in franchising
            before you commit yourself. It is the user's responsibility to
            verify accuracy and reliability. Please read the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              terms & condition
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
