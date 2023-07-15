// import { Navigate } from "react-router-dom";
// import { useUserAuth } from "./context/authProvider";

const ProtectedRoute = ({ children }) => {
  // const { user } = useUserAuth();

  // Uncomment this out to protect routes
  // if (user == null) {
  //   return <Navigate to="/signin" replace />;
  // }

  return children;
};

export default ProtectedRoute;
