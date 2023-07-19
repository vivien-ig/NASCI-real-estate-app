import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const userAuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // function signUp(email, password, name) {
  //     return createUserWithEmailAndPassword(auth, email, password);
  // }

  // function logOut() {
  //     return signOut(auth);
  // }

  // function googleAuth() {
  //     const provider = new GoogleAuthProvider();
  //     return signInWithPopup(auth, provider)
  // }

  // function callFunction(name, data) {
  //     const addMessage = httpsCallable(functions, name);
  //     return addMessage(data)
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) =>
      setUser(currentuser)
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ logIn, user }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
