import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/authProvider";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  useEffect(() => {}, [user]);
  setTimeout(() => {
    if (user === null) {
      return <Navigate to="/auth/signup" />;
    }
  }, 1000);

  return children;
};

export default ProtectedRoute;
