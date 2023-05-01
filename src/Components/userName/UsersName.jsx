import { BsThreeDots } from "react-icons/bs";
import style from "./UsersName.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogContent } from "@mui/material";
import { useRecoilValue } from "recoil";
import { emailOnHome } from "../../localStorage/LocalStorage";

export default function UsersName() {
  const emailLoginUser = useRecoilValue(emailOnHome);
  const [isDialog, setIsDialog] = useState(false);
  const navigate = useNavigate();
  let userEmail = localStorage.getItem("currentUser");

  const clickHandler = () => {
    setIsDialog(false);
    localStorage.setItem("isLogin", "false");
    navigate("/signin");
    localStorage.removeItem("");
  };

  return (
    <div className={style.container}>
      <div className={style.div}>
        {emailLoginUser ? <p>{emailLoginUser}</p> : <p>{userEmail}</p>}
        <span className={style.icon} onClick={() => setIsDialog(!isDialog)}>
          <BsThreeDots />
        </span>
      </div>
      <div>
        <Dialog open={isDialog}>
          <DialogContent>
            <Button onClick={clickHandler}>Log out</Button>
            <Button
              onClick={() => {
                setIsDialog(false);
              }}
            >
              Cancel
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
