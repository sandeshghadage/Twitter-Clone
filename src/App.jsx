import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />}></Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
