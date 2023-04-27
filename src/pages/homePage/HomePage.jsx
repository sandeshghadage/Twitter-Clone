import React from "react";
import style from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <>
        <h1>HomePage</h1>
        <button onClick={() => navigate("/signin")}>signin</button>
      </>
    </>
  );
}
