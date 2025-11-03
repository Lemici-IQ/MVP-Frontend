import React from "react";
import SchemeCard from "../../components/SchemeCard";
import { useState } from "react";
import {
  ArrowRight,
  Search
  
} from "lucide-react";

import FilterIcon from "../../assets/GovNavigator/Filter.png";
import phone from "../../assets/GovNavigator/phone.jpg";
import AndhraPradesh from "../../assets/GovNavigator/AndhraPradesh.png";
import Core from "../../assets/GovNavigator/Core.jpg";
import Success from "../../assets/GovNavigator/Success.jpg";
import Salutary from "../../assets/GovNavigator/Salutary.jpg";
import Star from "../../assets/GovNavigator/Star.png";


const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const StateTab = ({ name, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`pb-2 text-lg font-medium transition-colors
      ${isActive
        ? 'text-blue-600 border-b-2 border-blue-600'
        : 'text-gray-500 hover:text-gray-800'
      }
    `}
  >
    {name}
  </button>
);

const StatBox = ({ value, label }) => (
  <div 
    className="flex-1 text-center p-4 rounded-lg border-2"
    style={{ borderColor: '#2563EB' }} 
  >
    <h4 className="text-2xl font-bold text-blue-600">{value}</h4>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const ProductCard = ({ icon, title, description, location }) => (
  <div className="flex flex-col items-center text-center p-6 border-2 border-gray-300 rounded-2xl h-full">
    <img src={icon} alt={`${title} logo`} className="w-16 h-16" />
    <h4 className="text-2xl font-semibold mt-4">{title}</h4>
    <div className="flex space-x-1 my-2">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    <p className="text-sm text-gray-600 flex-grow">{description}</p>
    <p className="text-sm text-gray-400 mt-4 mb-6">{location}</p>
    <button className="text-white bg-blue-700 hover:bg-blue-800 px-8 py-3 w-full text-lg font-semibold rounded-full">
      View Product
    </button>
  </div>
);

function SchemesInStates() {
  const [activeState, setActiveState] = useState('Andhra Pradesh');
  
  const states = [
    'Andhra Pradesh', 'Gujarat', 'Karnataka', 'Maharastra', 
    'Telangana', 'Uttar Pradesh', 'Tamil Nadu'
  ];

  const sidebarQuestions = [
    'What is a category franchise in the context of the Golf industry?',
    'Who is the target customer for a Golf franchise in India?',
    'What is the typical business model used by golf franchises?',
    'what are the main services offered in a golf franchise?',
    'What kind of infrastructure or space is required?',
    'What is the expected investment and ROI for a golf franchise?',
    'What kind of training and support does the franchisor provide?',
    'In which locations does a golf franchise work best in India?',
  ];

  const products = [
    {
      icon: Success, 
      title: 'Success.ai',
      description: 'Success.ai | B2B Company & Company Data - 28M Verified | Company Profiles Global | Best Price Guarantee & 98% Data Accuracy',
      location: 'UK, USA, Germany'
    },
    {
      icon: Salutary, 
      title: 'Salutary Data',
      description: 'Company Data | 6.7M+ Total Companies | Company Name, Industry, Employees, Revenue, Website, Address - More',
      location: 'Lexington, USA'
    },
    {
      icon: Core, 
      title: 'CoreSignal',
      description: 'Coresignal | Company Data | Firmographic Data | Global 120M+ Records | Largest Professional Network - Over 4B Total Sources',
      location: 'UK, USA, Germany'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      
      <div className="flex justify-between items-center mb-6 flex-wrap gap-y-4">
        <h2 className="text-4xl font-bold">Schemes in States</h2>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-4 border-b border-gray-200">
        <div className="flex gap-6 flex-wrap">
          {states.map(state => (
            <StateTab
              key={state}
              name={state}
              isActive={activeState === state}
              onClick={() => setActiveState(state)}
            />
          ))}
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search States" 
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        
        <div className="lg:col-span-2 flex flex-col md:flex-row gap-6">
          <img 
            src={AndhraPradesh} 
            alt="Map of Andhra Pradesh" 
            className="w-full md:w-1/3 h-auto object-contain rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-3xl font-bold">Andhra Pradesh</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Andhra Pradesh is the second largest producer of cotton and raw silk in India. The state has a strong textile industry base consisting of handlooms, handicrafts, spinning and processing units. The state has integrated apparel city in Vizag with an innovative concept of 'Fibre to score'. The government is providing a lot of initiatives for the sector such as offering land for the establishment of textile and apparel parks, training programs, etc. The state has a good number of textile industries in the... 
              <a href="#" className="text-blue-600 font-medium ml-1 hover:underline">Read more</a>
            </p>
            <div className="flex gap-4 mt-6">
              <StatBox value="15+" label="Projects Completed" />
              <StatBox value="20+" label="Data Completed" />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4">Understanding Category franchise</h3>
          <div className="space-y-3">
            {sidebarQuestions.map((q, i) => (
              <a href="#" key={i} className="block text-blue-600 text-sm hover:underline">
                {q}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map(product => (
          <ProductCard
            key={product.title}
            icon={product.icon}
            title={product.title}
            description={product.description}
            location={product.location}
          />
        ))}
      </div>

    </div>
  );
}


export default function SchemeListings({ onBack }) {

  const [activesearch, setActivesearch] = useState("All");
  const search = [
    "All",
    "Industry",
    "Sectors",
    "Name",
  ];

  const schemes = [
    {
          country: "India",
          status: "Actively raising",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
          title: "Agri Loan-kisan",
          type: "(Credit card)",
          isVerified: true,
          location: "Delhi",
          ministry: "Ministry of Agriculture",
          description: "Aims to provide farmers with timely and adequate credit to meet their credit needs for cultivation.",
          tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
          stats: [
              { label: "Interest sub", value: "-2%" },
              { label: "Prompt repayment", value: "-3%" },
              { label: "Credit rate", value: "-4%" },
          ],
          info: {
              statesCovered: "24 states covered",
              acceptanceRate: "90% Acceptance",
              grantAmount: "Grant Amount",
              applicationMode: "Application mode online"
          },
          actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
      },
    {
          country: "India",
          status: "Actively raising",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
          title: "Agri Loan-kisan",
          type: "(Credit card)",
          isVerified: true,
          location: "Delhi",
          ministry: "Ministry of Agriculture",
          description: "Aims to provide farmers with timely and adequate credit to meet their credit needs for cultivation.",
          tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
          stats: [
              { label: "Interest sub", value: "-2%" },
              { label: "Prompt repayment", value: "-3%" },
              { label: "Credit rate", value: "-4%" },
          ],
          info: {
              statesCovered: "24 states covered",
              acceptanceRate: "90% Acceptance",
              grantAmount: "Grant Amount",
              applicationMode: "Application mode online"
          },
          actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
      },
    {
          country: "India",
          status: "Actively raising",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
          title: "Agri Loan-kisan",
          type: "(Credit card)",
          isVerified: true,
          location: "Delhi",
          ministry: "Ministry of Agriculture",
          description: "Aims to provide farmers with timely and adequate credit to meet their credit needs for cultivation.",
          tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
          stats: [
              { label: "Interest sub", value: "-2%" },
              { label: "Prompt repayment", value: "-3%" },
              { label: "Credit rate", value: "-4%" },
          ],
          info: {
              statesCovered: "24 states covered",
              acceptanceRate: "90% Acceptance",
              grantAmount: "Grant Amount",
              applicationMode: "Application mode online"
          },
          actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
      },
    {
          country: "India",
          status: "Actively raising",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
          title: "Agri Loan-kisan",
          type: "(Credit card)",
          isVerified: true,
          location: "Delhi",
          ministry: "Ministry of Agriculture",
          description: "Aims to provide farmers with timely and adequate credit to meet their credit needs for cultivation.",
          tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
          stats: [
              { label: "Interest sub", value: "-2%" },
              { label: "Prompt repayment", value: "-3%" },
              { label: "Credit rate", value: "-4%" },
          ],
          info: {
              statesCovered: "24 states covered",
              acceptanceRate: "90% Acceptance",
              grantAmount: "Grant Amount",
              applicationMode: "Application mode online"
          },
          actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
      },
    {
          country: "India",
          status: "Actively raising",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
          title: "Agri Loan-kisan",
          type: "(Credit card)",
          isVerified: true,
          location: "Delhi",
          ministry: "Ministry of Agriculture",
          description: "Aims to provide farmers with timely and adequate credit to meet their credit needs for cultivation.",
          tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
          stats: [
              { label: "Interest sub", value: "-2%" },
              { label: "Prompt repayment", value: "-3%" },
              { label: "Credit rate", value: "-4%" },
          ],
          info: {
              statesCovered: "24 states covered",
              acceptanceRate: "90% Acceptance",
              grantAmount: "Grant Amount",
              applicationMode: "Application mode online"
          },
          actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
      },
    {
          country: "India",
          status: "Actively raising",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/State_emblem_of_India_%28Ashoka_Chakra%29.svg/1200px-State_emblem_of_India_%28Ashoka_Chakra%29.svg.png",
          title: "Agri Loan-kisan",
          type: "(Credit card)",
          isVerified: true,
          location: "Delhi",
          ministry: "Ministry of Agriculture",
          description: "Aims to provide farmers with timely and adequate credit to meet their credit needs for cultivation.",
          tags: ["OBC", "Kisan", "Self employment", "Handicrafts", "Farming", "Rural"],
          stats: [
              { label: "Interest sub", value: "-2%" },
              { label: "Prompt repayment", value: "-3%" },
              { label: "Credit rate", value: "-4%" },
          ],
          info: {
              statesCovered: "24 states covered",
              acceptanceRate: "90% Acceptance",
              grantAmount: "Grant Amount",
              applicationMode: "Application mode online"
          },
          actionButtons: [ "Overview", "Target segments", "How to apply", "Get Early Access", "Who can apply" ],
      }
      
  ];
  



  const categoryPotentials = [
      {
          icon: Success, 
          title: 'Success.ai',
          description: 'Success.ai | B2B Company & Company Data -28M Verified |Company Profiles Global | Best Price Guarantee & 99%| Data Accuracy',
          location: 'UK, USA, Germany '
      },
      {
          icon: Salutary,
          title: 'Salutary Data',
          description: 'Company Data | 6.7M+ Total Companies | Company Name, Industry, Employees, Revenue, Website, Address +More',
          location: 'Lexington, USA'
      },
      {
          icon: Core,
          title: 'Core Signal',
          description: 'Coresignal | Company Data| Firmographic Data | Global 120M+ Records | Largest Professional Network | +9 Other Sources',
          location: 'UK, USA, Germany '
      }
  ];

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="text-left text-white bg-blue-800 p-8">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 px-4 py-2  text-white rounded-lg hover:tranform hover:scale-150 transition-transform"
          >
            ←
          </button>
        )}
        <h1 className="text-[48px] font-bold px-4 " style={{fontFamily:"Space Grotesk"}}>Schemes Listing</h1>
        <p className="text-[16px] max-w-3xl px-4   text-blue-100">
          Company data includes essential details about businesses like name,
          location and industry. Here you’ll find a guide and our selection of
          top company data sources, where you can explore database and compare
          providers.
        </p>
        <div className="mt-6 gap-8  flex px-4">
          
          <input
            type="text"
            className="pl-2 pr-4 bg-white text-sm h-[40px]  min-w-[400px] text-gray-600   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
          />
          <Search className="absolute  rounded-full transform translate-y-[6px] translate-x-2 w-7 h-7 text-gray-400 p-1  " />

          <button className="bg-white text-blue-700 text-[14px] px-4 py-2 rounded-lg font-bold flex items-center gap-2">
            <img src={FilterIcon} alt="" className="w-4 h-4" />
            <span>Add Filter</span>
          </button>

        </div>
         
        {/*Search Tabs*/}

        <div className="flex flex-wrap px-4">
          {search.map((tab)=>(
            <button 
              key={tab}
              onClick={()=>setActivesearch(tab)}
              className={`mt-2 mr-4 px-2 py-1  rounded-lg text-sm  hover:bg-white hover:text-black ${
                activesearch === tab 
                ? 'bg-white text-black' 
                : 'text-white'
              }`}
            >
              {tab}
            </button>
          ))}
          
          
        </div>
      </div>

      <div className="px-20 py-10">
        {/* Schemes Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((s, i) => (
            <SchemeCard key={i} scheme={s} />
          ))}
        </div>

        {/* Leading Provider */}
        <div className="bg-blue-800 text-white mt-16 p-20 rounded-xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1   ">
            <p className="text-[14px] font-semibold text-blue-300 font-[inter]">All India Business Database providers</p>
            <h2 className="text-[64px] font-[inter] font-bold max-w-[60%] mt-2">
              India’s Leading Schemes Provider
            </h2>
            <p className="mt-8 text-[16px] max-w-[65%] font-[inter]  font-500 font-medium text-blue-100">
              We offer the most comprehensive and reliable database solutions to empower 
              businesses across industries. With accurate, updated, and verified data, we help 
              organizations make smarter decisions and reach their target audience effectively. 
              Our robust platform ensures seamless access to vast datasets, tailored to your specific 
              needs. Trusted by top companies nationwide, we drive growth through data-driven 
              insights and precision.
            </p>
          </div>
          <img
            src={phone} // Using a more representative placeholder
            alt="mobile preview"
            className="w-[440px]  h-[360px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Industry Tags */}
        <div className="mt-16">
          <h2 className="text-[48px] font-700 font-semibold mb-4 text-left" style={{fontFamily: "Space Grotesk" }}>Explore by Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 flex flex-wrap  ">
            {[
              "Startups", "Entrepreneurship", "MSMEs", "Manufacturing", "Industry",
              "Agriculture", "Schools", "Education", "Hospitals & Chemist", "Online Retailers",
              "Dealers", "Distributors", "Export Promotion", "Village", "Cities", "States",
              "Textiles", "Importers"
            ].map((t, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-50 text-center border border-gray-200 rounded-full text-[20px] font-[inter] cursor-pointer hover:bg-blue-100 hover:border-blue-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        
        {/*States section*/}
        <SchemesInStates />
        
      </div>
    </div>
  );
}