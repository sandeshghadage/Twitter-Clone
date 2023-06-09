/* eslint-disable react/no-unescaped-entities */
import { BiDotsHorizontalRounded } from "react-icons/bi";
import style from "./WhatsNew.module.css";

import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import CodeIcon from "@rsuite/icons/Code";
import PageIcon from "@rsuite/icons/Page";
import DetailIcon from "@rsuite/icons/Detail";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import FileDownloadIcon from "@rsuite/icons/FileDownload";
import FileUploadIcon from "@rsuite/icons/FileUpload";
import { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

const Tweets = [
  {
    id: 0,
    topics: "Sports · Trending",
    hashTag: "Shardulll Thakur",
    tweetsNo: "60.9K Tweets",
  },
  {
    id: 1,
    topics: "Entertainment · Trending",
    hashTag: "#AK62",
    tweetsNo: "59.4K Tweets",
  },
  {
    id: 2,
    topics: "Politics · Trending",
    hashTag: "#KejriwalStand",
    tweetsNo: "1,681 Tweets",
  },
  {
    id: 3,
    topics: "Trending in India",
    hashTag: "मुख्तार अंसारी",
    tweetsNo: "31.3K Tweets",
  },
  {
    id: 4,
    topics: "NBA . Earlier today",
    hashTag: "Grizzlies at Lakers",
    tweetsNo: "3,123 Tweets",
  },
];

const stylePop = {
  background: "transparent",
};

export default function WhatsNew() {
  // const [pop, setPop] = useState(false);
  const [allNew, setAllNew] = useState(Tweets);
  const [showInt, setShowInt] = useState(true);
  function handleTweetDelete(index1) {
    console.log(index1);

    const newTweet = allNew.filter((ele) => ele.id != index1);
    setAllNew(newTweet);
  }
  return (
    <div className={style.MainDiv}>
      <p className={style.heading}>What's happening</p>
      {allNew.map((ele, index) => (
        <div className={style.Div} key={ele.hashTag}>
          <div>
            <p className={style.para1}>{ele.topics}</p>
            <p style={{ fontWeight: "800" }}>{ele.hashTag}</p>
            <p className={style.para1}>{ele.tweetsNo}</p>
          </div>
          {showInt && (
            <BiDotsHorizontalRounded
              className={style.icon}
              onClick={() => setShowInt(false)}
            />
          )}{" "}
          {showInt ? (
            ""
          ) : (
            <span>
              <button
                onClick={() => {
                  setShowInt(true);
                }}
              >
                ✔Back
              </button>{" "}
              <button
                onClick={() => {
                  handleTweetDelete(ele.id);
                }}
              >
                ❌Delete
              </button>
            </span>
          )}
        </div>
      ))}
      <button className={style.button}>Show more</button>
    </div>
  );
}
