import React from "react";
import { Route } from "react-router-dom";
import GovNavigator from "./pages/GovNavigator/GovNavigator";
import IndBiSol from "./pages/IndBiSol/IndBiSol";
import IndBiSolListing from "./pages/IndBiSol/IndBiSolListing";


function SouravRoutes() {
    return (
        <>
            <Route path="/offerings/govtnavigator" element={<GovNavigator />} />
            <Route path="/industrial-solution" element={<IndBiSol />} />
            <Route path="/industrial-solution-listing" element={<IndBiSolListing />} />
            
        </> 
    );
}

export default SouravRoutes;
