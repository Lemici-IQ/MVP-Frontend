import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ImageKitProvider from "./ImageKitProvider.jsx";
import keycloak from "./keycloak";

keycloak
  .init({
    onLoad: "check-sso",   // checks login silently
    pkceMethod: "S256",
    checkLoginIframe: false,
  })
  .then(() => {
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <ImageKitProvider>
          <App keycloak={keycloak} />
        </ImageKitProvider>
      </StrictMode>
    );
  })
  .catch((err) => {
    console.error("Keycloak init failed", err);
  });
