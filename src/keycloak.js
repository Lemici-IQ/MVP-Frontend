import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL || "http://localhost:8080",
  realm: import.meta.env.VITE_KEYCLOAK_REALM || "lemici",
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT || "lemici-frontend",
});

export default keycloak;
