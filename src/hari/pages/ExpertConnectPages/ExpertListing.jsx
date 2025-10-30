import React from 'react';
import Banner from '../../components/ExpertConnectComponents/ExpertConnectListingComponents/Banner';
import Cards from '../../components/ExpertConnectComponents/ExpertConnectListingComponents/Cards';
import Startups from '../../components/ExpertConnectComponents/ExpertConnectListingComponents/Startups';

function ExpertListing() {
  return (
    <>
      <Banner />
      <Cards />
      <Cards />
      <div className="flex justify-center">
        <button className="bg-[#D9D9D9] p-2 rounded-4xl">
          Startups of the Month
        </button>
      </div>
      <Cards />
      <Startups />
    </>
  )
}

export default ExpertListing;