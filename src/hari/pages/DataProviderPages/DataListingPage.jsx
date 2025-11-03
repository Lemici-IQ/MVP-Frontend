import React from 'react';
import Navbar from '../../components/DataProviderComponents/DataListingPageComponents/Navbar'; 
import Header from '../../components/DataProviderComponents/DataListingPageComponents/Header';
import Cards from '../../components/DataProviderComponents/DataListingPageComponents/Cards';
import Banner from '../../components/DataProviderComponents/DataListingPageComponents/Banner';
import ExploreIndustry from '../../components/DataProviderComponents/DataListingPageComponents/ExploreIndustry';
import DataInStates from '../../components/DataProviderComponents/DataListingPageComponents/DataInStates';
import CategoryFranchise from '../../components/DataProviderComponents/DataListingPageComponents/CategoryFranchise';
 
function DataProviderHome() {
  return (
    <>
      <Navbar /> 
      <Header />
      <Cards />
      <Banner />
      <ExploreIndustry />
      <DataInStates />
      <CategoryFranchise />
    </>
  )
}

export default DataProviderHome;
