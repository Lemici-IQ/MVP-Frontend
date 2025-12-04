import React from 'react';
import Header from '../../components/AssociationComponents/AssociationListingPageComponents/Header';
import Cards from '../../components/AssociationComponents/AssociationListingPageComponents/Cards';
import FunctionsSection from '../../components/AssociationComponents/AssociationListingPageComponents/FunctionsSection';
import ImpactSection from '../../components/AssociationComponents/AssociationListingPageComponents/ImpactSection';
import StateSection from '../../components/AssociationComponents/AssociationListingPageComponents/StateSection';
import FeaturedAssociation from '../../components/AssociationComponents/AssociationListingPageComponents/FeaturedAssociation';
import RecommendedAssociations from '../../components/AssociationComponents/AssociationListingPageComponents/RecommendedAssociations';

function AssociationListing() {
    return (
        <>
            <Header />
            <Cards />
            <FunctionsSection />
            <ImpactSection />
            <StateSection />
            <FeaturedAssociation />
            <RecommendedAssociations />
        </>
    )
}

export default AssociationListing;
