import React from "react";
import { Route } from "react-router-dom";
import SignIn from "../hari/pages/ExpertConnectPages/SignIn";
import SignUp from "../hari/pages/ExpertConnectPages/SignUp";

function UserRoutes() {
    return (
        <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </> 
    );
}

export default UserRoutes;
