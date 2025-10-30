import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/abhinay/offerings", label: "Offering" },
  { to: "/abhinay/pricings", label: "Pricing" },
  { to: "/abhinay/coming-soon", label: "What we do ?" },
  { to: "/abhinay/coming-soon", label: "Connect" },
  { to: "/abhinay/coming-soon", label: "Resources" },
];

export default function Header(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-[1000] ${props.className || ""}`}
      style={props.style}
    >
      {/* Floating container */}
      <div className="mx-auto max-w-4xl px-3 sm:px-4">
        <div
          className={[
            "mt-3 flex items-center justify-between",
            "rounded-[18px] border backdrop-blur-xl",
            "transition-all duration-300",
            atTop
              ? "bg-[#F0EAF4] border-white/30 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
              : "bg-[#F0EAF4] border-black/5 shadow-[0_6px_30px_rgba(0,0,0,0.10)]",
          ].join(" ")}
        >
          {/* Left: logo */}
          <div className="pl-3 sm:pl-4 py-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/abhinay/lemici-logo.jpg"
                alt="LeMiCi"
                className="h-8 w-auto rounded-md"
                style={{ maxWidth: 120 }}
              />
            </Link>
          </div>

          {/* Center: nav (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-2 rounded-full text-sm font-medium transition ${
                location.pathname === "/"
                  ? "bg-[#6D3E93] text-white"
                  : "text-gray-700 hover:text-[#6D3E93]"
              }`}
            >
              Home
            </Link>
            {navItems.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.label}
                  to={n.to}
                  className={[
                    "px-3 py-2 rounded-full text-sm font-medium transition",
                    active
                      ? "bg-[#6D3E93] text-white"
                      : "text-gray-700 hover:text-[#6D3E93]",
                  ].join(" ")}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA + mobile button */}
          <div className="pr-3 sm:pr-4 py-2 flex items-center gap-2">
            <Link
              to="/abhinay/get-started"
              className="hidden sm:inline-flex items-center rounded-xl bg-[#6D3E93] text-white text-sm font-semibold px-4 py-2 shadow-sm hover:opacity-90 transition"
            >
              Get Started
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-black/5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={[
          "md:hidden fixed inset-x-0 top-[64px] z-[999] px-3 sm:px-4",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2",
          "transition-all duration-200",
        ].join(" ")}
      >
        <div className="rounded-2xl border border-black/5 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="p-2">
            <Link
              to="/"
              className={[
                "block px-4 py-3 rounded-lg text-sm font-medium",
                location.pathname === "/"
                  ? "bg-[#6D3E93] text-white"
                  : "text-gray-800 hover:bg-black/5",
              ].join(" ")}
            >
              Home
            </Link>
            {navItems.map((n) => {
              const active = location.pathname === n.to;
              return (
                <Link
                  key={n.label}
                  to={n.to}
                  className={[
                    "block px-4 py-3 rounded-lg text-sm font-medium",
                    active ? "bg-[#6D3E93] text-white" : "text-gray-800 hover:bg-black/5",
                  ].join(" ")}
                >
                  {n.label}
                </Link>
              );
            })}
            <div className="p-2">
              <Link
                to="/abhinay/get-started"
                className="block w-full text-center rounded-xl bg-[#6D3E93] text-white text-sm font-semibold px-4 py-3"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
