import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/authProvider";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  // Uncomment this out to protect routes
  useEffect(() => {}, [user]);
  if (user === null) {
    return <Navigate to="/auth/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
