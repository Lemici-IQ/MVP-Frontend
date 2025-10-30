import React from 'react';
import Navbar from '../../components/ExpertConnectComponents/HomePageComponents/Navbar';
import HeroSection from '../../components/ExpertConnectComponents/HomePageComponents/HeroSection'; 
import CardSection from '../../components/ExpertConnectComponents/HomePageComponents/CardSection';
import Banner from '../../components/ExpertConnectComponents/HomePageComponents/Banner';
import ConnectSection from '../../components/ExpertConnectComponents/HomePageComponents/ConnectSection';
import FeatureSection from '../../components/ExpertConnectComponents/HomePageComponents/FeatureSection';
import CommunityAndEvents from '../../components/ExpertConnectComponents/HomePageComponents/CommunityAndEvents';
import FooterSection from '../../components/ExpertConnectComponents/HomePageComponents/FooterSection';

function ExpertConnectHome() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection /> 
      <Banner />
      <ConnectSection />
      <FeatureSection />
      <CommunityAndEvents />
      <FooterSection />
    </>
  )
}

export default ExpertConnectHome;