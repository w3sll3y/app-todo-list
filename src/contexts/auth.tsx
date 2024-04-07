import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(false);

  async function getUserData() {
    const token = localStorage.getItem('token');

    if (token) {
      setUser(true);
    }
  }

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <AuthContext.Provider value={{ user, signed: !!user }}>{children}</AuthContext.Provider>
  );
}