import Icons from "../../Datas/SidebarData";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import style from "./SideBar.module.css";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { FaFeatherAlt } from "react-icons/fa";
import UsersName from "../userName/UsersName";

export default function SideBar() {
  const [isdialog, setIsDialog] = useState(false);

  const buttonStyle = {
    margin: "0 0 0 1.2rem",
    width: "13rem",
    height: "3rem",
    fontSize: "1rem",
    fontWeight: "900",
    borderRadius: "2rem",
    textTransform: "none",
    "@media (max-width:1075px)": {
      display: "none",
    },
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.Sidebar}>
        {Icons.map((ele) => (
          <div key={ele.id} className={style.container}>
            <span className={style.icons}>{ele.icons}</span>
            <span className={style.names}>{ele.name}</span>
          </div>
        ))}

        <span className={style.BtnIcon}>
          <FaFeatherAlt onClick={() => setIsDialog(true)} />{" "}
        </span>
      </div>
      <Button
        sx={{ ...buttonStyle }}
        variant="contained"
        onClick={() => setIsDialog(true)}
      >
        Tweet
      </Button>
      <div className={style.UsersName}>
        <UsersName />
      </div>
      <Dialog open={isdialog}>
        <DialogTitle>
          <span onClick={() => setIsDialog(false)}>
            <ImCross />
          </span>
        </DialogTitle>
        <DialogContent>dtyfyguujgyhgvyjhfdgtygjyfuk</DialogContent>
      </Dialog>
    </div>
  );
}
