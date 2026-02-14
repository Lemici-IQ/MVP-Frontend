import { useState, useEffect, useRef } from "react";
import keycloak from "../keycloak";

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    keycloak
      .init({
        onLoad: "check-sso",
        pkceMethod: "S256",
      })
      .then((res) => {
        setLogin(res);
        setToken(keycloak.token);
      })
      .catch((err) => {
        console.error("Keycloak init failed", err);
      });
  }, []);

  return [isLogin, token, keycloak];
};

export default useAuth;
