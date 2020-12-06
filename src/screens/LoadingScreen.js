import React, { useContext, useEffect } from "react";
import { Context as LoginContext } from "../context/LoginContext";

const LoadingScreen = () => {
  const { automaticLogin } = useContext(LoginContext);
  useEffect(() => {
    automaticLogin();
  }, []);

  return null;
};

export default LoadingScreen;
