import React from 'react';
// import Navbar from '../../components/SoftwareHuntComponents/CRMComponents/Navbar'; 
import Header from '../../components/SoftwareHuntComponents/AIProductListingComponents/Header';
import Cards from '../../components/SoftwareHuntComponents/AIProductListingComponents/Cards';
import LocalProducts from '../../components/SoftwareHuntComponents/AIProductListingComponents/LocalProducts';
import TypesOfCRM from '../../components/SoftwareHuntComponents/AIProductListingComponents/TypesOfCRM';
import PopularCRM from '../../components/SoftwareHuntComponents/AIProductListingComponents/PopularCRM';
import InfoCardsSection from '../../components/SoftwareHuntComponents/AIProductListingComponents/InfoCardsSection';
import HowWePicked from '../../components/SoftwareHuntComponents/AIProductListingComponents/HowWePicked';

function AIProdListing() {
    return (
        <>
            {/* <Navbar /> */}
            <Header />
            <Cards />
            <LocalProducts />
            <TypesOfCRM />
            <PopularCRM />
            <InfoCardsSection />
            <HowWePicked />
        </>
    )
}

export default AIProdListing;
