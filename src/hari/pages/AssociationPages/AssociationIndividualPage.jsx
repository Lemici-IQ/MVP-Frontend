import React from 'react';
import FeaturedAssociation from '../../components/AssociationComponents/AssociationIndividualComponents/FeaturedAssociation';
import RecommendedAssociations from '../../components/AssociationComponents/AssociationIndividualComponents/RecommendedAssociations';
import AssociationProfile from '../../components/AssociationComponents/AssociationIndividualComponents/AssociationProfile';
import AboutSection from '../../components/AssociationComponents/AssociationIndividualComponents/AboutSection';
import UpcomingEvents from '../../components/AssociationComponents/AssociationIndividualComponents/UpcomingEvents';

function AssociationIndividual() {
    return (
        <>
            <AssociationProfile />
            <AboutSection />
            <UpcomingEvents />
            <FeaturedAssociation />
            <RecommendedAssociations />
        </>
    )
}

export default AssociationIndividual;
