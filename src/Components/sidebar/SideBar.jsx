import Icons from "../../Datas/SidebarData";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import style from "./SideBar.module.css";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { FaFeatherAlt } from "react-icons/fa";

export default function SideBar() {
  const [isdialog, setIsDialog] = useState(false);

  const buttonStyle = {
    width: "12rem",
    height: "3rem",
    borderRadius: "2rem",
    "@media (max-width:1024px)": {
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
      </div>
      <span className={style.BtnIcon}>
        <FaFeatherAlt onClick={() => setIsDialog(true)} />{" "}
      </span>
      <Button
        sx={{ ...buttonStyle }}
        variant="contained"
        onClick={() => setIsDialog(true)}
      >
        Tweet
      </Button>
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
