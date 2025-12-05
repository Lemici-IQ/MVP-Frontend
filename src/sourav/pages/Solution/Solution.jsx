import React from 'react';
import { Settings, CalendarCheck, User, ArrowRight } from 'lucide-react';

import a from "../../assets/solution/1.jpg";
import e from "../../assets/solution/5.jpg";
import f from "../../assets/solution/6.jpg";
import g from "../../assets/solution/7.jpg";
import h from "../../assets/solution/8.jpg";
import i from "../../assets/solution/9.jpg";
import j from "../../assets/solution/10.jpg";
import k from "../../assets/solution/11.jpg";
import l from "../../assets/solution/12.jpg";
import m from "../../assets/solution/13.jpg";
import n from "../../assets/solution/14.jpg";
import o from "../../assets/solution/15.jpg";
import p from "../../assets/solution/16.jpg";
import q from "../../assets/solution/17.jpg";
import r from "../../assets/solution/18.jpg";
import s from "../../assets/solution/19.jpg";
import t from "../../assets/solution/20.jpg";
import u from "../../assets/solution/21.png";

const Solution = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Main Container constrained to 1440px */}
      <div className="max-w-[1440px] mx-auto w-full bg-white overflow-hidden">
        
        {/* ================= HERO SECTION ================= */}
        <section className="px-6 py-40 md:px-12 lg:px-20">
          <div className="text-center mb-50">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4"
            style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 800,
                color: "#652C90",
              }}>
              Business Solution
            </h1>
            <p className="text-gray-500 text-sm md:text-sm font-medium">
              Smart Solutions to Help Founders Build, Grow, and Lead
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#652C90] leading-tight">
                Creating value <br /> beyond the hype
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                We bridge the gap between what tech promises and what it delivers. Plan smart. Build right. Grow fast.
              </p>
              <button className="bg-[#652C90]  hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
                Get Started
              </button>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={a} 
                  alt="Modern dark workspace setup" 
                  className="w-full h-[400px] object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= ASSESSMENT TOOL SECTION ================= */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#652C90] ">
              Assessment Tool can be <br className="hidden md:block" /> used for:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Setting Priorities</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our board-ready risk reports are designed to create an effective baseline for setting priorities among the top risks facing the enterprise.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CalendarCheck className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Risk Planning</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Identify the top 10 enterprise risks in aggregate and by primary demographic and get a comprehensive enterprise risk heat map.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Risk Mitigation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reduce the impact of risk by leveraging risk mitigation planning dashboards for the top 10 enterprise risks.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SOLUTIONS BY INDUSTRY ================= */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#652C90]  mb-2">
              Solutions by Industry
            </h2>
            <p className="text-gray-500 text-md">
              Where industry-specific challenges meet smart solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard 
              image={e}
              title="Agriculture"
              desc="Helps food companies, governments, investors, and agriculture players make better pricing, crop selection, and sales and marketing decisions"
            />
            <IndustryCard 
              image={f}
              title="Financial Service"
              desc="Standardized market-sizing database that covers payments products data globally."
            />
            <IndustryCard 
              image={g}
              title="Automotive"
              desc="The LeMiCi Center for Future Mobility brings deep expertise and leading insights to help clients navigate an autonomous, connected, electrified, and shared future."
            />
            <IndustryCard 
              image={h}
              title="Healthcare"
              desc="We empower leaders across the healthcare value chain with data, analytics, and intelligence solutions to improve healthcare."
            />
            <IndustryCard 
              image={i}
              title="Aerospace"
              desc="Helps leaders in the commercial defense sector make fast, informed strategic decisions using the world's most comprehensive U.S. Department of Defense database"
            />
            <IndustryCard 
              image={j}
              title="Electrical Power"
              desc="Improve network reliability and reduce costs with predictive asset maintenance"
            />
            <IndustryCard 
              image={k}
              title="Natural Gas"
              desc="Helps energy companies manage uncertainty and improve performance through analysis, insights, and benchmarking"
            />
            <IndustryCard 
              image={l}
              title="Metal & Mining"
              desc="Provides mine operators strategic business intelligence needed to identify, quantify, and prioritize value creation opportunities"
            />
          </div>
        </section>

        {/* ================= SOLUTIONS BY FUNCTION ================= */}
        <section className="px-6 py-16 md:px-12 lg:px-20 ">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#652C90] mb-2">
              Solutions by Business Function
            </h2>
            <p className="text-gray-500 text-md">
              Where industry-specific challenges meet smart solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard 
              image={m}
              title="Operations"
              desc="Helps food companies, governments, investors, and agriculture players make better pricing, crop selection, and sales and marketing decisions"
            />
            <IndustryCard 
              image={n}
              title="Sustainability"
              desc="Accelerating decarbonization transformations at scale"
            />
            <IndustryCard 
              image={o}
              title="Marketing & Sales"
              desc="Improves return on sales through better pricing, promotions, assortment, and performance management"
            />
            <IndustryCard 
              image={p}
              title="Organisation"
              desc="Applies data and rigor to the most important organizational decisions."
            />
            <IndustryCard 
              image={q}
              title="Digital"
              desc="Watchtower helps leaders and teams proactively identify and address the greatest risks in their technology-project portfolios by leveraging best-in-class analytics."
            />
            <IndustryCard 
              image={r}
              title="Transform"
              desc="Tracks initiatives, milestones, and impact in transformations through a program management platform."
            />
            <IndustryCard 
              image={s}
              title="Risk"
              desc="Advanced solutions for customer assistance and credit loss mitigation"
            />
            <IndustryCard 
              image={t}
              title="Strategy & Corporate Finance"
              desc="Provides fast, sophisticated financial insights through automated benchmarking reports"
            />
          </div>
        </section>

        {/* ================= CAREER CTA ================= */}
        <section className="px-6  md:px-12 lg:px-20">
          <div className="bg-purple-800 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col-[50%_50%] md:flex-row items-center  overflow-hidden relative">
            
            {/* Left Content */}
            <div className="z-10 md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Build Your Career With Us
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-lg">
                Work with a team that values innovation, ownership, and growth. Together, we create solutions that influence industries.
              </p>
              <button className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
                Start Exploring
              </button>
            </div>

            {/* Right Illustration Area */}
            <div className="md:w-1/2 flex justify-center md:justify-end z-10 w-full">
               
               <img 
                 src={u} 
                 alt="Career Illustration" 
                 className="  object-contain drop-shadow-2xl transform -md:translate-x-25 translate-y-16"
               />
            </div>

            {/* Decorative Background Elements (Subtle shapes) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </section>

        <div className="h-12 w-full"></div> 
        {/* Bottom spacing before end of page since footer is omitted */}
      </div>
    </div>
  );
};

// Helper Component for the Grid Cards to ensure exact styling consistency
const IndustryCard = ({ image, title, desc }) => (
  <div className="flex flex-col border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full group">
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-black mb-3">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed flex-grow">
        {desc}
      </p>
    </div>
  </div>
);

export default Solution;