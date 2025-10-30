import React from "react";
import { Route } from "react-router-dom";
import ResearchPage from './pages/ContentPagePages/ResearchPage';
import DataProviderHome from './pages/DataProviderPages/HomePage';
import EB2BHome from './pages/eB2BPages/Home';
import ProductCategory from './pages/eB2BPages/ProductCategory';
import IndividualProduct from './pages/eB2BPages/IndividualProduct';
import SingleProduct from './pages/eB2BPages/SingleProduct';
import ExpertConnectHome from './pages/ExpertConnectPages/Home';
import ExpertJoin from './pages/ExpertConnectPages/ExpertJoin';
import ExpertListing from './pages/ExpertConnectPages/ExpertListing';
import SignIn from './pages/ExpertConnectPages/SignIn';
import SignUp from './pages/ExpertConnectPages/SignUp';
import WhatWeDo from './pages/LemiciHomePages/WhatWeDo2.0';
import ListingWithUsHome from './pages/ListingWithUsPages/HomePage';

function HariRoutes() {
    return (
        <>
            <Route path="/hari/research" element={<ResearchPage />} />
            <Route path="/hari/dataprovider-home" element={<DataProviderHome />} />
            <Route path="/hari/eB2B-home" element={<EB2BHome />} />
            <Route path="/hari/product-category" element={<ProductCategory />} />
            <Route path="/hari/individual-product" element={<IndividualProduct />} />
            <Route path="/hari/single-product" element={<SingleProduct />} />
            <Route path="/hari/expertConnect-home" element={<ExpertConnectHome />} />
            <Route path="/hari/expert-join" element={<ExpertJoin />} />
            <Route path="/hari/expert-listing" element={<ExpertListing />} />
            <Route path="/hari/signin" element={<SignIn />} />
            <Route path="/hari/signup" element={<SignUp />} />
            <Route path="/hari/what-we-do" element={<WhatWeDo />} />
            <Route path="/hari/listing-with-us-home" element={<ListingWithUsHome />} />
        </>
    );
}

export default HariRoutes;
