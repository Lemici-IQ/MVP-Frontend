import { MdVerified } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IKImage } from "imagekitio-react";
import toast from "react-hot-toast";
import { useState } from "react";

// Single franchise card component - accepts dynamic data via props
export default function Fcard({
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
  onClick,
}) {
  const fullStars = Math.max(0, Math.min(5, Math.round(rating)));
  const stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
  const isAbsoluteLogo =
  typeof logoUrl === "string" &&
  /^(https?:\/\/|\/\/)/.test(logoUrl);

  const [showRating, setShowRating] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  const ratingEmojis = [
    
    { emoji: "😞", label: "Very Bad", value: 1 },
    { emoji: "😕", label: "Bad", value: 2 },
    { emoji: "😐", label: "Good", value: 3 },
    { emoji: "🙂", label: "Better", value: 4 },
    { emoji: "😍", label: "Excellent", value: 5 },
  ];

  const handleRatingClick = (e) => {
    e.stopPropagation();
    setShowRating(!showRating);
  };

  const handleEmojiClick = (value) => {
    setSelectedRating(value);
  };

  const handleSubmitRating = (e) => {
    e.stopPropagation();
    if (selectedRating) {
      toast.success(`Rating submitted: ${ratingEmojis[selectedRating - 1].label}!`);
      setShowRating(false);
      setSelectedRating(null);
    } else {
      toast.error("Please select a rating first");
    }
  };

  const handleCopyUrl = (e) => {
    e.stopPropagation();
    const url = "http://localhost:5173/newFranchise1/{franchiseListingId}";
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Listing url copied");
    }).catch(() => {
      toast.error("Failed to copy URL");
    });
  };

  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
      toast.success("Bookmark saved");
    } else {
      toast.success("Bookmark removed");
    }
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
      className="mt-6 mb-3 bg-white/30 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between border border-white/50 relative">
        <div className="relative">
          <button className="p-2" onClick={handleRatingClick}>
            <IKImage path="FranchiseHomePage/d1.png" className="w-5 h-5" alt="action" loading="lazy" />
          </button>
          
          {/* Rating Dropdown */}
          {showRating && (
            <div 
              className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-lg p-4 z-50 border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs text-gray-600 mb-2 font-medium">Rate this franchise</p>
              <div className="flex gap-2 mb-3">
                {ratingEmojis.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleEmojiClick(item.value)}
                    className={`text-2xl transition-all hovr:scale-110 ${
                      selectedRating === item.value ? 'scale-125' : ''
                    }`}
                    title={item.label}
                  >
                    {item.emoji}
                  </button>
                ))}
              </div>
              <button
                onClick={handleSubmitRating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors"
              >
                Submit
              </button>
            </div>
          )}
        </div>
        
        <button className="p-2" onClick={handleBookmark}>
          <IKImage 
            key={isBookmarked ? 'bookmarked' : 'unbookmarked'}
            path={isBookmarked ? "FranchiseHomePage/DetailsPageImages/book.png" : "FranchiseHomePage/d2.png"} 
            className="w-5 h-5 object-contain" 
            alt="action" 
            loading="lazy" 
          />
        </button>
        <button className="p-2" onClick={handleCopyUrl}>
          <IKImage path="FranchiseHomePage/d3.png" className="w-5 h-5" alt="action" loading="lazy" />
        </button>
        <button className="bg-blue-600 p-2 rounded-full">
          <IKImage path="FranchiseHomePage/d4.png" className="w-5 h-5" alt="action" loading="lazy" />
        </button>
      </div>
    </div>
  );
}

// Helper grid to render items in rows of three on large screens
export function FcardGrid({
  items = [],
  className = "px-3 sm:px-6 lg:px-12 xl:px-20 py-6 sm:py-8 lg:py-10",
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
}) {
  const navigate = useNavigate();
  return (
    <div className={`w-full mx-auto ${className}`}>
      <div className={gridClassName}>
        {items.map((item, idx) => (
          <Fcard
            key={idx}
            {...item}
            onClick={() => navigate(item.title == "GolfEdge Academy" ? '/newFranchise2' : '/newFranchise1')}
          />
        ))}
      </div>
    </div>
  );
}




