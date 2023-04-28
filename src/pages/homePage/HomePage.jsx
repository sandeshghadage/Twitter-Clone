import style from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../../Components/sidebar/SideBar";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <>
        <h1>HomePage</h1>
        <button onClick={() => navigate("/signin")}>signin</button>
        <div style={{ marginLeft: "10rem" }}>
          <SideBar />
        </div>
      </>
    </>
  );
}
