import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/authProvider";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import LoadingMap from "src/pages/loading_animation.json";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const location = useLocation();
  const [userLoading, setUserLoading] = useState(true);

  setTimeout(() => {
    if (
      user === null &&
      (location.pathname.split("/")[1] === "dashboard" ||
        location.pathname.split("/")[1] === "")
    ) {
      setUserLoading(false);
      return <Navigate to="/auth/signup" />;
    } else {
      setUserLoading(false);
    }
  }, 1000);

  return (
    <>
      {!userLoading ? (
        children
      ) : (
        <>
          {" "}
          <Lottie
            className="startup_loading_screen"
            animationData={LoadingMap}
            loop={true}
          />
        </>
      )}
    </>
  );
};

export default ProtectedRoute;
