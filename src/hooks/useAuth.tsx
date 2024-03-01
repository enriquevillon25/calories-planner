import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { usePlanner } from "./usePlanner";

export const useAuth = () => {
  const [user, setUser] = useState<any>({});
  //   const { redirectHome } = usePlanner();
  useEffect(() => {
    // console.log("auth use");
    const unsuscribe = onAuthStateChanged(auth, (fireBaseUser: any) => {
      // console.log("user auth hook", user);
      if (fireBaseUser) {
        const newUser: any = {
          id: fireBaseUser.uid,
          accessToken: fireBaseUser.accessToken,
          displayName: fireBaseUser.displayName,
          email: fireBaseUser.email,
        };
        setUser(newUser);
      }
    });

    return () => unsuscribe();
  }, []);

  const validateEmail = async (email: string, password: string) => {
    try {
      const credentials: any = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser({
        id: credentials.user.uid,
        accessToken: credentials.user.accessToken,
        displayName: credentials.user.displayName,
        email: credentials.user.email,
      });
      console.log("user valide email", credentials);
    } catch (e) {
      console.log("Usuario no valido");
    }
  };

  const singOutSession = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };
  
  return { validateEmail, user, setUser, singOutSession };
};
