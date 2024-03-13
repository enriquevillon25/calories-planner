import { useAuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const ValidateRouteAuth = ({ children }: any) => {
  const { user } = useAuthContext();
  const location = useLocation();
  if (!user.accessToken) {
    return <Navigate replace to={"/login"} state={{ from: location }} />;
  }
  return children;
};
