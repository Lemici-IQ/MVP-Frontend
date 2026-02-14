import React from "react";
import { Route } from "react-router-dom";
import SignIn from "../hari/pages/ExpertConnectPages/SignIn";
import SignUp from "../hari/pages/ExpertConnectPages/SignUp";

function UserRoutes(keycloak) {
    return (
        <>
            <Route path="/signin" element={<SignIn keycloak={keycloak} />} />
            <Route path="/signup" element={<SignUp keycloak={keycloak} />} />
        </> 
    );
}

export default UserRoutes;
