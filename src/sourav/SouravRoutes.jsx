import React from "react";
import { Route } from "react-router-dom";
import GovNavigator from "./pages/GovNavigator/GovNavigator";
import IndBiSol from "./pages/IndBiSol/IndBiSol";
import IndBiSolListing from "./pages/IndBiSol/IndBiSolListing";
import SchemeListings from "./pages/GovNavigator/SchemeListings";


function SouravRoutes() {
    return (
        <>
            <Route path="/offerings/govtnavigator" element={<GovNavigator />} />
            <Route path="/government-scheme-listing" element={<SchemeListings />} />
            <Route path="/industrial-solution" element={<IndBiSol />} />
            <Route path="/project-reports-listing" element={<IndBiSolListing />} />
            
        </> 
    );
}

export default SouravRoutes;
