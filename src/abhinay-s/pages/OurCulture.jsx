import React from "react";

export default function OurCulture() {
  return (
    <div className="w-full bg-white py-20 px-4">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Text */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Our Culture
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#6D3E93] leading-snug mb-4">
            <span className="bg-yellow-300 text-black px-1">We Scra</span>tch ,
            Build and <br /> Play together.
          </h2>

          <p className="text-gray-500 text-sm">we are 200+ Highly...</p>
        </div>

        {/* Right Placeholder Box */}
        <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden">
          <img
            src="/abhinay/hangout.jpg"
            alt="Culture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Middle Text */}
      <div className="text-center my-20">
        <p className="text-2xl md:text-3xl font-semibold text-[#6D3E93] leading-relaxed">
          Be Great.
          <br />
          Do Good.
          <br />
          have Fun.
        </p>
      </div>

      {/* Image Row */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <img
          src="abhinay/culture1.jpg"
          alt="img1"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src="abhinay/culture2.jpg"
          alt="img2"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src="abhinay/culture3.jpg"
          alt="img3"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src="abhinay/culture4.jpg"
          alt="img4"
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Timeline Container */}
          <div className="flex-1">
            <div className="relative w-full h-1 bg-gray-200 rounded-full mb-6">
              <div className="absolute left-0 top-0 h-1 bg-[#6D3E93] w-1/4 rounded-full"></div>

              {/* Dots at equal divisions */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#6D3E93] rounded-full"></div>
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>

            <div className="flex justify-between text-gray-400 text-sm font-medium">
              <span className="text-black font-semibold">2019</span>
              <span>2020</span>
              <span>2021</span>
              <span>2022</span>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Careers Link */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="text-[#268BFF] font-medium text-sm hover:underline"
        >
          Careers →
        </a>
      </div>

      {/* Projects Section Heading */}
      <h3 className="text-[#652C90] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 mt-8 sm:mt-12 md:mt-18 px-4">
        Open Communication & Free Culture <br />
        We Cherish Both
      </h3>

      {/* Card Carousel Container */}
      <div className="relative max-w-6xl w-full px-8 sm:px-12 mx-auto">
        <div className="overflow-hidden flex justify-center gap-6">
          {/* Card 1 */}
          <div className="w-[calc(33.333%-1rem)] shrink-0">
            <div className="border border-[#EDEDED] rounded-xl shadow-sm overflow-hidden bg-white aspect-square flex flex-col">
              <div className="h-1/2 w-full">
                <img
                  src="/abhinay/ococ1.jpg"
                  alt="Data Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-1/2 p-4 flex flex-col">
                <p className="text-sm font-bold">
                 Fostering Creativity and <br /> Innvoation.
                </p>

                <p className="text-sm text-[#808080] mt-4">
                    Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[calc(33.333%-1rem)] shrink-0">
            <div className="border border-[#EDEDED] rounded-xl shadow-sm overflow-hidden bg-white aspect-square flex flex-col">
              <div className="h-1/2 w-full">
                <img
                  src="/abhinay/ococ2.jpg"
                  alt="Lens Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-1/2 p-4 flex flex-col">
                         <p className="text-sm font-bold">
                 Fostering Creativity and <br /> Innvoation.
                </p>

                <p className="text-sm text-[#808080] mt-4">
                    Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.
            </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[calc(33.333%-1rem)] shrink-0">
            <div className="border border-[#EDEDED] rounded-xl shadow-sm overflow-hidden bg-white aspect-square flex flex-col">
              <div className="h-1/2 w-ful">
                <img
                  src="/abhinay/ococ3.jpg"
                  alt="Lock Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-1/2 p-4 flex flex-col">
                    <p className="text-sm font-bold">
                 Fostering Creativity and <br /> Innvoation.
                </p>

                <p className="text-sm text-[#808080] mt-4 mb-4">
                    Build and design a survey or form in no time with AI, start from scratch or use one of our 500+ templates.
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>



       <section className="w-full mt-32">
      {/* Top Purple Section */}
      <div className="relative text-white py-20 text-center px-6 h-[32rem]">
        <img src="/abhinay/culturee.jpg" alt="Culture Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold tracking-wide mt-8">OUR CULTURE</h1>
          <p className="mt-2 font-semibold uppercase tracking-wide">Runs Deep</p>

          <h2 className="mt-10 text-xl font-semibold">
            Fostering creativity and Innovation.
          </h2>

          <p className="mt-6 max-w-[26rem] mx-auto leading-relaxed text-sm opacity-90">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum
          </p>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="py-16 px-6 grid grid-cols-2 md:grid-cols-6 gap-6 place-items-center max-w-7xl mx-auto">

        {/* Image 1 */}
        <img
          src="abhinay/clo1.jpg"
          className="rounded-xl object-cover w-50 h-60"
          alt="culture 1"
        />

        {/* Image 2 */}
        <img
          src="abhinay/clo2.jpg"
          className="rounded-xl object-cover w-50 h-60"
          alt="culture 2"
        />

        {/* Image 3 */}
        <img
          src="abhinay/clo3.jpg"
          className="rounded-xl object-cover w-50 h-60"
          alt="culture 3"
        />

        {/* Purple Box with Text */}
        <div className="w-50 h-60 rounded-xl bg-[#6619A494] flex flex-col items-center justify-center text-white text-center p-4">
          <p className="font-semibold">Let’s Unplug</p>
          <p className="font-semibold">and</p>
          <p className="font-semibold">unwind!</p>
        </div>

        {/* Image 4 */}
        <img
          src="abhinay/clo5.jpg"
          className="rounded-xl object-cover w-50 h-60"
          alt="culture 4"
        />
        {/* Image 5 */}
        <img
          src="abhinay/clo5.jpg"
          className="rounded-xl object-cover w-50 h-60"
          alt="culture 4"
        />

      </div>
    </section>

     <footer className="w-full bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Top Row - Logo and Social Icons */}
        <div className="flex justify-between items-center mb-10">
          {/* Left - Logo */}
          <div>
            <img
              src="/abhinay/images/llologo.png"
              alt="Logo"
              className="h-25 w-55"
            />
            <p className="ml-4 text-[10px] text-[#268BFF] mt-2">
              Bengaluru | Mumbai | Hyderabad | Gurgaon
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
              <img src="/abhinay/images/facebook.png" alt="Facebook" className="w-10 h-10 object-contain" />
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
              <img src="/abhinay/images/twitter.png" alt="Twitter" className="w-10 h-10 object-contain" />
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
              <img src="/abhinay/images/youtube.png" alt="YouTube" className="w-10 h-10 object-contain" />
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
              <img src="/abhinay/images/linkedin.png" alt="LinkedIn" className="w-10 h-10 object-contain" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left Section */}
          <div>

            <h2 className="text-3xl font-semibold mb-6">Don’t be a Stranger</h2>

            <p className="text-sm font-semibold text-[#6D3E93]">Newsletter</p>
            <p className="text-lg font-semibold mt-1">Stay in the loop</p>
            <p className="text-sm text-gray-600 mt-1 mb-4">
              Subscribe<br />
              Select topics and stay current with our latest insights
            </p>

            {/* Email Input */}
            <div className="flex gap-2 w-full max-w-sm mt-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-[16px] px-4 py-2 flex-grow outline-none"
              />
              <button className="bg-[#6D3E93] text-white px-6 py-2 rounded-[16px] font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Middle Section - Navigation */}
          <div className="flex gap-16">

            {/* Offerings */}
            <div>
              <h3 className="font-semibold mb-4">Offerings</h3>
              <ul className="text-sm text-[#7B787C] space-y-2">
                <li>Startup Zone</li>
                <li>Franchise Zone</li>
                <li>Software Hunt</li>
                <li>Business Directory</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold mb-4 opacity-0">.</h3>
              <ul className="text-sm text-[#7B787C] space-y-2">
                <li>Government Navigator</li>
                <li>Market & Industry Research</li>
                <li>eB2B Marketplace</li>
                <li>Industry Solution</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="text-sm text-[#7B787C] space-y-2">
                <li>Contact Us</li>
                <li>Expert</li>
                <li>Office Location</li>
                <li>Technical Support</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="text-sm text-[#7B787C] space-y-2">
                <li>Featured Insights</li>
                <li>Webinars</li>
                <li>Events</li>
                <li>Client Stories</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-2 pt-6 text-sm text-gray-600 flex justify-between">
          <p className="mb-4 text-center md:text-left">
            Copyright © 2025 LeMiCi. All rights reserved. Empowering Local <br />
            Businesses with Digital Growth.
          </p>

          <div className="mt-4 font-bold">
            <div className="flex gap-6">
              <span>FAQ</span>
              <span>Privacy Policy</span>
              <span>Cookie preferences</span>
              <span>Local Language information</span>
            </div>
            <div className="flex gap-6 mt-2">
              <span>Term of Use</span>
              <span>Accessibility Statement</span>
            </div>
          </div>
        </div>

      </div>
    </footer>

    </div>
  );
}
