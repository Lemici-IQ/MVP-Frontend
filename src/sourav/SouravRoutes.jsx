import React from "react";
import { Route } from "react-router-dom";
import GovNavigator from "./pages/GovNavigator/GovNavigator";
import IndBiSol from "./pages/IndBiSol/IndBiSol";
import IndBiSolListing from "./pages/IndBiSol/IndBiSolListing";
import Resources from "./pages/Resources/resources";
import BusinessSol from "./pages/BusinessSol/BusSolHome";
import Solution from "./pages/Solution/Solution";

function SouravRoutes() {
  return (
    <>
      <Route path="/offerings/govtnavigator" element={<GovNavigator />} />
      <Route path="/industrial-solution" element={<IndBiSol />} />
      <Route
        path="/industrial-solution-listing"
        element={<IndBiSolListing />}
      />
      <Route path="/resources" element={<Resources />} />
      <Route path="/business-solutions/home" element={<BusinessSol />} />
      <Route path="/solution" element={<Solution />} />

    </>
  );
}

export default SouravRoutes;
