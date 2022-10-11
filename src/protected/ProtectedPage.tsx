import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAppSelector from "../hooks/useAppSelector";

const ProtectedPage = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAppSelector(({ user }) => user);

  useEffect(() => {
    !user && navigate("/auth/login", { state: { prev: location.pathname } });
  }, [user, location.pathname, navigate]);

  return children;
};

export default ProtectedPage;
