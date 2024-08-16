import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("userLogin"))?.loggedIn;

  return isLoggedIn ? <Component /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
