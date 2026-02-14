import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "lemici",
  clientId: "lemici-frontend",
});

export default keycloak;
