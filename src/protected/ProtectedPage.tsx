import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedPage = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // temporary
  const auth = true;
  useEffect(() => {
    !auth && navigate("/auth/login", { state: { prev: location.pathname } });
  }, [auth]);

  return children;
};

export default ProtectedPage;
