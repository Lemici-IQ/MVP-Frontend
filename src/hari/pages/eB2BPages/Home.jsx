import React from 'react';
import Navbar from '../../components/eB2BComponents/HomePageComponents/Navbar'; 
import HeroSection from '../../components/eB2BComponents/HomePageComponents/HeroSection'; 
import ExploreProducts from '../../components/eB2BComponents/HomePageComponents/ExploreProducts';
import ExploreSection from '../../components/eB2BComponents/HomePageComponents/ExploreSection';
import Banner from '../../components/eB2BComponents/HomePageComponents/Banners'; 
import City from '../../components/eB2BComponents/HomePageComponents/Cities';
import Footer from '../../components/eB2BComponents/HomePageComponents/Footer';

function eB2BHome() {
  return (
    <>
      <Navbar /> 
      <HeroSection />
      <ExploreProducts />
      <ExploreSection />
      <Banner />
      <City />
      <Footer />
    </>
  )
}

export default eB2BHome;
