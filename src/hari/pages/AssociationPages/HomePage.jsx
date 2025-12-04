import React from 'react';
import HeroSection from '../../components/AssociationComponents/AssociationHomePageComponents/HeroSection';
import ExploreProducts from '../../components/AssociationComponents/AssociationHomePageComponents/ExploreProducts';
import FeaturedAssociations from '../../components/AssociationComponents/AssociationHomePageComponents/FeaturedAssociations';
import WhyJoinSection from '../../components/AssociationComponents/AssociationHomePageComponents/WhyJoinSection';
import Banner from '../../components/AssociationComponents/AssociationHomePageComponents/Banner';
import Cities from '../../components/AssociationComponents/AssociationHomePageComponents/Cities';
import Footer from '../../components/AssociationComponents/AssociationHomePageComponents/Footer';

function AssociationHome() {
  return (
    <>
      <HeroSection />
      <ExploreProducts />
      <FeaturedAssociations />
      <WhyJoinSection />
      <Banner />
      <Cities />
      <Footer />
    </>
  )
}

export default AssociationHome;
