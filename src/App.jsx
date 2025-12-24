/**
 * App.jsx
 *
 * Developer Instructions:
 * 1. Each developer works in their own folder under `src/pages/`:
 *      - Hari:    src/pages/Hari/
 *      - Sourav:  src/pages/Sourav/
 *      - Abhinay: src/pages/Abhinay/
 *
 * 2. Push your changes to your respective branch:
 *      - dev/Hari, dev/Sourav, dev/Abhinay
 *
 * 3. Create a Pull Request (PR) to the `staging` branch.
 *    - Do NOT push directly to `staging` or `main`.
 *
 * 4. Only after PR is reviewed and merged to `staging`, the final PR will be created
 *    from `staging` → `main` for deployment.
 *
 * 5. All shared components should go in `src/components/` to avoid duplication.
 *
 *   Routing:
 *    - All pages are namespaced by developer in the routes
 *      (/hari/page1, /sourav/page2, /abhinay/page1)
 *
 * This setup ensures smooth integration and minimal conflicts.
 */

import React from "react";
import { ChatbotProvider } from "./abhinay-s/abhinay/ChatbotContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HariRoutes from "./hari/HariRoutes";
import AbhinayRoutes from "./abhinay-s/AbhinayRoutes";
import AbhinayLayout from "./abhinay-s/AbhinayLayout";
import { testAlias } from "@/abhinay-s/testAlias"; // src/testAlias.js
import ScrollToTop from "./abhinay-s/components/ScrollToTop";
// import Header from "./abhinay-s/components/Header";
import UserRoutes from "./routes/UserRoutes";
import SouravRoutes from "./sourav/SouravRoutes";

function App() {
  console.log(testAlias);
  return (
    <ChatbotProvider>
      <Router>
        <ScrollToTop />
        {/* <Header style={{ position: "sticky", top: 0, zIndex: 1000 }} /> */}
        <Routes>
          {/* Hari Pages */}
  
          {/* Sourav Pages */}
  
          {/* Abhinay Pages */}
          {/* {AbhinayRoutes()} */}
          {UserRoutes()}
          <Route path="/" element={<AbhinayLayout />}>
            {HariRoutes()}
            {AbhinayRoutes()}
            {SouravRoutes()}
          </Route>
        </Routes>
      </Router>
    </ChatbotProvider>
  );
}

export default App;
