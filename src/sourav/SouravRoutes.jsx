import React from "react";
import { Route } from "react-router-dom";
import GovNavigator from "./pages/GovNavigator/GovNavigator";
import IndBiSol from "./pages/IndBiSol/IndBiSol";
import IndBiSolListing from "./pages/IndBiSol/IndBiSolListing";
import Resources from "./pages/Resources/resources";
import BusinessSol from "./pages/BusinessSol/BusSolHome";
import Solution from "./pages/Solution/Solution";
import SchemeListings from "./pages/GovNavigator/SchemeListings";
import MRListing from "./pages/MarketResearch/MRListing";


function SouravRoutes() {
  return (
    <>
      <Route path="/offerings/govtnavigator" element={<GovNavigator />} />
      <Route path="/industrial-solution" element={<IndBiSol />} />
      <Route path="/government-scheme-listing" element={<SchemeListings />} />
      <Route path="/industrial-solution" element={<IndBiSol />} />
      <Route
        path="/industrial-solution-listing"
        element={<IndBiSolListing />}
      />
      <Route path="/resources" element={<Resources />} />
      <Route path="/business-solutions/home" element={<BusinessSol />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/project-reports-listing" element={<IndBiSolListing />} />
      <Route path="/market-research-listing" element={<MRListing />}/>
    </>
  );
}
export default SouravRoutes;
