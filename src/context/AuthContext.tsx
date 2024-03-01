// AuthContext.tsx
import React, { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

interface IAuthContext {
  user: any | null;
  validateEmail: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, validateEmail } = useAuth();

  return (
    <AuthContext.Provider value={{ user, validateEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
