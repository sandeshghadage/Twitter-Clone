import React from "react";
import style from "./RegisterPage.module.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import joi from "joi-browser";
import { allDataFromLocalStorage } from "../../localStorage/LocalStorage";
import { userProfile } from "../../localStorage/LocalStorage";

import {
  Stack,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
} from "@mui/material";
import DateSelector from "./dateSelector/DateSelector";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { lightGreen } from "@mui/material/colors";

const userSchema = joi.object({
  fullName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  // phone:joi.number().max(10)
});

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [isPhone, setIsPhone] = useState(true);
  const [userFromLocalnRecoil, setUserFromLocalnRecoil] = useRecoilState(
    allDataFromLocalStorage
  );
  const [currentUser, setCurrentUser] = useRecoilState(userProfile);

  function handleSubmit(e) {
    // e.stopPropgation();
    e.preventDefault();
    // console.log(email, fullName, password);

    ////////joi Validadation//////////
    const { error } = userSchema.validate(
      { email, password, fullName },
      { abortEarly: false }
    );

    if (error) {
      const newErrors = {};
      localStorage.setItem("user", JSON.stringify(userFromLocalnRecoil));

      setErrors(error.details[0].message);
      // alert (error.details[0].message)

      console.log(error.details);
      // console.log (error.details[0].message)
      //////////////////////////////////////
    } else {
      const allData = [
        ...userFromLocalnRecoil,
        { fullName, email, phone, password },
      ];
      setUserFromLocalnRecoil(allData);

      localStorage.setItem("user", JSON.stringify(allData));
      setCurrentUser({ fullName, email, phone, password });
      setEmail("");
      setStep1(false), setStep2(true);
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
          sx: {
            width: "100%",
            maxHeight: 650,
          },
        }}
        open={step1}
      >
        <DialogTitle>
          <Stack direction="row" spacing={2}>
            <div>
              <AiOutlineClose className={style.cursor} onClick={handleClose} />
            </div>
            <div style={{ fontWeight: "600" }}>Step 1 of 3</div>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <div className={style.formContainer}>
            <h1>Create your account</h1>
            <div id="form" className={style.form}>
              <TextField
                sx={{ ...textFieldCss }}
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
            id={style.buttonNext}
            form="form"
            sx={{ borderRadius: 6, height: 50, backgroundColor: "#0f1419" }}
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
          sx: {
            width: "100%",
            minHeight: 650,
          },
        }}
        open={step2}
        // onClose={handleClose}
      >
        <DialogTitle>
          <Stack direction="row" spacing={2}>
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
          <div className={style.formContainer} style={{ padding: "0em 3em" }}>
            <h1>Customize your experience</h1>
            <h3>Track where you see Twitter content across the web</h3>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div>
                Twitter uses this data to personalize your experience. This web
                browsing history will never be stored with your name, email, or
                phone number.
              </div>
              <input
                style={{
                  accentColor: "#1d9bf0",
                }}
                type="checkbox"
                checked
              />
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
          style={{ justifyContent: "center", margin: "0rem 4rem 2rem 4rem" }}
        >
          <Button
            id={style.buttonNext}
            sx={{ borderRadius: 6, height: 50, backgroundColor: "#0f1419" }}
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
        id={style.Dialog}
        PaperProps={{
          style: { borderRadius: 15 },
          sx: {
            width: "100%",
            minHeight: 650,
          },
        }}
        open={step3}
        // onClose={handleClose}
      >
        <DialogTitle>
          <Stack direction="row" spacing={2}>
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
          <div className={style.formContainer} style={{ padding: "0em 3em" }}>
            <h1>Create your account</h1>
            <form className={style.form}>
              <TextField
                sx={{ ...textFieldCss, marginBottom: "0.5rem" }}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <AiFillCheckCircle
                        style={{
                          color: "#00ba7c",
                          width: "18px",
                          height: "18px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                helperText=""
                id="filled-basic"
                label="Name"
                variant="filled"
                onChange={(e) => setFullName(e.target.value)}
              />
              <TextField
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <AiFillCheckCircle
                        style={{
                          color: "#00ba7c",
                          width: "18px",
                          height: "18px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                helperText=""
                label="Phone"
                variant="filled"
                sx={{ ...textFieldCss, marginBottom: "0.5rem" }}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <TextField
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <AiFillCheckCircle
                        style={{
                          color: "#00ba7c",
                          width: "18px",
                          height: "18px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                helperText=""
                label="Date of birth"
                variant="filled"
                sx={{ ...textFieldCss }}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </form>

            <section
              className={style.privacySection}
              style={{ fontSize: "14px" }}
            >
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
          style={{ justifyContent: "center", margin: "0rem 4rem 2rem 4rem" }}
        >
          <Button
            sx={{ borderRadius: 6, height: 45, backgroundColor: "#1d9bf0" }}
            onClick={() => {
              setStep1(false), setStep2(true);
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
