import React from 'react';
import CapabilitiesSection from '../../components/CapabilitiesComponents/CapabilitiesSection';
import CapabilitiesTabs from '../../components/CapabilitiesComponents/CapabilitiesTabs';
import AIandTech from '../../components/CapabilitiesComponents/AIandTech';
import Cards from '../../components/CapabilitiesComponents/Cards';
import CareerBanner from '../../components/CapabilitiesComponents/CareerBanner';
import FooterSection from '../../components/CapabilitiesComponents/FooterSection';

function Capabilities() {
  return (
    <>
        <CapabilitiesSection />
        <CapabilitiesTabs />
        <AIandTech />
        <Cards />
        <CareerBanner />
        <FooterSection />
    </>)
}

export default Capabilities;