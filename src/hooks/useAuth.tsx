import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuth = () => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    // const unsuscribe = onAuthStateChanged(auth, (fireBaseUser: any) => {
    //   if (fireBaseUser) {
    //     const newUser: any = {
    //       id: fireBaseUser.uid,
    //       accessToken: fireBaseUser.accessToken,
    //       displayName: fireBaseUser.displayName,
    //       email: fireBaseUser.email,
    //     };
    //     setUser(newUser);
    //   }
    // });
    // return () => unsuscribe();
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
    } catch (e) {
      console.log("Usuario no valido", e);
    }
  };

  const singOutSession = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (e) {}
  };

  return { validateEmail, user, setUser, singOutSession };
};
