import { BsThreeDots } from "react-icons/bs";
import style from "./UsersName.module.css";
import { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRecoilValue } from "recoil";
import { emailOnHome } from "../../localStorage/LocalStorage";
export default function UsersName() {
  const emailLoginUser=useRecoilValue(emailOnHome)
  const [isDialog, setIsDialog] = useState(false);
  return (
    <div className={style.container}>
      <h2>{emailLoginUser}</h2>
      <span className={style.icon} onClick={() => setIsDialog(!isDialog)}>
        <BsThreeDots />
      </span>
      {/* <div>
        <Dialog open={isDialog}>
          <DialogContent>
            <Button >Log out</Button>
          </DialogContent>
        </Dialog>
      </div> */}
    </div>
  );
}
