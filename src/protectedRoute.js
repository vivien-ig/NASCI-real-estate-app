import { useUserAuth } from "./context/authProvider";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import LoadingMap from "src/pages/loading_animation.json";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const location = useLocation();
  const [userLoading, setUserLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    setTimeout(() => {
      if (
        user === null &&
        (location.pathname.split("/")[1] === "dashboard" ||
          location.pathname.split("/")[1] === "")
      ) {
        setUserLoading(false);
      } else {
        setUserLoading(false);
      }
    }, 1000);
  }, [location.pathname, navigate, user]);

  useEffect(() => {
    if (!user && userLoading) {
      navigate("/auth/signup");
    }
  });

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
