import React from "react";
import style from "./RegisterPage.module.css";
import { useState } from "react";

import {
  Stack,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DateSelector from "./dateSelector/DateSelector";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [user, setUser] = useState([]);

  const [step1, setStep1] = useState(false);

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
      //   setUser(allData);
      //   console.log(user);
      localStorage.setItem("user", JSON.stringify(allData));
      setEmail("");
    }
  }

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setStep1(false);
  };

  return (
    <div className={style.registerContainer}>
      <form className={style.registerContainer}>
        <TextField
          helperText=""
          id="filled-basic"
          label="Name"
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
      {/* dialog 1 */}

      <Dialog
        PaperProps={{
          style: { borderRadius: 15 },
        }}
        open={step1}
        onClose={handleClose}
      >
        <DialogTitle>
          <Stack direction="row" spacing={3}>
            <div>X</div>
            <div style={{ fontWeight: "600" }}>Step 1 of 3</div>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <div className={style.formContainer}>
            <h1>Create your account</h1>
            <form className={style.form}>
              <TextField
                sx={{
                  border: 0.2,
                  marginLeft: "5px",
                  borderRadius: 1,
                  color: "grey",
                  pl: 2,
                  marginBottom: 1.5,
                }}
                InputProps={{ disableUnderline: true }}
                helperText=""
                id="filled-basic"
                label="Name"
                variant="standard"
                onChange={(e) => setFullName(e.target.value)}
              />
              <TextField
                sx={{
                  border: 0.2,
                  marginLeft: "5px",
                  borderRadius: 1,
                  color: "grey",
                  pl: 2,
                }}
                InputProps={{ disableUnderline: true }}
                helperText=""
                id="filled-basic"
                label="Name"
                variant="standard"
                onChange={(e) => setFullName(e.target.value)}
              />
            </form>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "flex-end",
                color: "#00acee",
              }}
            >
              Use email instead
            </div>
            <h3 style={{ marginTop: 60 }}>Date of birth</h3>
            <div>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </div>

            <DateSelector />
          </div>
        </DialogContent>

        <DialogActions
          style={{ justifyContent: "center", margin: "0rem 3rem 2rem 3rem" }}
        >
          <Button
            sx={{ borderRadius: 6, height: 50 }}
            onClick={handleClose}
            variant="contained"
            color="primary"
            fullWidth
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>

      <button onClick={() => setStep1(true)}>open popup</button>
      <DateSelector />
    </div>
  );
}
