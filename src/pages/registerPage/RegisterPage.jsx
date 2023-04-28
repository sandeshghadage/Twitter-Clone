import style from "./RegisterPage.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [user, setUser] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      fullName === "" ||
      email === "" ||
      (phone === "" && password !== confPassword)
    ) {
      alert("Check all the input field");
    } else {
      const allData = [...user, { fullName, email, phone, password }];
      // setUser(allData);
      //   console.log(user);
      localStorage.setItem("user", JSON.stringify(allData));
      setEmail("");
    }
  }

  return (
    <div className={style.registerContainer}>
      <form className={style.registerContainer}>
        <TextField
          helperText=""
          id="filled-basic"
          label="Full Name"
          variant="filled"
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Phone Number"
          variant="filled"
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Create Password"
          variant="filled"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Confirm Password"
          variant="filled"
          onChange={(e) => setConfPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Contained
        </Button>
      </form>
    </div>
  );
}
