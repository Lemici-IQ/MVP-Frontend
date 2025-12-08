import React from "react";
import { Route } from "react-router-dom";
import ResearchPage from './pages/ContentPagePages/ResearchPage';
import EB2BHome from './pages/eB2BPages/Home';
import ProductCategory from './pages/eB2BPages/ProductCategory';
import IndividualProduct from './pages/eB2BPages/IndividualProduct';
import SingleProduct from './pages/eB2BPages/SingleProduct';
import ExpertConnectHome from './pages/ExpertConnectPages/Home';
import ExpertJoin from './pages/ExpertConnectPages/ExpertJoin';
import ExpertListing from './pages/ExpertConnectPages/ExpertListing';
import WhatWeDo from './pages/LemiciHomePages/WhatWeDo2.0';
import Connect from './pages/LemiciHomePages/Connect';
import ListingWithUsHome from './pages/ListingWithUsPages/HomePage';
import DataProviderHome from './pages/DataProviderPages/HomePage';
import DataListing from './pages/DataProviderPages/DataListingPage';
import SoftwareHuntHome from './pages/SoftwareHuntPages/HomePage';
import CRM from './pages/SoftwareHuntPages/CRM';
import WebDevelopment from './pages/SoftwareHuntPages/WebDevelopment';
import AIProdListing from './pages/SoftwareHuntPages/AIProductListing';
import AssociationHome from './pages/AssociationPages/HomePage';
import AssociationListing from './pages/AssociationPages/AssociationListingPage';
import AssociationIndividual from './pages/AssociationPages/AssociationIndividualPage';
import NewsLetter from './pages/NewsLetterPages/NewsLetterPage';
import Offerings from './pages/LemiciHomePages/Offering2.0';
import PrivacyPolicy from './pages/PrivacyPolicyPages/PrivacyPolicyPage';
import Survey from './pages/SurveyPages/SurveyPage';
import Capabilities from './pages/CapabilitiesPages/CapabilitiesPage';

function HariRoutes() {
    return (
        <>
            <Route path="research" element={<ResearchPage />} />
            <Route path="dataprovider-home" element={<DataProviderHome />} />
            <Route path="eB2B-home" element={<EB2BHome />} />
            <Route path="product-category" element={<ProductCategory />} />
            <Route path="individual-product" element={<IndividualProduct />} />
            <Route path="single-product" element={<SingleProduct />} />
            <Route path="expertConnect-home" element={<ExpertConnectHome />} />
            <Route path="expert-join" element={<ExpertJoin />} />
            <Route path="expert-listing" element={<ExpertListing />} />
            <Route path="what-we-do" element={<WhatWeDo />} />
            <Route path="connect" element={<Connect />} />
            <Route path="listing-with-us-home" element={<ListingWithUsHome />} />
            <Route path="data-listing" element={<DataListing />} />
            <Route path="software-hunt-home" element={<SoftwareHuntHome />} />
            <Route path="crm" element={<CRM />} />
            <Route path="webdev" element={<WebDevelopment />} />
            <Route path="ai" element={<AIProdListing />} />
            <Route path="association-home" element={<AssociationHome />} />
            <Route path="association-listing" element={<AssociationListing />} />
            <Route path="association-individual" element={<AssociationIndividual />} />
            <Route path="newsletter" element={<NewsLetter />} />
            <Route path="offerings" element={<Offerings />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="survey" element={<Survey />} />
            <Route path="capabilities" element={<Capabilities />} />
        </>
    );
}

export default HariRoutes;
