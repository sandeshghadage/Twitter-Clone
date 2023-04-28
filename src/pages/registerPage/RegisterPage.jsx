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
  DialogContentText,
  DialogActions,
} from "@mui/material";
import DateSelector from "./dateSelector/DateSelector";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [user, setUser] = useState([]);

  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [isPhone, setIsPhone] = useState(true);

  function handleSubmit(e) {
    // e.stopPropgation();
    e.preventDefault();
    console.log(email, fullName, password);
    // alert(fullName, email, password);
    // alert("sa");
    if (fullName === "" || password === "" || email || phone === "") {
      alert("Check all the input field");
    } else {
      // const allData = [...user, { fullName, email, phone, password }];
      //   setUser(allData);
      //   console.log(user);
      // localStorage.setItem("user", JSON.stringify(allData));
      // setEmail("");
      // setStep1(false), setStep2(true);
    }
  }

  const handleClose = () => {
    setStep1(false);
    setStep2(false);
  };

  const textFieldCss = {
    border: "1px solid #d4d4d4",
    borderRadius: 1,
    backgroundColor: "#ffffff",
    "@media (max-width: 400px)": {
      width: "150px",
      marginLeft: "20px",
    },
  };

  return (
    <div className={style.registerContainer}>
      {/* dialog 1 */}

      <Dialog
        PaperProps={{
          style: { borderRadius: 15 },
        }}
        open={step1}
        // onClose={handleClose}
      >
        <DialogTitle>
          <Stack direction="row" spacing={3}>
            <div onClick={handleClose}>X</div>
            <div style={{ fontWeight: "600" }}>Step 1 of 3</div>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <div className={style.formContainer}>
            <h1>Create your account</h1>
            <div id="form" className={style.form}>
              <TextField
                sx={{ ...textFieldCss, marginBottom: 1.5 }}
                InputProps={{ disableUnderline: true }}
                helperText=""
                id="filled-basic"
                label="Name"
                variant="filled"
                onChange={(e) => setFullName(e.target.value)}
              />
              {isPhone ? (
                <TextField
                  InputProps={{ disableUnderline: true }}
                  helperText=""
                  label="Phone"
                  variant="filled"
                  sx={{ ...textFieldCss }}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              ) : (
                <TextField
                  InputProps={{ disableUnderline: true }}
                  helperText=""
                  label="Email"
                  variant="filled"
                  sx={{ ...textFieldCss }}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setEmail(e.target.value);
                  }}
                />
              )}
              <div
                onClick={() => setIsPhone(!isPhone)}
                style={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                  color: "#00acee",
                  cursor: "pointer",
                }}
              >
                {isPhone ? "Use email instead" : "Use phone instead"}
              </div>
              <TextField
                InputProps={{ disableUnderline: true }}
                helperText=""
                label="Password"
                type="password"
                variant="filled"
                sx={{ ...textFieldCss }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <h3 style={{ marginTop: 30 }}>Date of birth</h3>
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
            // type="submit"
            form="form"
            sx={{ borderRadius: 6, height: 50 }}
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <button onClick={() => setStep1(true)}>open popup</button>

      {/* dialog 2 */}

      <Dialog
        PaperProps={{
          style: { borderRadius: 15 },
        }}
        open={step2}
        // onClose={handleClose}
      >
        <DialogTitle>
          <Stack direction="row" spacing={3}>
            <div>
              <HiOutlineArrowLeft
                onClick={() => {
                  setStep1(true), setStep2(false), setStep2(false);
                }}
              />
            </div>
            <div style={{ fontWeight: "600" }}>Step 2 of 3</div>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <div className={style.formContainer}>
            <h1>Customize your experience</h1>
            <h3>Track where you see Twitter content across the web</h3>
            <div>
              <div>
                Twitter uses this data to personalize your experience. This web
                browsing history will never be stored with your name, email, or
                phone number.
              </div>
              <input style={{ accentColor: "#1d9bf0" }} type="checkbox" />
            </div>
            <section className={style.privacySection}>
              By signing up, you agree to our{" "}
              <a href="https://twitter.com/en/tos#new" target="_blank">
                Terms
              </a>
              ,{" "}
              <a href="https://twitter.com/en/privacy" target="_blank">
                Privacy Policy
              </a>
              , and{" "}
              <a
                href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                target="_blank"
              >
                Cookie Use
              </a>
              . Twitter may use your contact information, including your email
              address and phone number for purposes outlined in our Privacy
              Policy.{" "}
              <a href="https://twitter.com/en/privacy" target="_blank">
                {" "}
                Learn more
              </a>
            </section>
          </div>
        </DialogContent>

        <DialogActions
          style={{ justifyContent: "center", margin: "0rem 3rem 2rem 3rem" }}
        >
          <Button
            sx={{ borderRadius: 6, height: 50 }}
            onClick={() => {
              setStep2(false), setStep3(true);
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog 3 */}

      <Dialog
        PaperProps={{
          style: { borderRadius: 15 },
        }}
        open={step3}
        // onClose={handleClose}
      >
        <DialogTitle>
          <Stack direction="row" spacing={3}>
            <div>
              <HiOutlineArrowLeft
                onClick={() => {
                  setStep2(true), setStep3(false);
                }}
              />
            </div>
            <div style={{ fontWeight: "600" }}>Step 3 of 3</div>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <div className={style.formContainer}>
            <h1>Create your account</h1>
            <form className={style.form}>
              <TextField
                sx={{ ...textFieldCss, marginBottom: 1.5 }}
                InputProps={{ disableUnderline: true }}
                helperText=""
                id="filled-basic"
                label="Name"
                variant="filled"
                onChange={(e) => setFullName(e.target.value)}
              />
              <TextField
                InputProps={{ disableUnderline: true }}
                helperText=""
                label="Phone"
                variant="filled"
                sx={{ ...textFieldCss }}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <TextField
                InputProps={{ disableUnderline: true }}
                helperText=""
                label="Date of birth"
                variant="filled"
                sx={{ ...textFieldCss }}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </form>

            <section className={style.privacySection}>
              By signing up, you agree to the{" "}
              <a href="https://twitter.com/en/tos#new" target="_blank">
                Terms of Service
              </a>
              and{" "}
              <a href="https://twitter.com/en/privacy" target="_blank">
                Privacy Policy
              </a>
              , including{" "}
              <a
                href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                target="_blank"
              >
                Cookie Use
              </a>
              . Twitter may use your contact information, including your email
              address and phone number for purposes outlined in our Privacy
              Policy, like keeping your account secure and personalizing our
              services, including ads.{" "}
              <a href="https://twitter.com/en/privacy" target="_blank">
                {" "}
                Learn more
              </a>
              . Others will be able to find you by email or phone number, when
              provided, unless you choose otherwise here.
            </section>
          </div>
        </DialogContent>

        <DialogActions
          style={{ justifyContent: "center", margin: "0rem 3rem 2rem 3rem" }}
        >
          <Button
            sx={{ borderRadius: 6, height: 50 }}
            onClick={() => {
              setStep1(false), setStep2(true);
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
