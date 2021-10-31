import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useHistory, useLocation } from "react-router";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
      setIsLoading(false);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
