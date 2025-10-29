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

function App() {
  return (
    <Router>
      <Routes>
        {/* Hari Pages */}

        {/* Sourav Pages */}

        {/* Abhinay Pages */}

      </Routes>
    </Router>
  );
}

export default App;
