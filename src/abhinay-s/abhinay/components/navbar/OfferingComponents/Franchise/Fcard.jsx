import { MdVerified } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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

  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`w-full rounded-2xl shadow-md p-5 text-gray-900 ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`}
      style={{
        background: `linear-gradient(to bottom, ${c}, #ffffff)`
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      {/* Location */}
      {(location || since) && (
        <div className="flex items-center gap-2 text-xs text-gray-600">
          {location && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
          <span>{location}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt={title}
            className="w-14 h-14 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-1">
              {title}
              {verified && <MdVerified className="text-blue-500" />}
            </h2>
            {since && <p className="text-xs text-gray-500">Since {since}</p>}
          </div>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-gray-700">
          {description}
        </p>
      )}

      {/* Rating */}
      <div className="flex mt-3">
        <span
          className="text-yellow-500 text-base font-medium tracking-wide"
          aria-label={`Rating ${fullStars} out of 5`}
        >
          {stars}
        </span>
      </div>

      {/* Tags */}
      {(verified || (tags && tags.length > 0)) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-white rounded-lg text-xs font-medium text-gray-700 shadow-sm"
            >
              {t}
            </span>
          ))}
          {verified && (
            <span className="px-2.5 py-1 bg-white rounded-lg text-xs font-medium text-gray-700 shadow-sm flex items-center gap-1">
              <MdVerified className="text-blue-500" /> Verified
            </span>
          )}
        </div>
      )}

      {/* Stats Section */}
      {(stats?.space || stats?.outlets || stats?.investment) && (
        <div className="grid grid-cols-3 gap-2 mt-6 text-center text-xs sm:text-sm">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-sm">{stats.space || "—"}</span>
            <span className="text-[11px] text-gray-500">Space</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-sm">{stats.outlets || "—"}</span>
            <span className="text-[11px] text-gray-500">No. of outlets</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-sm">{stats.investment || "—"}</span>
            <span className="text-[11px] text-gray-500">Investment</span>
          </div>
        </div>
      )}

      {/* Footer */}
      {(highlights || description) && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-3">
          {/* Text */}
          <span className="text-xs text-gray-700 w-full sm:flex-1 min-w-0 truncate">
            {highlights || "\u00A0"}
          </span>

          {/* Info Icon */}
          <IoMdInformationCircleOutline className="text-base text-gray-500 flex-shrink-0" />

          {/* CTA Button */}
          <button
            className="w-full sm:w-auto px-4 py-2 bg-[#4A53FA] hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition whitespace-nowrap"
            onClick={(e) => {
              // Prevent outer card click navigation when CTA is pressed
              e.stopPropagation();
            }}
          >
            {ctaText}
          </button>
        </div>
      )}
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
            onClick={() => navigate('/franchise/details')}
          />
        ))}
      </div>
    </div>
  );
}
