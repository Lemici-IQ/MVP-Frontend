import React from 'react';
import Navbar from '../../components/ListingWithUsComponents/HomePageComponents/Navbar';
import BusinessOpportunities from '../../components/ListingWithUsComponents/HomePageComponents/BusinessOpportunities';
import SellingCategory from '../../components/ListingWithUsComponents/HomePageComponents/SellingCategory';
import HowItWorks from '../../components/ListingWithUsComponents/HomePageComponents/HowItWorks';
import WhyListWithUs from '../../components/ListingWithUsComponents/HomePageComponents/WhyListWithUs';
import SellingBanner from '../../components/ListingWithUsComponents/HomePageComponents/SellingBanner';
import Footer from '../../components/ListingWithUsComponents/HomePageComponents/Footer';

function ListingWithUsHome() {
  return (
    <>
      {/* <Navbar /> */}
      <BusinessOpportunities />
      <SellingCategory />
      <HowItWorks />
      <WhyListWithUs />
      <SellingBanner />
      <Footer />
    </>
  )
}

export default ListingWithUsHome;