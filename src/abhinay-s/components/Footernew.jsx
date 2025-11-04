import React from "react";
import { Link } from "react-router-dom";

function Icon({ children }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eee6fb] text-[#6b21a8] hover:bg-[#e6defa] transition">
      {children}
    </span>
  );
}

export default function Footernew() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Newsletter */}
          <div className="lg:col-span-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Don't be a Stranger
              </h2>
              <button className="text-sm font-semibold hover:text-gray-900 border-2 border-gray-300 px-4 py-1 rounded-lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                scroll up
              </button>
            </div>

            <div className="mt-6">
              <p className="text-xl font-bold font-large text-[#6D3E93]">Newsletter</p>
              <p className="mt-2 text-gray-500">
                Select topics and stay current with our latest insights
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex max-w-md gap-3"
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#6b21a8] focus:ring-2 focus:ring-[#6b21a8]/20"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-[#6b21a8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5b1c93] transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Socials header and icons */}
          <div className="lg:col-span-6 flex gap-5 items-center lg:items-end">
            <h3 className="text-xl font-medium text-gray-800">
              Follow on Socials
            </h3>
            <div className="mt-4 flex items-center gap-4">
              <Icon>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.21 10.44 22v-7.01H7.9v-2.92h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.76-1.62 1.55v1.86h2.76l-.44 2.92h-2.32V22C18.34 21.21 22 17.1 22 12.07z" />
                </svg>
              </Icon>
              <Icon>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.87-2.35 8.51 8.51 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.31 3.88A12.07 12.07 0 0 1 3.15 4.9a4.25 4.25 0 0 0 1.32 5.66 4.22 4.22 0 0 1-1.92-.53v.05c0 2.06 1.47 3.78 3.42 4.17-.36.1-.75.16-1.15.16-.28 0-.56-.03-.83-.08.56 1.76 2.2 3.04 4.14 3.08A8.53 8.53 0 0 1 2 19.55a12.05 12.05 0 0 0 6.53 1.91c7.84 0 12.12-6.5 12.12-12.12 0-.18 0-.36-.01-.54A8.56 8.56 0 0 0 24 5.5c-.8.36-1.66.6-2.54.7z" />
                </svg>
              </Icon>
              <Icon>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M19.615 3H4.385A1.39 1.39 0 0 0 3 4.385v15.23C3 20.61 3.39 21 4.385 21h15.23C20.61 21 21 20.61 21 19.615V4.385C21 3.39 20.61 3 19.615 3zM8.846 17.077H6.69V10.27h2.155v6.807zM7.768 9.31a1.249 1.249 0 1 1 0-2.498 1.249 1.249 0 0 1 0 2.498zm9.307 7.767h-2.155v-3.567c0-.85-.017-1.944-1.185-1.944-1.186 0-1.368.926-1.368 1.882v3.629h-2.155V10.27h2.07v.93h.03c.288-.546.992-1.124 2.042-1.124 2.184 0 2.588 1.439 2.588 3.311v3.69z" />
                </svg>
              </Icon>
              <Icon>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M10 17l6-5-6-5v10z" />
                </svg>
              </Icon>
              <Icon>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.57c0-1.33-.027-3.043-1.855-3.043-1.857 0-2.14 1.45-2.14 2.948v5.665H9.345V9h3.414v1.561h.048c.476-.9 1.637-1.848 3.369-1.848 3.602 0 4.266 2.371 4.266 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.553v11.452z" />
                </svg>
              </Icon>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-4 space-y-4 ">
              <li><Link to="/aboutus" className="hover:text-gray-900">Contact Us</Link></li>
              <li><Link to="/become-client" className="hover:text-gray-900">Become a client</Link></li>
              <li><Link to="/office-locations" className="hover:text-gray-900">Office Locations</Link></li>
              <li><Link to="/technical-support" className="hover:text-gray-900">Technical Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Careers</h4>
            <ul className="mt-4 space-y-4 ">
              <li><Link to="/coming-soon" className="hover:text-gray-900">Why LeMiCi</Link></li>
              <li><Link to="/coming-soon" className="hover:text-gray-900">Search Careers</Link></li>
              <li><Link to="/coming-soon" className="hover:text-gray-900">Our Culture</Link></li>
              <li><Link to="/coming-soon" className="hover:text-gray-900">Careers Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-4 space-y-4 ">
              <li><Link to="/coming-soon" className="hover:text-gray-900">Featured insights</Link></li>
              <li><Link to="/coming-soon" className="hover:text-gray-900">Webinars</Link></li>
              <li><Link to="/coming-soon" className="hover:text-gray-900">Glossary</Link></li>
              <li><Link to="/coming-soon" className="hover:text-gray-900">Client Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">What we Do</h4>
            <ul className="mt-4 space-y-4 ">
              <li><Link to="/coming-soon" className="hover:text-gray-900">Research & Advisory</Link></li>
              <li><Link to="/coming-soon" className="hover:text-gray-900">Conferences</Link></li>
              <li><Link to="/coming-soon" className="hover:text-gray-900">Consulting</Link></li>
              <li><Link to="/coming-soon" className="hover:text-gray-900">Data</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col">
          <div className="flex flex-row items-center gap-3">
            <img src="/abhinay/lemicic.png" alt="" className="w-36" />
          </div>

          <div className="text-[#268BFF] text-sm flex flex-wrap gap-x-1 gap-y-1">
            <a href="#" className="hover:underline">Bengaluru</a>
            <span className="text-[#268BFF]">|</span>
            <a href="#" className="hover:underline">Mumbai</a>
            <span className="text-[#268BFF]">|</span>
            <a href="#" className="hover:underline">Hyderabad</a>
            <span className="text-[#268BFF]">|</span>
            <a href="#" className="hover:underline">Gurgaon</a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Copyright © 2025 LeMiCi. All rights reserved. Empowering Local Businesses with Digital Growth.
          </p>
        </div>


      </div>
    </footer>
  );
}
