/* eslint-disable react/no-unescaped-entities */
import { BiDotsHorizontalRounded } from "react-icons/bi";
import style from "./WhatsNew.module.css";

const Tweets = [
  {
    topics: "Sports · Trending",
    hashTag: "Shardul Thakur",
    tweetsNo: "60.9K Tweets",
  },
  {
    topics: "Entertainment · Trending",
    hashTag: "#AK62",
    tweetsNo: "59.4K Tweets",
  },
  {
    topics: "Politics · Trending",
    hashTag: "#KejriwalStand",
    tweetsNo: "1,681 Tweets",
  },
  {
    topics: "Trending in India",
    hashTag: "मुख्तार अंसारी",
    tweetsNo: "31.3K Tweets",
  },
  {
    topics: "NBA . Earlier today",
    hashTag: "Grizzlies at Lakers",
    tweetsNo: "3,123 Tweets",
  },
];

export default function WhatsNew() {
  return (
    <div className={style.MainDiv}>
      <p className={style.heading}>What's happening</p>
      {Tweets.map((ele) => (
        <div className={style.Div} key={ele.hashTag}>
          <div>
            <p className={style.para1}>{ele.topics}</p>
            <h4 style={{ fontWeight: "800" }}>{ele.hashTag}</h4>
            <p className={style.para1}>{ele.tweetsNo}</p>
          </div>
          <BiDotsHorizontalRounded className={style.icon} />
        </div>
      ))}
      <button className={style.button}>Show more</button>
    </div>
  );
}