// import { MdVerified } from "react-icons/md";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import { IKImage } from "imagekitio-react";
// import toast from "react-hot-toast";
// import { useState } from "react";

// // Single franchise card component - accepts dynamic data via props
// export default function Fcard({
//   location = "",
//   title = "",
//   since = "",
//   logoUrl = "https://via.placeholder.com/60",
//   description = "",
//   rating = 4,
//   tags = [],
//   stats = { space: "", outlets: "", investment: "" },
//   highlights = "",
//   verified = false,
//   ctaText = "Send Inquiry",
//   c = "",
//   onClick,
// }) {
//   const fullStars = Math.max(0, Math.min(5, Math.round(rating)));
//   const stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
//   const isAbsoluteLogo =
//   typeof logoUrl === "string" &&
//   /^(https?:\/\/|\/\/)/.test(logoUrl);

//   const [showRating, setShowRating] = useState(false);
//   const [selectedRating, setSelectedRating] = useState(null);

//   const ratingEmojis = [
//     { emoji: "FranchiseHomePage/ratings/verybad.jpg", label: "Very Bad", value: 1 },
//     { emoji: "FranchiseHomePage/ratings/bad.png", label: "Bad", value: 2 },
//     { emoji: "FranchiseHomePage/ratings/good.jpg", label: "Good", value: 3 },
//     { emoji: "FranchiseHomePage/ratings/better.jpg", label: "Better", value: 4 },
//     { emoji: "FranchiseHomePage/ratings/excellent.jpg", label: "Excellent", value: 5 },
//   ];

//   const handleRatingClick = (e) => {
//     e.stopPropagation();
//     setShowRating(!showRating);
//   };

//   const handleEmojiClick = (value) => {
//     setSelectedRating(value);
//   };

//   const handleSubmitRating = (e) => {
//     e.stopPropagation();
//     if (selectedRating) {
//       toast.success(`Rating submitted: ${ratingEmojis[selectedRating - 1].label}!`);
//       setShowRating(false);
//       setSelectedRating(null);
//     } else {
//       toast.error("Please select a rating first");
//     }
//   };

//   const handleCopyUrl = (e) => {
//     e.stopPropagation();
//     const url = "http://localhost:5173/newFranchise1/{franchiseListingId}";
//     navigator.clipboard.writeText(url).then(() => {
//       toast.success("Listing url copied");
//     }).catch(() => {
//       toast.error("Failed to copy URL");
//     });
//   };

//   const handleKeyDown = (e) => {
//     if (!onClick) return;
//     if (e.key === 'Enter' || e.key === ' ') {
//       e.preventDefault();
//       onClick();
//     }
//   };

//   return (
//        <div
//       onClick={onClick}
//       className={`w-full max-w-[26rem] rounded-3xl p-4 shadow-md cursor-pointer`}
//        style={{
//         background: `linear-gradient(to bottom, ${c}, #ffffff)`
//       }}
//     >
//       {/* Header */}
//       <div className="flex items-center gap-3 my-4 h-16">
//          <IKImage
//               path={logoUrl}
//               alt={title}
//               className="w-14 h-14 rounded-lg object-cover"
//               loading="lazy"
//             />

//         <div className="flex flex-col">
//           <div className="flex items-center gap-1">
//             <h2 className="font-semibold text-lg text-black">{title}</h2>
//             {verified && <MdVerified className="text-blue-500 text-lg" />}
//           </div>

//           <p className="text-sm text-gray-700">
//             {since && `Since ${since}`} {location}
//           </p>
//         </div>

//         {/* Rating */}
//         <div className="h-full mt-6 ml-auto flex items-start gap-1 text-sm font-medium">
//           <IKImage 
//             path="FranchiseHomePage/star-rating.png" 
//             alt="rating"
//             className="w-4 h-4"
//             loading="lazy"
//           />
//           <span className="text-gray-700">{rating}</span>
//         </div>
//       </div>

//       {/* Description */}
//       {description && (
//         <p className="mt-4 text-gray-700 text-sm leading-5 px-3 mb-4 line-clamp-4 h-20">
//           {description}
//         </p>
//       )}

