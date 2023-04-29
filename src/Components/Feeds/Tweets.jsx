import style from "./Tweets.module.css";
import AddTweet from "./localComponents/addTweet/AddTweet";
import HeaderComponent from "./localComponents/headerComponent/HeaderComponent";
import { GoVerified } from "react-icons/go";
import { BsChat } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { HiOutlineUpload } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Tweets() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5175/tweets.json")
      .then((response) => setTweets(response.data));
  }, []);
  return (
    <div className={style.mainBox}>
      <HeaderComponent />
      <div className={style.scroller}>
        <AddTweet />
        <div id={style.showTweetBtn}>Show 1,085 Tweets</div>
        <Tweet />
        <div>
          {tweets.map((item) => (
            <Tweet img={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Tweet(props) {
  // const { item } = item;
  return (
    <div id={style.tweet}>
      <div id={style.content}>
        <div id={style.imgBox}>
          <img
            src={props.image}
            alt="profile"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div id={style.tweetData}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <div id={style.name}>Tesla Owners Silicon Valley</div>
              <GoVerified style={{ color: "#1d9bf0" }} />
              <div className={style.fontTernary}>@teslaownersSV</div>
              <div className={style.fontTernary}>. 7h</div>
            </div>
            <FiMoreHorizontal className={style.fontSecondary} />
          </div>
          <div className={style.fontSecondary}>
            “I deal some memes too!” Elon Musk then looks in his jacket to bring
            them out. 🤣🤣
          </div>
          <div id={style.feedImg}>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="feed"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: "2rem", padding: "5px 0px" }}>
            <div className={style.feedIcons}>
              <BsChat className={style.icon} />
              <div className={style.fontSecondary}>86</div>
            </div>
            <div className={style.feedIcons}>
              <AiOutlineRetweet className={style.icon} />
              <div className={style.fontTernary}>249</div>
            </div>
            <div className={style.feedIcons}>
              <AiOutlineHeart className={style.icon} />
              <div className={style.fontTernary}>1894</div>
            </div>
            <div className={style.feedIcons}>
              <BiBarChart className={style.icon} />
              <div className={style.fontTernary}>555.5k</div>
            </div>
            <div className={style.feedIcons}>
              <HiOutlineUpload className={style.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
