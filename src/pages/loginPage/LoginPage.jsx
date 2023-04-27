import React, { useState } from "react";
import style from "./LoginPage.module.css";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const allUsersFromLocal = JSON.parse(localStorage.getItem("user"));

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function handleLogin() {
    if (
      allUsersFromLocal.find(
        (ele) => ele.email === enteredEmail && ele.password === enteredPassword
      )
    ) {
      localStorage.setItem("isLogin", "true");
      navigate("/");
    }
  }

  return (
    <>
      <TextField
        label="email"
        onChange={(e) => {
          setEnteredEmail(e.target.value);
        }}
      />{" "}
      <br />
      <TextField
        label="Password"
        onChange={(e) => {
          setEnteredPassword(e.target.value);
        }}
      />
      <br />
      <Button variant="contained" onClick={handleLogin}>
        {" "}
        Signin
      </Button>
      {enteredEmail}
      {enteredPassword}
    </>
  );
}
