import React from 'react';
import Navbar from '../../components/SoftwareHuntComponents/SoftwareHuntHomePageComponents/Navbar'; 
import HeroSection from '../../components/SoftwareHuntComponents/SoftwareHuntHomePageComponents/HeroSection';
import ExploreProducts from '../../components/SoftwareHuntComponents/SoftwareHuntHomePageComponents/ExploreProducts';
import Banner from '../../components/SoftwareHuntComponents/SoftwareHuntHomePageComponents/Banner';
import SoftwareShowcase from '../../components/SoftwareHuntComponents/SoftwareHuntHomePageComponents/SoftwareShowcase';
import TalentBanner from '../../components/SoftwareHuntComponents/SoftwareHuntHomePageComponents/TalentBanner';
import StatsAndRegisterSection from '../../components/SoftwareHuntComponents/SoftwareHuntHomePageComponents/StatsAndRegisterSection';
import SoftwareReport from '../../components/SoftwareHuntComponents/SoftwareHuntHomePageComponents/SoftwareReport';

function DataProviderHome() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExploreProducts />
      <Banner />
      <SoftwareShowcase />
      <TalentBanner />
      <StatsAndRegisterSection />
      <SoftwareReport />
    </>
  )
}

export default DataProviderHome;
