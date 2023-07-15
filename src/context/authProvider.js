// import React, { useContext, useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase.config";

// export const AuthContext = React.createContext({
//   name: null,
//   email: null,
//   accessToken: null,
// });

// // This is a hook that is used to modify your context
// export function useUserContext() {
//   return useContext(AuthContext);
// }
// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState({});

//   // UseEffect is used just like ngOnit when the authProvider component is mounted on our tree
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//     });
//   }, []);
//   const value = {
//     currentUser,
//     setCurrentUser,
//   };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

const userAuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) =>
      setUser(currentuser)
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
