import React from 'react';
import Navbar from '../../components/SoftwareHuntComponents/CRMComponents/Navbar'; 
import Header from '../../components/SoftwareHuntComponents/CRMComponents/Header'; 
import Cards from '../../components/SoftwareHuntComponents/CRMComponents/Cards'; 
import LocalProducts from '../../components/SoftwareHuntComponents/CRMComponents/LocalProducts';
import TypesOfCRM from '../../components/SoftwareHuntComponents/CRMComponents/TypesOfCRM';
import PopularCRM from '../../components/SoftwareHuntComponents/CRMComponents/PopularCRM';
import InfoCardsSection from '../../components/SoftwareHuntComponents/CRMComponents/InfoCardsSection';
import FooterGuideSection from '../../components/SoftwareHuntComponents/CRMComponents/FooterGuideSection';

function CRM() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Cards />
      <LocalProducts />
      <TypesOfCRM />
      <PopularCRM />
      <InfoCardsSection />
      <FooterGuideSection />
    </>
  )
}

export default CRM;
