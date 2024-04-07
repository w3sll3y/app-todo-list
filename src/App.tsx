import { Route, Routes } from "react-router-dom";

import useAuth from "./hooks/useAuth";

import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { Home } from "./screens/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
