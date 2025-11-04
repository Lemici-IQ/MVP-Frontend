import React from 'react';
import Navbar from '../../components/DataProviderComponents/HomePageComponents/Navbar'; 
import HeroSection from '../../components/DataProviderComponents/HomePageComponents/HeroSection';
import ExploreProducts from '../../components/DataProviderComponents/HomePageComponents/ExploreProducts';
import PopularData from '../../components/DataProviderComponents/HomePageComponents/PopularData ';
import ResearchProfiles from '../../components/DataProviderComponents/HomePageComponents/ResearchProfiles';
import SurveyPlatform from '../../components/DataProviderComponents/HomePageComponents/SurveyPlatform';
import ExploreIndustry from '../../components/DataProviderComponents/HomePageComponents/ExploreIndustry';
import PublishBanner from '../../components/DataProviderComponents/HomePageComponents/PublishBanner';
import ApiIntegration from '../../components/DataProviderComponents/HomePageComponents/ApiIntegrationSection';
import Cities from '../../components/DataProviderComponents/HomePageComponents/Cities';
import FooterSection from '../../components/DataProviderComponents/HomePageComponents/Footer';
 
function DataProviderHome() {
  return (
    <>
      {/* <Navbar />  */}
      <HeroSection />
      <ExploreProducts />
      <PopularData />
      <ResearchProfiles />
      <SurveyPlatform />
      <ExploreIndustry />
      <PublishBanner />
      <ApiIntegration />
      <Cities />
      <FooterSection />
    </>
  )
}

export default DataProviderHome;
