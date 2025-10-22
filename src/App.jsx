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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HariPage1 from "./pages/Hari/Page1";
import HariPage2 from "./pages/Hari/Page2";

import SouravPage1 from "./pages/Sourav/Page1";
import SouravPage2 from "./pages/Sourav/Page2";

import AbhinayPage1 from "./pages/Abhinay/Page1";
import AbhinayPage2 from "./pages/Abhinay/Page2";

function App() {
  return (
    <Router>
      <Routes>
        {/* Hari Pages */}
        <Route path="/hari/page1" element={<HariPage1 />} />
        <Route path="/hari/page2" element={<HariPage2 />} />

        {/* Sourav Pages */}
        <Route path="/sourav/page1" element={<SouravPage1 />} />
        <Route path="/sourav/page2" element={<SouravPage2 />} />

        {/* Abhinay Pages */}
        <Route path="/abhinay/page1" element={<AbhinayPage1 />} />
        <Route path="/abhinay/page2" element={<AbhinayPage2 />} />

        {/* Optional: Default/Home page */}
        <Route path="/" element={<HariPage1 />} />
      </Routes>
    </Router>
  );
}

export default App;
