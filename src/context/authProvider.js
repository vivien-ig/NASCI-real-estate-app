import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState("");

  function changeAuth() {
    console.log("This is me");
  }

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
