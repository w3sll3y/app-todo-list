import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState();

  async function getUserData() {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get('http://localhost:3000/me',
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          }
        }
      );
      if (response?.status === 200) {
        await setUser(response?.data);
        return
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <AuthContext.Provider value={{ user, signed: !!user }}>{children}</AuthContext.Provider>
  );
}