//       {/* Tags */}
//       {tags.length > 0 && (
//         <div className="mb-4 flex flex-wrap gap-2 mt-4 h-24 overflow-hidden">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-6 py-3 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Stats */}
//       <div className="grid grid-cols-3 text-center mt-8 h-24">
//         <div className="flex flex-col items-center gap-1">
//           <IKImage
//             path="FranchiseHomePage/space.png"
//             alt="space"
//             className="h-6 w-6"
//             loading="lazy"
//           />
//           <p className="text-xs text-gray-500">Space</p>
//           <p className="text-sm font-semibold">{stats.space || "-"}</p>
//         </div>

//         <div className="flex flex-col items-center gap-1">
//           <IKImage
//             path="FranchiseHomePage/riil.png"
//             alt="outlets"
//             className="h-6 w-6"
//             loading="lazy"
//           />
//           <p className="text-xs text-gray-500">No. of outlets</p>
//           <p className="text-sm font-semibold">{stats.outlets || "-"}</p>
//         </div>

//         <div className="flex flex-col items-center gap-1">
//           <IKImage
//             path="FranchiseHomePage/rupee.png"
//             alt="investment"
//             className="h-6 w-6"
//             loading="lazy"
//           />
//           <p className="text-xs text-gray-500">Investment</p>
//           <p className="text-sm font-semibold">{stats.investment || "-"}</p>
//         </div>
//       </div>

//       {/* Bottom Actions */}
//       <div 
//         onClick={(e) => e.stopPropagation()}
//       className="mt-6 mb-3 bg-white/30 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between border border-white/50 relative">
//         <div className="relative">
//           <button className="p-2" onClick={handleRatingClick}>
//             <IKImage path="FranchiseHomePage/d1.png" className="w-5 h-5" alt="action" loading="lazy" />
//           </button>
          
//           {/* Rating Dropdown */}
//           {showRating && (
//             <div 
//               className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-lg p-4 z-50 border border-gray-200"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <p className="text-xs text-gray-600 mb-2 font-medium">Rate this franchise</p>
//               <div className="flex gap-2 mb-3">
//                {ratingEmojis.map((item) => (
//   <button
//     key={item.value}
//     onClick={() => handleEmojiClick(item.value)}
//     className={`transition-all hover:scale-110 flex items-center justify-center ${
//       selectedRating === item.value
//         ? "scale-125 ring-2 ring-blue-500 rounded-lg"
//         : ""
//     }`}
//     title={item.label}
//   >
//     <IKImage
//       path={item.emoji}
//       alt={item.label}
//       className="w-20 h-20"
//       transformation={[{ width: 200, height: 200, quality: 90 }]}
//       loading="lazy"
//     />
//   </button>
// ))}

//               </div>
//               <button
//                 onClick={handleSubmitRating}
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors"
//               >
//                 Submit
//               </button>
//             </div>
//           )}
//         </div>
        
//         <button className="p-2">
//           <IKImage path="FranchiseHomePage/d2.png" className="w-5 h-5" alt="action" loading="lazy" />
//         </button>
//         <button className="p-2" onClick={handleCopyUrl}>
//           <IKImage path="FranchiseHomePage/d3.png" className="w-5 h-5" alt="action" loading="lazy" />
//         </button>
//         <button className="bg-blue-600 p-2 rounded-full">
//           <IKImage path="FranchiseHomePage/d4.png" className="w-5 h-5" alt="action" loading="lazy" />
//         </button>
//       </div>
//     </div>
//   );
// }

// // Helper grid to render items in rows of three on large screens
// export function FcardGrid({
//   items = [],
//   className = "px-3 sm:px-6 lg:px-12 xl:px-20 py-6 sm:py-8 lg:py-10",
//   gridClassName = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
// }) {
//   const navigate = useNavigate();
//   return (
//     <div className={`w-full mx-auto ${className}`}>
//       <div className={gridClassName}>
//         {items.map((item, idx) => (
//           <Fcard
//             key={idx}
//             {...item}
//             onClick={() => navigate(item.title == "GolfEdge Academy" ? '/newFranchise2' : '/newFranchise1')}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
