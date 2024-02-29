import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuth = () => {
  const [login, setLogin] = useState("");
  
  useEffect(() => {
    console.log("auth use");
    onAuthStateChanged(auth, async (user) => {
      console.log("user", user);
    });
    // onAuthStateChanged();
  }, []);

  const validateEmail = async (email: string, password: string) => {
    const credentails = await signInWithEmailAndPassword(auth, email, password);
    console.log("credentiales", credentails);
  };
  return { validateEmail };
};
