import React, { useContext, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const ValidateRouteAuth = ({ children }: any) => {
  const { user } = useAuthContext();
  const location = useLocation();
  console.log("user valdiate auth", user);
  if (!user.accessToken) {
    console.log("entroo");
    return <Navigate replace to={"/login"} state={{ from: location }} />;
  }
  //   if (user.id) {
  //     return <Navigate replace to={"/"} state={{ from: location }} />;
  //   }
  return children;
};
