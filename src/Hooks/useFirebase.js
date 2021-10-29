import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
