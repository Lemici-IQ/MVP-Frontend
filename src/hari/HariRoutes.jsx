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
import ListingWithUsHome from './pages/ListingWithUsPages/HomePage';
import DataProviderHome from './pages/DataProviderPages/HomePage';
import DataListing from './pages/DataProviderPages/DataListingPage';
import SoftwareHuntHome from './pages/SoftwareHuntPages/HomePage';

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
            <Route path="listing-with-us-home" element={<ListingWithUsHome />} />
            <Route path="data-listing" element={<DataListing />} />
            <Route path="software-hunt-home" element={<SoftwareHuntHome />} />
        </> 
    );
}

export default HariRoutes;
