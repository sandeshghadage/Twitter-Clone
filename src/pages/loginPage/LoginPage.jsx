/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import style from "./LoginPage.module.css";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ImCross } from "react-icons/im";

const btnstyle = {
  backgroundColor: "white",
  border: "1px solid black",
  fontSize: "15px",
  color: "black",
  borderRadius: "20px",
  width: "350px",
  height: "7vh",
  textTransform: "none",
  padding: "7px 10px",
  "@media (max-width: 700px)": {
    width: "300px",
  },
  "@media (max-width: 400px)": {
    width: "200px",
  },
};

const textFieldCss = {
  border: "1px solid blue",
  color: "wheat",
  "& label": {
    color: "black",
  },
  "@media (max-width: 400px)": {
    width: "150px",
    marginLeft: "20px",
  },
};

export default function LoginPage() {
  const navigate = useNavigate();
  const allUsersFromLocal = JSON.parse(localStorage.getItem("user"));
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);

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

  const handleDialog = () => {
    setIsVisible(!isVisible);
    navigate("/");
  };

  return (
    <Dialog open={isVisible} className={style.mainDiv}>
      <div className={style.wrapper}>
        <DialogTitle className={style.icons}>
          <span className={style.icon1}>
            <ImCross onClick={handleDialog} />
          </span>
          <span className={style.icon2}>
            <TfiTwitterAlt />
          </span>
        </DialogTitle>
        <DialogContent className={style.content}>
          <p className={style.text}>
            <b>Sign in to Twitter</b>
          </p>
          <Button sx={{ ...btnstyle }} variant="contained">
            <span className={style.btnIcon}>
              <FcGoogle />
            </span>
            Sign in with Google
          </Button>
          <Button sx={{ ...btnstyle }} variant="contained">
            <span className={style.btnIcon}>
              <BsApple />
            </span>
            <b>Sign in with Apple</b>
          </Button>
          <div className={style.container}>
            <span className={style.header__center}>or</span>
          </div>
          <div className={style.div}>
            <TextField
              label="email"
              variant="filled"
              sx={{ ...textFieldCss }}
              onChange={(e) => {
                setEnteredEmail(e.target.value);
              }}
            />
            <TextField
              label="Password"
              variant="filled"
              sx={{ ...textFieldCss }}
              onChange={(e) => {
                setEnteredPassword(e.target.value);
              }}
            />
            <p>
              Don't have an account?
              <Link to={"/signup"} className={style.Link}>
                <b>Signup</b>
              </Link>
            </p>
            <Button
              variant="contained"
              sx={{ borderRadius: "15px" }}
              onClick={handleLogin}
            >
              Signin
            </Button>

           
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
