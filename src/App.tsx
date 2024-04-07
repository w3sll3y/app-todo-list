import { Route, Routes } from "react-router-dom";

import useAuth from "./hooks/useAuth";

import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { Home } from "./screens/Home";
import { useEffect, useState } from "react";


function App() {
  const [user, setUser] = useState(false);

  async function getUserData() {
    const token = localStorage.getItem('token');

    if (token) {
      setUser(true);
    }
  }

  const Private = ({ Item }) => {
    return user == true ? <Item /> : <Login />
  }

  const Logged = ({ Item }) => {
    return user == false ? <Login /> : <Home />
  }

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Logged Item={Login} />} />
        <Route path="*" element={<Logged Item={Login} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Private Item={Home} />} />
      </Routes>
    </>
  )
}

export default App
