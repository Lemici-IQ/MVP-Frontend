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
                  Build and design a survey or form in no time with AI, start
                  from scratch or use one of our 500+ templates.
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
                  Build and design a survey or form in no time with AI, start
                  from scratch or use one of our 500+ templates.
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
                  Build and design a survey or form in no time with AI, start
                  from scratch or use one of our 500+ templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full mt-32">
        {/* Top Purple Section */}
        <div className="relative text-white py-20 text-center px-6 h-[32rem]">
          <img
            src="/abhinay/culturee.jpg"
            alt="Culture Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-extrabold tracking-wide mt-8">
              OUR CULTURE
            </h1>
            <p className="mt-2 font-semibold uppercase tracking-wide">
              Runs Deep
            </p>

            <h2 className="mt-10 text-xl font-semibold">
              Fostering creativity and Innovation.
            </h2>

            <p className="mt-6 max-w-[26rem] mx-auto leading-relaxed text-sm opacity-90">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum
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

      <style>{`
  footer {
    width: 100%;
    background: white;
    padding: 48px 16px;
  }

  .footer-container {
    max-width: 1280px;
    margin: auto;
  }

  /* LOGO + SOCIAL ROW */
  .footer-top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
  }

  @media(min-width: 640px){
    .footer-top {
      flex-direction: row;
      align-items: center;
    }
  }

  .footer-logo-img {
    height: 100px;
    width: 200px;
  }

  .footer-cities {
    font-size: 12px;
    color: #2563eb;
    margin-top: 8px;
  }

  .footer-heading {
    font-size: 30px;
    font-weight: bold;
    margin-top: 16px;
  }

  /* SOCIAL ICONS */
  .social-circle {
    width: 40px;
    height: 40px;
    background: #f3e8ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .social-circle img {
    width: 40px;
    height: 40px;
  }

  .social-flex {
    display: flex;
    gap: 16px;
  }

  /* MAIN GRID */
  .footer-grid {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media(min-width: 768px){
    .footer-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* LEFT BLOCK */
  .newsletter-title {
    color: #622B90;
    font-size: 14px;
    font-weight: 600;
  }

  .newsletter-heading {
    font-size: 20px;
    font-weight: 600;
  }

  .newsletter-label {
    font-weight: 600;
    margin-top: 4px;
  }

  .newsletter-desc {
    font-size: 12px;
    color: #555;
    margin-bottom: 16px;
  }

  .newsletter-input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #EDEDED;
    background: #FFFDFD;
    border-radius: 12px;
    outline: none;
  }

  .newsletter-btn {
    background: #6D3E93;
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 10px;
  }

  @media(min-width: 640px){
    .newsletter-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .newsletter-btn {
      margin-top: 0;
      width: auto;
    }
  }

  .newsletter-btn:hover {
    background: #7a3aa8;
  }

  /* OFFERINGS GRID */
  .footer-col-title {
    font-weight: 600;
    margin-bottom: 16px;
  }

  .footer-link {
    color: #555;
    cursor: pointer;
    transition: 0.3s;
    font-size: 14px;
  }

  .footer-link:hover {
    color: #652C90;
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  /* CONTACT + RESOURCES */
  .footer-small-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  /* COPYRIGHT SECTION */
  .footer-bottom {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 14px;
    color: #555;
  }

  @media(min-width: 768px){
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .footer-links-right {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .footer-links-row {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
 `}</style>

      <footer>
        <div className="footer-container">
          {/* TOP ROW */}
          <div className="footer-top">
            {/* Logo */}
            <div>
              <img
                src="/abhinay/images/llologo.png"
                alt="Logo"
                className="footer-logo-img"
              />

              <p className="footer-cities">
                Bengaluru | Mumbai | Hyderabad | Gurgaon
              </p>

              <h2 className="footer-heading">Don't be a Stranger</h2>
            </div>

            {/* Social Icons */}
            <div className="social-flex">
              <div className="social-circle">
                <img src="/abhinay/images/facebook.png" alt="Facebook" />
              </div>
              <div className="social-circle">
                <img src="/abhinay/images/twitter.png" alt="Twitter" />
              </div>
              <div className="social-circle">
                <img src="/abhinay/images/youtube.png" alt="YouTube" />
              </div>
              <div className="social-circle">
                <img src="/abhinay/images/linkedin.png" alt="LinkedIn" />
              </div>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="footer-grid">
            {/* NEWSLETTER */}
            <div>
              <p className="newsletter-title">Newsletter</p>
              <h3 className="newsletter-heading">Stay in the loop</h3>
              <p className="newsletter-label">Subscribe</p>

              <p className="newsletter-desc">
                Select topics and stay current with our latest insights
              </p>

              <div className="newsletter-row">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Email"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>

            {/* OFFERINGS */}
            <div>
              <h4 className="footer-col-title">Offerings</h4>

              <div className="two-col-grid">
                <div>
                  <p className="footer-link">
                    <a href="/startups-zone" className="footer-link">
                      Startup Zone
                    </a>
                  </p>
                  <p className="footer-link">
                    <a href="/franchise" className="footer-link">
                      Franchise Zone
                    </a>
                  </p>
                  <p className="footer-link">
                    <a href="/software-hunt-home" className="footer-link">
                      Software Hunt
                    </a>
                  </p>
                  <p className="footer-link">
                    <a href="/business-solutions/home" className="footer-link">
                      Business Directory
                    </a>
                  </p>
                </div>

                <div>
                  <p className="footer-link">
                    <a href="/offerings/govtnavigator" className="footer-link">
                      Government Navigator
                    </a>
                  </p>
                  <p className="footer-link">
                    <a href="/research" className="footer-link">
                      Market & Industry Research
                    </a>
                  </p>
                  <p className="footer-link">
                    <a href="/eB2B-home" className="footer-link">
                      eB2B Marketplace
                    </a>
                  </p>
                  <p className="footer-link">
                    <a href="/industrial-solution" className="footer-link">
                      Industry Solution
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT + RESOURCES */}
            <div className="footer-small-grid">
              <div>
                <h4 className="footer-col-title">Contact</h4>
                <p className="footer-link">Contact Us</p>
                <p className="footer-link">Expert</p>
                <p className="footer-link">Office Location</p>
                <p className="footer-link">Technical Support</p>
              </div>

              <div>
                <h4 className="footer-col-title">Resources</h4>
                <p className="footer-link">Featured Insights</p>
                <p className="footer-link">Webinars</p>
                <p className="footer-link">Events</p>
                <p className="footer-link">Client Stories</p>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="footer-bottom">
            <p style={{ width: "45%", lineHeight: "22px" }}>
              Copyright © 2025 LeMiCi. All rights reserved. Empowering Local
              Businesses with Digital Growth.
            </p>

            <div className="footer-links-right">
              <div className="footer-links-row">
                <p className="footer-link">FAQ</p>
                <p className="footer-link">Privacy Policy</p>
                <p className="footer-link">Cookie preferences</p>
                <p className="footer-link">Local Language information</p>
              </div>

              <div className="footer-links-row">
                <p className="footer-link">Term of Use</p>
                <p className="footer-link">Accessibility Statement</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
