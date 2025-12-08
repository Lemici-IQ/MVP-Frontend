import React from 'react';
import Navbar from '../../components/SoftwareHuntComponents/WebDevelopmentComponents/Navbar'; 
import Header from '../../components/SoftwareHuntComponents/WebDevelopmentComponents/Header'; 
import Cards from '../../components/SoftwareHuntComponents/WebDevelopmentComponents/Cards';
import OneStopSection from '../../components/SoftwareHuntComponents/WebDevelopmentComponents/OneStopSection';
import PricingGuide from '../../components/SoftwareHuntComponents/WebDevelopmentComponents/PricingGuide';
import FeaturedStartupCategories from '../../components/SoftwareHuntComponents/WebDevelopmentComponents/FeaturedStartupCategories';
import RecommendedDevelopment from '../../components/SoftwareHuntComponents/WebDevelopmentComponents/RecommendedDevelopment';

function WebDevelopment() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Cards />
      <OneStopSection />
      <PricingGuide />
      <FeaturedStartupCategories />
      <RecommendedDevelopment />
    </>
  )
}

export default WebDevelopment;
