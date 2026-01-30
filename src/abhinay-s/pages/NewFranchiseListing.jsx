import React, { useEffect, useState } from "react";
import { IKImage } from "imagekitio-react";
import { MdVerified } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { fetchFranchiseListing } from "../lib/api";
import Hero from "./Hero";
import FeaturedFranchiseCategories from "./FeaturedFranchiseCategories";
import CategoryQuestions from "./CategoryQuestions";
import RecommendedFranchises from "./RecommendedFranchises";
import toast, { Toaster } from "react-hot-toast";


const Fcard = ({
  location = "",
  title = "",
  since = "",
  logoUrl = "https://via.placeholder.com/60",
  description = "",
  rating = 4,
  tags = [],
  stats = { space: "", outlets: "", investment: "" },
  highlights = "",
  verified = false,
  ctaText = "Send Inquiry",
  c = "",
  slug = "",
  onClick,
}) => {
  const fullStars = Math.max(0, Math.min(5, Math.round(rating)));
  const stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
  const isAbsoluteLogo =
  typeof logoUrl === "string" &&
  /^(https?:\/\/|\/\/)/.test(logoUrl);


  const handleCopyUrl = (e) => {
    e.stopPropagation();
    const url = `${window.location.origin}/newFranchise1/${slug || 'listing'}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Listing url copied");
    }).catch(() => {
      toast.error("Failed to copy URL");
    });
  };

  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
       <div
      onClick={onClick}
      className={`w-full max-w-[26rem] rounded-3xl p-4 shadow-md cursor-pointer`}
       style={{
        background: `linear-gradient(to bottom, ${c}, #ffffff)`
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 my-4 h-16">
         <IKImage
              path={logoUrl}
              alt={title}
              className="w-14 h-14 rounded-lg object-cover"
              loading="lazy"
            />

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h2 className="font-semibold text-lg text-black">{title}</h2>
            {verified && <MdVerified className="text-blue-500 text-lg" />}
          </div>

          <p className="text-sm text-gray-700">
            {since && `Since ${since}`} {location}
          </p>
        </div>

        {/* Rating */}
        <div className="h-full mt-6 ml-auto flex items-start gap-1 text-sm font-medium">
          <IKImage 
            path="FranchiseHomePage/star-rating.png" 
            alt="rating"
            className="w-4 h-4"
            loading="lazy"
          />
          <span className="text-gray-700">{rating}</span>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="mt-4 text-gray-700 text-sm leading-5 px-3 mb-4 line-clamp-4 h-20">
          {description}
        </p>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2 mt-4 h-24 overflow-hidden">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 text-center mt-8 h-24">
        <div className="flex flex-col items-center gap-1">
          <IKImage
            path="FranchiseHomePage/space.png"
            alt="space"
            className="h-6 w-6"
            loading="lazy"
          />
          <p className="text-xs text-gray-500">Space</p>
          <p className="text-sm font-semibold">{stats.space || "-"}</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <IKImage
            path="FranchiseHomePage/riil.png"
            alt="outlets"
            className="h-6 w-6"
            loading="lazy"
          />
          <p className="text-xs text-gray-500">No. of outlets</p>
          <p className="text-sm font-semibold">{stats.outlets || "-"}</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <IKImage
            path="FranchiseHomePage/rupee.png"
            alt="investment"
            className="h-6 w-6"
            loading="lazy"
          />
          <p className="text-xs text-gray-500">Investment</p>
          <p className="text-sm font-semibold">{stats.investment || "-"}</p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div 
        onClick={(e) => e.stopPropagation()}
      className="mt-6 mb-3 bg-white/30 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between border border-white/50">
        <button className="cursor-pointer p-2">
          <IKImage path="FranchiseHomePage/d1.png" className="w-5 h-5" alt="action" loading="lazy" />
        </button>
        <button className="cursor-pointer p-2">
          <IKImage path="FranchiseHomePage/d2.png" className="w-5 h-5" alt="action" loading="lazy" />
        </button>
        <button className="cursor-pointer p-2" onClick={handleCopyUrl}>
          <IKImage path="FranchiseHomePage/d3.png" className="w-5 h-5" alt="action" loading="lazy" />
        </button>
        <button className="cursor-pointer bg-blue-600 p-2 rounded-full">
          <IKImage path="FranchiseHomePage/d4.png" className="w-5 h-5" alt="action" loading="lazy" />
        </button>
      </div>
    </div>
  );
}

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
                  : "/franchise/details/:id"
              )
            }
          />
        ))}
      </div>
    </div>
  );
};
const formatRange = (min, max, unit) => {
  if (!min || !max) return "";
  return `${min}-${max} ${unit}`;
};
const mapFranchiseListingToCard = (items = []) => {
    
  if (!Array.isArray(items)) return [];

  return items.map((item) => ({
    // 🔑 BACKEND → FCARD PROPS MAPPING
      title: item.brand,
      description: item.description,
      location: item.location,
      since: item.year_of_establishment,
      rating: item.rating,
      tags: item.tags || [],
      category:item.category,
      verified: item.tags?.includes("Verified") || true,
      logoUrl: item.logo?.url,
     stats: {
  space: formatRange(
    item.space?.minSpace,
    item.space?.maxSpace,
    item.space?.spaceUnit
  ),
  outlets: item.no_of_outlets,
  investment: formatRange(
    item.investmentRange?.minInvestment,
    item.investmentRange?.maxInvestment,
    item.investmentRange?.investmentUnit
  ),
},
      c: item.color,
      slug: item.slug,
}));
};


const fCat = { category: "food" };

export default function NewFranchiseListing() {
const [direction, setDirection] = React.useState("");

    const [heroData, setHeroData] = useState(null);
const [franchiseItems, setFranchiseItems] = useState([]);
const [featuredCategories, setFeaturedCategories] = useState([]);
const [categoryQuestions, setCategoryQuestions] = useState([]);
const [recommendedFranchises, setRecommendedFranchises] = useState([]);
const [activeFilters, setActiveFilters] = useState([fCat]);
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
    //   console.log(listingSection.data)

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

  
 
    
  
const [showLocal, setShowLocal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Toaster position="top-right" />
     <section className="relative w-full h-72 sm:h-80 lg:h-[380px] flex items-center text-white bg-[#4A53FA] -mt-24">

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col gap-4 mt-22">
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

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <>
                  {activeFilters.map((filter, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1"
                    >
                      <span>{filter.category}</span>
                      <button
                        onClick={() => setActiveFilters(activeFilters.filter((_, i) => i !== idx))}
                        className="hover:text-blue-900"
                        aria-label="Remove filter"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </>
              )}

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
  title={`Featured ${fCat.category} franchise categories`}
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
          <div className="flex gap-6">
            {/* Left side: Franchise cards */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-1">Recommended Franchise</h2>
              <p className="mb-6 text-gray-600 max-w-2xl">
                Discover top-rated franchises handpicked based on your preferences
                and investment range.
                Explore high-potential food businesses that are expanding fast.
              </p>
              {recommendedFranchises && <RecommendedFranchises data={recommendedFranchises} />}
            </div>

            {/* Right side: Market insights */}
            <div className="w-[350px] border border-[#EDEDED] rounded-xl p-6">
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
